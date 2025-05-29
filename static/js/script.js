const sidebarLinks = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('.content-section');

sidebarLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    sidebarLinks.forEach(l => l.classList.remove('selected'));
    this.classList.add('selected');
    const targetId = this.getAttribute('data-target');
    sections.forEach(section => {
      section.classList.remove('active');
      if (section.id === targetId) {
        section.classList.add('active');
      }
    });
  });
});
