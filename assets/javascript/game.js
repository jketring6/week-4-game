$(document).ready(function() {

	var wins = [];
	var losses = [];
	var totalScore = [];

	$("#winScore").html("Wins: " + wins);
	$("#lossScore").html("Losses: " + losses);
	$("#totalScoreBox").html(totalScore);


	function beginGame() {

		var randomNumber = 0;

		var max = 102;
		var min = 19;

		var randomCompNumber = Math.floor(Math.random() * max) + min;

		randomNumber = randomCompNumber;

		$("#randomValue").html(randomCompNumber);

		///////////////

		totalScore = 0;

		$("#totalScoreBox").html(totalScore);

		///////////////

		var picOne = 0;

		var randomPicValue = Math.floor(Math.random() * 11) + 1;

		var picOne = randomPicValue;

		$(document).on("click", "#puppyOne", function() {

			totalScore += picOne;

			$("#totalScoreBox").html(totalScore);

			checkScore();

		});

		///////////////

		var picTwo = 0;

		var randomPicValue = Math.floor(Math.random() * 11) + 1;

		var picTwo = randomPicValue;

		$(document).on("click", "#puppyTwo", function() {

			totalScore += picTwo;

			$("#totalScoreBox").html(totalScore);

			checkScore();

		});

		///////////////

		var picThree = 0;

		var randomPicValue = Math.floor(Math.random() * 11) + 1;

		var picThree = randomPicValue;

		$(document).on("click", "#puppyThree", function() {

			totalScore += picThree;

			$("#totalScoreBox").html(totalScore);

			checkScore();

		});

		///////////////

		var picFour = 0;

		var randomPicValue = Math.floor(Math.random() * 11) + 1;

		var picFour = randomPicValue;

		$(document).on("click", "#puppyFour", function() {

			totalScore += picFour;

			$("#totalScoreBox").html(totalScore);

			checkScore();

		});

		///////////////

		function checkScore() {

			if (totalScore === randomNumber) {

				wins++;

				$("#winScore").html("Wins: " + wins);

				totalScore = 0;

				$("#totalScoreBox").html(0);

				resetGame();

			}

			else if (totalScore > randomNumber) {

				losses++;

				$("#lossScore").html("Losses: " + losses);

				resetGame();

			}
		}

		function resetGame() {

			totalScore = 0;
			picOne = 0;
			picTwo = 0;
			picThree = 0;
			picFour = 0;

			var max = 102;
			var min = 19;

			var randomCompNumber = Math.floor(Math.random() * max) + min;

			randomNumber = randomCompNumber;

			$("#randomValue").html(randomNumber);

			$("#totalScoreBox").html(totalScore)

			beginGame();

		}

	}

beginGame();

});

