$(document).ready(function () {
    /// Main Game Trivia Content
    var questions = ["What is the Highest mountain in the Wasatch Mountains?", "The Confluence in Canyonlands National Park is the meeting of which two Utah Rivers?", "Kings Peak the highest in Utah is how many feet tall?", "Utahs famed Red Rock Desert is part of which physiographic region?", "Salt Lake City Utahs largest sits at 40.7 degrees north lattitude, roughly the same as which Eastern U.S city", "Utah is very dry, of the 50 states where does it rank in terms of driest", "The Uinta Range is the highest in Utah what is the second highest mountain range?", "Utah is known for its Native American rock art, this area has the highest concentration in North America", "Utah has many public lands, how many National Parks are located in the State?", "This famed canyon recieves over 500 inches of snow and is the home of Alta and Snowbird ski resorts"]
    var answerKey = ["Mt. Nebo", "Colorado and Green", "13,527", "Colorado Plateau", "New York City", "2nd", "La Sals", "Nine Mile Canyon", "5", "Little Cottonwood Canyon"]
    var answers = ["Mt. Timpanogus", "Lone Peak", "Mt. Nebo", "American Fork Twins", "Colorado and Green", "San Juan and Colorado", "Virgin and Green", "Dolores and Colorado", "11,527", "12,527", "13,527", "14,527", "Great Basin", "Colorado Plateau", "Southern Rocky Mountains", "Columbia Plateau", "Washington D.C.", "Boston", "Philadelphia", "New York City", "1st", "2nd", "3rd", "4th", "Wasatch", "La Sals", "Deep Creeks", "Stansburys", "Nine Mile Canyon", "San Rafael Swell", "Canyonlands National Park", "Bears Ears National Monument", "3", "4", "5", "6", "Big Cottonwood Canyon", "Mill Creek Canyon", "American Fork Canyon", "Little Cottonwood Canyon"]
    var imageleft = ["https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/10399194_10102864736990959_1765528007482014113_n.jpg?_nc_cat=104&_nc_ht=scontent-sjc3-1.xx&oh=76b14a5b4f17f34fd3913e811987c4d0&oe=5C6BA844", "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/379073_10100220139974579_1384086475_n.jpg?_nc_cat=101&_nc_ht=scontent-sjc3-1.xx&oh=17be47e8e765a73cb071c75e83a5b09d&oe=5C6BBD59", "https://80d2853cc4def76b377d-54344bc01a8b066c84096a8e7a3499ac.ssl.cf1.rackcdn.com/original/417319.JPG", "https://80d2853cc4def76b377d-54344bc01a8b066c84096a8e7a3499ac.ssl.cf1.rackcdn.com/large/261547.JPG", "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/1002033_10101419303246769_317822068_n.jpg?_nc_cat=108&_nc_ht=scontent-sjc3-1.xx&oh=7befd632227654e183e367a174837973&oe=5C6AE433", "https://www.worldatlas.com/r/w728-h425-c728x425/upload/0f/75/d6/shutterstock-288363041.jpg", "https://www.summitpost.org/images/medium/601306.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HuntSceneNMC.JPG/1280px-HuntSceneNMC.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zion_angels_landing_view.jpg/800px-Zion_angels_landing_view.jpg", "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/10341874_10101666795694919_8904994163625840457_n.jpg?_nc_cat=102&_nc_ht=scontent-sjc3-1.xx&oh=8459193d9c9f98a8b9018154d1758e94&oe=5C690A2F"];
    var imageright = ["https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/1004840_10101565245013299_223528969_n.jpg?_nc_cat=111&_nc_ht=scontent-sjc3-1.xx&oh=569d47939850c5906a1d1ab1f1a0945d&oe=5C786424", "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/1381772_10151645227867443_1054621754_n.jpg?_nc_cat=109&_nc_ht=scontent-sjc3-1.xx&oh=68b3ce2fda4a398daf90723ff1e9d6d4&oe=5CB0B319", "https://80d2853cc4def76b377d-54344bc01a8b066c84096a8e7a3499ac.ssl.cf1.rackcdn.com/large/506613.jpg", "https://80d2853cc4def76b377d-54344bc01a8b066c84096a8e7a3499ac.ssl.cf1.rackcdn.com/large/181799.JPG", "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/11705792_10102491348998489_8267513903591477354_o.jpg?_nc_cat=108&_nc_ht=scontent-sjc3-1.xx&oh=83d34f2608eb68da573d60f2fafea784&oe=5C7B28FC", "https://images.unsplash.com/photo-1511410986727-7f779f6c1a16?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=467596527e031c12fa1189f4abb04ff8&w=1000&q=80", "https://80d2853cc4def76b377d-54344bc01a8b066c84096a8e7a3499ac.ssl.cf1.rackcdn.com/large/852556.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Southern_San_Rafael_Fremont_Indian_petroglyphs_%28~400_to_~1350_A.D.%29_%28Capitol_Reef_National_Park%2C_southern_Utah%2C_USA%29_2_%2822899336311%29.jpg/1280px-Southern_San_Rafael_Fremont_Indian_petroglyphs_%28~400_to_~1350_A.D.%29_%28Capitol_Reef_National_Park%2C_southern_Utah%2C_USA%29_2_%2822899336311%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/BryceCanyon-Amphiteatre1.jpg/1280px-BryceCanyon-Amphiteatre1.jpg", "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/10991384_10102245137608089_3824276302925761680_n.jpg?_nc_cat=106&_nc_ht=scontent-sjc3-1.xx&oh=aff4b6c770fde43f0a07118751301d11&oe=5C791B6C"];

    /// Global Game Function Variables 
    var round = 0;
    var forLoop = 0;
    var timer = 26;
    var intervalId;

    /// Scoreboard Counters
    var wins = 0;
    var losses = 0;
    var timeouts = 0;

    /// Hide Restart Button On loadup
    $("#restart-button").hide();

    /// Start and Restart Button Click Function
    $(".button").on("click", function () {
        $(".button").hide();
        startRound();
    });

    /// Starts Round 
    var startRound = function () {
        if (round > answerKey.length - 1) {
            gameOver();
            return
        }
        // Sets Images based on Round Variable
        $(".left").attr("src", imageleft[round]);
        $(".right").attr("src", imageright[round]);
        // Starts game timer
        run();
        // Generates Question
        $("#question").html("<h3>" + questions[round] + "</h3>")
        // Generates four answers to choose from
        for (i = (0 + forLoop); i < (4 + forLoop); i++) {
            var choice = $("<h4>");
            choice.text(answers[i]);
            $("#answer" + (i - forLoop)).append(choice);
        }
    }

    /// Game Over print final score
    var gameOver = function () {
        $("#question").html("<h3> Correct Answers: " + wins + "</h3>")
        $("#question").append("<h3> Wrong Answers: " + losses + "</h3>")
        $("#question").append("<h3> Timeouts: " + timeouts + "</h3>")
        $("#restart-button").show();
        // Reset Game Variables
        round = 0;
        forLoop = 0;
        wins = 0;
        losses = 0;
        timeouts = 0;
    }
    
    /// Choose Answer Click Function
    $(".choice").on("click", function () {
        var text = $(event.target).text();
        if (text === answerKey[round]) {
            correctGuess();
        }
        else {
            wrongGuess();
        }
    });

    /// Correct answer was clicked
    var correctGuess = function () {
        $("#question").html("<h3> You guessed the correct answer " + answerKey[round] + "! </h3>")
        updateGame();
    }

    /// Wrong answer was clicked
    var wrongGuess = function () {
        $("#question").html("<h3> Wrong! the correct answer is " + answerKey[round] + "</h3>")
        updateGame();
    }

    /// Timeout occurred
    var timeout = function() {
        $("#question").html("<h3> Times up! The correct answer is " + answerKey[round] + "</h3>")
        updateGame(); 
    }
    
    /// Updates game for next round
    var updateGame = function() {
        stop();
        $(".choice").empty();
        forLoop = forLoop + 4;
        round++;
        losses++;
        timer = 26;
        setTimeout(startRound, 1000 * 3);
    }

    /// Timer For Main Game Round Process
    // Initiate Timer
    var run = function () {
        $("#timer").html("<h3>" + "Time Remaining: " + timer + "</h3>");
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    // Game timer run functionality
    var decrement = function () {
        timer--;
        $("#timer").html("<h3>" + "Time Remaining: " + timer + "</h3>");
        if (timer === 0) {
            timeouts++;
            stop();
            timeout();
        }
    }
    // Resets timer
    var stop = function () {
        clearInterval(intervalId);
        $("#timer").empty();
    }

});