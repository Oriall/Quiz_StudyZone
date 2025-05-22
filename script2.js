const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

let correctAnswer = "";

async function loadQuestion() {
  questionEl.textContent = "Loading question...";
  optionsEl.innerHTML = "";

  const questionData = await fetchQuestionFromGemini();

  if (!questionData) {
    questionEl.textContent = "Failed to load question.";
    return;
  }

  questionEl.textContent = questionData.question;
  correctAnswer = questionData.answer;

  questionData.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => handleAnswer(btn, option);
    optionsEl.appendChild(btn);
  });
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
}

// ===== Replace this with your Gemini API integration =====
async function fetchQuestionFromGemini() {
  const prompt = `
Hãy tạo một câu hỏi trắc nghiệm từ vựng tiếng Anh như sau(không trùng lặp với câu trước):
- Một từ tiếng Anh bất kỳ.
- 4 lựa chọn nghĩa tiếng Việt, trong đó 1 là đúng.
- Trả về JSON như sau:
{
  "question": "Từ: apple nghĩa là gì?",
  "options": ["Táo", "Cam", "Chuối", "Nho"],
  "answer": "Táo"
}
`;

  // Replace YOUR_API_KEY_HERE with your actual Gemini API key and ensure the API is enabled in your Google Cloud project.
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

  // Remove Markdown code block markers if present
  textResponse = textResponse.replace(/```json|```/g, "").trim();

  try {
    return JSON.parse(textResponse);
  } catch (e) {
    console.error("JSON parse error:", e, "Raw response:", textResponse);
    return null;
  }
}
