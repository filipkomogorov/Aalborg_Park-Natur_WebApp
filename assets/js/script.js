// VARIABLES

const egholmPage = document.querySelector('#egholm-ind');
const ostergadenNordPage = document.querySelector('#ostergadenNord-ind');
const ostergadenSydPage = document.querySelector('#ostergadenSyd-ind');
const bjergbanestienPage = document.querySelector('#bjergbanestien-ind');
const mulbjergePage = document.querySelector('#mulbjerge-ind');
const poulstrupPage = document.querySelector('#poulstrup-ind');


document.querySelector('#hamburger-menu').addEventListener('click', function () {
    document.querySelector('#nav-menu').classList.toggle('show-nav')
});

document.querySelector('#hamburger-menu').addEventListener('click', function () {
    document.querySelector('#hamburger-menu').classList.toggle('X')
});

document.querySelector('#profile-icon').addEventListener('click', function () {
    hidePages();
    document.querySelector('#profile').classList.replace('hide', 'show');
    window.scrollTo(0, 0);
});

document.querySelector('#profile-btn').addEventListener('click', function () {
    hidePages();
    document.querySelector('#profile').classList.replace('hide', 'show');
    window.scrollTo(0, 0);
})

let hidePages = function () {
    let pages = document.getElementsByClassName('control');
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.add('hide');
        pages[i].classList.remove('show');
    }
}


/* CODE FOR LANDING PAGE*/

document.querySelector('#egholm').addEventListener('click', function () {
    document.querySelector('#main-page').classList.add('hide');
    document.querySelector('#egholm-ind').classList.replace('hide', 'show')
    window.scrollTo(0, 0);
});

document.querySelector('#ostergadenNord').addEventListener('click', function () {
    document.querySelector('#main-page').classList.add('hide');
    document.querySelector('#ostergadenNord-ind').classList.replace('hide', 'show')
    window.scrollTo(0, 0);
});

document.querySelector('#ostergadenSyd').addEventListener('click', function () {
    document.querySelector('#main-page').classList.add('hide');
    document.querySelector('#ostergadenSyd-ind').classList.replace('hide', 'show')
    window.scrollTo(0, 0);
})

document.querySelector('#bjergbanestien').addEventListener('click', function () {
    document.querySelector('#main-page').classList.add('hide');
    document.querySelector('#bjergbanestien-ind').classList.replace('hide', 'show')
    window.scrollTo(0, 0);
})

document.querySelector('#mulbjerge').addEventListener('click', function () {
    document.querySelector('#main-page').classList.add('hide');
    document.querySelector('#mulbjerge-ind').classList.replace('hide', 'show')
    window.scrollTo(0, 0);
})

document.querySelector('#poulstrup').addEventListener('click', function () {
    document.querySelector('#main-page').classList.add('hide');
    document.querySelector('#poulstrup-ind').classList.replace('hide', 'show')
    window.scrollTo(0, 0);
});


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

/* CODE FOR INIDIVIDUAL ROUTE FOR bjergbanestien */


document.querySelector('#route-four-flora-btn').addEventListener('click', function () {

    if (document.querySelector('#route-four-flora').classList.contains('show')) {
    } else {
        showFourthRouteFlora()
    }
});

document.querySelector('#route-four-info-btn').addEventListener('click', function () {
    if (document.querySelector('#route-four-info-btn').classList.contains('route-section-selected')) {
    } else {
        showFourthRouteInfo()
    }
});

document.querySelector('#route-four-fauna-btn').addEventListener('click', function () {
    if (document.querySelector('#route-four-fauna').classList.contains('show')) {
    } else {
        showFourthRouteFauna();
    }
})

document.querySelector('#route-four-trail-btn').addEventListener('click', function () {
    if (document.querySelector('#route-four-trails').classList.contains('show')) { }
    else {
        showFourthRouteTrails()
    }
})

document.querySelector('#route-four-challenge-btn').addEventListener('click', function () {
    if (document.querySelector('#route-four-challenges').classList.contains('show')) {
    } else {
        showFourthRouteChallenge()
    }
})

function showFourthRouteFauna() {
    document.querySelector('#route-four-fauna').classList.toggle('show');
    document.querySelector('#route-four-fauna-btn').classList.add('route-section-selected')
    document.querySelector('#route-four-flora').classList.replace('show', 'hide')
    document.querySelector('#route-four-info').classList.replace('show', 'hide')
    document.querySelector('#route-four-trails').classList.replace('show', 'hide')
    document.querySelector('#route-four-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-four-info-btn').classList.remove('route-section-selected')
    document.querySelector('#route-four-flora-btn').classList.remove('route-section-selected')
    document.querySelector('#route-four-challenge-btn').classList.remove('route-section-selected')
    document.querySelector('#route-four-trail-btn').classList.remove('route-section-selected')
}

