var ALL_QUESTIONS = [
  {
    "id": "MCQ_HP5_01",
    "topic": "Python Cơ bản & Biến",
    "type": "mcq",
    "question": "Trong Python, cú pháp nào sau đây dùng để xuất dữ liệu ra màn hình console?",
    "code": "print(\"Chào mừng các bạn đến với Teky!\")",
    "options": [
      "print()",
      "echo()",
      "console.log()",
      "System.out.println()"
    ],
    "answer": 0,
    "explanation": "Hàm print() là hàm tiêu chuẩn trong Python dùng để in dữ liệu ra màn hình console."
  },
  {
    "id": "MCQ_HP5_02",
    "topic": "Quy tắc đặt tên biến",
    "type": "mcq",
    "question": "Tên biến nào sau đây là HỢP LỆ trong ngôn ngữ lập trình Python?",
    "code": "",
    "options": [
      "_student_name",
      "2student_name",
      "student-name",
      "student name"
    ],
    "answer": 0,
    "explanation": "Tên biến hợp lệ trong Python có thể bắt đầu bằng chữ cái hoặc dấu gạch dưới (_), không được bắt đầu bằng số và không chứa ký tự đặc biệt như dấu trừ hay khoảng trắng."
  },
  {
    "id": "MCQ_HP5_03",
    "topic": "Kiểu dữ liệu",
    "type": "mcq",
    "question": "Cho đoạn code: x = 10; y = '20'. Kiểu dữ liệu của x và y lần lượt là:",
    "code": "x = 10\ny = '20'\nprint(type(x), type(y))",
    "options": [
      "int và str",
      "int và int",
      "float và str",
      "str và int"
    ],
    "answer": 0,
    "explanation": "10 là số nguyên (int), còn '20' nằm trong dấu nháy nên là chuỗi ký tự (str)."
  },
  {
    "id": "MCQ_HP5_04",
    "topic": "Toán tử chia lấy nguyên //",
    "type": "mcq",
    "question": "Kết quả của biểu thức 17 // 3 trong Python là bao nhiêu?",
    "code": "print(17 // 3)",
    "options": [
      "5",
      "5.66",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "// là toán tử chia lấy phần nguyên. 17 chia 3 được 5 dư 2, do đó kết quả là 5."
  },
  {
    "id": "MCQ_HP5_05",
    "topic": "Toán tử chia lấy dư %",
    "type": "mcq",
    "question": "Kết quả của biểu thức 17 % 3 trong Python là bao nhiêu?",
    "code": "print(17 % 3)",
    "options": [
      "2",
      "5",
      "1",
      "0"
    ],
    "answer": 0,
    "explanation": "% là toán tử chia lấy phần dư. 17 chia 3 dư 2."
  },
  {
    "id": "MCQ_HP5_06",
    "topic": "Toán tử lũy thừa **",
    "type": "mcq",
    "question": "Giá trị của biểu thức 2 ** 4 trong Python là:",
    "code": "print(2 ** 4)",
    "options": [
      "16",
      "8",
      "6",
      "24"
    ],
    "answer": 0,
    "explanation": "** là phép lũy thừa, 2 mũ 4 = 16."
  },
  {
    "id": "MCQ_HP5_07",
    "topic": "Ép kiểu dữ liệu",
    "type": "mcq",
    "question": "Đoạn code sau in ra kết quả gì?",
    "code": "a = '5'\nb = 3\nprint(int(a) + b)",
    "options": [
      "8",
      "53",
      "Lỗi TypeError",
      "None"
    ],
    "answer": 0,
    "explanation": "int(a) chuyển chuỗi '5' thành số 5, 5 + 3 = 8."
  },
  {
    "id": "MCQ_HP5_08",
    "topic": "Nhân chuỗi ký tự",
    "type": "mcq",
    "question": "Kết quả của lệnh in print('Teky ' * 3) là gì?",
    "code": "print('Teky ' * 3)",
    "options": [
      "Teky Teky Teky ",
      "Teky 3",
      "3 Teky",
      "Lỗi cú pháp"
    ],
    "answer": 0,
    "explanation": "Trong Python, nhân chuỗi với một số nguyên n sẽ lặp lại chuỗi đó n lần."
  },
  {
    "id": "MCQ_HP5_09",
    "topic": "Hàm input()",
    "type": "mcq",
    "question": "Hàm input() trong Python luôn trả về kiểu dữ liệu nào?",
    "code": "tuoi = input('Nhập tuổi: ')",
    "options": [
      "str (chuỗi ký tự)",
      "int (số nguyên)",
      "float (số thực)",
      "bool"
    ],
    "answer": 0,
    "explanation": "input() luôn trả về chuỗi str, muốn tính toán số học cần ép kiểu bằng int() hoặc float()."
  },
  {
    "id": "MCQ_HP5_10",
    "topic": "Cấu trúc if-elif-else",
    "type": "mcq",
    "question": "Đoạn code sau sẽ in ra chữ gì?",
    "code": "diem = 7.5\nif diem >= 8:\n    print('Giỏi')\nelif diem >= 6.5:\n    print('Khá')\nelse:\n    print('Trung bình')",
    "options": [
      "Khá",
      "Giỏi",
      "Trung bình",
      "Không in gì"
    ],
    "answer": 0,
    "explanation": "diem = 7.5 thỏa mãn điều kiện thứ hai (>= 6.5 và < 8) nên in ra 'Khá'."
  },
  {
    "id": "MCQ_HP5_11",
    "topic": "Toán tử so sánh != ",
    "type": "mcq",
    "question": "Biểu thức so sánh (10 != 5) trả về kết quả gì?",
    "code": "print(10 != 5)",
    "options": [
      "True",
      "False",
      "None",
      "Error"
    ],
    "answer": 0,
    "explanation": "!= có nghĩa là 'khác'. Vì 10 khác 5 là đúng nên trả về True."
  },
  {
    "id": "MCQ_HP5_12",
    "topic": "Toán tử logic and",
    "type": "mcq",
    "question": "Biểu thức (5 > 2 and 3 < 1) trả về kết quả gì?",
    "code": "print(5 > 2 and 3 < 1)",
    "options": [
      "False",
      "True",
      "None",
      "1"
    ],
    "answer": 0,
    "explanation": "Toán tử and trả về True khi cả hai vế đều True. Ở đây 3 < 1 là False nên kết quả là False."
  },
  {
    "id": "MCQ_HP5_13",
    "topic": "Toán tử logic or",
    "type": "mcq",
    "question": "Biểu thức (False or True) trả về kết quả gì?",
    "code": "print(False or True)",
    "options": [
      "True",
      "False",
      "None",
      "Error"
    ],
    "answer": 0,
    "explanation": "Toán tử or chỉ cần ít nhất một vế là True thì cả biểu thức là True."
  },
  {
    "id": "MCQ_HP5_14",
    "topic": "Toán tử not",
    "type": "mcq",
    "question": "Biểu thức not(10 == 10) trả về giá trị gì?",
    "code": "print(not(10 == 10))",
    "options": [
      "False",
      "True",
      "10",
      "Error"
    ],
    "answer": 0,
    "explanation": "10 == 10 là True, phủ định not(True) thành False."
  },
  {
    "id": "MCQ_HP5_15",
    "topic": "Hàm range()",
    "type": "mcq",
    "question": "Lệnh range(1, 5) sinh ra dãy số gồm những số nào?",
    "code": "for i in range(1, 5):\n    print(i, end=' ')",
    "options": [
      "1 2 3 4",
      "1 2 3 4 5",
      "0 1 2 3 4",
      "2 3 4 5"
    ],
    "answer": 0,
    "explanation": "range(start, stop) sinh các số từ start đến trước stop (dừng trước 5), tức là 1, 2, 3, 4."
  },
  {
    "id": "MCQ_HP5_16",
    "topic": "Bước nhảy của range()",
    "type": "mcq",
    "question": "Lệnh range(0, 10, 2) sinh ra chuỗi số nào?",
    "code": "for i in range(0, 10, 2):\n    print(i, end=' ')",
    "options": [
      "0 2 4 6 8",
      "0 2 4 6 8 10",
      "2 4 6 8",
      "1 3 5 7 9"
    ],
    "answer": 0,
    "explanation": "range(0, 10, 2) có bước nhảy là 2, dừng trước 10: 0, 2, 4, 6, 8."
  },
  {
    "id": "MCQ_HP5_17",
    "topic": "Lệnh break",
    "type": "mcq",
    "question": "Đoạn code sau in ra các số nào?",
    "code": "for i in range(1, 6):\n    if i == 3:\n        break\n    print(i, end=' ')",
    "options": [
      "1 2",
      "1 2 3",
      "1 2 4 5",
      "3 4 5"
    ],
    "answer": 0,
    "explanation": "Khi i == 3, lệnh break lập tức thoát vòng lặp, nên chỉ in 1 và 2."
  },
  {
    "id": "MCQ_HP5_18",
    "topic": "Lệnh continue",
    "type": "mcq",
    "question": "Đoạn code sau in ra các số nào?",
    "code": "for i in range(1, 5):\n    if i == 2:\n        continue\n    print(i, end=' ')",
    "options": [
      "1 3 4",
      "1 2",
      "1 2 3 4",
      "2 3 4"
    ],
    "answer": 0,
    "explanation": "Khi i == 2, continue bỏ qua lệnh in của lần lặp đó và nhảy sang i = 3, kết quả là 1 3 4."
  },
  {
    "id": "MCQ_HP5_19",
    "topic": "Khởi tạo List",
    "type": "mcq",
    "question": "Ký hiệu nào được dùng để khai báo kiểu dữ liệu List (Danh sách) trong Python?",
    "code": "danh_sach = ['Cam', 'Xoài', 'Táo']",
    "options": [
      "Cặp ngoặc vuông [ ]",
      "Cặp ngoặc tròn ( )",
      "Cặp ngoặc nhọn { }",
      "Cặp ngoặc kép \" \""
    ],
    "answer": 0,
    "explanation": "List trong Python được định nghĩa bằng cặp ngoặc vuông [ ]."
  },
  {
    "id": "MCQ_HP5_20",
    "topic": "Chỉ số Index trong List",
    "type": "mcq",
    "question": "Cho a = [10, 20, 30]. Giá trị của a[0] là bao nhiêu?",
    "code": "a = [10, 20, 30]\nprint(a[0])",
    "options": [
      "10",
      "20",
      "30",
      "Lỗi"
    ],
    "answer": 0,
    "explanation": "Chỉ số trong Python bắt đầu từ 0. Phần tử đầu tiên là a[0] = 10."
  },
  {
    "id": "MCQ_HP5_21",
    "topic": "Chỉ số âm trong List",
    "type": "mcq",
    "question": "Trong danh sách lst = [10, 20, 30, 40], lst[-1] trỏ đến phần tử nào?",
    "code": "lst = [10, 20, 30, 40]\nprint(lst[-1])",
    "options": [
      "40 (Phần tử cuối cùng)",
      "10 (Phần tử đầu tiên)",
      "30",
      "Lỗi Index"
    ],
    "answer": 0,
    "explanation": "Chỉ số âm -1 luôn trỏ đến phần tử cuối cùng của danh sách."
  },
  {
    "id": "MCQ_HP5_22",
    "topic": "Phương thức append()",
    "type": "mcq",
    "question": "Phương thức append() có tác dụng gì đối với một List?",
    "code": "lst = [1, 2]\nlst.append(3)",
    "options": [
      "Thêm phần tử vào cuối danh sách",
      "Xóa phần tử cuối",
      "Chèn phần tử vào đầu",
      "Sắp xếp danh sách"
    ],
    "answer": 0,
    "explanation": "append(x) thêm phần tử x vào vị trí cuối cùng của danh sách."
  },
  {
    "id": "MCQ_HP5_23",
    "topic": "Phương thức pop()",
    "type": "mcq",
    "question": "Sau khi chạy lst = [1, 2, 3]; lst.pop(), danh sách lst còn lại gì?",
    "code": "lst = [1, 2, 3]\nlst.pop()\nprint(lst)",
    "options": [
      "[1, 2]",
      "[2, 3]",
      "[1, 3]",
      "[]"
    ],
    "answer": 0,
    "explanation": "Mặc định pop() không tham số sẽ xóa phần tử cuối cùng của danh sách (xóa số 3)."
  },
  {
    "id": "MCQ_HP5_24",
    "topic": "Hàm len()",
    "type": "mcq",
    "question": "Hàm len([5, 10, 15, 20]) trả về kết quả là bao nhiêu?",
    "code": "print(len([5, 10, 15, 20]))",
    "options": [
      "4",
      "3",
      "20",
      "5"
    ],
    "answer": 0,
    "explanation": "Hàm len() trả về số lượng phần tử có trong danh sách (4 phần tử)."
  },
  {
    "id": "MCQ_HP5_25",
    "topic": "Toán tử in",
    "type": "mcq",
    "question": "Kết quả của lệnh ('Python' in ['Java', 'C++', 'Python']) là gì?",
    "code": "print('Python' in ['Java', 'C++', 'Python'])",
    "options": [
      "True",
      "False",
      "None",
      "Error"
    ],
    "answer": 0,
    "explanation": "Toán tử in kiểm tra sự tồn tại. Do 'Python' có trong list nên kết quả là True."
  },
  {
    "id": "MCQ_HP5_26",
    "topic": "Cắt lát List (Slice)",
    "type": "mcq",
    "question": "Cho nums = [10, 20, 30, 40, 50]. Giá trị của nums[1:3] là gì?",
    "code": "nums = [10, 20, 30, 40, 50]\nprint(nums[1:3])",
    "options": [
      "[20, 30]",
      "[10, 20]",
      "[20, 30, 40]",
      "[10, 20, 30]"
    ],
    "answer": 0,
    "explanation": "Cắt lát [1:3] lấy từ chỉ số 1 đến trước chỉ số 3 (chỉ số 1 và 2), là [20, 30]."
  },
  {
    "id": "MCQ_HP5_27",
    "topic": "Định nghĩa hàm def",
    "type": "mcq",
    "question": "Từ khóa nào trong Python được dùng để bắt đầu định nghĩa một hàm?",
    "code": "def chao():\n    print('Hi!')",
    "options": [
      "def",
      "function",
      "func",
      "define"
    ],
    "answer": 0,
    "explanation": "Từ khóa def (define) dùng để khai báo hàm trong Python."
  },
  {
    "id": "MCQ_HP5_28",
    "topic": "Từ khóa return",
    "type": "mcq",
    "question": "Từ khóa nào dùng để trả về giá trị từ một hàm trong Python?",
    "code": "def cong(a, b):\n    return a + b",
    "options": [
      "return",
      "yield",
      "send",
      "give"
    ],
    "answer": 0,
    "explanation": "return dùng để kết thúc hàm và trả về một giá trị cho nơi gọi hàm."
  },
  {
    "id": "MCQ_HP5_29",
    "topic": "Hàm không có return",
    "type": "mcq",
    "question": "Nếu hàm không có câu lệnh return rõ ràng, giá trị trả về mặc định là gì?",
    "code": "def test():\n    pass\nx = test()\nprint(x)",
    "options": [
      "None",
      "0",
      "False",
      "Chuỗi rỗng"
    ],
    "answer": 0,
    "explanation": "Mọi hàm không có return rõ ràng sẽ mặc định trả về giá trị None."
  },
  {
    "id": "MCQ_HP5_30",
    "topic": "Hàm max()",
    "type": "mcq",
    "question": "Kết quả của lệnh max([3, 9, 2, 8]) là:",
    "code": "print(max([3, 9, 2, 8]))",
    "options": [
      "9",
      "8",
      "3",
      "2"
    ],
    "answer": 0,
    "explanation": "Hàm max() trả về phần tử lớn nhất trong danh sách, ở đây là 9."
  },
  {
    "id": "MCQ_HP5_31",
    "topic": "Hàm min()",
    "type": "mcq",
    "question": "Kết quả của lệnh min([3, 9, 2, 8]) là:",
    "code": "print(min([3, 9, 2, 8]))",
    "options": [
      "2",
      "3",
      "8",
      "9"
    ],
    "answer": 0,
    "explanation": "Hàm min() trả về phần tử nhỏ nhất trong danh sách, ở đây là 2."
  },
  {
    "id": "MCQ_HP5_32",
    "topic": "Chuỗi upper()",
    "type": "mcq",
    "question": "Phương thức s.upper() trên chuỗi s = 'teky' cho kết quả gì?",
    "code": "s = 'teky'\nprint(s.upper())",
    "options": [
      "TEKY",
      "Teky",
      "teky",
      "T-E-K-Y"
    ],
    "answer": 0,
    "explanation": "upper() chuyển tất cả các ký tự chữ cái trong chuỗi thành chữ in hoa."
  },
  {
    "id": "MCQ_HP5_33",
    "topic": "Chuỗi split()",
    "type": "mcq",
    "question": "Kết quả của 'A B C'.split() là gì?",
    "code": "print('A B C'.split())",
    "options": [
      "['A', 'B', 'C']",
      "'ABC'",
      "('A', 'B', 'C')",
      "['ABC']"
    ],
    "answer": 0,
    "explanation": "split() mặc định tách chuỗi theo khoảng trắng thành một List các từ."
  },
  {
    "id": "MCQ_HP5_34",
    "topic": "Phương thức remove()",
    "type": "mcq",
    "question": "Phương thức remove(x) trên List thực hiện hành động gì?",
    "code": "lst = [10, 20, 30]\nlst.remove(20)",
    "options": [
      "Xóa phần tử đầu tiên có giá trị x",
      "Xóa phần tử tại vị trí thứ x",
      "Xóa toàn bộ list",
      "Báo lỗi nếu có nhiều x"
    ],
    "answer": 0,
    "explanation": "remove(x) tìm và xóa phần tử đầu tiên có giá trị bằng x trong danh sách."
  },
  {
    "id": "MCQ_HP5_35",
    "topic": "Lệnh pass",
    "type": "mcq",
    "question": "Từ khóa pass trong Python dùng để làm gì?",
    "code": "if x > 0:\n    pass",
    "options": [
      "Lệnh giữ chỗ (không làm gì cả)",
      "Thoát khỏi chương trình",
      "Quay lại đầu vòng lặp",
      "Xóa biến x"
    ],
    "answer": 0,
    "explanation": "pass là câu lệnh rỗng, được dùng làm nơi giữ chỗ cú pháp khi chưa muốn viết logic xử lý."
  },
  {
    "id": "MCQ_HP6_01",
    "topic": "Khởi tạo Tkinter",
    "type": "mcq",
    "question": "Cú pháp nạp thư viện Tkinter và đặt bí danh tk ngắn gọn là:",
    "code": "import tkinter as tk",
    "options": [
      "import tkinter as tk",
      "using tkinter as tk",
      "include <tkinter>",
      "require('tkinter')"
    ],
    "answer": 0,
    "explanation": "Trong Python, cú pháp chuẩn là 'import tkinter as tk'."
  },
  {
    "id": "MCQ_HP6_02",
    "topic": "Tạo cửa sổ chính",
    "type": "mcq",
    "question": "Hàm nào dùng để khởi tạo đối tượng cửa sổ chính trong Tkinter?",
    "code": "root = tk.Tk()",
    "options": [
      "tk.Tk()",
      "tk.Window()",
      "tk.App()",
      "tk.Main()"
    ],
    "answer": 0,
    "explanation": "tk.Tk() là hàm tạo cửa sổ chính (top-level window)."
  },
  {
    "id": "MCQ_HP6_03",
    "topic": "Tiêu đề cửa sổ",
    "type": "mcq",
    "question": "Phương thức nào dùng để đặt tiêu đề cho cửa sổ Tkinter?",
    "code": "root.title('Teky App')",
    "options": [
      "root.title('...')",
      "root.set_title('...')",
      "root.caption('...')",
      "root.name('...')"
    ],
    "answer": 0,
    "explanation": "Phương thức root.title() nhận chuỗi văn bản để hiển thị trên thanh tiêu đề của cửa sổ."
  },
  {
    "id": "MCQ_HP6_04",
    "topic": "Kích thước cửa sổ",
    "type": "mcq",
    "question": "Để đặt kích thước cửa sổ rộng 500 pixel và cao 300 pixel, cú pháp là:",
    "code": "root.geometry('500x300')",
    "options": [
      "root.geometry('500x300')",
      "root.size(500, 300)",
      "root.dimension('500x300')",
      "root.resize(500, 300)"
    ],
    "answer": 0,
    "explanation": "Phương thức root.geometry('rộng x cao') với dấu 'x' ở giữa dùng để đặt kích thước cửa sổ."
  },
  {
    "id": "MCQ_HP6_05",
    "topic": "Vòng lặp sự kiện mainloop",
    "type": "mcq",
    "question": "Vai trò của câu lệnh root.mainloop() trong Tkinter là gì?",
    "code": "root.mainloop()",
    "options": [
      "Lắng nghe liên tục các sự kiện và giữ cho cửa sổ hiển thị",
      "Đóng cửa sổ chương trình",
      "Vẽ lại giao diện một lần",
      "Khởi động lại máy tính"
    ],
    "answer": 0,
    "explanation": "mainloop() chạy vòng lặp bắt sự kiện (click chuột, gõ phím) và giữ cho cửa sổ không bị tắt ngay."
  },
  {
    "id": "MCQ_HP6_06",
    "topic": "Widget Label",
    "type": "mcq",
    "question": "Widget Label trong Tkinter được sử dụng để làm gì?",
    "code": "lbl = tk.Label(root, text='Chào bạn')",
    "options": [
      "Hiển thị văn bản hoặc hình ảnh tĩnh",
      "Nhập văn bản một dòng",
      "Tạo nút bấm",
      "Tạo thanh cuộn"
    ],
    "answer": 0,
    "explanation": "Label dùng để hiển thị chữ hoặc ảnh tĩnh trên giao diện, người dùng không thể gõ chữ trực tiếp vào Label."
  },
  {
    "id": "MCQ_HP6_07",
    "topic": "Widget Button",
    "type": "mcq",
    "question": "Thuộc tính nào của Button dùng để chỉ định hàm được gọi khi người dùng click vào nút?",
    "code": "btn = tk.Button(root, text='Lưu', command=xu_ly)",
    "options": [
      "command",
      "action",
      "onclick",
      "event"
    ],
    "answer": 0,
    "explanation": "Thuộc tính command nhận tên hàm callback để thực thi khi nút bấm được click."
  },
  {
    "id": "MCQ_HP6_08",
    "topic": "Widget Entry",
    "type": "mcq",
    "question": "Widget nào trong Tkinter cho phép người dùng nhập một dòng văn bản ngắn?",
    "code": "txt = tk.Entry(root)",
    "options": [
      "tk.Entry",
      "tk.Input",
      "tk.TextBox",
      "tk.Field"
    ],
    "answer": 0,
    "explanation": "tk.Entry là widget nhập liệu một dòng (single-line text)."
  },
  {
    "id": "MCQ_HP6_09",
    "topic": "Lấy văn bản từ Entry",
    "type": "mcq",
    "question": "Để lấy chuỗi văn bản người dùng đã nhập trong ô entry, ta dùng phương thức nào?",
    "code": "val = entry.get()",
    "options": [
      "entry.get()",
      "entry.text()",
      "entry.read()",
      "entry.value"
    ],
    "answer": 0,
    "explanation": "entry.get() trả về chuỗi nội dung văn bản hiện có trong ô Entry."
  },
  {
    "id": "MCQ_HP6_10",
    "topic": "Xóa nội dung Entry",
    "type": "mcq",
    "question": "Câu lệnh nào xóa sạch toàn bộ nội dung trong ô entry?",
    "code": "entry.delete(0, tk.END)",
    "options": [
      "entry.delete(0, tk.END)",
      "entry.clear()",
      "entry.reset()",
      "entry.remove()"
    ],
    "answer": 0,
    "explanation": "entry.delete(0, tk.END) xóa từ ký tự vị trí 0 đến cuối cùng (tk.END)."
  },
  {
    "id": "MCQ_HP6_11",
    "topic": "Bố cục pack()",
    "type": "mcq",
    "question": "Trình quản lý bố cục pack() mặc định xếp các widget theo hướng nào?",
    "code": "lbl.pack()\nbtn.pack()",
    "options": [
      "Tuần tự từ trên xuống dưới (theo chiều dọc)",
      "Từ trái sang phải",
      "Dạng lưới ô vuông",
      "Chồng khít lên nhau"
    ],
    "answer": 0,
    "explanation": "pack() mặc định sắp xếp các thành phần nối tiếp nhau từ đỉnh xuống đáy (side=tk.TOP)."
  },
  {
    "id": "MCQ_HP6_12",
    "topic": "Tham số side trong pack",
    "type": "mcq",
    "question": "Để widget xếp về phía bên trái khi dùng pack(), ta truyền tham số:",
    "code": "btn.pack(side=tk.LEFT)",
    "options": [
      "side=tk.LEFT",
      "align='left'",
      "float='left'",
      "pos='left'"
    ],
    "answer": 0,
    "explanation": "pack(side=tk.LEFT) đặt widget bám sát về cạnh bên trái."
  },
  {
    "id": "MCQ_HP6_13",
    "topic": "Khoảng đệm pady",
    "type": "mcq",
    "question": "Tham số pady=10 trong widget.pack(pady=10) có ý nghĩa gì?",
    "code": "btn.pack(pady=10)",
    "options": [
      "Tạo khoảng đệm 10 pixel theo chiều dọc (trên và dưới)",
      "Tạo khoảng đệm theo chiều ngang",
      "Tăng chiều rộng nút bấm",
      "Tăng kích thước chữ"
    ],
    "answer": 0,
    "explanation": "pady là padding theo trục Y (chiều dọc), tạo khoảng cách đệm trên và dưới widget."
  },
  {
    "id": "MCQ_HP6_14",
    "topic": "Bố cục grid()",
    "type": "mcq",
    "question": "Để đặt widget tại hàng số 2 và cột số 0, câu lệnh grid là:",
    "code": "lbl.grid(row=2, column=0)",
    "options": [
      "lbl.grid(row=2, column=0)",
      "lbl.grid(col=0, row=2)",
      "lbl.grid(2, 0)",
      "lbl.place(2, 0)"
    ],
    "answer": 0,
    "explanation": "grid(row=hàng, column=cột) định vị widget theo bảng lưới tọa độ dòng và cột."
  },
  {
    "id": "MCQ_HP6_15",
    "topic": "Columnspan trong grid",
    "type": "mcq",
    "question": "Tham số columnspan=2 trong grid() có tác dụng gì?",
    "code": "lbl.grid(row=0, column=0, columnspan=2)",
    "options": [
      "Cho phép widget trải dài chiếm liền 2 cột",
      "Tách cột làm đôi",
      "Đẩy widget sang cột thứ 2",
      "Tăng độ rộng 2 pixel"
    ],
    "answer": 0,
    "explanation": "columnspan chỉ định số lượng cột mà một widget sẽ trải rộng qua."
  },
  {
    "id": "MCQ_HP6_16",
    "topic": "Import messagebox",
    "type": "mcq",
    "question": "Cú pháp nạp module messagebox từ tkinter là:",
    "code": "from tkinter import messagebox",
    "options": [
      "from tkinter import messagebox",
      "import messagebox",
      "using messagebox",
      "include tkinter.messagebox"
    ],
    "answer": 0,
    "explanation": "messagebox là một submodule của tkinter nên cần nạp qua: from tkinter import messagebox."
  },
  {
    "id": "MCQ_HP6_17",
    "topic": "Hộp thoại showinfo",
    "type": "mcq",
    "question": "Hàm messagebox.showinfo('Tiêu đề', 'Nội dung') hiển thị loại hộp thoại nào?",
    "code": "messagebox.showinfo('Thông báo', 'Hoàn thành!')",
    "options": [
      "Hộp thoại thông tin với biểu tượng chữ 'i'",
      "Hộp thoại cảnh báo vàng",
      "Hộp thoại báo lỗi đỏ",
      "Hộp thoại nhập mật khẩu"
    ],
    "answer": 0,
    "explanation": "showinfo mở popup thông tin có biểu tượng chữ 'i' màu xanh dương."
  },
  {
    "id": "MCQ_HP6_18",
    "topic": "Hộp thoại showwarning",
    "type": "mcq",
    "question": "Hàm nào hiển thị hộp thoại cảnh báo có biểu tượng tam giác vàng chấm than?",
    "code": "messagebox.showwarning('Cảnh báo', 'Chưa nhập tên!')",
    "options": [
      "messagebox.showwarning()",
      "messagebox.showinfo()",
      "messagebox.showerror()",
      "messagebox.askyesno()"
    ],
    "answer": 0,
    "explanation": "showwarning mở hộp thoại cảnh báo với icon tam giác vàng."
  },
  {
    "id": "MCQ_HP6_19",
    "topic": "Hộp thoại showerror",
    "type": "mcq",
    "question": "Khi muốn thông báo lỗi sai dữ liệu bằng hộp thoại dấu X đỏ, ta dùng hàm:",
    "code": "messagebox.showerror('Lỗi', 'Điểm số không hợp lệ!')",
    "options": [
      "messagebox.showerror()",
      "messagebox.showwarning()",
      "messagebox.alert()",
      "messagebox.stop()"
    ],
    "answer": 0,
    "explanation": "showerror mở hộp thoại báo lỗi nghiêm trọng với biểu tượng dấu gạch chéo đỏ."
  },
  {
    "id": "MCQ_HP6_20",
    "topic": "Hộp thoại askyesno",
    "type": "mcq",
    "question": "Hàm messagebox.askyesno() trả về giá trị kiểu gì khi người dùng bấm chọn?",
    "code": "ans = messagebox.askyesno('Xác nhận', 'Bạn có chắc chắn muốn thoát?')",
    "options": [
      "bool (True nếu chọn Yes, False nếu chọn No)",
      "str ('Yes' hoặc 'No')",
      "int (1 hoặc 0)",
      "None"
    ],
    "answer": 0,
    "explanation": "askyesno trả về True khi bấm nút Yes và False khi bấm nút No."
  },
  {
    "id": "MCQ_HP6_21",
    "topic": "Màu nền bg",
    "type": "mcq",
    "question": "Thuộc tính nào dùng để đổi màu nền (background) của một Widget?",
    "code": "lbl = tk.Label(root, text='Chào', bg='yellow')",
    "options": [
      "bg (hoặc background)",
      "color",
      "background_color",
      "fill"
    ],
    "answer": 0,
    "explanation": "Thuộc tính bg (background) dùng để thiết lập màu nền."
  },
  {
    "id": "MCQ_HP6_22",
    "topic": "Màu chữ fg",
    "type": "mcq",
    "question": "Thuộc tính nào dùng để đổi màu chữ (foreground) của một Widget?",
    "code": "lbl = tk.Label(root, text='Chào', fg='blue')",
    "options": [
      "fg (hoặc foreground)",
      "text_color",
      "font_color",
      "color"
    ],
    "answer": 0,
    "explanation": "Thuộc tính fg (foreground) dùng để thiết lập màu chữ hiển thị."
  },
  {
    "id": "MCQ_HP6_23",
    "topic": "Định dạng font",
    "type": "mcq",
    "question": "Cú pháp tuple thiết lập font Arial cỡ 14 in đậm trong Tkinter là:",
    "code": "lbl = tk.Label(root, text='Teky', font=('Arial', 14, 'bold'))",
    "options": [
      "font=('Arial', 14, 'bold')",
      "font='Arial 14 bold'",
      "font_size=14, font_family='Arial'",
      "style='bold 14px'"
    ],
    "answer": 0,
    "explanation": "Tkinter nhận font dưới dạng tuple: (tên_font, kích_cỡ, kiểu_chữ)."
  },
  {
    "id": "MCQ_HP6_24",
    "topic": "Widget Listbox",
    "type": "mcq",
    "question": "Widget Listbox trong Tkinter dùng để làm gì?",
    "code": "lb = tk.Listbox(root)",
    "options": [
      "Hiển thị danh sách các mục văn bản để người dùng chọn",
      "Hộp nhập văn bản nhiều dòng",
      "Tạo nút bấm dạng tròn",
      "Vẽ hình học"
    ],
    "answer": 0,
    "explanation": "Listbox hiển thị danh sách các mục và cho phép người dùng click để chọn một hoặc nhiều mục."
  },
  {
    "id": "MCQ_HP6_25",
    "topic": "Thêm phần tử vào Listbox",
    "type": "mcq",
    "question": "Phương thức nào thêm một mục vào cuối danh sách Listbox?",
    "code": "lb.insert(tk.END, 'Học Python')",
    "options": [
      "lb.insert(tk.END, '...')",
      "lb.append('...')",
      "lb.add('...')",
      "lb.push('...')"
    ],
    "answer": 0,
    "explanation": "lb.insert(tk.END, '...') chèn mục mới vào vị trí cuối cùng của Listbox."
  },
  {
    "id": "MCQ_HP6_26",
    "topic": "Lấy mục chọn trong Listbox",
    "type": "mcq",
    "question": "Phương thức curselection() trên Listbox trả về gì?",
    "code": "selected = lb.curselection()",
    "options": [
      "Tuple chứa chỉ số (index) của mục đang được chọn",
      "Chuỗi nội dung của mục đang chọn",
      "Số lượng phần tử trong listbox",
      "True hoặc False"
    ],
    "answer": 0,
    "explanation": "curselection() trả về tuple chứa chỉ số index của những dòng đang được người dùng chọn."
  },
  {
    "id": "MCQ_HP6_27",
    "topic": "Xóa mục trong Listbox",
    "type": "mcq",
    "question": "Lệnh xóa mục tại vị trí idx trong Listbox là:",
    "code": "lb.delete(idx)",
    "options": [
      "lb.delete(idx)",
      "lb.remove(idx)",
      "lb.pop(idx)",
      "lb.drop(idx)"
    ],
    "answer": 0,
    "explanation": "lb.delete(start, end=None) dùng để xóa mục tại chỉ số index."
  },
  {
    "id": "MCQ_HP6_28",
    "topic": "Widget Frame",
    "type": "mcq",
    "question": "Widget Frame có chức năng chính là gì trong thiết kế giao diện Tkinter?",
    "code": "frame = tk.Frame(root)",
    "options": [
      "Làm khung chứa trung gian để gom nhóm các widget con",
      "Hiển thị ảnh nền",
      "Tạo cửa sổ mới độc lập",
      "Tạo đường kẻ ngang"
    ],
    "answer": 0,
    "explanation": "Frame là container (khung chứa) dùng để nhóm các widget lại giúp phân chia bố cục rõ ràng."
  },
  {
    "id": "MCQ_HP6_29",
    "topic": "Widget Scrollbar",
    "type": "mcq",
    "question": "Widget nào dùng để tạo thanh cuộn trang cho Listbox hoặc Text?",
    "code": "sb = tk.Scrollbar(root)",
    "options": [
      "tk.Scrollbar",
      "tk.Slider",
      "tk.Scroller",
      "tk.RollBar"
    ],
    "answer": 0,
    "explanation": "tk.Scrollbar là thanh cuộn chuẩn trong Tkinter."
  },
  {
    "id": "MCQ_HP6_30",
    "topic": "Phương thức config()",
    "type": "mcq",
    "question": "Để thay đổi văn bản của một Label đã tạo trước đó trong lúc đang chạy, ta dùng:",
    "code": "lbl.config(text='Nội dung mới')",
    "options": [
      "lbl.config(text='...')",
      "lbl.text = '...'",
      "lbl.set('...')",
      "lbl.update_text('...')"
    ],
    "answer": 0,
    "explanation": "Phương thức config() (hoặc configure()) cho phép cập nhật lại bất kỳ thuộc tính nào của widget."
  },
  {
    "id": "MCQ_HP6_31",
    "topic": "Biến StringVar",
    "type": "mcq",
    "question": "Lớp tk.StringVar() trong Tkinter dùng để làm gì?",
    "code": "v = tk.StringVar()",
    "options": [
      "Tạo biến đặc biệt tự động đồng bộ giá trị với các widget",
      "Ép kiểu dữ liệu chuỗi",
      "Mã hóa văn bản",
      "Đếm số ký tự"
    ],
    "answer": 0,
    "explanation": "StringVar là một biến điều khiển (control variable) trong Tkinter, tự động đồng bộ trạng thái với giao diện."
  },
  {
    "id": "MCQ_HP6_32",
    "topic": "Widget Checkbutton",
    "type": "mcq",
    "question": "Widget Checkbutton thường được dùng trong trường hợp nào?",
    "code": "cb = tk.Checkbutton(root, text='Ghi nhớ đăng nhập')",
    "options": [
      "Hộp kiểm cho phép bật/tắt (chọn hoặc bỏ chọn)",
      "Nhập mật khẩu",
      "Chọn 1 trong nhiều phương án loại trừ",
      "Tạo menu cuộn"
    ],
    "answer": 0,
    "explanation": "Checkbutton là hộp kiểm dạng hình vuông cho phép người dùng bật/tắt độc lập một tùy chọn."
  },
  {
    "id": "MCQ_HP6_33",
    "topic": "Widget Radiobutton",
    "type": "mcq",
    "question": "Khi muốn người dùng chỉ được chọn DUY NHẤT 1 phương án trong một nhóm, ta dùng:",
    "code": "rb = tk.Radiobutton(root, text='Nam', value=1)",
    "options": [
      "tk.Radiobutton",
      "tk.Checkbutton",
      "tk.Entry",
      "tk.Label"
    ],
    "answer": 0,
    "explanation": "Radiobutton (nút chọn hình tròn) dùng cho các phương án loại trừ lẫn nhau (chỉ chọn được 1 mục)."
  },
  {
    "id": "MCQ_HP6_34",
    "topic": "Ẩn ký tự mật khẩu trong Entry",
    "type": "mcq",
    "question": "Để ô Entry hiển thị dấu sao (*) che mật khẩu, ta gán tham số:",
    "code": "entry = tk.Entry(root, show='*')",
    "options": [
      "show='*'",
      "password=True",
      "mask='*'",
      "hidden=True"
    ],
    "answer": 0,
    "explanation": "Tham số show='*' làm cho các ký tự gõ vào hiển thị dưới dạng dấu sao (*)."
  },
  {
    "id": "MCQ_HP6_35",
    "topic": "Phương thức destroy()",
    "type": "mcq",
    "question": "Lệnh root.destroy() có tác dụng gì?",
    "code": "root.destroy()",
    "options": [
      "Đóng và giải phóng tài nguyên cửa sổ chương trình",
      "Thu nhỏ cửa sổ xuống taskbar",
      "Xóa toàn bộ biến trong bộ nhớ",
      "Khởi động lại ứng dụng"
    ],
    "answer": 0,
    "explanation": "root.destroy() đóng cửa sổ GUI và giải phóng tài nguyên, kết thúc vòng lặp mainloop."
  },
  {
    "id": "CODE_HP5_01",
    "topic": "Hàm print()",
    "type": "code",
    "question": "Hãy viết câu lệnh Python sử dụng hàm print() để in ra màn hình chính xác dòng chữ: Chào mừng bạn đến với Python Teky!",
    "initial_code": "# Viết câu lệnh print tại đây:\n",
    "sample_solution": "print(\"Chào mừng bạn đến với Python Teky!\")",
    "required_keywords": [
      "print",
      "Chào mừng bạn đến với Python Teky!"
    ],
    "explanation": "Cú pháp: print(\"Chào mừng bạn đến với Python Teky!\")"
  },
  {
    "id": "CODE_HP5_02",
    "topic": "Toán tử chia lấy dư",
    "type": "code",
    "question": "Cho 2 biến a = 15 và b = 4. Hãy viết câu lệnh in ra phép chia lấy phần dư (%) của a cho b.",
    "initial_code": "a = 15\nb = 4\n# Viết câu lệnh in phần dư tại đây:\n",
    "sample_solution": "print(a % b)",
    "required_keywords": [
      "print",
      "%"
    ],
    "explanation": "Toán tử chia lấy phần dư là %. Viết lệnh: print(a % b)"
  },
  {
    "id": "CODE_HP5_03",
    "topic": "Ép kiểu dữ liệu",
    "type": "code",
    "question": "Cho chuỗi s = '120'. Hãy viết câu lệnh ép kiểu chuỗi s thành số nguyên và gán cho biến x.",
    "initial_code": "s = '120'\n# Gán biến x bằng số nguyên chuyển đổi từ s:\n",
    "sample_solution": "x = int(s)",
    "required_keywords": [
      "x",
      "int",
      "s"
    ],
    "explanation": "Cú pháp ép kiểu sang số nguyên: x = int(s)"
  },
  {
    "id": "CODE_HP5_04",
    "topic": "Cấu trúc điều kiện if-else",
    "type": "code",
    "question": "Cho biến n = 7. Hãy viết cấu trúc if-else kiểm tra: nếu n > 0 thì in 'Số dương', ngược lại in 'Số không dương'.",
    "initial_code": "n = 7\n# Viết cấu trúc if-else tại đây:\n",
    "sample_solution": "if n > 0:\n    print('Số dương')\nelse:\n    print('Số không dương')",
    "required_keywords": [
      "if",
      "n",
      ">",
      "0",
      "else",
      "print"
    ],
    "explanation": "Cú pháp:\nif n > 0:\n    print('Số dương')\nelse:\n    print('Số không dương')"
  },
  {
    "id": "CODE_HP5_05",
    "topic": "Vòng lặp for & range()",
    "type": "code",
    "question": "Hãy viết vòng lặp for sử dụng hàm range() để in ra các số từ 1 đến 5.",
    "initial_code": "# Viết vòng lặp for tại đây:\n",
    "sample_solution": "for i in range(1, 6):\n    print(i)",
    "required_keywords": [
      "for",
      "in",
      "range",
      "1",
      "6",
      "print"
    ],
    "explanation": "range(1, 6) sẽ sinh ra dãy số 1, 2, 3, 4, 5. Sử dụng for i in range(1, 6): print(i)"
  },
  {
    "id": "CODE_HP5_06",
    "topic": "Vòng lặp với bước nhảy",
    "type": "code",
    "question": "Hãy viết vòng lặp for sử dụng range(start, stop, step) để in ra các số chẵn từ 2 đến 10.",
    "initial_code": "# Viết vòng lặp in số chẵn từ 2 đến 10:\n",
    "sample_solution": "for i in range(2, 11, 2):\n    print(i)",
    "required_keywords": [
      "for",
      "in",
      "range",
      "2",
      "11",
      "2",
      "print"
    ],
    "explanation": "Cú pháp: for i in range(2, 11, 2): print(i)"
  },
  {
    "id": "CODE_HP5_07",
    "topic": "Tính tổng dãy số",
    "type": "code",
    "question": "Hãy hoàn thành đoạn code tính tổng các số từ 1 đến 5 bằng cách cộng dồn vào biến tong.",
    "initial_code": "tong = 0\nfor i in range(1, 6):\n    # Cộng dồn i vào tong tại đây:\n    \nprint(tong)",
    "sample_solution": "tong = 0\nfor i in range(1, 6):\n    tong += i\nprint(tong)",
    "required_keywords": [
      "tong",
      "+=",
      "i"
    ],
    "explanation": "Câu lệnh cộng dồn: tong += i (hoặc tong = tong + i)"
  },
  {
    "id": "CODE_HP5_08",
    "topic": "Thêm phần tử vào List (append)",
    "type": "code",
    "question": "Cho danh sách students = []. Hãy viết câu lệnh sử dụng phương thức append() để thêm phần tử 'Nguyen Van A' vào danh sách students.",
    "initial_code": "students = []\n# Viết lệnh append tại đây:\n",
    "sample_solution": "students.append('Nguyen Van A')",
    "required_keywords": [
      "students.append",
      "Nguyen Van A"
    ],
    "explanation": "Cú pháp: students.append('Nguyen Van A')"
  },
  {
    "id": "CODE_HP5_09",
    "topic": "Truy cập phần tử cuối của List",
    "type": "code",
    "question": "Cho danh sách fruits = ['Cam', 'Táo', 'Xoài']. Hãy viết câu lệnh in ra phần tử cuối cùng của fruits bằng cách dùng chỉ số âm (-1).",
    "initial_code": "fruits = ['Cam', 'Táo', 'Xoài']\n# In phần tử cuối bằng chỉ số âm:\n",
    "sample_solution": "print(fruits[-1])",
    "required_keywords": [
      "print",
      "fruits[-1]"
    ],
    "explanation": "Chỉ số âm -1 trỏ đến phần tử cuối cùng: print(fruits[-1])"
  },
  {
    "id": "CODE_HP5_10",
    "topic": "Độ dài List bằng len()",
    "type": "code",
    "question": "Cho danh sách scores = [8, 9, 7, 10]. Hãy viết câu lệnh in ra số lượng phần tử của danh sách scores bằng hàm len().",
    "initial_code": "scores = [8, 9, 7, 10]\n# In độ dài của danh sách scores:\n",
    "sample_solution": "print(len(scores))",
    "required_keywords": [
      "print",
      "len",
      "scores"
    ],
    "explanation": "Cú pháp: print(len(scores))"
  },
  {
    "id": "CODE_HP5_11",
    "topic": "Sắp xếp danh sách (sort)",
    "type": "code",
    "question": "Cho danh sách nums = [5, 2, 9, 1]. Hãy viết câu lệnh sắp xếp danh sách nums tăng dần bằng phương thức sort().",
    "initial_code": "nums = [5, 2, 9, 1]\n# Viết câu lệnh sắp xếp tại đây:\n",
    "sample_solution": "nums.sort()",
    "required_keywords": [
      "nums.sort"
    ],
    "explanation": "Phương thức sắp xếp trực tiếp danh sách: nums.sort()"
  },
  {
    "id": "CODE_HP5_12",
    "topic": "Định nghĩa hàm (def)",
    "type": "code",
    "question": "Hãy viết định nghĩa một hàm tên là tinh_tong(a, b) nhận vào 2 tham số và sử dụng lệnh return để trả về tổng a + b.",
    "initial_code": "# Định nghĩa hàm tinh_tong tại đây:\n",
    "sample_solution": "def tinh_tong(a, b):\n    return a + b",
    "required_keywords": [
      "def",
      "tinh_tong",
      "a",
      "b",
      "return",
      "+"
    ],
    "explanation": "Cú pháp định nghĩa hàm trả về tổng:\ndef tinh_tong(a, b):\n    return a + b"
  },
  {
    "id": "CODE_HP5_13",
    "topic": "Hàm kiểm tra số chẵn",
    "type": "code",
    "question": "Hãy viết hàm kiem_tra_chan(n) nhận vào số n và trả về True nếu n chia hết cho 2 (n % 2 == 0), ngược lại trả về False.",
    "initial_code": "# Viết hàm kiem_tra_chan tại đây:\n",
    "sample_solution": "def kiem_tra_chan(n):\n    return n % 2 == 0",
    "required_keywords": [
      "def",
      "kiem_tra_chan",
      "n",
      "%",
      "2",
      "return"
    ],
    "explanation": "Cú pháp:\ndef kiem_tra_chan(n):\n    return n % 2 == 0"
  },
  {
    "id": "CODE_HP5_14",
    "topic": "Tìm số lớn hơn",
    "type": "code",
    "question": "Hãy viết hàm tim_max(a, b) trả về giá trị số lớn hơn giữa a và b (sử dụng if-else hoặc hàm max).",
    "initial_code": "# Viết hàm tim_max tại đây:\n",
    "sample_solution": "def tim_max(a, b):\n    if a > b:\n        return a\n    return b",
    "required_keywords": [
      "def",
      "tim_max",
      "a",
      "b",
      "return"
    ],
    "explanation": "Cú pháp:\ndef tim_max(a, b):\n    return a if a > b else b"
  },
  {
    "id": "CODE_HP5_15",
    "topic": "Định dạng f-string",
    "type": "code",
    "question": "Cho biến name = 'Nam' và score = 9. Hãy viết cú pháp f-string gán vào biến msg chuỗi có định dạng: 'Học sinh Nam đạt 9 điểm'.",
    "initial_code": "name = 'Nam'\nscore = 9\n# Gán f-string vào biến msg:\n",
    "sample_solution": "msg = f'Học sinh {name} đạt {score} điểm'",
    "required_keywords": [
      "msg",
      "f'",
      "{name}",
      "{score}"
    ],
    "explanation": "Cú pháp f-string: msg = f'Học sinh {name} đạt {score} điểm'"
  },
  {
    "id": "CODE_HP6_01",
    "topic": "Import thư viện Tkinter",
    "type": "code",
    "question": "Hãy viết câu lệnh import thư viện tkinter với bí danh viết tắt là tk.",
    "initial_code": "# Viết câu lệnh import tại đây:\n",
    "sample_solution": "import tkinter as tk",
    "required_keywords": [
      "import",
      "tkinter",
      "as",
      "tk"
    ],
    "explanation": "Cú pháp chuẩn: import tkinter as tk"
  },
  {
    "id": "CODE_HP6_02",
    "topic": "Khởi tạo cửa sổ Tkinter",
    "type": "code",
    "question": "Hãy viết câu lệnh khởi tạo cửa sổ chính Tkinter và gán vào biến root.",
    "initial_code": "import tkinter as tk\n# Khởi tạo cửa sổ chính root tại đây:\n",
    "sample_solution": "root = tk.Tk()",
    "required_keywords": [
      "root",
      "tk.Tk()"
    ],
    "explanation": "Cú pháp khởi tạo cửa sổ: root = tk.Tk()"
  },
  {
    "id": "CODE_HP6_03",
    "topic": "Đặt tiêu đề cửa sổ (title)",
    "type": "code",
    "question": "Cho cửa sổ root. Hãy viết câu lệnh đặt tiêu đề cho cửa sổ là: 'Teky Quiz App'.",
    "initial_code": "import tkinter as tk\nroot = tk.Tk()\n# Đặt tiêu đề cho cửa sổ tại đây:\n",
    "sample_solution": "root.title('Teky Quiz App')",
    "required_keywords": [
      "root.title",
      "Teky Quiz App"
    ],
    "explanation": "Cú pháp: root.title('Teky Quiz App')"
  },
  {
    "id": "CODE_HP6_04",
    "topic": "Kích thước cửa sổ (geometry)",
    "type": "code",
    "question": "Cho cửa sổ root. Hãy viết câu lệnh thiết lập kích thước cửa sổ rộng 400 pixel và cao 300 pixel bằng phương thức geometry().",
    "initial_code": "import tkinter as tk\nroot = tk.Tk()\n# Thiết lập kích thước 400x300:\n",
    "sample_solution": "root.geometry('400x300')",
    "required_keywords": [
      "root.geometry",
      "400x300"
    ],
    "explanation": "Cú pháp: root.geometry('400x300')"
  },
  {
    "id": "CODE_HP6_05",
    "topic": "Vòng lặp sự kiện mainloop",
    "type": "code",
    "question": "Cho cửa sổ root. Hãy viết câu lệnh gọi vòng lặp sự kiện mainloop() để hiển thị và giữ cho cửa sổ hoạt động.",
    "initial_code": "import tkinter as tk\nroot = tk.Tk()\n# Gọi mainloop tại đây:\n",
    "sample_solution": "root.mainloop()",
    "required_keywords": [
      "root.mainloop()"
    ],
    "explanation": "Cú pháp: root.mainloop()"
  },
  {
    "id": "CODE_HP6_06",
    "topic": "Tạo widget Label",
    "type": "code",
    "question": "Hãy viết câu lệnh tạo một nhãn Label gắn vào root với dòng chữ 'Xin chào!' và gán vào biến lbl.",
    "initial_code": "import tkinter as tk\nroot = tk.Tk()\n# Tạo Label lbl tại đây:\n",
    "sample_solution": "lbl = tk.Label(root, text='Xin chào!')",
    "required_keywords": [
      "lbl",
      "tk.Label",
      "root",
      "text",
      "Xin chào!"
    ],
    "explanation": "Cú pháp: lbl = tk.Label(root, text='Xin chào!')"
  },
  {
    "id": "CODE_HP6_07",
    "topic": "Hiển thị widget bằng pack()",
    "type": "code",
    "question": "Cho nhãn lbl đã tạo. Hãy viết câu lệnh hiển thị nhãn lbl lên cửa sổ bằng phương thức pack().",
    "initial_code": "lbl = tk.Label(root, text='Hello')\n# Hiển thị lbl bằng pack():\n",
    "sample_solution": "lbl.pack()",
    "required_keywords": [
      "lbl.pack()"
    ],
    "explanation": "Cú pháp: lbl.pack()"
  },
  {
    "id": "CODE_HP6_08",
    "topic": "Tạo widget Entry",
    "type": "code",
    "question": "Hãy viết câu lệnh tạo một ô nhập văn bản Entry gắn vào root và gán vào biến entry.",
    "initial_code": "import tkinter as tk\nroot = tk.Tk()\n# Tạo Entry entry tại đây:\n",
    "sample_solution": "entry = tk.Entry(root)",
    "required_keywords": [
      "entry",
      "tk.Entry",
      "root"
    ],
    "explanation": "Cú pháp: entry = tk.Entry(root)"
  },
  {
    "id": "CODE_HP6_09",
    "topic": "Lấy dữ liệu từ Entry bằng get()",
    "type": "code",
    "question": "Cho ô nhập liệu entry. Hãy viết câu lệnh lấy dữ liệu văn bản từ ô entry bằng phương thức get() và gán vào biến val.",
    "initial_code": "# Lấy giá trị từ entry gán vào biến val:\n",
    "sample_solution": "val = entry.get()",
    "required_keywords": [
      "val",
      "entry.get()"
    ],
    "explanation": "Cú pháp: val = entry.get()"
  },
  {
    "id": "CODE_HP6_10",
    "topic": "Xóa dữ liệu trong Entry",
    "type": "code",
    "question": "Cho ô nhập liệu entry. Hãy viết câu lệnh xóa toàn bộ nội dung trong ô entry từ chỉ số 0 đến tk.END bằng phương thức delete().",
    "initial_code": "# Xóa toàn bộ nội dung trong ô entry:\n",
    "sample_solution": "entry.delete(0, tk.END)",
    "required_keywords": [
      "entry.delete",
      "0",
      "tk.END"
    ],
    "explanation": "Cú pháp: entry.delete(0, tk.END)"
  },
  {
    "id": "CODE_HP6_11",
    "topic": "Tạo nút bấm Button với command",
    "type": "code",
    "question": "Hãy viết câu lệnh tạo một nút Button gắn vào root, hiển thị chữ 'Gửi' và gọi hàm xu_ly khi click (sử dụng thuộc tính command). Gán nút vào biến btn.",
    "initial_code": "def xu_ly():\n    pass\n# Tạo Button btn tại đây:\n",
    "sample_solution": "btn = tk.Button(root, text='Gửi', command=xu_ly)",
    "required_keywords": [
      "btn",
      "tk.Button",
      "root",
      "text",
      "Gửi",
      "command",
      "xu_ly"
    ],
    "explanation": "Cú pháp: btn = tk.Button(root, text='Gửi', command=xu_ly)"
  },
  {
    "id": "CODE_HP6_12",
    "topic": "Bố cục grid(row, column)",
    "type": "code",
    "question": "Cho widget btn. Hãy viết câu lệnh đặt btn vào lưới tọa độ tại hàng 1 (row=1) và cột 0 (column=0) bằng phương thức grid().",
    "initial_code": "# Đặt btn tại row 1, column 0:\n",
    "sample_solution": "btn.grid(row=1, column=0)",
    "required_keywords": [
      "btn.grid",
      "row=1",
      "column=0"
    ],
    "explanation": "Cú pháp: btn.grid(row=1, column=0)"
  },
  {
    "id": "CODE_HP6_13",
    "topic": "Import messagebox",
    "type": "code",
    "question": "Hãy viết câu lệnh import submodule messagebox từ thư viện tkinter.",
    "initial_code": "# Import submodule messagebox tại đây:\n",
    "sample_solution": "from tkinter import messagebox",
    "required_keywords": [
      "from",
      "tkinter",
      "import",
      "messagebox"
    ],
    "explanation": "Cú pháp: from tkinter import messagebox"
  },
  {
    "id": "CODE_HP6_14",
    "topic": "Hộp thoại showinfo",
    "type": "code",
    "question": "Hãy viết câu lệnh gọi hàm messagebox.showinfo() để hiển thị thông báo có tiêu đề 'Thành công' và nội dung 'Đã hoàn thành!'.",
    "initial_code": "from tkinter import messagebox\n# Hiển thị thông báo showinfo:\n",
    "sample_solution": "messagebox.showinfo('Thành công', 'Đã hoàn thành!')",
    "required_keywords": [
      "messagebox.showinfo",
      "Thành công",
      "Đã hoàn thành!"
    ],
    "explanation": "Cú pháp: messagebox.showinfo('Thành công', 'Đã hoàn thành!')"
  },
  {
    "id": "CODE_HP6_15",
    "topic": "Chèn phần tử vào Listbox",
    "type": "code",
    "question": "Cho Listbox lb. Hãy viết câu lệnh sử dụng phương thức insert() để chèn chuỗi 'Học Python' vào cuối danh sách (sử dụng vị trí tk.END).",
    "initial_code": "import tkinter as tk\nlb = tk.Listbox(root)\n# Chèn 'Học Python' vào cuối Listbox lb:\n",
    "sample_solution": "lb.insert(tk.END, 'Học Python')",
    "required_keywords": [
      "lb.insert",
      "tk.END",
      "Học Python"
    ],
    "explanation": "Cú pháp: lb.insert(tk.END, 'Học Python')"
  }
];
if (typeof window !== "undefined") window.ALL_QUESTIONS = ALL_QUESTIONS;
if (typeof module !== "undefined") module.exports = ALL_QUESTIONS;
