$(document).ready(function () {

    var questions = ["What is the Highest mountain in the Wasatch Mountains?", "The Confluence in Canyonlands National Park is the meeting of which two Utah Rivers?", "Kings Peak the highest in Utah is how many feet tall?", "Utahs famed Red Rock Desert is part of which physiographic region?", "Salt Lake City Utahs largest sits at 40.7 degrees north lattitude, roughly the same as which Eastern U.S city"]
    var answerKey = ["Mt. Nebo", "Colorado and Green", "13,527", "Colorado Plateau", "New York City"]
    var answers = ["Mt. Timpanogus", "Lone Peak", "Mt. Nebo", "American Fork Twins", "Colorado and Green", "San Juan and Colorado", "Virgin and Green", "Dolores and Colorado", "11,527", "12,527", "13,527", "14,527", "Great Basin", "Colorado Plateau", "Southern Rocky Mountains", "Columbia Plateau", "Washington D.C.", "Boston", "Philadelphia", "New York City"]

    var round = 0;
    var forLoop = 0;
    var timer = 16;
    var intervalId;

    var wins = 0;
    var losses = 0;
    var timeouts = 0;

    $("#start-button").on("click", function () {
        $("#start-button").hide();
        startRound();
    });

    $(".choice").on("click", function () {
        var text = $(event.target).text();
        console.log(text);
        if (text === answerKey[round]) {
            console.log("true")
            correctGuess();
        }
        else {
            console.log("false")
            wrongGuess();
        }
    });
    var gameOver = function() {
        $("#question").html("Correct Answers: " + wins)
        $("#answer0").html("Wrong Answers: " + losses)
        $("#answer1").html("Time Ran Out: " + timeouts)
        
    }

    var correctGuess = function () {
        $(".choice").empty();
        $("#question").html("You Correctly Guessed " + answerKey[round])
        stop();
        forLoop = forLoop + 4;
        round++;
        wins++;
        timer = 16;
        setTimeout(startRound, 1000 * 3);
    }

    var wrongGuess = function () {
        $(".choice").empty();
        $("#question").html("Wrong Guess the answer is " + answerKey[round])
        stop();
        forLoop = forLoop + 4;
        round++;
        losses++;
        timer = 16;
        setTimeout(startRound, 1000 * 3);
    }

    var startRound = function () {
        if (round > answerKey.length - 1) {
           console.log("game over")
           gameOver();
           return
        }
        run();
        $("#question").html("<h3>" + questions[round] + "</h3>")
        for (i = (0 + forLoop); i < (4 + forLoop); i++) {
            var choice = $("<h4>");
            choice.text(answers[i]);
            $("#answer" + (i - forLoop)).append(choice);
            console.log(forLoop);
            console.log(answers[i]);
        }
    }
   
   // Timer For Main Game Process
    var run = function () {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    var decrement = function () {
        timer--;
        $("#timer").html("<h3>" + "Time Remaining " + timer + "</h3>");
        if (timer === 0) {
            timeouts++;
            stop();
            wrongGuess();
        }
    }
    var stop = function () {
        clearInterval(intervalId);
        $("#timer").empty();

    }








});