$(document).ready( () =>{

    console.log("jquery");

    $('.stregatto').on('mousedown', function (){

        $(this).addClass('active-stregatto').parents().on('mousemove', function (e) {
    
            $('.active-stregatto').offset({
    
                top: e.pageY - $('.active-stregatto').outerHeight() / 2,
                left: e.pageX - $('.active-stregatto').outerWidth() / 2
    
            }).on('mouseup', function () {
    
                $(this).removeClass('active-stregatto');
    
            });
            
        });
        
        return false;    
    });


})