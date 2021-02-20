
document.querySelector('#hamburger-menu').addEventListener('click',function(){
document.querySelector('#nav-menu').classList.toggle('show')
});

document.querySelector('#hamburger-menu').addEventListener('click',function(){
    document.querySelector('#hamburger-menu').classList.toggle('X')
    });



document.querySelector('#route-one-flora-btn').addEventListener('click', function () {

    if (document.querySelector('#route-one-flora').classList.contains('show')) {
    } else {
        showFirstRouteFlora()
    }
});

document.querySelector('#route-one-info-btn').addEventListener('click', function () {
    if (document.querySelector('#route-one-info-btn').classList.contains('route-section-selected')) {
    } else {
        showFirstRouteInfo()
    }
});

document.querySelector('#route-one-fauna-btn').addEventListener('click', function () {
    if (document.querySelector('#route-one-fauna').classList.contains('show')) {
    } else {
        showFirstRouteFauna();
    }
})

document.querySelector('#route-one-trail-btn').addEventListener('click', function () {
    if (document.querySelector('#route-one-trails').classList.contains('show')) { }
    else {
        showfirstRouteTrails()
    }
})

document.querySelector('#route-one-challenge-btn').addEventListener('click', function () {
    if (document.querySelector('#route-one-challenges').classList.contains('show')) {
    } else {
        showFirstRouteChallenge()
    }
})

function showFirstRouteFauna() {
    document.querySelector('#route-one-fauna').classList.toggle('show');
    document.querySelector('#route-one-fauna-btn').classList.add('route-section-selected')
    document.querySelector('#route-one-flora').classList.replace('show', 'hide')
    document.querySelector('#route-one-info').classList.replace('show', 'hide')
    document.querySelector('#route-one-trails').classList.replace('show', 'hide')
    document.querySelector('#route-one-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-one-info-btn').classList.remove('route-section-selected')
    document.querySelector('#route-one-flora-btn').classList.remove('route-section-selected')
    document.querySelector('#route-one-challenge-btn').classList.remove('route-section-selected')
    document.querySelector('#route-one-trail-btn').classList.remove('route-section-selected')
}

function showFirstRouteFlora() {
    document.querySelector('#route-one-flora').classList.add('show');
    document.querySelector('#route-one-flora-btn').classList.add('route-section-selected');
    document.querySelector('#route-one-info').classList.replace('show', 'hide')
    document.querySelector('#route-one-trails').classList.replace('show', 'hide')
    document.querySelector('#route-one-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-one-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-one-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-one-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-one-challenge-btn').classList.remove('route-section-selected');
    document.querySelector('#route-one-trail-btn').classList.remove('route-section-selected');
}

function showFirstRouteInfo() {
    document.querySelector('#route-one-info').classList.add('show');
    document.querySelector('#route-one-info-btn').classList.add('route-section-selected');
    document.querySelector('#route-one-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-one-flora').classList.replace('show', 'hide')
    document.querySelector('#route-one-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-one-trails').classList.replace('show', 'hide')
    document.querySelector('#route-one-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-one-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-one-challenge-btn').classList.remove('route-section-selected');
    document.querySelector('#route-one-trail-btn').classList.remove('route-section-selected');
}

function showFirstRouteChallenge() {
    document.querySelector('#route-one-challenges').classList.add('show');
    document.querySelector('#route-one-challenge-btn').classList.add('route-section-selected');
    document.querySelector('#route-one-flora').classList.replace('show', 'hide')
    document.querySelector('#route-one-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-one-info').classList.replace('show', 'hide')
    document.querySelector('#route-one-trails').classList.replace('show', 'hide')
    document.querySelector('#route-one-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-one-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-one-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-one-trail-btn').classList.remove('route-section-selected');
}

function showfirstRouteTrails() {
    document.querySelector('#route-one-trails').classList.add('show');
    document.querySelector('#route-one-trail-btn').classList.add('route-section-selected');
    document.querySelector('#route-one-flora').classList.replace('show', 'hide')
    document.querySelector('#route-one-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-one-info').classList.replace('show', 'hide')
    document.querySelector('#route-one-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-one-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-one-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-one-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-one-challenge-btn').classList.remove('route-section-selected');
}