function showFourthRouteFlora() {
    document.querySelector('#route-four-flora').classList.add('show');
    document.querySelector('#route-four-flora-btn').classList.add('route-section-selected');
    document.querySelector('#route-four-info').classList.replace('show', 'hide')
    document.querySelector('#route-four-trails').classList.replace('show', 'hide')
    document.querySelector('#route-four-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-four-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-four-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-four-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-four-challenge-btn').classList.remove('route-section-selected');
    document.querySelector('#route-four-trail-btn').classList.remove('route-section-selected');
}

function showFourthRouteInfo() {
    document.querySelector('#route-four-info').classList.add('show');
    document.querySelector('#route-four-info-btn').classList.add('route-section-selected');
    document.querySelector('#route-four-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-four-flora').classList.replace('show', 'hide')
    document.querySelector('#route-four-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-four-trails').classList.replace('show', 'hide')
    document.querySelector('#route-four-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-four-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-four-challenge-btn').classList.remove('route-section-selected');
    document.querySelector('#route-four-trail-btn').classList.remove('route-section-selected');
}

function showFourthRouteChallenge() {
    document.querySelector('#route-four-challenges').classList.add('show');
    document.querySelector('#route-four-challenge-btn').classList.add('route-section-selected');
    document.querySelector('#route-four-flora').classList.replace('show', 'hide')
    document.querySelector('#route-four-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-four-info').classList.replace('show', 'hide')
    document.querySelector('#route-four-trails').classList.replace('show', 'hide')
    document.querySelector('#route-four-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-four-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-four-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-four-trail-btn').classList.remove('route-section-selected');
}

function showFourthRouteTrails() {
    document.querySelector('#route-four-trails').classList.add('show');
    document.querySelector('#route-four-trail-btn').classList.add('route-section-selected');
    document.querySelector('#route-four-flora').classList.replace('show', 'hide')
    document.querySelector('#route-four-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-four-info').classList.replace('show', 'hide')
    document.querySelector('#route-four-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-four-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-four-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-four-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-four-challenge-btn').classList.remove('route-section-selected');
}



/* CODE FOR INIDIVIDUAL ROUTE FOR Mulbjerge */


document.querySelector('#route-five-flora-btn').addEventListener('click', function () {

    if (document.querySelector('#route-five-flora').classList.contains('show')) {
    } else {
        showFifthRouteFlora()
    }
});

document.querySelector('#route-five-info-btn').addEventListener('click', function () {
    if (document.querySelector('#route-five-info-btn').classList.contains('route-section-selected')) {
    } else {
        showFifthRouteInfo()
    }
});

document.querySelector('#route-five-fauna-btn').addEventListener('click', function () {
    if (document.querySelector('#route-five-fauna').classList.contains('show')) {
    } else {
        showFifthRouteFauna();
    }
});

document.querySelector('#route-five-trail-btn').addEventListener('click', function () {
    if (document.querySelector('#route-five-trails').classList.contains('show')) { }
    else {
        showFifthRouteTrails()
    }
})

document.querySelector('#route-five-challenge-btn').addEventListener('click', function () {
    if (document.querySelector('#route-five-challenges').classList.contains('show')) {
    } else {
        showFifthRouteChallenge()
    }
})

function showFifthRouteFauna() {
    document.querySelector('#route-five-fauna').classList.toggle('show');
    document.querySelector('#route-five-fauna-btn').classList.add('route-section-selected')
    document.querySelector('#route-five-flora').classList.replace('show', 'hide')
    document.querySelector('#route-five-info').classList.replace('show', 'hide')
    document.querySelector('#route-five-trails').classList.replace('show', 'hide')
    document.querySelector('#route-five-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-five-info-btn').classList.remove('route-section-selected')
    document.querySelector('#route-five-flora-btn').classList.remove('route-section-selected')
    document.querySelector('#route-five-challenge-btn').classList.remove('route-section-selected')
    document.querySelector('#route-five-trail-btn').classList.remove('route-section-selected')
}

function showFifthRouteFlora() {
    document.querySelector('#route-five-flora').classList.add('show');
    document.querySelector('#route-five-flora-btn').classList.add('route-section-selected');
    document.querySelector('#route-five-info').classList.replace('show', 'hide')
    document.querySelector('#route-five-trails').classList.replace('show', 'hide')
    document.querySelector('#route-five-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-five-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-five-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-five-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-five-challenge-btn').classList.remove('route-section-selected');
    document.querySelector('#route-five-trail-btn').classList.remove('route-section-selected');
}

function showFifthRouteInfo() {
    document.querySelector('#route-five-info').classList.add('show');
    document.querySelector('#route-five-info-btn').classList.add('route-section-selected');
    document.querySelector('#route-five-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-five-flora').classList.replace('show', 'hide')
    document.querySelector('#route-five-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-five-trails').classList.replace('show', 'hide')
    document.querySelector('#route-five-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-five-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-five-challenge-btn').classList.remove('route-section-selected');
    document.querySelector('#route-five-trail-btn').classList.remove('route-section-selected');
}

