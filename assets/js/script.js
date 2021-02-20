
document.querySelector('#hamburger-menu').addEventListener('click', function () {
    document.querySelector('#nav-menu').classList.toggle('show-nav')
});

document.querySelector('#hamburger-menu').addEventListener('click', function () {
    document.querySelector('#hamburger-menu').classList.toggle('X')
});



/* CODE FOR LANDING PAGE*/

document.querySelector('#egholm').addEventListener('click', function () {
    document.querySelector('#main-page').classList.add('hide');
    document.querySelector('#egholm-ind').classList.replace('hide', 'show')
});

document.querySelector('#ostergadenNord').addEventListener('click', function () {
    document.querySelector('#main-page').classList.add('hide');
    document.querySelector('#ostergadenNord-ind').classList.replace('hide', 'show')

});

document.querySelector('#ostergadenSyd').addEventListener('click', function () {
    document.querySelector('#main-page').classList.add('hide');
    document.querySelector('#ostergadenSyd-ind').classList.replace('hide', 'show')
})




/* CODE FOR INIDIVIDUAL ROUTE FOR EGHOLM */
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


/* CODE FOR INIDIVIDUAL ROUTE FOR østerådalen nord */


document.querySelector('#route-two-flora-btn').addEventListener('click', function () {

    if (document.querySelector('#route-two-flora').classList.contains('show')) {
    } else {
        showSecondRouteFlora()
    }
});

document.querySelector('#route-two-info-btn').addEventListener('click', function () {
    if (document.querySelector('#route-two-info-btn').classList.contains('route-section-selected')) {
    } else {
        showSecondRouteInfo()
    }
});

document.querySelector('#route-two-fauna-btn').addEventListener('click', function () {
    if (document.querySelector('#route-two-fauna').classList.contains('show')) {
    } else {
        showSecondRouteFauna();
    }
})

document.querySelector('#route-two-trail-btn').addEventListener('click', function () {
    if (document.querySelector('#route-two-trails').classList.contains('show')) { }
    else {
        showSecondRouteTrails()
    }
})

document.querySelector('#route-two-challenge-btn').addEventListener('click', function () {
    if (document.querySelector('#route-two-challenges').classList.contains('show')) {
    } else {
        showSecondRouteChallenge()
    }
})

function showSecondRouteFauna() {
    document.querySelector('#route-two-fauna').classList.toggle('show');
    document.querySelector('#route-two-fauna-btn').classList.add('route-section-selected')
    document.querySelector('#route-two-flora').classList.replace('show', 'hide')
    document.querySelector('#route-two-info').classList.replace('show', 'hide')
    document.querySelector('#route-two-trails').classList.replace('show', 'hide')
    document.querySelector('#route-two-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-two-info-btn').classList.remove('route-section-selected')
    document.querySelector('#route-two-flora-btn').classList.remove('route-section-selected')
    document.querySelector('#route-two-challenge-btn').classList.remove('route-section-selected')
    document.querySelector('#route-two-trail-btn').classList.remove('route-section-selected')
}

function showSecondRouteFlora() {
    document.querySelector('#route-two-flora').classList.add('show');
    document.querySelector('#route-two-flora-btn').classList.add('route-section-selected');
    document.querySelector('#route-two-info').classList.replace('show', 'hide')
    document.querySelector('#route-two-trails').classList.replace('show', 'hide')
    document.querySelector('#route-two-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-two-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-two-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-two-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-two-challenge-btn').classList.remove('route-section-selected');
    document.querySelector('#route-two-trail-btn').classList.remove('route-section-selected');
}

function showSecondRouteInfo() {
    document.querySelector('#route-two-info').classList.add('show');
    document.querySelector('#route-two-info-btn').classList.add('route-section-selected');
    document.querySelector('#route-two-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-two-flora').classList.replace('show', 'hide')
    document.querySelector('#route-two-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-two-trails').classList.replace('show', 'hide')
    document.querySelector('#route-two-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-two-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-two-challenge-btn').classList.remove('route-section-selected');
    document.querySelector('#route-two-trail-btn').classList.remove('route-section-selected');
}

function showSecondRouteChallenge() {
    document.querySelector('#route-two-challenges').classList.add('show');
    document.querySelector('#route-two-challenge-btn').classList.add('route-section-selected');
    document.querySelector('#route-two-flora').classList.replace('show', 'hide')
    document.querySelector('#route-two-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-two-info').classList.replace('show', 'hide')
    document.querySelector('#route-two-trails').classList.replace('show', 'hide')
    document.querySelector('#route-two-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-two-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-two-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-two-trail-btn').classList.remove('route-section-selected');
}

