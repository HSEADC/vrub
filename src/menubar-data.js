const homeURL = 'https://hseadc.github.io/vrub/'
const menu = [
  {
    text: 'Исполнители',
    url: 'artists.html'
  },
  {
    text: 'Жанры',
    url: 'genres.html'
  },
  {
    text: 'Материалы',
    url: 'materials.html'
  }
]
const props = { prerender: true, homeURL, menu }

export { props }
