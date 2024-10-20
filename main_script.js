document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(
    ".second-section, .third-section, .fourth-section, .fifth-section, .sixth-section"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
