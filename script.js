const questions = [
    {
      question: "Locate the username field by its ID and enter 'username'.",
      answer: 'driver.find_element(By.ID, "username").send_keys("username")'
    },
    {
      question: "Click the Login button using XPath with contains().",
      answer: 'driver.find_element(By.XPATH, "//button[contains(text(), \'Login\')]").click()'
    },
    // Add more questions as needed
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
    document.getElementById("submit-btn").addEventListener("click", checkAnswer);
  });
  
  function displayQuestion() {
    document.getElementById("question-text").textContent = questions[currentQuestion].question;
    document.getElementById("user-input").value = "";
    document.getElementById("feedback").textContent = "";
  }
  
  function checkAnswer() {
    const userAnswer = document.getElementById("user-input").value.trim();
    const correctAnswer = questions[currentQuestion].answer;
  
    if (userAnswer === correctAnswer) {
      score++;
      document.getElementById("feedback").textContent = "Correct!";
      document.getElementById("feedback").style.color = "green";
    } else {
      document.getElementById("feedback").textContent = "Incorrect. Try again.";
      document.getElementById("feedback").style.color = "red";
      return;
    }
  
    document.getElementById("score").textContent = `Score: ${score}`;
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      document.getElementById("question-text").textContent = "You've completed all questions!";
      document.getElementById("user-input").style.display = "none";
      document.getElementById("submit-btn").style.display = "none";
    }
  }
  