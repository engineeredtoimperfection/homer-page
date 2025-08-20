const guitarTile = document.getElementById('guitar-tile')
const vocalsTile = document.getElementById('vocals-tile')
const musicianshipTile = document.getElementById('musicianship-tile')

guitarTile.addEventListener('click', () => {
    window.open('https://the-practice-page.vercel.app')
})

vocalsTile.addEventListener('click', () => {
    window.open('../pages/vocals.html')
})

musicianshipTile.addEventListener('click', () => {
    window.open('../pages/musicianship.html')
})