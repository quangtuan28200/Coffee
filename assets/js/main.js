//check header scrolled
var header = document.querySelector("#header");

window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");

    }
}

//counter

const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        target.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

var review = document.querySelector("#review");


document.addEventListener("DOMContentLoaded", () => {
    counterAnim("#counter1", 0, 2536, 1500);
    counterAnim("#counter2", 0, 7562, 1500);
    counterAnim("#counter3", 0, 2013, 1500);
    counterAnim("#counter4", 0, 10536, 1500);
});





