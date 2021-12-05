// var test = document.getElementById("test");

document.onscroll = function() {

		scrollTop = window.pageYOffset;
    // test.innerHTML = scrollTop;
    
    allDivs = document.getElementsByClassName('testcolor');

    for( i=0; i< allDivs.length; i++ )
    {
    		curDiv = allDivs[i];
        
        
        // The code below makes the background color change when the 						scroll top passes the 2/3 of the previous div.
        
        heightBefore = 0;    
        if (i > 0){
        		heightBefore = allDivs[i-1].offsetHeight / 3;
        }
        
        if (scrollTop > curDiv.offsetTop - heightBefore){
                color = curDiv.getAttribute("data-color");
                console.log(color)
          	document.body.style.background = color;
        }
                
    }
};

// CURSOR
var cursor = $(".cursor-new");
// follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 16;
    posY += (mouseY - posY) / 16;

    // TweenMax.set(follower, {
    //     css: {
    //     left: posX - 12,
    //     top: posY - 12
    //     }
    // });

    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX+12;
    mouseY = e.clientY+12;
});
// yellow circle
$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    // follower.addClass("active");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    // follower.removeClass("active");
});