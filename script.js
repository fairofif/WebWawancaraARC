$(document).ready(function(){
    $('#show-notification').on('click', function(){
        $('.notification').fadeIn(200);
        setTimeout(function(){
            $('.notification').show();
        }, 200)
    })

    $('.notification').on('click', function(){
        window.open('https://www.linkedin.com/in/rofif-fairuz-hawary-637ba6190/');
        $('.notification').fadeIn(200);
        setTimeout(function(){
            $('.notification').hide();
        }, 200)
    })
});