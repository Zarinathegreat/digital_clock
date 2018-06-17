function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("myDigClock").innerText = time;
    }

  

setInterval(setDate, 1000);


// var elem = document.getElementById("animatedElem"),
//   left = 550,
//   lastFrame = +new Date,
//   timer;
// // Move the element on the right at ~600px/s
// timer = setInterval(function() {
//   var now2 = +new Date,
//     deltaT = now2 - lastFrame;
//   elem.style.left = ( left += 10 * deltaT / 16 ) + "px";
// // elem.style.transform = "rotateX(10deg)"
//   lastFrame = now2;
//   // clear the timer at 400px to stop the animation
//   if ( left > 600 ) {
//     clearInterval( timer );
//   }
// }, 16);

function fade() {
    
    var thisObj = this;
 
    thisObj.out = function(el, timer) {
     
        el.fadeOut( timer , function() {
            
            if ($( this ).prev().length > 0) {
            
                thisObj.out( $( this ).prev(), timer );
                
            } else {
                thisObj.in( $( "#container").find("div:first-child" ), timer );
            }
        } ) ;        
    }  
    thisObj.in = function(el, timer) {
     
        el.fadeIn( timer , function() {
            
            if ($( this ).next().length > 0) {
                
                thisObj.in( $( this ).next(), timer ) ;
                
            } else {
                thisObj.out( $( "#container").find("div:last-child" ), timer );
            }
            
        } );       
    }     
    
}

new fade().out( $( "#container").find("div:last-child" ), 980 );