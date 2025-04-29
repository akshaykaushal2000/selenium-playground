const questions = [
    {
      question: "1. Locate the username field by its ID and enter 'username'.",
      expected: 'driver.find_element(By.ID, "username").send_keys("username")'
    },
    {
      question: "2. Locate the password field by name and enter 'password'.",
      expected: 'driver.find_element(By.NAME, "password").send_keys("password")'
    },
    {
      question: "3. Click the Login button using XPath with contains().",
      expected: 'driver.find_element(By.XPATH, "//button[contains(text(), \'Login\')]").click()'
    },
    {
      question: "4. Use self axis to select a tag: //input[@id='search']/self::input",
      expected: "//input[@id='search']/self::input"
    },
    {
      question: "5. Use following-sibling axis: //label[@for='username']/following-sibling::input",
      expected: "//label[@for='username']/following-sibling::input"
    },
  ];
  
  let score = 0;
  let answered = Array(questions.length).fill(false);
  
  function renderQuestions() {
    const container = document.getElementById("questions-container");
    container.innerHTML = "";
  
    questions.forEach((q, index) => {
      const box = document.createElement("div");
      box.className = "question-box";
  
      box.innerHTML = `
        <p><strong>${q.question}</strong></p>
        <textarea id="input-${index}" placeholder="Write your code here..."></textarea>
        <br>
        <button onclick="submitAnswer(${index})">Submit</button>
        <button onclick="showAnswer(${index})">Show Answer</button>
        <p class="feedback" id="feedback-${index}"></p>
      `;
  
      container.appendChild(box);
    });
  
    updateScore();
  }
  
  function submitAnswer(index) {
    const userInput = document.getElementById(`input-${index}`).value.trim();
    const expected = questions[index].expected.trim();
    const feedback = document.getElementById(`feedback-${index}`);
  
    if (userInput === expected) {
      if (!answered[index]) {
        score++;
        answered[index] = true;
      }
      feedback.textContent = "✅ Correct!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "❌ Incorrect, try again.";
      feedback.style.color = "red";
    }
  
    updateScore();
  }
  
  function showAnswer(index) {
    const feedback = document.getElementById(`feedback-${index}`);
    feedback.innerHTML = `<span style="color:blue">Answer: ${questions[index].expected}</span>`;
  }
  
  function updateScore() {
    document.getElementById("score").textContent = `Score: ${score} / ${questions.length}`;
  }
  
  document.addEventListener("DOMContentLoaded", renderQuestions);
  