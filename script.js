document.addEventListener("DOMContentLoaded", function() {
    const message = document.getElementById("message");
    const kalimat = document.getElementById("kalimat1");
    const kalimat2 = document.getElementById("kalimat2");
    const kalimat3 = document.getElementById("kalimat3");
    const lope = document.getElementById("lope");

    setTimeout(() => {
        message.style.animation = "fadeOut 2s forwards";
        setTimeout(() => {
            message.style.display = "none";
            kalimat.style.display = "block";
        }, 2000);
    }, 4000);

    setTimeout(() => {
        kalimat.style.animation = "fadeOut 2s forwards";
        setTimeout(() => {
            kalimat.style.display = "none";
            kalimat2.style.display = "block";
        }, 500);
    }, 15000);

    setTimeout(() => {
        kalimat2.style.animation = "fadeOut 2s forwards";
        setTimeout(() => {
            kalimat2.style.display = "none";
            kalimat3.style.display = "block";
        }, 500);
    }, 26000);

    setTimeout(() => {
        kalimat3.style.animation = "fadeOut 2s forwards";
        setTimeout(() => {
            kalimat3.style.display = "none";
            lope.style.display = "block";
        }, 500);
    }, 37500);


});