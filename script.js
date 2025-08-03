const visitCountStorageKey = "timesHomerPageVisited";
let visits = localStorage.getItem(visitCountStorageKey) || 0;
localStorage.setItem(visitCountStorageKey, ++visits);
console.log(`You've visited this site ${visits} times.`)

// Restrict this value between 1 and 8 (inclusive)
const visitCountCapped = Math.min(Math.max(visits, 1), 8);
const animationMultiplier = 1 - ((visitCountCapped - 1) * 0.1);

document.documentElement.style.setProperty("--animation-speed-multiplier", animationMultiplier);

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

if (window.location.hash === '#me') {

    const highlightedElements = document.getElementsByClassName('highlighted')
    
    for (const element of highlightedElements) {
        element.style.cssText += 'border: 2px dashed;'
    }
}