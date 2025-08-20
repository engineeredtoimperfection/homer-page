const visits = trackVisits()

applyAnimationMultiplier(visits)

customiseLinkBehaviour()

detectPersonalMode()

function trackVisits() {
    const visitCountStorageKey = "timesHomerPageVisited";
    let visits = Number(localStorage.getItem(visitCountStorageKey)) || 0;
    localStorage.setItem(visitCountStorageKey, ++visits);
    console.log(`You've visited this site ${visits} times.`)
    return visits
}

function applyAnimationMultiplier(visits) {
    // Restrict this value between 1 and 8 (inclusive)
    const visitCountCapped = Math.min(Math.max(visits, 1), 8);
    const animationMultiplier = 1 - ((visitCountCapped - 1) * 0.1);

    document.documentElement.style.setProperty("--animation-speed-multiplier", animationMultiplier);
}

function customiseLinkBehaviour() {
    const anchorTags = document.getElementsByTagName("a");

    for (const anchorTag of anchorTags) {
        anchorTag.addEventListener("click", (e) => {
            e.preventDefault();

            const targetAnchorObject = e.currentTarget;
            const href = targetAnchorObject.href;
            const rel = targetAnchorObject.rel;

            const relCsv = rel.split(" ").join(",");

            targetAnchorObject.style.cursor = 'wait';

            setTimeout(() => {
                targetAnchorObject.style.cursor = '';
                window.open(href, "_target", relCsv);
            }, 1000);
        })
    }
}

function detectPersonalMode() {
    if (window.location.hash === '#me') {
        enablePersonalMode()
    }
}

function enablePersonalMode() {
    const highlightedElements = document.getElementsByClassName('highlighted')

    // Delay before the highlighting animation (in seconds)
    const delayBeforeHighlighting = 10
    
    setTimeout(() => {
        for (let index = 0; index < highlightedElements.length; index++) {

            setTimeout(() => {
                const element = highlightedElements[index]

                element.style.cssText += 'background-color: white;'

                setTimeout(() => {
                    element.style.cssText -= 'background-color: white;'
                }, 3000);
            }, index * 5000)
        }
    }, delayBeforeHighlighting * 1000)

    const musicLink = document.getElementById('music-link')
    musicLink.href = './pages/music.html#me'
}