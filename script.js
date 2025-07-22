const visitCountStorageKey = "timesHomerPageVisited";
let visits = localStorage.getItem(visitCountStorageKey) || 0;
localStorage.setItem(visitCountStorageKey, ++visits);
console.log(`You've visited this site ${visits} times.`)

const animationMultiplier = 1 - (( visits - 1) * 0.1 );

document.documentElement.style.setProperty("--animation-speed-multiplier", animationMultiplier);