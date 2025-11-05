// ==================== DATA TỪ VỰNG ====================
const vocabularyData = [
  // Bài 1
  { id: 1, hiragana: "わたし", kanji: "私", meaning: "Tôi" },
  { id: 2, hiragana: "わたしたち", kanji: "私たち", meaning: "Chúng tôi" },
  { id: 3, hiragana: "あなた", kanji: "", meaning: "Anh/chị, ông/bà, bạn (ngôi thứ 2 số ít)" },
  { id: 4, hiragana: "あのひと", kanji: "あの人", meaning: "Người kia" },
  { id: 5, hiragana: "あのかた", kanji: "あの方", meaning: "Vị này Lịch sự tương đương với あのひと" },
  { id: 6, hiragana: "みなさん", kanji: "", meaning: "Các bạn, các anh, các chị, mọi người" },
  { id: 7, hiragana: "～さん", kanji: "", meaning: "Anh ～, Chị ～, Ông ～, Bà ～ (cách gọi người khác 1 cách lịch sự)" },
  { id: 8, hiragana: "～ちゃん", kanji: "", meaning: "Bé ( dùng cho nữ) hoặc gọi thân mật cho trẻ con ( cả nam lẫn nữ)" },
  { id: 9, hiragana: "～くん", kanji: "", meaning: "Bé (dùng cho nam) hoặc gọi thân mật" },
  { id: 10, hiragana: "～じん", kanji: "～人", meaning: "Người nước ～" },
  { id: 11, hiragana: "せんせい", kanji: "先生", meaning: "Giáo viên" },
  { id: 12, hiragana: "きょうし", kanji: "教師", meaning: "Giáo viên ( dùng để nói đến nghề nghiệp)" },
  { id: 13, hiragana: "がくせい", kanji: "学生", meaning: "học sinh, sinh viên" },
  { id: 14, hiragana: "かいしゃいん", kanji: "会社員", meaning: "nhân viên công ty" },
  { id: 15, hiragana: "～しゃいん", kanji: "社員", meaning: "nhân viên công ty ～" },
  { id: 16, hiragana: "ぎんこういん", kanji: "銀行員", meaning: "nhân viên ngân hàng" },
  { id: 17, hiragana: "いしゃ", kanji: "医者", meaning: "bác sĩ" },
  { id: 18, hiragana: "けんきゅうしゃ", kanji: "研究者", meaning: "nhà nghiên cứu" },
  { id: 19, hiragana: "エンジニア", kanji: "", meaning: "kỹ sư" },
  { id: 20, hiragana: "だいがく", kanji: "大学", meaning: "trường đại học" },
  { id: 21, hiragana: "びょういん", kanji: "病院", meaning: "bệnh viện" },
  { id: 22, hiragana: "でんき", kanji: "電気", meaning: "Điện, đèn điện" },
  { id: 23, hiragana: "だれ（どなた）", kanji: "誰", meaning: "ai (ngài nào, vị nào)" },
  { id: 24, hiragana: "―さい", kanji: "～歳", meaning: "tuổi" },
  { id: 25, hiragana: "なんさい", kanji: "何歳", meaning: "mấy tuổi" },
  { id: 26, hiragana: "はい", kanji: "", meaning: "vâng" },
  { id: 27, hiragana: "いいえ", kanji: "", meaning: "không" },
  { id: 28, hiragana: "しつれいですが", kanji: "失礼ですが", meaning: "Xin lỗi ( khi muốn nhờ ai việc gì đó)" },
  { id: 29, hiragana: "おなまえは？", kanji: "お名前は", meaning: "Bạn tên gì?" },
  { id: 30, hiragana: "はじめまして。", kanji: "初めて", meaning: "chào lần đầu gặp nhau" },
  { id: 31, hiragana: "どうぞよろしく[おねがいします]。", kanji: "どうぞよろしく「お願いします」。", meaning: "rất hân hạnh được làm quen" },
  { id: 32, hiragana: "こちらは～さんです。", kanji: "", meaning: "đây là ngài" },
  { id: 33, hiragana: "～からきました。", kanji: "～から来ました", meaning: "đến từ ～" },
  { id: 34, hiragana: "アメリカ", kanji: "", meaning: "Mỹ" },
  { id: 35, hiragana: "イギリス", kanji: "", meaning: "Anh" },
  { id: 36, hiragana: "インド", kanji: "", meaning: "Ấn Độ" },
  { id: 37, hiragana: "インドネシア", kanji: "", meaning: "Indonesia" },
  { id: 38, hiragana: "かんこく", kanji: "韓国", meaning: "Hàn quốc" },
  { id: 39, hiragana: "タイ", kanji: "", meaning: "Thái Lan" },
  { id: 40, hiragana: "ちゅうごく", kanji: "中国", meaning: "Trung Quốc" },
  { id: 41, hiragana: "ドイツ", kanji: "", meaning: "Đức" },
  { id: 42, hiragana: "にほん", kanji: "日本", meaning: "Nhật" },
  { id: 43, hiragana: "フランス", kanji: "", meaning: "Pháp" },
  { id: 44, hiragana: "ブラジル", kanji: "", meaning: "Brazil" },

  // Bài 2
  { id: 45, hiragana: "これ", kanji: "", meaning: "Cái này, đây (vật ở gần người nói)" },
  { id: 46, hiragana: "それ", kanji: "", meaning: "Cái đó, đó (vật ở gần người nghe)" },
  { id: 47, hiragana: "あれ", kanji: "", meaning: "Cái kia, kia (vật ở xa cả người nói và người nghe)" },
  { id: 48, hiragana: "この~", kanji: "", meaning: "~ này" },
  { id: 49, hiragana: "その~", kanji: "", meaning: "~ đó" },
  { id: 50, hiragana: "あの~", kanji: "", meaning: "~ kia" },
  { id: 51, hiragana: "ほん", kanji: "本", meaning: "Sách" },
  { id: 52, hiragana: "じしょ", kanji: "辞書", meaning: "Từ điển" },
  { id: 53, hiragana: "ざっし", kanji: "雑誌", meaning: "Tạp chí" },
  { id: 54, hiragana: "しんぶん", kanji: "新聞", meaning: "Báo" },
  { id: 55, hiragana: "ノート", kanji: "", meaning: "Vở" },
  { id: 56, hiragana: "てちょう", kanji: "手帳", meaning: "Sổ tay" },
  { id: 57, hiragana: "めいし", kanji: "名詞", meaning: "Danh thiếp" },
  { id: 58, hiragana: "カード", kanji: "", meaning: "Thẻ, cạc" },
  { id: 59, hiragana: "テレホンカード", kanji: "", meaning: "Thẻ điện thoại" },
  { id: 60, hiragana: "えんぴつ", kanji: "鉛筆", meaning: "Bút chì" },
  { id: 61, hiragana: "ボールペン", kanji: "", meaning: "Bút bi" },
  { id: 62, hiragana: "シャープペンシル", kanji: "", meaning: "Bút chì kim, bút chì bấm" },
  { id: 63, hiragana: "かぎ", kanji: "", meaning: "Chìa khóa" },
  { id: 64, hiragana: "とけい", kanji: "時計", meaning: "Đồng hồ" },
  { id: 65, hiragana: "かさ", kanji: "傘", meaning: "ô, dù" },
  { id: 66, hiragana: "かばん", kanji: "", meaning: "Cặp sách, túi sách" },
  { id: 67, hiragana: "[カセット] テーブ", kanji: "", meaning: "Băng [cát-xét]" },
  { id: 68, hiragana: "テープレコーダー", kanji: "", meaning: "Máy ghi âm" },
  { id: 69, hiragana: "テレビ", kanji: "", meaning: "Tivi" },
  { id: 70, hiragana: "ラジオ", kanji: "", meaning: "Radio" },
  { id: 71, hiragana: "カメラ", kanji: "", meaning: "Máy ảnh" },
  { id: 72, hiragana: "コンピュータ", kanji: "", meaning: "Máy vi tính" },
  { id: 73, hiragana: "くるま", kanji: "自動車", meaning: "Ô tô, xe hơi" },
  { id: 74, hiragana: "つくえ", kanji: "机", meaning: "Cái bàn" },
  { id: 75, hiragana: "いす", kanji: "", meaning: "Ghế" },
  { id: 76, hiragana: "チョコレート", kanji: "", meaning: "Chocolate" },
  { id: 77, hiragana: "コーヒー", kanji: "", meaning: "Cà phê" },
  { id: 78, hiragana: "えいご", kanji: "英語", meaning: "Tiếng Anh" },
  { id: 79, hiragana: "にほんご", kanji: "日本語", meaning: "Tiếng Nhật" },
  { id: 80, hiragana: "∼ご", kanji: "∼語", meaning: "Tiếng~" },
  { id: 81, hiragana: "なん", kanji: "何", meaning: "Cái gì" },
  { id: 82, hiragana: "そうです", kanji: "", meaning: "Đúng vậy" },
  { id: 83, hiragana: "ちがいます。", kanji: "違います。", meaning: "Nhầm rồi" },
  { id: 84, hiragana: "そうですか。", kanji: "", meaning: "Thế à?" },
  { id: 85, hiragana: "あのう", kanji: "", meaning: "À…(được sử dụng để thể hiện sự do dự)" },
  { id: 86, hiragana: "ほんのきもちです", kanji: "ほんの気持ちです", meaning: "Đây là chút quà nhỏ của tôi" },
  { id: 87, hiragana: "どうぞ", kanji: "", meaning: "Xin mời" },
  { id: 88, hiragana: "どうも", kanji: "", meaning: "Cảm ơn" },
  { id: 89, hiragana: "[どうも] ありがとう[ございます]", kanji: "", meaning: "Cảm ơn nhiều" },
  { id: 90, hiragana: "これから おせわになります", kanji: "これから お世話になります", meaning: "Từ này mong được anh/chị giúp đỡ" },
  { id: 91, hiragana: "こちらこそ よろしく", kanji: "", meaning: "Chính tôi mới mong được anh/chị giúp đỡ" },

  // Bài 3
  { id: 92, hiragana: "ここ", kanji: "", meaning: "chỗ này, đây" },
  { id: 93, hiragana: "そこ", kanji: "", meaning: "chỗ đó, đó" },
  { id: 94, hiragana: "あそこ", kanji: "", meaning: "chỗ kia, kia" },
  { id: 95, hiragana: "どこ", kanji: "", meaning: "chỗ nào, đâu" },
  { id: 96, hiragana: "こちら", kanji: "", meaning: "phía này, đằng này, chỗ này, đây (là cách nói lịch sự của ここ)" },
  { id: 97, hiragana: "そちら", kanji: "", meaning: "phía đó, đằng đó, chỗ đó, đó (là cách nói lịch sự của そこ)" },
  { id: 98, hiragana: "あちら", kanji: "", meaning: "phía kia, đằng kia, chỗ kia, kia (cách nói lịch sự của あそこ)" },
  { id: 99, hiragana: "どちら", kanji: "", meaning: "phía nào, đằng nào, chỗ nào, đâu (cách nói lịch sự của どこ )" },
  { id: 100, hiragana: "きょうしつ", kanji: "教室", meaning: "lớp học, phòng học" },
  { id: 101, hiragana: "しょくどう", kanji: "食堂", meaning: "nhà ăn" },
  { id: 102, hiragana: "じむしょ", kanji: "事務所", meaning: "văn phòng" },
  { id: 103, hiragana: "かいぎしつ", kanji: "会議室", meaning: "phòng họp" },
  { id: 104, hiragana: "うけつけ", kanji: "受付", meaning: "bộ phận tiếp tân, phòng thường trực, lễ tân" },
  { id: 105, hiragana: "ロビー", kanji: "", meaning: "hành lang, đại sảnh" },
  { id: 106, hiragana: "へや", kanji: "部屋", meaning: "căn phòng" },
  { id: 107, hiragana: "トイレ（おてあらい）", kanji: "(お手洗い）", meaning: "nhà vệ sinh, phòng vệ sinh, toa-lét" },
  { id: 108, hiragana: "かいだん", kanji: "階段", meaning: "cầu thang" },
  { id: 109, hiragana: "エレベーター", kanji: "", meaning: "thang máy" },
  { id: 110, hiragana: "エスカレーター", kanji: "", meaning: "thang cuốn" },
  { id: 111, hiragana: "[お]くに", kanji: "[お]国", meaning: "đất nước" },
  { id: 112, hiragana: "かいしゃ", kanji: "会社", meaning: "công ty" },
  { id: 113, hiragana: "うち", kanji: "", meaning: "nhà" },
  { id: 114, hiragana: "でんわ", kanji: "電話", meaning: "máy điện thoại, điện thoại" },
  { id: 115, hiragana: "くつ", kanji: "靴", meaning: "giày" },
  { id: 116, hiragana: "ネクタイ", kanji: "", meaning: "cà vạt" },
  { id: 117, hiragana: "ワイン", kanji: "", meaning: "rượu vang" },
  { id: 118, hiragana: "たばこ", kanji: "", meaning: "thuốc lá" },
  { id: 119, hiragana: "うりば", kanji: "売り場", meaning: "quầy bán (trong một cửa hàng bách hóa)" },
  { id: 120, hiragana: "ちか", kanji: "地下", meaning: "tầng hầm, dưới mặt đất" },
  { id: 121, hiragana: "―かい（－がい）", kanji: "－階", meaning: "tầng thứ –" },
  { id: 122, hiragana: "なんがい", kanji: "何階", meaning: "tầng mấy" },
  { id: 123, hiragana: "―えん", kanji: "―円", meaning: "yên" },
  { id: 124, hiragana: "いくら", kanji: "", meaning: "bao nhiêu tiền" },
  { id: 125, hiragana: "ひゃく", kanji: "百", meaning: "trăm" },
  { id: 126, hiragana: "せん", kanji: "千", meaning: "nghìn" },
  { id: 127, hiragana: "まん", kanji: "万", meaning: "mười nghìn, vạn" },
  { id: 128, hiragana: "すみません", kanji: "", meaning: "Xin lỗi" },
  { id: 129, hiragana: "～でございます", kanji: "", meaning: "(cách nói lịch sự của 「です」)" },
  { id: 130, hiragana: "みせてください", kanji: "[～を]見せてください", meaning: "cho tôi xem [~]" },
  { id: 131, hiragana: "じゃ", kanji: "", meaning: "Thế thì, vậy thì" },
  { id: 132, hiragana: "[～を]ください", kanji: "", meaning: "cho tôi [~]" },
  { id: 133, hiragana: "しんおおさか", kanji: "新大阪", meaning: "tên một nhà ga ở Osaka" },
  { id: 134, hiragana: "イタリア", kanji: "", meaning: "Ý" },
  { id: 135, hiragana: "スイス", kanji: "", meaning: "Thụy Sĩ" },

  // Bài 4
  { id: 136, hiragana: "おきます", kanji: "", meaning: "thức dậy" },
  { id: 137, hiragana: "ねます", kanji: "寝ます", meaning: "ngủ" },
  { id: 138, hiragana: "はたらきます", kanji: "働きます", meaning: "làm việc" },
  { id: 139, hiragana: "やすみます", kanji: "休みます", meaning: "nghỉ ngơi" },
  { id: 140, hiragana: "べんきょうします", kanji: "勉強します", meaning: "học tập" },
  { id: 141, hiragana: "おわります", kanji: "終わります", meaning: "kết thúc" },
  { id: 142, hiragana: "デパート", kanji: "", meaning: "cửa hàng bách hóa" },
  { id: 143, hiragana: "ぎんこう", kanji: "銀行", meaning: "ngân hàng" },
  { id: 144, hiragana: "ゆうびんきょく", kanji: "郵便局", meaning: "bưu điện" },
  { id: 145, hiragana: "としょかん", kanji: "図書館", meaning: "thư viện" },
  { id: 146, hiragana: "びじゅつかん", kanji: "美術館", meaning: "viện bảo tàng" },
  { id: 147, hiragana: "でんわばんごう", kanji: "電話番号", meaning: "số điện thoại" },
  { id: 148, hiragana: "なんばん", kanji: "何番", meaning: "số mấy" },
  { id: 149, hiragana: "いま", kanji: "今", meaning: "bây giờ" },
  { id: 150, hiragana: "～じ", kanji: "～時", meaning: "~giờ" },
  { id: 151, hiragana: "～ふん / ～ぷん", kanji: "～分", meaning: "～phút" },
  { id: 152, hiragana: "はん", kanji: "半", meaning: "phân nửa" },
  { id: 153, hiragana: "なんじ", kanji: "何時", meaning: "mấy giờ" },
  { id: 154, hiragana: "なんぷん", kanji: "何分", meaning: "mấy phút" },
  { id: 155, hiragana: "ごぜん", kanji: "午前", meaning: "sáng (AM: trước 12 giờ)" },
  { id: 156, hiragana: "ごご", kanji: "午後", meaning: "chiều (PM: sau 12 giờ)" },
  { id: 157, hiragana: "あさ", kanji: "朝", meaning: "sáng" },
  { id: 158, hiragana: "ひる", kanji: "昼", meaning: "trưa" },
  { id: 159, hiragana: "ばん", kanji: "晩", meaning: "tối" },
  { id: 160, hiragana: "よる", kanji: "夜", meaning: "tối" },
  { id: 161, hiragana: "おととい", kanji: "", meaning: "ngày hôm kia" },
  { id: 162, hiragana: "きのう", kanji: "", meaning: "ngày hôm qua" },
  { id: 163, hiragana: "きょう", kanji: "今日", meaning: "hôm nay" },
  { id: 164, hiragana: "あした", kanji: "明日", meaning: "ngày mai" },
  { id: 165, hiragana: "あさって", kanji: "", meaning: "ngày mốt" },
  { id: 166, hiragana: "けさ", kanji: "今朝", meaning: "sáng nay" },
  { id: 167, hiragana: "こんばん", kanji: "", meaning: "tối nay" },
  { id: 168, hiragana: "ゆうべ", kanji: "", meaning: "tối hôm qua" },
  { id: 169, hiragana: "やすみ", kanji: "休み", meaning: "nghỉ ngơi (danh từ)" },
  { id: 170, hiragana: "ひるやすみ", kanji: "昼休み", meaning: "nghỉ trưa" },
  { id: 171, hiragana: "まいあさ", kanji: "毎朝", meaning: "mỗi sáng" },
  { id: 172, hiragana: "まいばん", kanji: "毎晩", meaning: "mỗi tối" },
  { id: 173, hiragana: "まいにち", kanji: "毎日", meaning: "mỗi ngày" },
  { id: 174, hiragana: "ペキン", kanji: "", meaning: "Bắc Kinh" },
  { id: 175, hiragana: "バンコク", kanji: "", meaning: "Bangkok" },
  { id: 176, hiragana: "ロンドン", kanji: "", meaning: "Luân Đôn" },
  { id: 177, hiragana: "ロサンゼルス", kanji: "", meaning: "Los Angeles" },
  { id: 178, hiragana: "たいへんですね", kanji: "大変ですね", meaning: "vất vả nhỉ" },
  { id: 179, hiragana: "ばんごうあんない", kanji: "", meaning: "dịch vụ 116 (hỏi số điện thoại)" },
  { id: 180, hiragana: "おといあわせ", kanji: "", meaning: "(số điện thoại) bạn muốn biết / hỏi là" }
];

