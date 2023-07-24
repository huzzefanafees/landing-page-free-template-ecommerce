// For the tabs in section 2
let section2Tabs = document.querySelectorAll(".section2-tabs")
section2Tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    section2Tabs.forEach(tab => { tab.classList.remove('active') });
    tab.classList.add('active');
  })
})

// For the questions and there description

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  const description = question.nextElementSibling;
  const toggleButton = question.querySelector('.toggle-button');

  question.addEventListener('click', () => {
    description.classList.toggle('active');
    toggleButton.textContent = description.classList.contains('active') ? '×' : '+';
  });
});

