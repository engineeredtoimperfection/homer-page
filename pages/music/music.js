const isPersonalModeOn = detectPersonalMode()
setLinks(isPersonalModeOn)

function detectPersonalMode() {
    return window.location.hash === '#me'
}

function setLinks(isPersonalModeOn) {
    const guitarTile = document.getElementById('guitar-tile')
    const vocalsTile = document.getElementById('vocals-tile')
    const musicianshipTile = document.getElementById('musicianship-tile')

    const guitarLink = isPersonalModeOn ? 'https://the-practice-page.vercel.app/#me' : 'https://the-practice-page.vercel.app'
    const vocalsLink = isPersonalModeOn ? './vocals.html#me' : './vocals.html'
    const musicianshipLink = isPersonalModeOn ? './musicianship.html#me' : './musicianship.html'
    
    guitarTile.addEventListener('click', () => {
        window.open(guitarLink)
    })

    vocalsTile.addEventListener('click', () => {
        window.open(vocalsLink)
    })

    musicianshipTile.addEventListener('click', () => {
        window.open(musicianshipLink)
    })
}