// ==================== CODE CHÍNH ====================
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const popup = document.getElementById("subject-popup");
const timerEl = document.getElementById("timer");
const pointEl = document.querySelector(".point span");
const streakEl = document.querySelector(".point2 span");

// Elements cho phần tự luận
const essayContainer = document.getElementById("essay-container");
const essayQuestionEl = document.getElementById("essay-question");
const essayInputEl = document.getElementById("essay-input");
const essaySubmitBtn = document.getElementById("essay-submit");
const essayFeedbackEl = document.getElementById("essay-feedback");

// Elements cho phần trắc nghiệm
const quizContainer = document.querySelector(".quiz-container");

let correctAnswer = "";
let explanationText = "";
let selectedSubject = "";
let timerInterval = null;
let userScore = 0;
let userStreak = 0; // Biến lưu streak
let maxStreak = 0; // Biến lưu streak cao nhất
let currentQuestionType = ""; // "multiple-choice" hoặc "essay"

// Quản lý lịch sử câu hỏi
let questionHistory = [];

function saveQuestionToHistory(questionText) {
  if (!questionHistory.includes(questionText)) {
    questionHistory.push(questionText);
    if (questionHistory.length > 50) {
      questionHistory.shift();
    }
  }
}

function getAvoidListPrompt() {
  if (questionHistory.length === 0) return "";
  return `\nTránh lặp lại các câu hỏi sau:\n- ${questionHistory.join('\n- ')}\n`;
}

