//check header scrolled
var header = document.querySelector("#header");
var review = document.querySelector("#review");
var checkCounter = false;
const reviewOffsetTop = review.offsetTop;

window.onscroll = () => {
    const windowOffsetTop = document.documentElement.scrollTop;
    if (windowOffsetTop > 50) {
        header.classList.add("scrolled");
        if(windowOffsetTop >= reviewOffsetTop && !checkCounter){
            checkCounter = true;
            counterAnim("#counter1", 0, 2536, 800);
            counterAnim("#counter2", 0, 7562, 800);
            counterAnim("#counter3", 0, 2013, 800);
            counterAnim("#counter4", 0, 10536, 800);
        }
    }else {
        header.classList.remove("scrolled");
    }
}

//counter

const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) {
            startTimestamp = timestamp;
        }
        // console.log('timestamp: ',timestamp)
        // console.log('startTimestamp: ',startTimestamp)
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // console.log('progress: ',progress)
        target.innerText = Math.floor(progress * (end - start) + start);
        // console.log('value: ',Math.floor(progress * (end - start) + start))
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

//nav-mobile

const overLay = document.querySelector(".nav__bg")
const nav_item = document.querySelector(".nav-content ul")
const checkbox = document.querySelector("#nav__checkbox");

overLay.onclick = () => {
    checkbox.checked = false;
}  

nav_item.onclick = () => {
    checkbox.checked = false;
}  




