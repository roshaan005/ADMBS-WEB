const collapseValues = document.getElementById('collapseValues');
const arrowIcon = document.getElementById('arrowIcon');

collapseValues.addEventListener('show.bs.collapse', () => {
    arrowIcon.classList.remove('bi-chevron-down');
    arrowIcon.classList.add('bi-chevron-up');
});

collapseValues.addEventListener('hide.bs.collapse', () => {
    arrowIcon.classList.remove('bi-chevron-up');
    arrowIcon.classList.add('bi-chevron-down');
});
