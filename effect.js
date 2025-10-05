$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$(document).ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

    // expose the same behavior as a function so it can be called without the button
    window.turnOnLights = function() {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        // if the original button exists, mimic its UI flow of revealing #play
        var $turnOn = $('#turn_on');
        if ($turnOn.length) {
            $turnOn.fadeOut('slow').delay(5000).promise().done(function(){
                $('#play').fadeIn('slow');
            });
        } else {
            // if there's no button, still reveal #play after the same delay
            setTimeout(function(){ $('#play').fadeIn('slow'); }, 5000);
        }
    };

    $('#turn_on').click(function(){
        window.turnOnLights();
    });
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});





//alert('hello');

  const messages = document.querySelectorAll('.center-msg .message');
  let current = 0;
  let heartsIntervalId = null;

  function showNextMessage() {
    // fade out current
    if (messages[current]) {
      $(messages[current]).removeClass('active').stop(true, true).fadeOut(300);
    }
    current++;
    if (current < messages.length) {
      // fade in next
      $(messages[current]).stop(true, true).fadeIn(300, function(){
        $(this).addClass('active');
      });
    } else {
      // When all messages are shown, remove the center message container
      var centerMsg = document.querySelector('.center-msg');
      if (centerMsg) {
        $(centerMsg).stop(true, true).fadeOut(300, function(){
          if (centerMsg && centerMsg.parentNode) {
            centerMsg.parentNode.removeChild(centerMsg);
          }
          // After removal, fade the screen to black
          fadeScreenToBlack();
        });
      } else {
        fadeScreenToBlack();
      }
      clearInterval(intervalId); // stop the message cycle
      stopHearts(); // stop hearts when center-msg is gone
    }
  }

  function fadeScreenToBlack() {
    const blackOverlay = document.createElement('div');
    blackOverlay.id = 'blackout-overlay';
    blackOverlay.style.position = 'fixed';
    blackOverlay.style.top = 0;
    blackOverlay.style.left = 0;
    blackOverlay.style.width = '100%';
    blackOverlay.style.height = '100%';
    blackOverlay.style.backgroundColor = 'black';
    blackOverlay.style.opacity = 0;
    blackOverlay.style.transition = 'opacity 1.6s ease';
    blackOverlay.style.zIndex = 10000;

    // Popup container
    const popup = document.createElement('div');
    popup.style.position = 'absolute';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.background = 'rgba(255,255,255,0.98)';
    popup.style.borderRadius = '14px';
    popup.style.padding = '24px 28px';
    popup.style.boxShadow = '0 10px 40px rgba(0,0,0,0.35)';
    popup.style.textAlign = 'center';
    popup.style.fontFamily = "'Signika', sans-serif";
    popup.style.minWidth = '260px';
    popup.style.maxWidth = '90%';
    popup.style.opacity = '0';
    popup.style.transition = 'opacity 0.6s ease 1.2s'; // appear after fade to black starts

    const title = document.createElement('div');
    title.textContent = 'It\'s dark now';
    title.style.fontSize = '22px';
    title.style.color = '#111';
    title.style.marginBottom = '8px';
    title.style.fontWeight = '700';

    const sub = document.createElement('div');
    sub.textContent = 'Ready to light it up?';
    sub.style.fontSize = '16px';
    sub.style.color = '#333';
    sub.style.marginBottom = '16px';

    const btn = document.createElement('button');
    btn.id = 'popup-turn-on';
    btn.textContent = 'Turn the light on';
    btn.style.display = 'inline-block';
    btn.style.padding = '10px 16px';
    btn.style.borderRadius = '8px';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';
    btn.style.background = '#466baf';
    btn.style.color = '#fff';
    btn.style.fontWeight = '700';
    btn.style.textTransform = 'uppercase';
    btn.style.letterSpacing = '0.3px';

    popup.appendChild(title);
    popup.appendChild(sub);
    popup.appendChild(btn);

    blackOverlay.appendChild(popup);
    document.body.appendChild(blackOverlay);

    // Trigger fades
    requestAnimationFrame(() => {
      blackOverlay.style.opacity = 1;
      popup.style.opacity = '1';
    });

    // Wire button to remove overlay and trigger existing flow
    btn.addEventListener('click', function() {
      // Remove overlay
      blackOverlay.style.opacity = 0;
      setTimeout(function(){
        if (blackOverlay && blackOverlay.parentNode) {
          blackOverlay.parentNode.removeChild(blackOverlay);
        }
      }, 500);

      // Trigger lights on sequence even if #turn_on is missing
      if (typeof window.turnOnLights === 'function') {
        window.turnOnLights();
      } else {
        var turnOnBtn = document.getElementById('turn_on');
        if (turnOnBtn) {
          turnOnBtn.click();
        }
      }
    });
  }

  // Initialize first message via jQuery to override any CSS display issues
  $('.center-msg .message').hide();
  if (messages[0]) {
    $(messages[0]).show().addClass('active');
    startHearts(); // begin hearts when center-msg appears
  }

  // Start the cycle
  const intervalId = setInterval(showNextMessage, 3000);

  // Hearts background logic
  function createHeartOnce() {
    const wrap = document.getElementById('hearts-bg');
    if (!wrap) return;
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.bottom = '-30px';
    heart.innerHTML = '<svg viewBox="0 0 16 16" fill="#d77bb7" width="18" height="18"><path d="M8 14s6-4.7 6-8.2A3.05 3.05 0 0 0 8 3.3 3.05 3.05 0 0 0 2 5.8C2 9.3 8 14 8 14z"/></svg>';
    wrap.appendChild(heart);
    setTimeout(function(){ if (heart && heart.parentNode) heart.parentNode.removeChild(heart); }, 6100);
  }

  function startHearts() {
    if (heartsIntervalId) return;
    // light soft gradient while hearts run
    document.body.style.background = 'linear-gradient(120deg, #fbeaec 0%, #f8dde6 100%)';
    heartsIntervalId = setInterval(createHeartOnce, 320);
  }

  function stopHearts() {
    if (heartsIntervalId) {
      clearInterval(heartsIntervalId);
      heartsIntervalId = null;
    }
    // restore any inline gradient to previous color scheme when rest of flow begins
    document.body.style.background = '';
    const wrap = document.getElementById('hearts-bg');
    if (wrap) {
      while (wrap.firstChild) wrap.removeChild(wrap.firstChild);
    }
  }

