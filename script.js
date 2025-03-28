const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const quizzes = document.querySelectorAll(".ask");
const answerbtn = document.getElementById("answerbtn");
let currentIndex = 0;
let total = questions.length;
const progressBar = document.querySelector(".progress-bar");
const percentage = document.getElementById("percentage");
const questionTotal = document.getElementById("total-question");
//menampilkan persentase progress
percentage.innerHTML = Math.round(((currentIndex + 1) / total) * 100) + "%";
//menampilkan jumlah pertanyaan
questionTotal.textContent = 1 + " of " + questions.length;
next.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    questions.forEach((question, index) => {
      if (index === currentIndex) {
        question.classList.add("unactive"); // Sembunyikan container saat ini
      }
      if (index === currentIndex + 1) {
        question.classList.remove("unactive"); // Tampilkan container berikutnya
      }
    });

    currentIndex++; // Pindah ke container berikutnya
    let progress = Math.round(((currentIndex + 1) / total) * 100) + "%";
    percentage.innerHTML = progress;
    questionTotal.textContent = [currentIndex + 1] + " of " + questions.length;
    progressBar.style.width =
      Math.round(((currentIndex + 1) / total) * 100) + "%";
  }
});

answerbtn.addEventListener("click", () => {
  if (answerbtn.textContent === "Show Answer") {
    answers.forEach((answer) => answer.classList.remove("hide"));
    answerbtn.textContent = "Hide Answer";
    quizzes.forEach((quiz) => (quiz.style.display = "none"));
  } else {
    answers.forEach((answer) => answer.classList.add("hide"));
    answerbtn.textContent = "Show Answer";
    quizzes.forEach((quiz) => (quiz.style.display = "block"));
  }
});

prev.addEventListener("click", () => {
  if (currentIndex > 0) {
    questions.forEach((question, index) => {
      if (index === currentIndex) {
        question.classList.add("unactive"); // Sembunyikan container saat ini
      }
      if (index === currentIndex - 1) {
        question.classList.remove("unactive"); // Tampilkan container sebelumnya
      }
    });

    currentIndex--; // Pindah ke container sebelumnya
    let progress = Math.round(((currentIndex + 1) / total) * 100) + "%";
    percentage.innerHTML = progress;
    questionTotal.textContent = [currentIndex + 1] + " of " + questions.length;
    progressBar.style.width =
      Math.round(((currentIndex + 1) / total) * 100) + "%";
  }
});
