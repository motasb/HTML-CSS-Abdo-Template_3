
let nums = document.querySelectorAll(".stats .box span:first-of-type");
let sectionStats = document.querySelector(".stats");
let started = false;

let skillsSection = document.querySelector(".our_skills");
let spansProg = document.querySelectorAll(".progress span");

window.onscroll = function () {
    if (window.scrollY >= sectionStats.offsetTop - 300) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }

    if (window.scrollY >= skillsSection.offsetTop - 300) {
        spansProg.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}

function startCount(ele) {
    let goal = ele.dataset.goal;
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent === goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
let countDownDate = new Date(" oct 6 , 2024 23:59:59").getTime();

let counter = setInterval(() => {

    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / ( 1000 * 60 * 60));
    
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / ( 1000 * 60 ));
    
    let seconds = Math.floor(dateDiff % (1000 * 60 ) / (1000));

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}`:days ;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`:hours ;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`:minutes ;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`:seconds ;

    if (dateDiff <  0) {
        clearInterval(counter);
    }
},1000)