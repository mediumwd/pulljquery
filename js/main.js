$( document ).ready(function() {
    var pulling = false,
        pullObject = $('.square');
    
    pullObject.mousedown(function(){
        pulling = true;
        $('.main').mousemove(function(event){
            var x = event.pageX,
                y = event.pageY;
            if(pulling){
                var pullHeight = pullObject.height(),
                    pullWidth = pullObject.width(),
                    pullObjectPosition = pullObject.position();
                //positioning
                pullObject.offset({top: y-(pullHeight)/2, left: x-(pullWidth/2)});
                //x,y center of drugObject
                var screenPosition = [pullObjectPosition.left + pullWidth/2, pullObjectPosition.top + pullHeight/2];
                //drugObject background
                if(screenPosition[0] < $(window).width()/2){
                    if(screenPosition[1] < $(window).height()/2){
                        pullObject.css("background-color","#000");
                    }
                    else {
                        pullObject.css("background-color","darkorange");
                    }
                }
                else if(screenPosition[1] < $(window).height()/2){
                    pullObject.css("background-color","greenyellow");
                }
                else {
                    pullObject.css("background-color","darkblue");
                }
            };
        });
    });
    pullObject.mouseup(function(){
        pulling = false;
    });
});
