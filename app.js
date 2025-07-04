const noname = document.getElementById("memaybeo");
const audio = document.getElementById("audio");
const p = document.getElementById("button");
const title = document.getElementById("hellogays");
noname.addEventListener('click', function () {
    noname.classList.add('memaybeo');
    p.classList.add('memaybeo2');
    audio.play();
    audio.loop = true;

    setTimeout(function() {
        if (noname) {
            noname.parentNode.removeChild(noname);
        }
    }, 2100);
});
var text = title.textContent;
console.log(text)
title.textContent = "";
let istype = false
setTimeout(function() {
    let i = 0;

    function troi() {
        if (!istype) {
            if (i < text.length) {
                title.textContent += text[i] === " " ? "\u00A0" : text[i];
                i++;
                setTimeout(troi, 200);
            } else {
                istype = true;
                setTimeout(troi, 1000);
            }
        } else {
            if (i > 0) {
                title.textContent = title.textContent.slice(0, -1);
                i--;
                setTimeout(troi, 100);
            } else {
                istype = false;
                setTimeout(troi, 500);
            }
        }
    }
    troi();
}, 1000)