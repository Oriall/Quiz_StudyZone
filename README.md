# 🎓 Multi-Subject Quiz App with Leaderboard

Ứng dụng web nhỏ gọn giúp học sinh luyện tập **trắc nghiệm và tự luận** đa môn học (Tin học, Tiếng Anh, Toán, Vật lý, **Tiếng Nhật**) với câu hỏi được **tự động sinh bởi Gemini AI** và **bảng xếp hạng toàn cầu**.

![Preview](./img/minhhoa2.png)

---

## 🚀 Tính năng nổi bật

### 📚 **Đa dạng môn học**
- ✅ **Tin học lớp 12**: CSDL, Python, C++, HTML, Web, Mạng
- ✅ **Tiếng Anh**: Từ vựng theo chủ đề
- ✅ **Toán lớp 12**: Theo chương trình mới 2018
- ✅ **Vật lý lớp 12**: Các chủ đề cơ bản
- ✅ **Tiếng Nhật sơ cấp**: Minna no Nihongo (Bài 1-4)

### 🎯 **Hai chế độ câu hỏi**
- **📝 Trắc nghiệm**: 4 lựa chọn, chọn đáp án đúng
- **✍️ Tự luận**: Nhập câu trả lời bằng Hiragana (Tiếng Nhật)
- Hệ thống **luân phiên ngẫu nhiên** giữa 2 chế độ (riêng môn Tiếng Nhật)

### ⚡ **Hệ thống điểm & Streak**
- 🏅 **Điểm**: +1 mỗi câu đúng
- 🔥 **Streak**: Chuỗi trả lời đúng liên tiếp
- 🎊 **Milestone**: Thông báo đặc biệt tại streak 5, 10, 20, 50...
- 💔 **Reset streak**: Khi trả lời sai hoặc hết giờ

### 🏆 **Bảng xếp hạng toàn cầu**
- 👥 Top 10 người chơi với streak cao nhất
- 🥇🥈🥉 Huy chương cho top 3
- 💾 Tự động lưu kết quả khi đạt milestone
- 🌐 Đồng bộ dữ liệu trên cloud (JSONBin.io)

### ⏱️ **Thời gian linh hoạt**
- **10 giây**: Tin học, Tiếng Anh
- **30 giây**: Tiếng Nhật (tự luận)
- **60 giây**: Toán, Vật lý, Tiếng Nhật (trắc nghiệm)

### 🎨 **Giao diện đẹp mắt**
- Nền động toàn màn hình
- Animation mượt mà
- Responsive design
- Popup đẹp với gradient hiện đại

---

## 🛠 Công nghệ sử dụng

| Công nghệ | Vai trò |
|----------|---------|
| `HTML5` | Giao diện chính |
| `CSS3` | Thiết kế responsive, animation, gradient |
| `JavaScript (ES6+)` | Logic game, timer, API integration |
| **`Gemini API`** | Sinh câu hỏi AI cho Tin học, Anh, Toán, Vật lý |
| **`JSONBin.io API`** | Lưu trữ bảng xếp hạng trên cloud |
| `LocalStorage` | Cache câu hỏi để tránh lặp lại |

---

## 📂 Cấu trúc thư mục

```
/project-root
│
├── index.html              # Trang chính
├── style.css               # CSS cho giao diện
├── script.js               # Logic game chính
├── leaderboard.js          # Hệ thống bảng xếp hạng
├── data.txt                # Database từ vựng Tiếng Nhật
├── img/
│   ├── minhhoa2.png        # Hình minh họa game
│   └── chon_mon.png        # Popup chọn môn
└── README.md               # File này
```

---

## 🧠 Hướng dẫn sử dụng

### **Bước 1: Nhập tên**
- Khi vào trang, nhập tên của bạn (tối đa 20 ký tự)
- Tên này sẽ hiển thị trên bảng xếp hạng

### **Bước 2: Chọn môn học**
- Click vào môn học muốn luyện tập
- Hệ thống sẽ sinh câu hỏi phù hợp

### **Bước 3: Trả lời câu hỏi**

#### 📝 **Chế độ trắc nghiệm:**
- Đọc câu hỏi và 4 lựa chọn
- Click vào đáp án bạn cho là đúng
- ✅ **Đúng**: Nút chuyển xanh, +1 điểm, +1 streak
- ❌ **Sai**: Nút chuyển đỏ, hiện đáp án đúng, reset streak

