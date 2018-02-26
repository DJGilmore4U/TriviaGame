// Define variables
$(document).ready(function(){
    var count = 0;
    var time = 31;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

// Questions and Answer Arrays
    var question = ["The RMS Olympic and HMHS Britannic were sister ships to which other British passenger liner?",
    "Who is credited with the assassination of American outlaw Jesse James?", "According to Greek mythology, who was the god of wine?", "What 3 countries were part of the original Axis powers in World War II after the Tripartite Pact was signed?", "What Byzantine city was renamed Istanbul after being captured by the Ottoman Empire?",
    "According to Arthurian legend, what was the name of the sword in the stone?", "The United States Constitution replaced what other document on March 4, 1789?", "Who wrote the Pledge of Allegiance of the United States?"];
    var answer = ["RMS Titanic", "Robert Ford", "Dionysus", "Germany, Italy, and Japan", "Constantinople", "Excalibur or Caliburn", "The Articles of Confederation", "Francis Bellamy"];
    var firstChoice = ["USS Davis", "Thomas Crittenden", "Bacchus", "USA, Slovakia, and Japan", "Adrianople", "Stonecutter", "Bill of Rights", "Francis Scott Key"];
    var secondChoice = ["HMS Hawke", "Cole Younger", "Hermes", "Bulgaria, Germany, and France", "Nicaea", "Katopris", "Declaration of Independence", "John Stafford Smith"];
    var thirdChoice = ["RMS Harland", "Bloody Bill Anderson", "Acratopotes", "Germany, Japan, and Finland", "Antioch", "Godsbane", "Emancipation Proclamation", "Betsy Ross"];
    var fourthChoice = ["RMS Titanic", "Robert Ford", "Dionysus", "Germany, Italy, and Japan", "Constantinople", "Excalibur or Caliburn", "The Articles of Confederation", "Francis Bellamy"];

// Show & Hide Functions
    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);
    
    // Hover CSS
        $("#choice-holder-1").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "#3092c7");
        });
        $("#choice-holder-2").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "#3092c7");
        });
        $("#choice-holder-3").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "#3092c7");
        });
        $("#choice-holder-4").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "#3092c7");
        });
    }
    $("#choice-holder-1").on("click", checkAnswer) 
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)

// Check Answer Function
    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Einstein! You're right... the answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count] + "! Better brush up on your history!");
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }

// Check End Game Function
    function checkGameEnd() {
        if(count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 31;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

// Display Images With Answer
    function displayImage() {
        if(count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/titanic.png">');
        }
        else if(count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/jessejames.png">');
        }
        else if(count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/dionysus.png">');
        }
        else if(count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/axis.png">');
        }
        else if(count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/constantinople.png">');
        }
        else if(count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/sword.png">');
        }
        else if(count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/articles.png">');
        }
        else if(count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/francis.png">');
        }
    }

 // Show Results Function   
    function showResults() {
        $("#answer-holder").html("");
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click the button above to play again!");
        $("#image-holder").html("");
        alert("Correct: " + correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered);
    }

// Reset Results Function 
    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

// Start Game Function
    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

// Start Game On Click
  $(".start").on("click", function() {
    startGame();
  });
});