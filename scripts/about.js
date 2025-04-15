// JavaScript to toggle the arrow direction for "Our Values"
const valuesCollapse = document.getElementById('collapseValues');
const valuesArrowIcon = document.getElementById('arrowIcon');

valuesCollapse.addEventListener('show.bs.collapse', () => {
    console.log('Our Values expanded');
    valuesArrowIcon.classList.remove('bi-chevron-down');
    valuesArrowIcon.classList.add('bi-chevron-up');
});

valuesCollapse.addEventListener('hide.bs.collapse', () => {
    console.log('Our Values collapsed');
    valuesArrowIcon.classList.remove('bi-chevron-up');
    valuesArrowIcon.classList.add('bi-chevron-down');
});

const faqCollapse = document.getElementById('collapseFAQ');
const faqArrowIcon = document.getElementById('faqArrowIcon');

faqCollapse.addEventListener('show.bs.collapse', () => {
    console.log('FAQ expanded');
    faqArrowIcon.classList.remove('bi-chevron-down');
    faqArrowIcon.classList.add('bi-chevron-up');
});

faqCollapse.addEventListener('hide.bs.collapse', () => {
    console.log('FAQ collapsed');
    faqArrowIcon.classList.remove('bi-chevron-up');
    faqArrowIcon.classList.add('bi-chevron-down');
});