#### ✍️ **Chế độ tự luận (Tiếng Nhật):**
- Nhập từ vựng Hiragana vào ô input
- Nhấn Enter hoặc click "Trả lời"
- ✅ **Đúng**: +1 điểm, +1 streak
- ❌ **Sai**: Hiển thị đáp án đúng, reset streak

### **Bước 4: Xem giải thích**
- Popup tự động hiện giải thích đáp án
- Click "Đóng" để tiếp tục

### **Bước 5: Câu hỏi mới**
- Click "Reload Now" để nhận câu hỏi mới
- Hoặc chờ popup giải thích đóng

### **Bước 6: Xem bảng xếp hạng**
- Click nút **"🏆 Bảng Xếp Hạng"** (góc dưới phải)
- Xem top 10 người chơi
- Bạn sẽ được highlight màu vàng

### **Bước 7: Lưu kết quả**
- Tự động lưu khi:
  - ✅ Đạt streak 5, 10, 15, 20...
  - ✅ Mất streak (trả lời sai)
  - ✅ Rời trang web
- Hoặc click nút **"💾 Lưu"** (góc dưới trái) để lưu thủ công

---

## 🔑 Hướng dẫn Setup

### **1. Setup Gemini API (cho Tin học, Anh, Toán, Vật lý)**

#### **Bước 1:** Lấy API Key
1. Truy cập: https://makersuite.google.com/app/apikey
2. Click **"Create API Key"**
3. Copy API Key

#### **Bước 2:** Thêm vào code
Mở file `script.js`, tìm dòng:
```javascript
fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_KEY", {
```
Thay `YOUR_KEY` bằng API Key của bạn.

---

### **2. Setup JSONBin.io (cho Bảng xếp hạng)**

#### **Bước 1:** Đăng ký JSONBin
1. Truy cập: https://jsonbin.io
2. Đăng ký tài khoản FREE

#### **Bước 2:** Tạo Bin
1. Vào Dashboard → **"Create Bin"**
2. Name: `quiz-leaderboard`
3. Content: 
```json
{
  "players": []
}
```
4. Click **"Create"**
5. Copy **Bin ID** từ URL (ví dụ: `690bc92143b1c97be99b7118`)

#### **Bước 3:** Lấy API Key
1. Click Avatar → **"API Keys"**
2. Copy **Access Key** (dạng `$2b$10$...`)

#### **Bước 4:** Thêm vào code
Mở file `leaderboard.js`, tìm:
```javascript
const JSONBIN_CONFIG = {
  binId: "YOUR_BIN_ID_HERE",
  accessKey: "YOUR_ACCESS_KEY_HERE",
  masterKey: "YOUR_ACCESS_KEY_HERE"
};
```
Thay bằng Bin ID và Access Key của bạn.

#### **Bước 5:** Test
1. Mở `index.html` trong trình duyệt
2. F12 → Console
3. Chơi game và kiểm tra log
4. Xem bảng xếp hạng có data không

---

## 🖼 Hình ảnh minh họa

| Nhập tên | Chọn môn học | Trắc nghiệm | Tự luận |
|----------|--------------|-------------|---------|
| ![Name](./img/name_input.png) | ![Popup](./img/chon_mon.png) | ![Quiz](./img/minhhoa2.png) | ![Essay](./img/essay_mode.png) |

| Bảng xếp hạng | Milestone | Giải thích |
|---------------|-----------|------------|
| ![Leaderboard](./img/leaderboard.png) | ![Milestone](./img/milestone.png) | ![Explain](./img/explain.png) |

---

## 📥 Cài đặt & Chạy thử

### **Option 1: Chạy local**
```bash
# Clone dự án về máy
git clone https://github.com/Oriall/Quiz_StudyZone.git

# Mở thư mục
cd Quiz_StudyZone

# Mở file index.html bằng trình duyệt
```

### **Option 2: Deploy lên GitHub Pages**
1. Fork repo này
2. Vào Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` → Folder: `/ (root)`
5. Click **Save**
6. Truy cập: `https://yourusername.github.io/Quiz_StudyZone`

> ⚠️ **Lưu ý:** 
> - API yêu cầu kết nối Internet
> - Cần setup Gemini API Key và JSONBin API Key trước