function showFifthRouteChallenge() {
    document.querySelector('#route-five-challenges').classList.add('show');
    document.querySelector('#route-five-challenge-btn').classList.add('route-section-selected');
    document.querySelector('#route-five-flora').classList.replace('show', 'hide')
    document.querySelector('#route-five-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-five-info').classList.replace('show', 'hide')
    document.querySelector('#route-five-trails').classList.replace('show', 'hide')
    document.querySelector('#route-five-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-five-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-five-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-five-trail-btn').classList.remove('route-section-selected');
}

function showFifthRouteTrails() {
    document.querySelector('#route-five-trails').classList.add('show');
    document.querySelector('#route-five-trail-btn').classList.add('route-section-selected');
    document.querySelector('#route-five-flora').classList.replace('show', 'hide')
    document.querySelector('#route-five-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-five-info').classList.replace('show', 'hide')
    document.querySelector('#route-five-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-five-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-five-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-five-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-five-challenge-btn').classList.remove('route-section-selected');
}




/* CODE FOR INIDIVIDUAL ROUTE FOR Poulstrup */


document.querySelector('#route-six-flora-btn').addEventListener('click', function () {

    if (document.querySelector('#route-six-flora').classList.contains('show')) {
    } else {
        showSixthRouteFlora()
    }
});

document.querySelector('#route-six-info-btn').addEventListener('click', function () {
    if (document.querySelector('#route-six-info-btn').classList.contains('route-section-selected')) {
    } else {
        showSixthRouteInfo()
    }
});

document.querySelector('#route-six-fauna-btn').addEventListener('click', function () {
    if (document.querySelector('#route-six-fauna').classList.contains('show')) {
    } else {
        showSixthRouteFauna();
    }
})

document.querySelector('#route-six-trail-btn').addEventListener('click', function () {
    if (document.querySelector('#route-six-trails').classList.contains('show')) { }
    else {
        showSixthRouteTrails()
    }
})

document.querySelector('#route-six-challenge-btn').addEventListener('click', function () {
    if (document.querySelector('#route-six-challenges').classList.contains('show')) {
    } else {
        showSixthRouteChallenge()
    }
})

function showSixthRouteFauna() {
    document.querySelector('#route-six-fauna').classList.toggle('show');
    document.querySelector('#route-six-fauna-btn').classList.add('route-section-selected')
    document.querySelector('#route-six-flora').classList.replace('show', 'hide')
    document.querySelector('#route-six-info').classList.replace('show', 'hide')
    document.querySelector('#route-six-trails').classList.replace('show', 'hide')
    document.querySelector('#route-six-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-six-info-btn').classList.remove('route-section-selected')
    document.querySelector('#route-six-flora-btn').classList.remove('route-section-selected')
    document.querySelector('#route-six-challenge-btn').classList.remove('route-section-selected')
    document.querySelector('#route-six-trail-btn').classList.remove('route-section-selected')
}

function showSixthRouteFlora() {
    document.querySelector('#route-six-flora').classList.add('show');
    document.querySelector('#route-six-flora-btn').classList.add('route-section-selected');
    document.querySelector('#route-six-info').classList.replace('show', 'hide')
    document.querySelector('#route-six-trails').classList.replace('show', 'hide')
    document.querySelector('#route-six-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-six-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-six-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-six-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-six-challenge-btn').classList.remove('route-section-selected');
    document.querySelector('#route-six-trail-btn').classList.remove('route-section-selected');
}

function showSixthRouteInfo() {
    document.querySelector('#route-six-info').classList.add('show');
    document.querySelector('#route-six-info-btn').classList.add('route-section-selected');
    document.querySelector('#route-six-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-six-flora').classList.replace('show', 'hide')
    document.querySelector('#route-six-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-six-trails').classList.replace('show', 'hide')
    document.querySelector('#route-six-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-six-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-six-challenge-btn').classList.remove('route-section-selected');
    document.querySelector('#route-six-trail-btn').classList.remove('route-section-selected');
}

function showSixthRouteChallenge() {
    document.querySelector('#route-six-challenges').classList.add('show');
    document.querySelector('#route-six-challenge-btn').classList.add('route-section-selected');
    document.querySelector('#route-six-flora').classList.replace('show', 'hide')
    document.querySelector('#route-six-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-six-info').classList.replace('show', 'hide')
    document.querySelector('#route-six-trails').classList.replace('show', 'hide')
    document.querySelector('#route-six-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-six-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-six-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-six-trail-btn').classList.remove('route-section-selected');
}

function showSixthRouteTrails() {
    document.querySelector('#route-six-trails').classList.add('show');
    document.querySelector('#route-six-trail-btn').classList.add('route-section-selected');
    document.querySelector('#route-six-flora').classList.replace('show', 'hide')
    document.querySelector('#route-six-fauna').classList.replace('show', 'hide')
    document.querySelector('#route-six-info').classList.replace('show', 'hide')
    document.querySelector('#route-six-challenges').classList.replace('show', 'hide')
    document.querySelector('#route-six-fauna-btn').classList.remove('route-section-selected')
    document.querySelector('#route-six-flora-btn').classList.remove('route-section-selected');
    document.querySelector('#route-six-info-btn').classList.remove('route-section-selected');
    document.querySelector('#route-six-challenge-btn').classList.remove('route-section-selected');
}