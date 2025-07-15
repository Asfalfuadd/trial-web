document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetTabId = this.getAttribute('data-tab');

      tabContents.forEach(content => {
        content.classList.remove('active');
      });

      const targetContent = document.getElementById(targetTabId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // Tambahan untuk animasi progress skill bar
  const skillBars = document.querySelectorAll(".skill-bar");

  skillBars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress");
    bar.style.width = progress + "%";
  });
});
