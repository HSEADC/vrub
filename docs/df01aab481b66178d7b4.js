document.addEventListener('DOMContentLoaded', function () {
  var allFilter = document.querySelector('.filter-div[data-genre="all"]');
  var genreFilters = document.querySelectorAll('.filter-div:not([data-genre="all"])');

  function applyFilters() {
    var selectedGenres = Array.from(document.querySelectorAll('.filter-div.selected')).map(function (filter) {
      return filter.getAttribute('data-genre');
    });
    var articles = document.querySelectorAll('.article');

    if (selectedGenres.length === 0 || selectedGenres.includes('all')) {
      articles.forEach(function (article) {
        article.style.display = '';
      });
    } else {
      articles.forEach(function (article) {
        var articleGenres = article.getAttribute('data-genres').split(',');
        var matches = selectedGenres.some(function (genre) {
          return articleGenres.includes(genre);
        });
        article.style.display = matches ? '' : 'none';
      });
    }
  }

  allFilter.addEventListener('click', function () {
    if (this.classList.contains('selected') && document.querySelectorAll('.filter-div.selected').length === 1) {
      this.classList.remove('selected');
    } else {
      // Выбрать ВСЕ и снять выделение с других фильтров
      this.classList.add('selected');
      genreFilters.forEach(function (filter) {
        return filter.classList.remove('selected');
      });
    }

    applyFilters();
  });
  genreFilters.forEach(function (filter) {
    filter.addEventListener('click', function () {
      // Снять ВСЕ если другие фильтры выбраны
      allFilter.classList.remove('selected');
      this.classList.toggle('selected');
      applyFilters();
    });
  });
});