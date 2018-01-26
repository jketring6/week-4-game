$(document).ready(function() {

	var wins = [];
	var losses = [];
	var totalScore = [];

	$("#winScore").html("Wins: " + wins);
	$("#lossScore").html("Losses: " + losses);
	$("#totalScoreBox").html(totalScore);


	function beginGame() {

		var max = 102;
		var min = 19;

		var randomCompNumber = Math.floor(Math.random() * max) + min;

		$("#randomValue").html(randomCompNumber);

		///////////////

		totalScore = 0;

		$("#totalScoreBox").html(totalScore);

		///////////////

		var picOne = 0;

		var picMax = 11;
		var picMin = 1;

		var randomPicValue = Math.floor(Math.random() * picMax) + picMin;

		var picOne = randomPicValue;

		$(document).on("click", "#puppyOne", function() {

			totalScore += picOne;

			$("#totalScoreBox").html(totalScore);

			checkScore();

		});

		///////////////

		var picTwo = 0;

		var randomPicValue = Math.floor(Math.random() * 12) + 1;

		var picTwo = randomPicValue;

		$(document).on("click", "#puppyTwo", function() {

			totalScore += picTwo;

			$("#totalScoreBox").html(totalScore);

			checkScore();

		});

		///////////////

		var picThree = 0;

		var randomPicValue = Math.floor(Math.random() * 12) + 1;

		var picThree = randomPicValue;

		$(document).on("click", "#puppyThree", function() {

			totalScore += picThree;

			$("#totalScoreBox").html(totalScore);

			checkScore();

		});

		///////////////

		var picFour = 0;

		var randomPicValue = Math.floor(Math.random() * 12) + 1;

		var picFour = randomPicValue;

		$(document).on("click", "#puppyFour", function() {

			totalScore += picFour;

			$("#totalScoreBox").html(totalScore);

			checkScore();

		});

		///////////////

		function checkScore() {

			if (totalScore === randomCompNumber) {

				wins++;

				$("#winScore").html("Wins: " + wins);

				totalScore = 0;

				$("#totalScoreBox").html(0);

				resetGame();

			}

			else if (totalScore > randomCompNumber) {

				losses++;

				$("#lossScore").html("Losses: " + losses);

				resetGame();

			}
		}

		function resetGame() {

			totalScore = 0;

			var max = 102;
			var min = 19;

			var randomCompNumber = Math.floor(Math.random() * max) + min;

			$("#randomValue").html(randomCompNumber);

			$("#totalScoreBox").html(totalScore)

		}

	}

beginGame();

});

