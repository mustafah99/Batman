$(document).ready(() => {
    $('.button').on('click', () => {
        $('.batman-video').fadeToggle();
    });

    $('.fa-music').on('click', () => {
        $('.dropdown').fadeToggle(500);
    });

    $('#mute').on('click', () => {
        $('.main-theme').detach();
    })

    $('#play').on('click', () => {
        $('.main-theme').append();
    })

    $('.fa-snapchat-ghost').on('click', () => {
        $('.snapdrop').fadeToggle(500);
    });
});