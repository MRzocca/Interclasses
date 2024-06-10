window.addEventListener('scroll', function(){
    let header = document.querySelector ('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

window.sr = ScrollReveal({ reset : true});

sr.reveal('.titleTelaDois', {
    rotate: {x: 0, y: 80, z: 0},
    duration : 2000
});
sr.reveal('.banner-text', {
    duration : 2000,
    rotate: {x: 0, y: 80, z: 0}
});
sr.reveal('.titleTelaTres', {
    duration : 2000,
    rotate: {x: 0, y: 80, z: 0},
});
sr.reveal('.video01', {
    duration : 2000,
});
sr.reveal('p', {
    rotate: {x: 0, y: 80, z: 0},
    duration : 2000
});
sr.reveal('h1', {
    rotate: {x: 0, y: 80, z: 0},
    duration : 2000
});

function toggleMenu() {
    var header = document.getElementById("header");
    header.classList.toggle("ativo");
}
