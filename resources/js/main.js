$(document).ready(function(){

	var playing=false;
	var score;
	var trialsleft;
	var fruits =["banana", "berry", "orange", "pineapple"];
	var step;
	var action;
	var sel;
	var xdim;

//click start button
	$("#startgame").click(function(){

	//are we playing?
		//yes
		if (playing==true){
			//reload the page
			location.reload();
		}

		//no
		else{
			playing=true;

			//set score to 0
			score=0;
			$("#scorevalue").html(score);

			//show trials left
			$("#life").css("display","block");
			trialsleft=3;
			addHearts();
			//change button text to reset game
			$("#startgameinner").html("Reset Game!");

			startAction();

		}


	});

//slice fruit
	//play sound
	//explode fruit
	$("#fruit").mouseover(function(){

		score++;
		$("#scorevalue").html(score);
		$("#suono")[0].play();


		clearInterval(action);

		$("#fruit").hide("explode", 100);

		setTimeout(startAction,200);


	});


// FUNZIONE PER FAR COMPARIRE I CUORI
	function addHearts(){
		$("#life").empty();
		for(i=0;i<trialsleft;i++){
			$("#life").append('<img src="./resources/img/heart.png">');
		}
	};

	function startAction(){
		
		sel = Math.round(Math.random()*3);
		xdim = Math.round(Math.random()*430);
		console.log(sel);
			//create a random fruit
		$("#fruit").show();
		$("#fruit").attr('src',"./resources/img/"+fruits[sel]+ ".png");
		$("#fruit").css("left",xdim);
		$("#fruit").css("top","-50px");
			//define a random step
		step = Math.round(Math.random()*6)+1;
			//move fruit down one step every 10ms
		action = setInterval(function(){
			$("#fruit").css("top", $("#fruit").position().top + step);
				//check if fruit is too low?
			if($("#fruit").position().top > $("#camp").height()){
					//yes any trial left? REPEAT and change lives
				if(trialsleft > 1)
				{
					sel = Math.round(Math.random()*3);
					xdim = Math.round(Math.random()*430);
					trialsleft = trialsleft-1;
					$("#fruit").show();
					$("#fruit").attr('src',"./resources/img/"+fruits[sel]+ ".png");
					$("#fruit").css("left",xdim);
					$("#fruit").css("top","-50px");
					step=Math.round(Math.random()*6)+1;

					addHearts();
					$("#scorevalue").html(score);				

				}
					//no show game over, button text start game
				else{
					playing=false;
					trialsleft = trialsleft-1;
					addHearts();
					$("#gameover").css("display","block");
					$("#result").html(score);
					$("#startgameinner").html("Start Game!");
					$("#fruit").hide();
				}
			}


		}, 10); //il secondo parametro è in ms

	};

});









			