// Cập nhật điểm hiển thị
function updateScore() {
  if (pointEl) {
    pointEl.textContent = userScore;
  }
}

// Thêm điểm khi trả lời đúng
function addPoint() {
  userScore++;
  updateScore();

  if (pointEl) {
    pointEl.style.transform = "scale(1.3)";
    pointEl.style.color = "#8f39ff";
    pointEl.style.textShadow = "0 0 12px rgba(143,57,255,0.95)";
    pointEl.style.boxShadow = "0 6px 20px rgba(143,57,255,0.25)";
    pointEl.style.transition = "transform 0.2s ease, box-shadow 0.3s ease, text-shadow 0.3s ease";
    setTimeout(() => {
      pointEl.style.transform = "scale(1)";
      pointEl.style.color = "";
    }, 300);
  }
}
// Cập nhật streak hiển thị
function updateStreak() {
  if (streakEl) {
    streakEl.textContent = userStreak;
  }
}


// Tăng streak khi trả lời đúng
function increaseStreak() {
  userStreak++;
  if (userStreak > maxStreak) {
    maxStreak = userStreak;
  }
  updateStreak();

  // Hiệu ứng animation cho streak
  if (streakEl) {
    streakEl.style.transform = "scale(1.3)";
    streakEl.style.color = "#FF6B35";
    setTimeout(() => {
      streakEl.style.transform = "scale(1)";
      streakEl.style.color = "";
    }, 300);
  }

  // Hiển thị thông báo milestone
  if (userStreak === 5) {
    showStreakMilestone("🔥 Streak x5! Bạn đang rất tốt!");
  } else if (userStreak === 10) {
    showStreakMilestone("🔥🔥 Streak x10! Xuất sắc!");
  } else if (userStreak === 20) {
    showStreakMilestone("🔥🔥🔥 Streak x20! Bạn là cao thủ!");
  } else if (userStreak % 50 === 0 && userStreak > 0) {
    showStreakMilestone(`🏆 Streak x${userStreak}! Không thể tin được!`);
  }
}

