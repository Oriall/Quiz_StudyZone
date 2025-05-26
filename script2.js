const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const popup = document.getElementById("subject-popup");
const timerEl = document.getElementById("timer");

let correctAnswer = "";
let explanationText = "";
let selectedSubject = "";
let timerInterval = null;

function selectSubject(subject) {
  selectedSubject = subject;
  popup.style.display = "none";
  loadQuestion();
}

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
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
  });

  questionEl.textContent = "Hết giờ! Đáp án đúng đã được hiển thị.";
  showExplanation();
}

async function loadQuestion() {
  questionEl.textContent = "Loading question...";
  optionsEl.innerHTML = "";
  timerEl.textContent = "";

  const questionData = await fetchQuestionFromGemini();

  if (!questionData) {
    questionEl.textContent = "Failed to load question.";
    return;
  }

  questionEl.textContent = questionData.question;
  correctAnswer = questionData.answer;
  explanationText = questionData.explanation || "Không có giải thích.";

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

  if (selectedSubject === "it" || selectedSubject === "english") {
    startTimer(10);
  } else {
    startTimer(60);
  }
}

function handleAnswer(button, selectedOption) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (selectedOption === correctAnswer) {
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
    buttons.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  showExplanation();
}

async function fetchQuestionFromGemini() {
  let prompt = "";

  if (selectedSubject === "it") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về kiến thức Tin học lớp 12 (Việt Nam), bao gồm các chủ đề như: Cơ sở dữ liệu, hệ quản trị cơ sở dữ liệu, Python, C+++, thuật toán, Html, web, mạng,...

Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến kiến thức Tin học lớp 12.
- Ngẫu nhiên chọn một trong các chủ đề trên.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.(không giải thích thêm)
- Câu trả lời đưa ra tuân thủ hoàn toàn theo định dạng JSON và không giải thích gì thêm.
- Trả về kết quả dưới dạng JSON như sau:
{
  "question": "Câu hỏi ở đây?",
  "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
  "answer": "Lựa chọn đúng",
  "explanation": "Giải thích đáp án đúng"
}`;
  } else if (selectedSubject === "english") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về từ vựng tiếng anh theo các chủ đề như: Technology, Environment, Health, Education, Culture, Travel, Food, Sports, Business, và các chủ đề khác liên quan đến từ vựng tiếng anh.

Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến từ vựng tiếng anh 
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.(không giải thích thêm)
- Câu trả lời đưa ra tuân thủ hoàn toàn theo định dạng JSON và không giải thích gì thêm.
- Giải thích bằng tiếng Việt.
- Trả về kết quả dưới dạng JSON như sau:
{
  "question": "Câu hỏi ở đây?",
  "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
  "answer": "Lựa chọn đúng",
  "explanation": "Giải thích đáp án đúng"
}`;
  } else if (selectedSubject === "math") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về kiến thức Toán học lớp 12 (Việt Nam) theo chương trình mới 2018, bao gồm các chủ đề như: Đạo hàm, Toán thực tế liên quan đến đạo hàm nguyên hàm, Nguyên hàm, Tích phân, Bài toán lãi suất,...

Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến kiến thức Toán học lớp 12.
- Ngẫu nhiên chọn một trong các chủ đề theo chương trình mới 2018.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.(không giải thích thêm)
- Câu trả lời đưa ra tuân thủ hoàn toàn theo định dạng JSON và không giải thích gì thêm.
- Trả về kết quả dưới dạng JSON như sau:
{
  "question": "Câu hỏi ở đây?",
  "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
  "answer": "Lựa chọn đúng",
  "explanation": "Giải thích đáp án đúng"
}`;
  } else if (selectedSubject === "physics") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về kiến thức Vật lý lớp 12 (Việt Nam) theo chương trình mới 2018, bao gồm 4 chủ đề chính như: Vật lý nhiệt, Khí lí tưởng, Từ trường, hạt nhân nguyên tử.

Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến kiến thức Vật lý lớp 12 theo chương trình mới 2018.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Ngẫu nhiên chọn một trong các chủ đề trên.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.(không giải thích thêm)
- Câu trả lời đưa ra tuân thủ hoàn toàn theo định dạng JSON và không giải thích gì thêm.
- Trả về kết quả dưới dạng JSON như sau:
{
  "question": "Câu hỏi ở đây?",
  "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
  "answer": "Lựa chọn đúng",
  "explanation": "Giải thích đáp án đúng"
}`;
  }

  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB856seywOwGsTCEguKYw3vfRttPiYlGJA", {
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
  document.getElementById("explanation-popup").style.display = "block";
}

function closeExplanation() {
  document.getElementById("explanation-popup").style.display = "none";
}