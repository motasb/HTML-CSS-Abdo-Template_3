

let nums = document.querySelectorAll(".stats .box span:first-of-type");
let sectionStats = document.querySelector(".stats");
let started = false;

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

let skillsSection = document.querySelector(".our_skills");
let spansProg = document.querySelectorAll(".progress span");