// Reset streak khi trả lời sai
function resetStreak() {
  if (userStreak > 0) {
    // Hiệu ứng mất streak
    if (streakEl) {
      streakEl.style.transform = "scale(0.8)";
      streakEl.style.color = "#f44336";
      setTimeout(() => {
        userStreak = 0;
        updateStreak();
        streakEl.style.transform = "scale(1)";
        streakEl.style.color = "";
      }, 300);
    } else {
      userStreak = 0;
      updateStreak();
    }
  }
}

// Hiển thị thông báo milestone
function showStreakMilestone(message) {
  const milestone = document.createElement("div");
  milestone.className = "streak-milestone";
  milestone.textContent = message;
  milestone.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: linear-gradient(135deg, #FF6B35, #F7931E);
    color: white;
    padding: 20px 40px;
    border-radius: 15px;
    font-size: 24px;
    font-weight: bold;
    z-index: 10000;
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.5);
    animation: milestonePopup 2s ease-out forwards;
  `;

  document.body.appendChild(milestone);

  setTimeout(() => {
    milestone.remove();
  }, 2000);
}

// Thêm CSS animation cho milestone
const style = document.createElement("style");
style.textContent = `
  @keyframes milestonePopup {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 1;
    }
    70% {
      transform: translate(-50%, -50%) scale(0.95);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);
// Chọn môn học
function selectSubject(subject) {
  selectedSubject = subject;
  popup.style.display = "none";
  userStreak = 0;
  updateStreak();
  loadQuestion();
}

// Đếm giờ
function startTimer(duration) {
  clearInterval(timerInterval);
  let timeLeft = duration;
  updateTimerDisplay(timeLeft);

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  timerEl.textContent = `${mins}:${secs}`;
}

function handleTimeout() {
  resetStreak();
  if (currentQuestionType === "multiple-choice") {
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
    });
    questionEl.textContent = "Hết giờ! Đáp án đúng đã được hiển thị.";
  } else if (currentQuestionType === "essay") {
    essaySubmitBtn.disabled = true;
    essayInputEl.disabled = true;
    essayFeedbackEl.textContent = `⏰ Hết giờ! Đáp án đúng là: ${correctAnswer}`;
    essayFeedbackEl.style.color = "#ff9800";
  }

  showExplanation();
}

