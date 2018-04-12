var q1Correct = "Honda";
var q2Correct = "f5";
var q3Correct = "1967";
var q4Correct = "p100d";

var correctAnswers = 0;
var wrongAnswers = 0;

var timer;

$(".card").hide();
$("#timer").hide();
$("#submit").hide();

$(".start-button").click(function () {
    $(this).hide();
    $(".qs").show();
    $("#submit").show();

    var n = 31;
    timer = setInterval(countDown, 1000);
    function countDown() {
        n--;
        $("#timer").show();
        $("#time-left").text(n);
        if (n == 0) {
            checkAnswers();
        }
    }

});

function checkAnswers() {
    var q1Chosen = $('input[name="q1"]:checked').val();
    var q2Chosen = $('input[name="q2"]:checked').val();
    var q3Chosen = $('input[name="q3"]:checked').val();
    var q4Chosen = $('input[name="q4"]:checked').val();
    if (q1Chosen == q1Correct) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    if (q2Chosen == q2Correct) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    if (q3Chosen == q3Correct) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    if (q4Chosen == q4Correct) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }

    var end = $(".end")
    end.show();
    end.append(correctAnswers + " CORRECT<br>");
    end.append(wrongAnswers + " WRONG");
    $(".qs").hide();

}

$("#submit").on("click", function (event) {
    $("#submit").hide();
    checkAnswers();
    clearInterval(timer);

})


