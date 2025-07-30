fetch('../config.json')
    .then(res => res.json())
    .then(config => {

        const code = config.code.activity

        const play = document.getElementById('play-activity')
        const practice = document.getElementById('practice-activity')
        const lastUpdated = document.getElementById('last-updated')

        play.textContent = code.play
        practice.textContent = code.practice
        lastUpdated.textContent = `Last updated: ${code.last_updated}`
        
    })
    .catch(error => {
        console.error('Error fetching config:', error)
    })


alert(
`Just finish 1 pomodoro session :)
while working on The Odin Project.`
)