// ==================== CHỌN LOẠI CÂU HỎI ====================
function chooseQuestionType() {
  // Chỉ áp dụng cho môn tiếng Nhật
  if (selectedSubject !== "japanese") {
    return "multiple-choice";
  }

  // Ngẫu nhiên 50-50 giữa trắc nghiệm và tự luận
  return Math.random() < 0.5 ? "multiple-choice" : "essay";
}

// ==================== SHOW/HIDE CONTAINERS ====================
function showMultipleChoiceContainer() {
  if (quizContainer) quizContainer.style.display = "block";
  if (essayContainer) essayContainer.style.display = "none";
}

function showEssayContainer() {
  if (quizContainer) quizContainer.style.display = "none";
  if (essayContainer) essayContainer.style.display = "block";
}

// ==================== TẠO CÂU HỎI TRẮC NGHIỆM ====================
function generateJapaneseMultipleChoice() {
  const availableWords = vocabularyData.filter(word =>
    !questionHistory.includes(word.hiragana)
  );

  if (availableWords.length < 4) {
    questionHistory = [];
  }

  const wordsToUse = availableWords.length >= 4 ? availableWords : vocabularyData;
  const correctWord = wordsToUse[Math.floor(Math.random() * wordsToUse.length)];

  const wrongWords = [];
  while (wrongWords.length < 3) {
    const randomWord = vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
    if (randomWord.id !== correctWord.id &&
      !wrongWords.find(w => w.id === randomWord.id)) {
      wrongWords.push(randomWord);
    }
  }

  const allOptions = [correctWord, ...wrongWords]
    .sort(() => Math.random() - 0.5)
    .map(word => word.hiragana);

  const questionData = {
    question: `"${correctWord.meaning}" trong tiếng Nhật là gì?`,
    options: allOptions,
    answer: correctWord.hiragana,
    explanation: `Đáp án đúng là "${correctWord.hiragana}"${correctWord.kanji ? ` (${correctWord.kanji})` : ''} có nghĩa là "${correctWord.meaning}".`
  };

  saveQuestionToHistory(correctWord.hiragana);
  return questionData;
}

