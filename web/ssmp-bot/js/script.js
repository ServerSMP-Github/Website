const loading = document.getElementById("loading");
const body = document.getElementById("body");
const root = document.querySelector(":root");

root.style.setProperty("--color", `#${((1<<24)*Math.random()|[0]).toString(16)}`);

window.onload = () => setTimeout(() => {
    loading.classList.add("disabled");
    body.classList.remove("disabled")
}, 1550);

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    const link = document.createElement('link')
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/web/ssmp-bot/css/style.mobile.css';
    document.getElementsByTagName('HEAD')[0].appendChild(link);
    document.getElementById("mobile-grid-1").innerHTML = `<div class="box"><img src="./img/icon.png" width="70%" height="70%"></div><div class="box"><h1 class="box-title">ServerSMP - BOT</h1><p class="box-description">A bot for all your needs! May it be moderation, info on things from your server, or even random pictures of ducks. We have it all!</p></div>`;
    document.getElementById("mobile-grid-2").innerHTML = `<div class="box"><img src="./img/search.png" width="90%" height="90%"></div><div class="box"><h1 class="box-title">Search</h1><p class="box-description">We have a selections of commands to search websites!</p></div>`;
}