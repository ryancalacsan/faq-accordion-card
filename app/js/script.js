const accordianTitles = document.querySelectorAll('.card__question');

accordianTitles.forEach(accordianTitle => {
  accordianTitle.addEventListener('click', () => {
    const arrow = accordianTitle.firstElementChild;
    const text = accordianTitle.nextElementSibling;
    const height = text.scrollHeight;
    accordianTitle.classList.toggle('active-header');
    arrow.classList.toggle('active');
    text.classList.toggle('show');
    if (arrow.classList.contains('active')) {
      text.style.maxHeight = `${(height + 19) / 16}rem`;
    } else {
      text.style.maxHeight = '0px';
    }
  });
});