// ==================== TẠO CÂU HỎI TỰ LUẬN ====================
function generateJapaneseEssay() {
  const availableWords = vocabularyData.filter(word =>
    !questionHistory.includes(word.hiragana)
  );

  if (availableWords.length === 0) {
    questionHistory = [];
  }

  const wordsToUse = availableWords.length > 0 ? availableWords : vocabularyData;
  const correctWord = wordsToUse[Math.floor(Math.random() * wordsToUse.length)];

  const questionData = {
    question: `Hãy viết từ "${correctWord.meaning}" bằng chữ Hiragana:`,
    answer: correctWord.hiragana,
    explanation: `Đáp án đúng là "${correctWord.hiragana}"${correctWord.kanji ? ` (${correctWord.kanji})` : ''} có nghĩa là "${correctWord.meaning}".`,
    kanji: correctWord.kanji
  };

  saveQuestionToHistory(correctWord.hiragana);
  return questionData;
}

// ==================== LOAD CÂU HỎI ====================
async function loadQuestion() {
  // Reset feedback tự luận
  if (essayFeedbackEl) essayFeedbackEl.textContent = "";
  if (essayInputEl) {
    essayInputEl.value = "";
    essayInputEl.disabled = false;
  }
  if (essaySubmitBtn) essaySubmitBtn.disabled = false;

  timerEl.textContent = "";

  let questionData;

  if (selectedSubject === "japanese") {
    // Chọn loại câu hỏi ngẫu nhiên
    currentQuestionType = chooseQuestionType();

    if (currentQuestionType === "essay") {
      showEssayContainer();
      questionData = generateJapaneseEssay();

      essayQuestionEl.textContent = questionData.question;
      correctAnswer = questionData.answer;
      explanationText = questionData.explanation;

      // Focus vào ô input
      setTimeout(() => essayInputEl.focus(), 100);

      startTimer(30); // 30 giây cho câu tự luận
      return;
    } else {
      showMultipleChoiceContainer();
      questionData = generateJapaneseMultipleChoice();
    }
  } else {
    // Các môn khác vẫn dùng trắc nghiệm
    showMultipleChoiceContainer();
    currentQuestionType = "multiple-choice";
    questionEl.textContent = "Đang tải câu hỏi...";
    optionsEl.innerHTML = "";
    questionData = await fetchQuestionFromGemini();
  }

  if (!questionData || !questionData.question) {
    questionEl.textContent = "Không thể tải câu hỏi.";
    return;
  }

  if (selectedSubject !== "japanese") {
    saveQuestionToHistory(questionData.question);
  }

  questionEl.textContent = questionData.question;
  correctAnswer = questionData.answer;
  explanationText = questionData.explanation || "Không có giải thích.";

  // Tạo các nút trắc nghiệm
  optionsEl.innerHTML = "";
  questionData.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => {
      clearInterval(timerInterval);
      handleAnswer(btn, option);
    };
    optionsEl.appendChild(btn);
  });

  if (selectedSubject === "it" || selectedSubject === "english" || selectedSubject === "japanese") {
    startTimer(10);
  } else {
    startTimer(60);
  }
}

