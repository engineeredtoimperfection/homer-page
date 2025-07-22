const visitCountStorageKey = "timesHomerPageVisited";
let visits = localStorage.getItem(visitCountStorageKey) || 0;
localStorage.setItem(visitCountStorageKey, ++visits);
console.log(`You've visited this site ${visits} times.`)

// Restrict this value between 1 and 8 (inclusive)
const visitCountCapped = Math.min(Math.max(visits, 1), 8);
const animationMultiplier = 1 - (( visitCountCapped - 1) * 0.1 );

document.documentElement.style.setProperty("--animation-speed-multiplier", animationMultiplier);