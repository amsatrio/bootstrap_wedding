simplyCountdown('.simply-countdown', {
    year: 2025, // required
    month: 10, // required
    day: 7, // required
    hours: 8, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'day', plural: 'days' },
        hours: { singular: 'hour', plural: 'hours' },
        minutes: { singular: 'minute', plural: 'minutes' },
        seconds: { singular: 'second', plural: 'seconds' }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false,
    onEnd: function () {
        // your code
        return;
    },
    refresh: 1000, //default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false, // enable count up if set to true
});

// FIX BUG NAVBAR OVERFLOW
const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");
offcanvas.addEventListener("hidden.bs.offcanvas", function () {
    stickyTop.style.overflow = "hidden";
});
offcanvas.addEventListener("show.bs.offcanvas", function () {
    stickyTop.style.overflow = "visible";
});

// HERO DISABLE SCROLL
function heroDisableScroll() {
    // let isOpened = localStorage.getItem("opened");
    // if (isOpened === "1") {
    //     return;
    // }

    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
        window.scrollTo(scrollTop, scrollLeft);
    }

    const rootElement = document.querySelector(":root");
    rootElement.style.scrollBehavior = "auto";
}
function heroEnableScroll() {
    window.onscroll = function () { }

    const rootElement = document.querySelector(":root");
    rootElement.style.scrollBehavior = "smooth";

    localStorage.setItem("opened", "1");

    playAudio();
}

heroDisableScroll();


const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
const song = document.getElementById("song");
let isAudioPlaying = false;

function playAudio() {
    console.log("play audio");

    audioIconWrapper.style.display = "flex";

    song.volume = 0.7;

    togglePlayAudio();
}

function togglePlayAudio() {
    if (isAudioPlaying === true) {
        song.pause();
        audioIcon.classList.remove("bi-disc");
        audioIcon.classList.add("bi-pause-circle");
        audioIconWrapper.style.animation = "none";
    } else {
        song.play();
        audioIcon.classList.remove("bi-pause-circle");
        audioIcon.classList.add("bi-disc");
        audioIconWrapper.style.animation = "rotation 4s linear infinite";
    }
    isAudioPlaying = !isAudioPlaying;

}

audioIconWrapper.onclick = function () {
    togglePlayAudio();
}


// SUBMIT GUEST
function submitGuest() {
    const form = document.getElementById("rsvp-confirm-guest-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const data = new FormData(form);
        const action = e.target.action;

        console.log(data);
        console.log(action);

        // it should send to backend

        alert("success");
    });
}
submitGuest();