// ==================== XỬ LÝ TRẮC NGHIỆM ====================
function handleAnswer(button, selectedOption) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (selectedOption === correctAnswer) {
    button.classList.add("correct");
    addPoint();
    increaseStreak();
  } else {
    button.classList.add("incorrect");
    resetStreak();
    buttons.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  showExplanation();
}

// ==================== XỬ LÝ TỰ LUẬN ====================
function submitEssayAnswer() {
  clearInterval(timerInterval);

  const userAnswer = essayInputEl.value.trim();
  essayInputEl.disabled = true;
  essaySubmitBtn.disabled = true;

  if (userAnswer === "") {
    essayFeedbackEl.textContent = "⚠️ Bạn chưa nhập câu trả lời!";
    essayFeedbackEl.style.color = "#ff9800";
    resetStreak();
    showExplanation();
    return;
  }

  // So sánh câu trả lời (không phân biệt hoa thường, loại bỏ khoảng trắng)
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    essayFeedbackEl.textContent = "✅ Chính xác! Bạn đã trả lời đúng.";
    essayFeedbackEl.style.color = "#4CAF50";
    addPoint();
    increaseStreak();
  } else {
    essayFeedbackEl.textContent = `❌ Sai rồi! Đáp án đúng là: ${correctAnswer}`;
    essayFeedbackEl.style.color = "#f44336";
    resetStreak();
  }

  showExplanation();
}

