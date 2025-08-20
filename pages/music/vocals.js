fetch('../../config.json')
    .then(res => res.json())
    .then(config => {

        const vocals = config.vocals.activity

        const play = document.getElementById('play-activity')
        const practice = document.getElementById('practice-activity')
        const lastUpdated = document.getElementById('last-updated')

        play.textContent = vocals.play
        practice.textContent = vocals.practice
        lastUpdated.textContent = `Last updated: ${vocals.last_updated}`
        
    })
    .catch(error => {
        console.error('Error fetching config:', error)
    })