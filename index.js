$(document).ready(function(){

    $('.sidenav').sidenav();
});




$(document).ready(function(){

    $("#le").click(function(){$(this).hide();});
});

$(document).ready(function(){
    $('.carousel').carousel({
        indicators:true
    });

    autoplay();
    function autoplay(){
        $('.carousel').carousel('next');
        setTimeout(autoplay, 10000);
    }
})