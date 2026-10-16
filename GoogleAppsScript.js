/**
 * ===================================================================
 * GOOGLE APPS SCRIPT CHO HỆ THỐNG KIỂM TRA PYTHON TEKY
 * Tự động nhận kết quả bài thi từ học viên và ghi vào Google Sheets
 * ===================================================================
 * 
 * HƯỚNG DẪN CÀI ĐẶT TRONG 1 PHÚT:
 * 1. Mở Google Drive -> Tạo 1 file "Google Trang tính" (Google Sheets) mới.
 * 2. Đặt tên file là: "Bảng Điểm Python Teky"
 * 3. Trên thanh menu, chọn: Tiện ích mở rộng (Extensions) -> Apps Script
 * 4. Xóa hết code cũ trong đó, copy TOÀN BỘ đoạn code này dán vào.
 * 5. Nhấn biểu tượng "Lưu" (Ctrl + S).
 * 6. Nhấn nút "Triển khai" (Deploy) màu xanh ở góc trên bên phải -> Chọn "Tùy chọn triển khai mới" (New deployment).
 * 7. Bấm biểu tượng bánh răng bên cạnh "Chọn loại" -> Chọn "Ứng dụng web" (Web app).
 * 8. Thiết lập như sau:
 *    - Mô tả: Nhan ket qua thi Teky
 *    - Thực thi dưới dạng (Execute as): Tôi (email của Thầy/Cô)
 *    - Ai có quyền truy cập (Who has access): Bất kỳ ai (Anyone)  <-- CỰC KỲ QUAN TRỌNG!
 * 9. Nhấn "Triển khai" (Deploy) -> Cấp quyền truy cập nếu Google hỏi.
 * 10. Copy "URL của ứng dụng web" (dạng: https://script.google.com/macros/s/.../exec) 
 *     và dán vào file index.html hoặc trang Quản Trị trên web!
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(15000); // Tránh ghi đè khi nhiều học sinh nộp cùng lúc
  
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    
    // Tạo tiêu đề cột nếu trang tính còn mới tinh
    if (sheet.getLastRow() === 0) {
      var headers = [
        "STT",
        "Họ và Tên",
        "Lần thi",
        "Điểm số",
        "Trắc nghiệm đúng (/40)",
        "Viết code đúng (/10)",
        "Tổng số câu",
        "Thời gian làm (giây)",
        "Thời gian nộp",
        "Chi tiết bài làm (JSON)"
      ];
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length)
        .setFontWeight("bold")
        .setBackground("#000000")
        .setFontColor("#ffffff")
        .setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }
    
    var raw = e.postData.contents;
    var data = JSON.parse(raw);
    var items = Array.isArray(data) ? data : [data];
    
    items.forEach(function(r) {
      var nextIndex = Math.max(1, sheet.getLastRow());
      sheet.appendRow([
        nextIndex,
        r.studentName || "Chưa rõ",
        r.attemptNumber || 1,
        r.score !== undefined ? r.score : 0,
        r.mcqCorrect !== undefined ? r.mcqCorrect : 0,
        r.codeCorrect !== undefined ? r.codeCorrect : 0,
        r.totalQuestions || 50,
        r.durationSeconds || 0,
        r.date || new Date().toLocaleString("vi-VN"),
        r.details ? JSON.stringify(r.details) : ""
      ]);
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      syncedCount: items.length
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    var rows = sheet.getDataRange().getValues();
    
    if (rows.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify([]))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    var records = [];
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      if (!row[1]) continue;
      
      var details = [];
      try {
        if (row[9]) details = JSON.parse(row[9]);
      } catch(ex) {}
      
      records.push({
        id: i,
        studentName: String(row[1]),
        attemptNumber: Number(row[2]) || 1,
        score: Number(row[3]) || 0,
        mcqCorrect: Number(row[4]) || 0,
        codeCorrect: Number(row[5]) || 0,
        totalQuestions: Number(row[6]) || 50,
        durationSeconds: Number(row[7]) || 0,
        date: String(row[8]),
        details: details
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify(records))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
