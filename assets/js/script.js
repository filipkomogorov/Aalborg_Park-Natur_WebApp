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

// FILTER
let filter = document.querySelector('.filter');
let filterBtn = document.querySelector('#filter-btm-nav');
let closeFilter = document.querySelector('#filter-close');
let filterBtn2 = document.querySelector('#filter-nav');

filterBtn.addEventListener('click', function () {
    showFilter();
});

filterBtn2.addEventListener('click', function () {
    showFilter()
})

closeFilter.addEventListener('click', function () {
    filter.classList.add('hide');
})

let showFilter = function () {
    filter.classList.toggle('hide');
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

let egholmInfoBtn = document.querySelector('#route-one-info-btn');
let egholmFloraBtn = document.querySelector('#route-one-flora-btn');
let egholmFaunaBtn = document.querySelector('#route-one-fauna-btn');
let egholmTrailBtn = document.querySelector('#route-one-trail-btn');
let egholmChlgBtn = document.querySelector('#route-one-challenge-btn');

let egholmInfo = document.querySelector('#route-one-info');
let egholmFlora = document.querySelector('#route-one-flora');
let egholmTrail = document.querySelector('#route-one-trails');
let egholmChlg = document.querySelector('#route-one-challenges');
let egholmFauna = document.querySelector('#route-one-fauna');


egholmInfoBtn.addEventListener('click', function () {
    subPageInteraction();
    egholmInfoBtn.classList.add('route-section-selected');
    egholmInfo.classList.replace('hide', 'show');
});

egholmFloraBtn.addEventListener('click', function () {
    subPageInteraction();
    egholmFloraBtn.classList.add('route-section-selected');
    egholmFlora.classList.replace('hide', 'show');
});

egholmFaunaBtn.addEventListener('click', function () {
    subPageInteraction();
    egholmFaunaBtn.classList.add('route-section-selected');
    egholmFauna.classList.replace('hide', 'show');
});

egholmTrailBtn.addEventListener('click', function () {
    subPageInteraction();
    egholmTrailBtn.classList.add('route-section-selected');
    egholmTrail.classList.replace('hide', 'show');
});

egholmChlgBtn.addEventListener('click', function () {
    subPageInteraction();
    egholmChlgBtn.classList.add('route-section-selected');
    egholmChlg.classList.replace('hide', 'show');
});


/* CODE FOR INIDIVIDUAL ROUTE FOR ostergadenNord */

let ostergadenNordInfoBtn = document.querySelector('#route-two-info-btn');
let ostergadenNordFloraBtn = document.querySelector('#route-two-flora-btn');
let ostergadenNordFaunaBtn = document.querySelector('#route-two-fauna-btn');
let ostergadenNordTrailBtn = document.querySelector('#route-two-trail-btn');
let ostergadenNordChlgBtn = document.querySelector('#route-two-challenge-btn');

let ostergadenNordInfo = document.querySelector('#route-two-info');
let ostergadenNordFlora = document.querySelector('#route-two-flora');
let ostergadenNordTrail = document.querySelector('#route-two-trails');
let ostergadenNordChlg = document.querySelector('#route-two-challenges');
let ostergadenNordFauna = document.querySelector('#route-two-fauna');


ostergadenNordInfoBtn.addEventListener('click', function () {
    subPageInteraction();
    ostergadenNordInfoBtn.classList.add('route-section-selected');
    ostergadenNordInfo.classList.replace('hide', 'show');
});

ostergadenNordFloraBtn.addEventListener('click', function () {
    subPageInteraction();
    ostergadenNordFloraBtn.classList.add('route-section-selected');
    ostergadenNordFlora.classList.replace('hide', 'show');
});

ostergadenNordFaunaBtn.addEventListener('click', function () {
    subPageInteraction();
    ostergadenNordFaunaBtn.classList.add('route-section-selected');
    ostergadenNordFauna.classList.replace('hide', 'show');
});

ostergadenNordTrailBtn.addEventListener('click', function () {
    subPageInteraction();
    ostergadenNordTrailBtn.classList.add('route-section-selected');
    ostergadenNordTrail.classList.replace('hide', 'show');
});

ostergadenNordChlgBtn.addEventListener('click', function () {
    subPageInteraction();
    ostergadenNordChlgBtn.classList.add('route-section-selected');
    ostergadenNordChlg.classList.replace('hide', 'show');
});


/* CODE FOR INIDIVIDUAL ROUTE FOR ostergadenNord */

let ostergadenSydInfoBtn = document.querySelector('#route-three-info-btn');
let ostergadenSydFloraBtn = document.querySelector('#route-three-flora-btn');
let ostergadenSydFaunaBtn = document.querySelector('#route-three-fauna-btn');
let ostergadenSydTrailBtn = document.querySelector('#route-three-trail-btn');
let ostergadenSydChlgBtn = document.querySelector('#route-three-challenge-btn');

let ostergadenSydInfo = document.querySelector('#route-three-info');
let ostergadenSydFlora = document.querySelector('#route-three-flora');
let ostergadenSydTrail = document.querySelector('#route-three-trails');
let ostergadenSydChlg = document.querySelector('#route-three-challenges');
let ostergadenSydFauna = document.querySelector('#route-three-fauna');


ostergadenSydInfoBtn.addEventListener('click', function () {
    subPageInteraction();
    ostergadenSydInfoBtn.classList.add('route-section-selected');
    ostergadenSydInfo.classList.replace('hide', 'show');
});

ostergadenSydFloraBtn.addEventListener('click', function () {
    subPageInteraction();
    ostergadenSydFloraBtn.classList.add('route-section-selected');
    ostergadenSydFlora.classList.replace('hide', 'show');
});

ostergadenSydFaunaBtn.addEventListener('click', function () {
    subPageInteraction();
    ostergadenSydFaunaBtn.classList.add('route-section-selected');
    ostergadenSydFauna.classList.replace('hide', 'show');
});

ostergadenSydTrailBtn.addEventListener('click', function () {
    subPageInteraction();
    ostergadenSydTrailBtn.classList.add('route-section-selected');
    ostergadenSydTrail.classList.replace('hide', 'show');
});

ostergadenSydChlgBtn.addEventListener('click', function () {
    subPageInteraction();
    ostergadenSydChlgBtn.classList.add('route-section-selected');
    ostergadenSydChlg.classList.replace('hide', 'show');
});

/* CODE FOR INIDIVIDUAL ROUTE FOR Bjergbanestien */

let bjergbanestienInfoBtn = document.querySelector('#route-four-info-btn');
let bjergbanestienFloraBtn = document.querySelector('#route-four-flora-btn');
let bjergbanestienFaunaBtn = document.querySelector('#route-four-fauna-btn');
let bjergbanestienTrailBtn = document.querySelector('#route-four-trail-btn');
let bjergbanestienChlgBtn = document.querySelector('#route-four-challenge-btn');

let bjergbanestienInfo = document.querySelector('#route-four-info');
let bjergbanestienFlora = document.querySelector('#route-four-flora');
let bjergbanestienTrail = document.querySelector('#route-four-trails');
let bjergbanestienChlg = document.querySelector('#route-four-challenges');
let bjergbanestienFauna = document.querySelector('#route-four-fauna');


bjergbanestienInfoBtn.addEventListener('click', function () {
    subPageInteraction();
    bjergbanestienInfoBtn.classList.add('route-section-selected');
    bjergbanestienInfo.classList.replace('hide', 'show');
});

bjergbanestienFloraBtn.addEventListener('click', function () {
    subPageInteraction();
    bjergbanestienFloraBtn.classList.add('route-section-selected');
    bjergbanestienFlora.classList.replace('hide', 'show');
});

bjergbanestienFaunaBtn.addEventListener('click', function () {
    subPageInteraction();
    bjergbanestienFaunaBtn.classList.add('route-section-selected');
    bjergbanestienFauna.classList.replace('hide', 'show');
});

bjergbanestienTrailBtn.addEventListener('click', function () {
    subPageInteraction();
    bjergbanestienTrailBtn.classList.add('route-section-selected');
    bjergbanestienTrail.classList.replace('hide', 'show');
});

bjergbanestienChlgBtn.addEventListener('click', function () {
    subPageInteraction();
    bjergbanestienChlgBtn.classList.add('route-section-selected');
    bjergbanestienChlg.classList.replace('hide', 'show');
});


/* CODE FOR INIDIVIDUAL ROUTE FOR mulbjerge */

let mulbjergeInfoBtn = document.querySelector('#route-five-info-btn');
let mulbjergeFloraBtn = document.querySelector('#route-five-flora-btn');
let mulbjergeFaunaBtn = document.querySelector('#route-five-fauna-btn');
let mulbjergeTrailBtn = document.querySelector('#route-five-trail-btn');
let mulbjergeChlgBtn = document.querySelector('#route-five-challenge-btn');

let mulbjergeInfo = document.querySelector('#route-five-info');
let mulbjergeFlora = document.querySelector('#route-five-flora');
let mulbjergeTrail = document.querySelector('#route-five-trails');
let mulbjergeChlg = document.querySelector('#route-five-challenges');
let mulbjergeFauna = document.querySelector('#route-five-fauna');


mulbjergeInfoBtn.addEventListener('click', function () {
    subPageInteraction();
    mulbjergeInfoBtn.classList.add('route-section-selected');
    mulbjergeInfo.classList.replace('hide', 'show');
});

mulbjergeFloraBtn.addEventListener('click', function () {
    subPageInteraction();
    mulbjergeFloraBtn.classList.add('route-section-selected');
    mulbjergeFlora.classList.replace('hide', 'show');
});

mulbjergeFaunaBtn.addEventListener('click', function () {
    subPageInteraction();
    mulbjergeFaunaBtn.classList.add('route-section-selected');
    mulbjergeFauna.classList.replace('hide', 'show');
});

mulbjergeTrailBtn.addEventListener('click', function () {
    subPageInteraction();
    mulbjergeTrailBtn.classList.add('route-section-selected');
    mulbjergeTrail.classList.replace('hide', 'show');
});

mulbjergeChlgBtn.addEventListener('click', function () {
    subPageInteraction();
    mulbjergeChlgBtn.classList.add('route-section-selected');
    mulbjergeChlg.classList.replace('hide', 'show');
});

/* CODE FOR INIDIVIDUAL ROUTE FOR Poulstrup */

let poulstrupInfoBtn = document.querySelector('#route-six-info-btn');
let poulstrupFloraBtn = document.querySelector('#route-six-flora-btn');
let poulstrupFaunaBtn = document.querySelector('#route-six-fauna-btn');
let poulstrupTrailBtn = document.querySelector('#route-six-trail-btn');
let poulstrupChlgBtn = document.querySelector('#route-six-challenge-btn');

let poulstrupInfo = document.querySelector('#route-six-info');
let poulstrupFlora = document.querySelector('#route-six-flora');
let poulstrupTrail = document.querySelector('#route-six-trails');
let poulstrupChlg = document.querySelector('#route-six-challenges');
let poulstrupFauna = document.querySelector('#route-six-fauna');


poulstrupInfoBtn.addEventListener('click', function () {
    subPageInteraction();
    poulstrupInfoBtn.classList.add('route-section-selected');
    poulstrupInfo.classList.replace('hide', 'show');
});

poulstrupFloraBtn.addEventListener('click', function () {
    subPageInteraction();
    poulstrupFloraBtn.classList.add('route-section-selected');
    poulstrupFlora.classList.replace('hide', 'show');
});

poulstrupFaunaBtn.addEventListener('click', function () {
    subPageInteraction();
    poulstrupFaunaBtn.classList.add('route-section-selected');
    poulstrupFauna.classList.replace('hide', 'show');
});

poulstrupTrailBtn.addEventListener('click', function () {
    subPageInteraction();
    poulstrupTrailBtn.classList.add('route-section-selected');
    poulstrupTrail.classList.replace('hide', 'show');
});

poulstrupChlgBtn.addEventListener('click', function () {
    subPageInteraction();
    poulstrupChlgBtn.classList.add('route-section-selected');
    poulstrupChlg.classList.replace('hide', 'show');
});


let subPageInteraction = function () {
    let btns = document.getElementsByClassName('control-btn');
    let content = document.getElementsByClassName('control-content')
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('route-section-selected');
        content[i].classList.add('hide');
        content[i].classList.remove('show');
    }
};