function showSecondRouteTrails() {
    document.querySelector('#route-two-trails').classList.add('show');
    document.querySelector('#route-two-trail-btn').classList.add('route-section-selected');
    document.querySelector('#route-two-flora').classList.replace('show', 'hide')
    document.querySelector('#route-two-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-two-info').classList.replace('show', 'hide')
    document.querySelector('#route-two-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-two-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-two-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-two-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-two-challenge-btn').classList.remove('route-section-selected');
}

/* CODE FOR INIDIVIDUAL ROUTE FOR østerådalen SYD */


document.querySelector('#route-three-flora-btn').addEventListener('click', function () {

    if (document.querySelector('#route-three-flora').classList.contains('show')) {
    } else {
        showThirdRouteFlora()
    }
});

document.querySelector('#route-three-info-btn').addEventListener('click', function () {
    if (document.querySelector('#route-three-info-btn').classList.contains('route-section-selected')) {
    } else {
        showThirdRouteInfo()
    }
});

document.querySelector('#route-three-fauna-btn').addEventListener('click', function () {
    if (document.querySelector('#route-three-fauna').classList.contains('show')) {
    } else {
        showThirdRouteFauna();
    }
})

document.querySelector('#route-three-trail-btn').addEventListener('click', function () {
    if (document.querySelector('#route-three-trails').classList.contains('show')) { }
    else {
        showThirdRouteTrails()
    }
})

document.querySelector('#route-three-challenge-btn').addEventListener('click', function () {
    if (document.querySelector('#route-three-challenges').classList.contains('show')) {
    } else {
        showThirdRouteChallenge()
    }
})

function showThirdRouteFauna() {
    document.querySelector('#route-three-fauna').classList.toggle('show');
    document.querySelector('#route-three-fauna-btn').classList.add('route-section-selected')
    document.querySelector('#route-three-flora').classList.replace('show', 'hide')
    document.querySelector('#route-three-info').classList.replace('show', 'hide')
    document.querySelector('#route-three-trails').classList.replace('show', 'hide')
    document.querySelector('#route-three-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-three-info-btn').classList.remove('route-section-selected')
    document.querySelector('#route-three-flora-btn').classList.remove('route-section-selected')
    document.querySelector('#route-three-challenge-btn').classList.remove('route-section-selected')
    document.querySelector('#route-three-trail-btn').classList.remove('route-section-selected')
}

function showThirdRouteFlora() {
    document.querySelector('#route-three-flora').classList.add('show');
    document.querySelector('#route-three-flora-btn').classList.add('route-section-selected');
    document.querySelector('#route-three-info').classList.replace('show', 'hide')
    document.querySelector('#route-three-trails').classList.replace('show', 'hide')
    document.querySelector('#route-three-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-three-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-three-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-three-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-three-challenge-btn').classList.remove('route-section-selected');
    document.querySelector('#route-three-trail-btn').classList.remove('route-section-selected');
}

function showThirdRouteInfo() {
    document.querySelector('#route-three-info').classList.add('show');
    document.querySelector('#route-three-info-btn').classList.add('route-section-selected');
    document.querySelector('#route-three-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-three-flora').classList.replace('show', 'hide')
    document.querySelector('#route-three-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-three-trails').classList.replace('show', 'hide')
    document.querySelector('#route-three-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-three-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-three-challenge-btn').classList.remove('route-section-selected');
    document.querySelector('#route-three-trail-btn').classList.remove('route-section-selected');
}

function showThirdRouteChallenge() {
    document.querySelector('#route-three-challenges').classList.add('show');
    document.querySelector('#route-three-challenge-btn').classList.add('route-section-selected');
    document.querySelector('#route-three-flora').classList.replace('show', 'hide')
    document.querySelector('#route-three-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-three-info').classList.replace('show', 'hide')
    document.querySelector('#route-three-trails').classList.replace('show', 'hide')
    document.querySelector('#route-three-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-three-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-three-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-three-trail-btn').classList.remove('route-section-selected');
}

function showThirdRouteTrails() {
    document.querySelector('#route-three-trails').classList.add('show');
    document.querySelector('#route-three-trail-btn').classList.add('route-section-selected');
    document.querySelector('#route-three-flora').classList.replace('show', 'hide')
    document.querySelector('#route-three-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-three-info').classList.replace('show', 'hide')
    document.querySelector('#route-three-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-three-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-three-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-three-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-three-challenge-btn').classList.remove('route-section-selected');
}

