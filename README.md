# 📝 Hệ Thống Kiểm Tra Kiến Thức Python HP5 & HP6

Hệ thống thi trắc nghiệm & thực hành lập trình Python được tối ưu chuẩn hóa cho **GitHub Pages** với giao diện tối giản 2 tông màu **Trắng - Đen**.

---

## 🔑 MẬT KHẨU GIÁO VIÊN (ADMIN)

> **Mật khẩu truy cập trang Giáo Viên:** `teky2026`
> 
> *(Mật khẩu này đã được ẩn hoàn toàn trên giao diện web để học sinh không thể nhìn thấy).*

---

## 📌 Cấu Trúc Đề Thi Chuẩn (50 Câu)

Mỗi đề thi gồm **50 câu hỏi** được bốc ngẫu nhiên từ ngân hàng 100 câu:
- **Phần 1: 40 câu Trắc nghiệm lý thuyết (80%)** - Lựa chọn 1 trong 4 đáp án A, B, C, D (được đảo ngẫu nhiên câu hỏi và đảo thứ tự các đáp án).
- **Phần 2: 10 câu Viết code thực hành (20%)** - Học sinh gõ trực tiếp mã nguồn Python vào khung soạn thảo code.

Ngân hàng đề 100 câu:
- **70 câu trắc nghiệm**: 35 câu HP5 (Python cơ bản) + 35 câu HP6 (Tkinter GUI).
- **30 câu viết code**: 15 câu HP5 (Biến, toán tử, if-else, vòng lặp, list, hàm) + 15 câu HP6 (Tạo root, title, geometry, Label, Button, Entry, Listbox, messagebox, pack, grid).

---

## ⚙️ CƠ CHẾ CHẤM BÀI VIẾT CODE (SMART CODE EVALUATION)

Hệ thống sử dụng bộ chấm điểm thông minh 4 tầng tự động (Client-side, không cần cài server phụ):

1. **Chuẩn hóa mã nguồn (Normalization)**:
   - Tự động bỏ qua các dòng ghi chú/comment (`#...`).
   - Tự động chuẩn hóa dấu nháy kép (`"`) và nháy đơn (`'`) để học sinh dùng nháy nào cũng được chấp nhận.
   - Bỏ qua các khoảng trắng, dấu xuống dòng thừa.

2. **So khớp cấu trúc cú pháp (Structure & Keyword Matching)**:
   - Kiểm tra các từ khóa cú pháp bắt buộc của bài toán (ví dụ: `def tinh_tong`, `.append()`, `root.geometry()`, `messagebox.showinfo()`, v.v.).
   - So khớp logic cú pháp với mã nguồn chuẩn.

3. **Bảng so sánh chi tiết khi nộp bài**:
   - Hiển thị song song: **Code học sinh đã gõ** vs **Code mẫu chuẩn của giáo viên**.
   - Cung cấp lời giải thích chi tiết cho từng dòng code.

4. **Giáo viên xem lại trực tiếp trên trang Admin**:
   - Giáo viên có thể bấm **Xem chi tiết** bất kỳ bài thi nào để đọc nguyên văn đoạn mã học sinh đã viết.

---

## 📁 Cấu Trúc Thư Mục Tinh Gọn (GitHub Pages)

Chỉ gồm các file tinh gọn ở thư mục gốc:
- `index.html`: Toàn bộ giao diện thi, xem kết quả, tự động đồng bộ Google Sheets và trang quản trị giáo viên.
- `questions_data.js`: Ngân hàng 100 câu hỏi (70 trắc nghiệm + 30 câu viết code).
- `GoogleAppsScript.js`: Mã nguồn Apps Script gắn vào Google Sheet để nhận dữ liệu từ học sinh.
- `README.md`: Hướng dẫn sử dụng & cấu hình.

---

## 📊 HƯỚNG DẪN KẾT NỐI DATABASE GOOGLE SHEETS (1 PHÚT)

Để mọi bài thi tự động đổ về bảng điểm của Giáo viên:

1. **Mở Google Drive** -> Tạo 1 file **Google Trang tính (Google Sheets)** mới.
2. Đặt tên: `Bảng Điểm Python Teky`.
3. Vào menu: **Tiện ích mở rộng (Extensions)** -> **Apps Script**.
4. Xóa hết code cũ, mở file [GoogleAppsScript.js](file:///d:/Work%20in%20Teky/Teky%20Python/ktra_python/GoogleAppsScript.js) copy toàn bộ và dán vào -> Nhấn **Lưu (Ctrl + S)**.
5. Nhấn **Triển khai (Deploy)** -> **Tùy chọn triển khai mới (New deployment)**.
6. Chọn loại: **Ứng dụng web (Web app)**:
   - *Execute as (Thực thi dưới dạng):* **Tôi (email của bạn)**
   - *Who has access (Ai có quyền truy cập):* **Bất kỳ ai (Anyone)**  *(Bắt buộc để học sinh gửi bài được)*
7. Nhấn **Triển khai** và copy đường link Web App (`https://script.google.com/macros/s/.../exec`).
8. Dán link này vào mục **Cơ Sở Dữ Liệu Google Sheets** trong trang **Quản Trị (Admin)** trên web (hoặc dán vào biến `HARDCODED_CLOUD_URL` trong file `index.html`).

---

## ⚡ CÁCH LẤY LẠI ĐIỂM CỦA HỌC SINH ĐÃ LÀM BÀI TRƯỚC ĐÓ

1. Sau khi cấu hình link Google Sheets và đưa lên GitHub Pages.
2. Giáo viên chỉ cần nhắn học sinh: 
   > *"Các em mở lại đúng trình duyệt trên máy vừa làm, bấm vào link bài thi 1 lần để hệ thống tự động ghi nhận điểm cho các em."*
3. Hệ thống sẽ tự động quét bộ nhớ `localStorage` trên máy học sinh và âm thầm đẩy toàn bộ kết quả lên Google Sheet của Giáo viên trong vòng 1 giây (học sinh không cần làm lại bài).
4. Học sinh cũng có nút **"Tải file điểm (.csv)"** ngay trên màn hình để gửi trực tiếp cho Thầy/Cô nếu cần.

---

## 🛠 Hướng Dẫn Kích Hoạt GitHub Pages

1. Đưa các file trên lên Repository trên GitHub (nhánh `main`).
2. Vào **Settings** của Repo -> Chọn mục **Pages** ở thanh menu bên trái.
3. Tại phần **Branch**, chọn nhánh `main` và thư mục `/(root)` -> Nhấn **Save**.
4. Sau 1 phút, link bài thi sẽ hoạt động:
   `https://<ten-user>.github.io/<ten-repo>/`

*(Hoặc mở trực tiếp file `index.html` trên máy tính bằng bất kỳ trình duyệt nào).*

