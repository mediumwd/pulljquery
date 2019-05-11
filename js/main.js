$( document ).ready(function() {
    var pulling = false,
        pullObject = $('.square');
    var mouseX, mouseY;
    
    pullObject.mousedown(function(e){
        pulling = true;
        mouseX= e.pageX;
        mouseY= e.pageY;
    }); 
    $('.main').mousemove(function(e){
        if(pulling){
            var x = mouseX - e.pageX,
                y = mouseY - e.pageY;

            var pullHeight = pullObject.height(),
                pullWidth = pullObject.width(),
                pullObjectPosition = pullObject.position();
            
         
            //positioning v1.0
            //pullObject.offset({top: y-(pullHeight)/2, left: x-(pullWidth/2)});
            //positioning v1.1
            pullObjectPosition.left -= x;
            pullObjectPosition.top -= y;
            
            if (pullObjectPosition.left>0 && 
                pullObjectPosition.left < $(window).width() - pullHeight && 
                pullObjectPosition.top>0 && 
                pullObjectPosition.top < $(window).height() - pullWidth) {
                pullObject.offset({top: pullObjectPosition.top, left: pullObjectPosition.left});
            }
            
            mouseX= e.pageX,
            mouseY= e.pageY;
                
            console.log("top: " + pullObjectPosition.top + " left: " + pullObjectPosition.left);
            //x,y center of drugObject
            var screenPosition = [pullObjectPosition.left + pullWidth/2, pullObjectPosition.top + pullHeight/2];
            //drugObject background against window position
            if(screenPosition[0] < $(window).width()/2){
                if(screenPosition[1] < $(window).height()/2){
                    pullObject.css("background-color","#000");
                }
                else {
                    pullObject.css("background-color","#009999");
                }
            }
            else if(screenPosition[1] < $(window).height()/2){
                pullObject.css("background-color","#FF3300");
            }
            else {
                pullObject.css("background-color","#FF9900");
            }
            }});
    $('.main').mouseup(function(){
        pulling = false;
    }).mouseleave(function(){
        pulling = false;});
});
