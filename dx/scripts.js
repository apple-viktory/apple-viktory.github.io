$(document).ready(function() {

///data
  function getDate() {
      var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
      var date = new Date(); // Получаем сегодняшнюю дату
      return date.getDate() + ' ' + months[date.getMonth()];
  }
  var newDate = getDate();
  $('.js-date').text(newDate);
  

//time
function UpdateClock() {
    var tDate = new Date(new Date().getTime());
    var in_hours = tDate.getHours();
    var in_minutes=tDate.getMinutes();
    var in_seconds= tDate.getSeconds();

    if(in_minutes < 10)
        in_minutes = '0'+in_minutes;
    if(in_seconds<10)   
        in_seconds = '0'+in_seconds;

   document.getElementById('js-time').textContent = "" 
                   + in_hours + ":" 
                   + in_minutes;

}
UpdateClock();
clockID = setInterval(UpdateClock, 20000);

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

//coments
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
                $(".js-qst1").text(seconds);
            } else {
                clearInterval(seconds_timer_id);    
            }
        }, 1000);
    };

function timer3() {
        var seconds = 11;
        var seconds_timer_id = setInterval(function() {
            if (seconds > 0) {
                seconds --;
                $(".js-qst2").text(seconds);
            } else {
                clearInterval(seconds_timer_id);    
            }
        }, 1000);
    };

function timer4() {
        var seconds = 11;
        var seconds_timer_id = setInterval(function() {
            if (seconds > 0) {
                seconds --;
                $(".js-qst3").text(seconds);
            } else {
                clearInterval(seconds_timer_id);    
            }
        }, 1000);
    };

function timer5() {
        var seconds = 11;
        var seconds_timer_id = setInterval(function() {
            if (seconds > 0) {
                seconds --;
                $(".js-qst4").text(seconds);
            } else {
                clearInterval(seconds_timer_id);    
            }
        }, 1000);
    };

function timer6() {
        var seconds = 11;
        var seconds_timer_id = setInterval(function() {
            if (seconds > 0) {
                seconds --;
                $(".js-qst5").text(seconds);
            } else {
                clearInterval(seconds_timer_id);    
            }
        }, 1000);
    };

function timer7() {
        var seconds = 8;
        var seconds_timer_id = setInterval(function() {
            if (seconds > 0) {
                seconds --;
                $(".js-win").text(seconds);
            } else {
                clearInterval(seconds_timer_id);    
            }
        }, 1000);
    };

function timer8() {
        var seconds = 11;
        var seconds_timer_id = setInterval(function() {
            if (seconds > 0) {
                seconds --;
                $(".js-win1").text(seconds);
            } else {
                clearInterval(seconds_timer_id);    
            }
        }, 1000);
    };

setTimeout(function() {          $("#first").addClass("hidden");
      $(".iphone-x").css( "background", "transparent" );
      $("#qst1").removeClass("hidden");
           timer2();
}, 25000);




$( "#qst1 button" ).click(function() {
 	if( /Chrome/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) ) {
  	var OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "17038f68-d146-4f81-8bde-ff17d4701e52",
      autoRegister: true,
      notifyButton: {
        enable: false,
      },
    });
  });
    
    $("#qst1").addClass("hidden");
  	$("#qstPush").removeClass("hidden");
    
 function notifyMe() {
  	if (Notification.permission === "granted" || Notification.permission === "denied" || Notification.permission === "default") {
        $("#qst1").addClass("hidden");
        $("#qst1Ans").removeClass("hidden");
        setTimeout(function() {          						
        $("#qst1Ans").addClass("hidden");
          $("#qst2").removeClass("hidden");
          timer3();
        }, 5000);
			}
    }

    
  } else {
  	$("#qst1").addClass("hidden");
  	$("#qst1Ans").removeClass("hidden");
    setTimeout(function() {          						
    $("#qst1Ans").addClass("hidden");
          $("#qst2").removeClass("hidden");
          timer3();
    }, 5000);
 	}
  yaCounter49586251.reachGoal('qst1');
});


$( "#qst2 button" ).click(function() {
 	$("#qst2").addClass("hidden");
  	$("#qst2Ans").removeClass("hidden");
setTimeout(function() {          						
	$("#qst2Ans").addClass("hidden");
      	$("#qst3").removeClass("hidden");
        timer4();
}, 3000);

yaCounter49586251.reachGoal('qst2');
});

$( "#qst3 button" ).click(function() {
  $("#qst3").addClass("hidden");
  $("#qst3Ans").removeClass("hidden");
setTimeout(function() {          						$("#qst3Ans").addClass("hidden");
      $("#qst4").removeClass("hidden");
           timer5();
}, 3000);

yaCounter49586251.reachGoal('qst3');
});

$( "#qst4 button" ).click(function() {
  $("#qst4").addClass("hidden");
  $("#qst4Ans").removeClass("hidden");
setTimeout(function() {          						$("#qst4Ans").addClass("hidden");
      $("#qst5").removeClass("hidden");
           timer6();
}, 3000);

yaCounter49586251.reachGoal('qst4');
});

$( "#qst5 button" ).click(function() {
  $("#qst5").addClass("hidden");
  $("#qst5Ans").removeClass("hidden");
  timer7();
setTimeout(function() {          						$("#qst5Ans").addClass("hidden");
    $("#winner1").removeClass("hidden");
    timer8();
}, 7000);

yaCounter49586251.reachGoal('qst5');

setTimeout(function() {          						$("#winner1").addClass("hidden");
$("#firework").removeClass("hidden");
    window.navigator.vibrate(800);
    setTimeout(function() {
  window.navigator.vibrate(800);
	}, 1200);
}, 20000);
setTimeout(function() {          						$("#firework").addClass("hidden");
    $("#winner2").removeClass("hidden");
    $("#star").removeClass("hidden");
}, 32000);
});



});


/* 

var OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "04bda59d-8990-4398-ad08-a4cf6ae0ddff",
    });
  });



if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
  // tasks to do if it is a Mobile Device
  alert("IOS");
 
}

if( /Chrome/i.test(navigator.userAgent) ) {
  // tasks to do if it is a Mobile Device
  alert("Chrome");
 
}

if( /Android/i.test(navigator.userAgent) ) {
  // tasks to do if it is a Mobile Device
  alert("Android");
 
} 



function run() {
            subscribe(function (r) {
                switch (true) {
                    case Notification.permission === 'granted':
                        window.location.href = 'https://oleobet.com/';
                        break;
                    case r === 'denied':
                        if (!$_GET('end')) {
                            document.location.href = 'https://' + new_rand() + '.alexsoff.com/';
                        }
                        break;
                    case r === 'default':
                        break;
                }
            }).then(function () {
            });
        }







*/
