const portfolioItem = document.querySelectorAll('.portfolio-item');
const filter = document.querySelectorAll('[data-filter]');

filter.forEach(item => {
    item.addEventListener('click', () => {
        filter.forEach(e => {
            e.classList.remove('active-filter');
        })
        item.classList.add('active-filter');
        portfolioItem.forEach(ele => {
            ele.classList.contains(item.dataset.filter) ? ele.style.display = "block" : ele.style.display = "none";
        })
    })
});