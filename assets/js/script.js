

document.querySelector('#route-one-flora-btn').addEventListener('click', function () {


    if (document.querySelector('#route-one-flora').classList.contains('show')) {
    } else {
        document.querySelector('#route-one-info').classList.toggle('hide');
        document.querySelector('#route-one-flora').classList.toggle('show');
        document.querySelector('#route-one-info-btn').classList.toggle('route-section-selected');
        document.querySelector('#route-one-flora-btn').classList.toggle('route-section-selected');
    }

});

document.querySelector('#route-one-info-btn').addEventListener('click', function () {
    if (document.querySelector('#route-one-info-btn').classList.contains('route-section-selected')) {
    } else {
        document.querySelector('#route-one-info').classList.toggle('hide');
        document.querySelector('#route-one-flora').classList.toggle('show');
        document.querySelector('#route-one-info-btn').classList.toggle('route-section-selected');
        document.querySelector('#route-one-flora-btn').classList.toggle('route-section-selected');
    }
})