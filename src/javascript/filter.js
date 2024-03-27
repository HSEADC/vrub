document.addEventListener('DOMContentLoaded', function () {
  const allFilter = document.querySelector('.filter-div[data-genre="all"]')
  const genreFilters = document.querySelectorAll(
    '.filter-div:not([data-genre="all"])'
  )

  function applyFilters() {
    const selectedGenres = Array.from(
      document.querySelectorAll('.filter-div.selected')
    ).map((filter) => filter.getAttribute('data-genre'))
    const articles = document.querySelectorAll('.article')

    if (selectedGenres.length === 0 || selectedGenres.includes('all')) {
      articles.forEach((article) => {
        article.style.display = ''
      })
    } else {
      articles.forEach((article) => {
        const articleGenres = article.getAttribute('data-genres').split(',')
        const matches = selectedGenres.some((genre) =>
          articleGenres.includes(genre)
        )
        article.style.display = matches ? '' : 'none'
      })
    }
  }

  allFilter.addEventListener('click', function () {
    if (
      this.classList.contains('selected') &&
      document.querySelectorAll('.filter-div.selected').length === 1
    ) {
      this.classList.remove('selected')
    } else {
      // Выбрать ВСЕ и снять выделение с других фильтров
      this.classList.add('selected')
      genreFilters.forEach((filter) => filter.classList.remove('selected'))
    }
    applyFilters()
  })

  genreFilters.forEach((filter) => {
    filter.addEventListener('click', function () {
      // Снять ВСЕ если другие фильтры выбраны
      allFilter.classList.remove('selected')
      this.classList.toggle('selected')
      applyFilters()
    })
  })
})
