const phrases = [
    ["We Are", "innovators"],
    ["We Build", "Greatness Together"],
    ["Don't Work Hard", "Work Smart"],
    ["Less time", "More productivity."],
    ["Let's Choose", "Our Destiniy"],
    ["Let's Choose", "To learn With..."],
    ["Awesome", "Web Developers"]
  ];

  const part1El = document.getElementById("part1");
  const part2El = document.getElementById("part2");
  let index = 0;

  document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    showNextPhrase();
    setInterval(showNextPhrase, 3000); // Start looping after initial delay
  }, 2000); // 2-second delay before first phrase

  function showNextPhrase() {
    const [first, second] = phrases[index];

    // Reset both spans
    part1El.classList.remove("opacity-100");
    part2El.classList.remove("opacity-100");
    part1El.classList.add("opacity-0");
    part2El.classList.add("opacity-0");

    // After fade out, set new text
    setTimeout(() => {
      part1El.textContent = first;
      part2El.textContent = "";

      // Fade in first part
      part1El.classList.remove("opacity-0");
      part1El.classList.add("opacity-100");

      // Fade in second part after a delay
      setTimeout(() => {
        part2El.textContent = second;
        part2El.classList.remove("opacity-0");
        part2El.classList.add("opacity-100");
      }, 200);

    }, 300);

    // Fade out after showing both
    setTimeout(() => {
      part1El.classList.remove("opacity-100");
      part1El.classList.add("opacity-0");

      part2El.classList.remove("opacity-100");
      part2El.classList.add("opacity-0");
    }, 2500);

    index = (index + 1) % phrases.length;
  }
});