---

## 🎮 Tính năng đặc biệt

### **🔥 Hệ thống Streak**
- Mỗi câu đúng liên tiếp sẽ tăng streak
- Streak càng cao → thành tích càng tốt
- Top streak được lưu vào bảng xếp hạng

### **🏆 Milestone Rewards**
- **Streak 5**: "🔥 Streak x5! Bạn đang rất tốt!"
- **Streak 10**: "🔥🔥 Streak x10! Xuất sắc!"
- **Streak 20**: "🔥🔥🔥 Streak x20! Bạn là cao thủ!"
- **Streak 50+**: "🏆 Không thể tin được!"

### **📚 Database Tiếng Nhật**
- 99 từ vựng từ Minna no Nihongo (Bài 1-4)
- Bao gồm: Hiragana, Kanji, Nghĩa tiếng Việt
- Không cần API, load cực nhanh
- Không bị lặp lại trong 50 câu gần nhất

### **💾 Auto-save thông minh**
- Lưu mỗi 5 streak
- Lưu khi mất streak
- Lưu khi rời trang
- Không lo mất dữ liệu

---

## 🐛 Troubleshooting

### **❌ Câu hỏi không load (Gemini API)**
- Kiểm tra API Key đã đúng chưa
- Xem Console (F12) có lỗi gì
- Kiểm tra kết nối mạng

### **❌ Bảng xếp hạng trống**
- Mở Console (F12) → xem log
- Kiểm tra JSONBin API Key
- Click nút "💾 Lưu" để lưu thủ công
- Xem hướng dẫn debug trong `debug_guide.md`

### **❌ Streak không tăng**
- Kiểm tra có nhập tên chưa
- Xem Console có log gì
- Refresh trang và thử lại

### **❌ Leaderboard không cập nhật**
- Kiểm tra Bin ID và Access Key
- Vào JSONBin Dashboard xem có data không
- Test bằng file `jsonbin_tester.html`

---

## 🆕 Changelog

### **Version 2.0** (Latest)
- ✨ Thêm môn Tiếng Nhật với database 99 từ
- ✨ Thêm chế độ tự luận
- ✨ Hệ thống điểm và streak
- ✨ Bảng xếp hạng toàn cầu
- ✨ Milestone notifications
- ✨ Auto-save thông minh
- 🐛 Fix lỗi lặp lại câu hỏi
- 🎨 Cải thiện UI/UX

### **Version 1.0**
- Trắc nghiệm 4 môn: Tin, Anh, Toán, Lý
- Gemini API integration
- Timer đếm ngược
- Giao diện cơ bản

---

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy:
1. Fork repo này
2. Tạo branch mới: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add some AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Tạo Pull Request

---

## 📝 License

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

---

## 📞 Liên hệ & Hỗ trợ

- **Tác giả**: Oriall
- **Email**: [vokhanhtoannghithu@gmail.com](mailto:vokhanhtoannghithu@gmail.com)
- **GitHub**: [github.com/oriall](https://github.com/oriall)
- **Issues**: [GitHub Issues](https://github.com/Oriall/Quiz_StudyZone/issues)

---

## 🌟 Credits

- **Gemini API**: Google AI
- **JSONBin.io**: Cloud database service
- **Minna no Nihongo**: Từ vựng Tiếng Nhật
- **Inspiration**: Các app học tập hiện đại

---

## 🎯 Roadmap

### **Đang phát triển:**
- [ ] Thêm nhiều bài Tiếng Nhật (Bài 5-25)
- [ ] Chế độ luyện tập offline
- [ ] Thống kê chi tiết (biểu đồ tiến trình)
- [ ] Dark mode
- [ ] PWA (Progressive Web App)
- [ ] Multiplayer mode
- [ ] Achievement system

### **Ý tưởng tương lai:**
- [ ] Thêm môn Hóa, Sinh, Sử, Địa
- [ ] AI phân tích điểm yếu
- [ ] Gợi ý bài tập cá nhân hóa
- [ ] Export kết quả PDF
- [ ] Social sharing

---

## 💖 Cảm ơn

Cảm ơn bạn đã sử dụng **Multi-Subject Quiz App**! Nếu thấy hữu ích, hãy cho repo một ⭐ nhé!

---

© 2025 Multi-Subject Quiz App. Made with ❤️ by Oriall.