// Gắn sự kiện cho nút submit và Enter key
if (essaySubmitBtn) {
  essaySubmitBtn.onclick = submitEssayAnswer;
}

if (essayInputEl) {
  essayInputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !essaySubmitBtn.disabled) {
      submitEssayAnswer();
    }
  });
}

// ==================== GỌI GEMINI API ====================
async function fetchQuestionFromGemini() {
  const avoidList = getAvoidListPrompt();
  let prompt = "";

  if (selectedSubject === "it") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về kiến thức Tin học lớp 12 (Việt Nam), bao gồm các chủ đề như: Cơ sở dữ liệu, hệ quản trị cơ sở dữ liệu, Python, C+++, thuật toán, Html, web, mạng,...
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến kiến thức Tin học lớp 12.
- Ngẫu nhiên chọn một trong các chủ đề trên.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.
- Trả về JSON:
{ "question": "...", "options": [...], "answer": "...", "explanation": "..." }`;
  } else if (selectedSubject === "english") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về từ vựng tiếng anh theo các chủ đề như: Technology, Environment, Health, Education, Culture, Travel, Food, Sports, Business,...
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến từ vựng tiếng anh.
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.
- Giải thích bằng tiếng Việt.
- Trả về JSON:
{ "question": "...", "options": [...], "answer": "...", "explanation": "..." }`;
  } else if (selectedSubject === "math") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về kiến thức Toán học lớp 12 (Việt Nam) theo chương trình mới 2018,...
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến kiến thức Toán học lớp 12.
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.
- Trả về JSON:
{ "question": "...", "options": [...], "answer": "...", "explanation": "..." }`;
  } else if (selectedSubject === "physics") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về kiến thức Vật lý lớp 12 (Việt Nam) theo chương trình mới 2018,...
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến kiến thức Vật lý lớp 12.
- Ngẫu nhiên chọn một trong các chủ đề.
- Tránh lặp lại câu hỏi.
- Câu hỏi có 4 lựa chọn, 1 đúng.
- Giải thích 1-5 câu.
- Trả về JSON:
{ "question": "...", "options": [...], "answer": "...", "explanation": "..." }`;
  }

  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCbWfOla29VASM0_jlfPIhUCqeCyaZA5jU", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
    return null;
  }

  const data = await response.json();
  let textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  textResponse = textResponse.replace(/```json|```/g, "").trim();

  try {
    return JSON.parse(textResponse);
  } catch (e) {
    console.error("JSON parse error:", e, "Raw response:", textResponse);
    return null;
  }
}

function showExplanation() {
  document.getElementById("explanation-text").textContent = explanationText;
  document.getElementById("explanation-popup").style.display = "flex";
}

function closeExplanation() {
  document.getElementById("explanation-popup").style.display = "none";
}

// Khởi tạo điểm ban đầu
updateScore();
updateStreak();