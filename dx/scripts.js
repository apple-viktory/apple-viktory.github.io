$(document).ready(function() {

/* online now */
var minNumber = 14494,
    maxNumber = 15395;
setTimeout(function() {          									$(".js-online").text(1131);
}, 2000);
setTimeout(function() {          									$(".js-online").text(1756);
}, 4000);
setTimeout(function() {          									$(".js-online").text(2178);
}, 6000);
setTimeout(function() {          									$(".js-online").text(4335);
}, 8000);
setTimeout(function() {          									$(".js-online").text(6471);
}, 10000);
setTimeout(function() {          									$(".js-online").text(8693);
}, 14000);
setTimeout(function() {          									$(".js-online").text(11514);
}, 16000);
setTimeout(function() {          									$(".js-online").text(13795);
			function randomize() {
	var randomNumber = randomNumberFromRange(minNumber, maxNumber);
	function randomNumberFromRange(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
	}
	$(".js-online").text(randomNumber);
};
randomize();
setInterval(randomize, 3000);
}, 20000);


function FBcom(a,b) {
					setTimeout(function() {
						var m = 0, n = true, op = 0;
						$(a+", "+a+" .comtxt, "+a+" .combot").slideDown(500);
						$().slideDown(500);
						var t = setInterval(function() {
							op += 0.2;
							$(a).css({"opacity":op});
							m++;
							if(m == 5) clearInterval(t);
						}, 100);
					}, b);
				}
FBcom("#fb0",23000);
FBcom("#fb1",21000);
FBcom("#fb2",19000);
FBcom("#fb3",18000);
FBcom("#fb4",17000);
FBcom("#fb5",16000);
FBcom("#fb6",15000);
FBcom("#fb7",14000);
FBcom("#fb8",13000);
FBcom("#fb9",12000);
FBcom("#fb10",11000);
FBcom("#fb11",10000);
FBcom("#fb12",9000);
FBcom("#fb13",8000);
FBcom("#fb14",7000);
FBcom("#fb15",6000);
FBcom("#fb16",5000);
FBcom("#fb17",4000);
FBcom("#fb18",3500);


/* timers */
function timer() {
        var seconds = 25;
        var seconds_timer_id = setInterval(function() {
            if (seconds > 0) {
                seconds --;
                $(".js-start").text(seconds);
            } else {
                clearInterval(seconds_timer_id);    
            }
        }, 1000);
    };
timer();

function timer2() {
        var seconds = 11;
        var seconds_timer_id = setInterval(function() {
            if (seconds > 0) {
                seconds --;
                $(".js-qst").text(seconds);
            } else {
                clearInterval(seconds_timer_id);    
            }
        }, 1000);
    };
timer2();

setTimeout(function() {          $("#first").addClass("hidden");
      $(".iphone-x").css( "background", "transparent" );
      $("#qst1").removeClass("hidden");
           timer2();
}, 25000);




$( "#qst1 button" ).click(function() {
var OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "04bda59d-8990-4398-ad08-a4cf6ae0ddff",
    });
  });
  $("#qst1").addClass("hidden");
  $("#qst1Ans").removeClass("hidden");
  
setTimeout(function() {          						
	$("#qst1Ans").addClass("hidden");
      	$("#qst2").removeClass("hidden");
        timer2();
}, 5000);
});


$( "#qst2 button" ).click(function() {
 	$("#qst2").addClass("hidden");
  	$("#qst2Ans").removeClass("hidden");
setTimeout(function() {          						
	$("#qst2Ans").addClass("hidden");
      	$("#qst3").removeClass("hidden");
        timer2();
}, 3000);
});

$( "#qst3 button" ).click(function() {
  $("#qst3").addClass("hidden");
  $("#qst3Ans").removeClass("hidden");
setTimeout(function() {          						$("#qst3Ans").addClass("hidden");
      $("#qst4").removeClass("hidden");
           timer2();
}, 3000);
});

$( "#qst4 button" ).click(function() {
  $("#qst4").addClass("hidden");
  $("#qst4Ans").removeClass("hidden");
setTimeout(function() {          						$("#qst4Ans").addClass("hidden");
      $("#qst5").removeClass("hidden");
           timer2();
}, 3000);
});

$( "#qst5 button" ).click(function() {
  $("#qst5").addClass("hidden");
  $("#qst5Ans").removeClass("hidden");
setTimeout(function() {          						$("#qst5Ans").addClass("hidden");
    $("#winner1").removeClass("hidden");
    timer2();
}, 7000);
setTimeout(function() {          						$("#winner1").addClass("hidden");
$("#firework").removeClass("hidden");
    timer2();
    window.navigator.vibrate(1000);
    setTimeout(function() {
  window.navigator.vibrate(1000);
	}, 2000);
}, 20000);
setTimeout(function() {          						$("#firework").addClass("hidden");
    $("#winner2").removeClass("hidden");
    $("#star").removeClass("hidden");
}, 32000);
});



});



