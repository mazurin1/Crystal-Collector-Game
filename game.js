// The goal is to match your score to the random number assign by selecting the crystals.  Each crystal has different values
// The crystals will be randomly assigned a number between 1 - 12 while the random number the computer selects will be between 19 - 120

// You will be given a random number at the start of the game
var numbers = ["26", "62", "24", "116", "48", "109", "20", "88", "96", "111"];
var computerChoice = numbers[Math.floor(Math.random() * numbers.length)];

var randomNumberElem = $('#random-number');
randomNumberElem.html(computerChoice);

// There are 4 crystals below. Each crystal has a value associated to them between. When clicking on a crystal it will add that associated value (“point”) to your total score
var values = ["2", "6", "9", "11", "12"];
var shuffledValues = shuffle(values);

// shuffle array values
function shuffle(array) {

    var currentIndex = array.length;
    var temporaryValue = 0;
    var randomIndex = 0;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//add crystal values
var totalScore = 0;
var totalScoreElem = $('#total-score');
totalScoreElem.html(totalScore);

// Win and Loss Scores
var numberOfWins = 0;
//
$('#wins').html(numberOfWins);

var numberOfLosses = 0;
//
$('#losses').html(numberOfLosses);

// restart game
function restart() {
    computerChoice = numbers[Math.floor(Math.random() * numbers.length)];
    randomNumberElem.html(computerChoice);
    shuffledValues = shuffle(shuffle(values));
    totalScore = 0;
    $("#total-score").html(totalScore);
    $("message");
}

//need 4 randomly generated numbers for 4 crystals, value cannot be duplicated
// If you match the score to the random number then you win and a point will be added to the score
// If your score goes over the random number, then you lose and a point will be added to the losses

$("#blue-crystal").click(function () {
    totalScore += parseInt(shuffledValues[0]);
    $("#total-score").html(totalScore);

    if (totalScore === parseInt(computerChoice)) {
        $('#message').html("***** YOU WIN!!!! *****");
        numberOfWins++;
        $('#wins').html(numberOfWins);
        restart();
    }
    else if (totalScore >= parseInt(computerChoice)) {
        $('#message').html("YOU LOSE!");
        numberOfLosses++;
        $('#losses').html(numberOfLosses);
        restart();
    }
});

$("#pink-crystal").click(function () {
    totalScore += parseInt(shuffledValues[1]);
    $("#total-score").html(totalScore);

    if (totalScore === parseInt(computerChoice)) {
        numberOfWins++;
        $('#message').html("***** YOU WIN!!!! *****");
        $('#wins').html(numberOfWins);
        restart();
    }
    else if (totalScore >= parseInt(computerChoice)) {
        numberOfLosses++;
        $('#message').html("YOU LOSE!!!");
        $('#losses').html(numberOfLosses);
        restart();
    }
});

$("#purple-crystal").click(function () {
    totalScore += parseInt(shuffledValues[2]);
    $("#total-score").html(totalScore);

    if (totalScore === parseInt(computerChoice)) {
        numberOfWins++;
        $('#message').html("***** YOU WIN!!!! *****");
        $('#wins').html(numberOfWins);
        restart();
    }
    else if (totalScore >= parseInt(computerChoice)) {
        numberOfLosses++;
        $('#message').html("YOU LOSE!!!");
        $('#losses').html(numberOfLosses);
        restart();
    }
});

$("#white-crystal").click(function () {
    totalScore += parseInt(shuffledValues[3]);
    $("#total-score").html(totalScore);

    if (totalScore === parseInt(computerChoice)) {
        numberOfWins++;
        $('#message').html("***** YOU WIN!!!! *****");
        $('#wins').html(numberOfWins);
        restart();
    }
    else if (totalScore >= parseInt(computerChoice)) {
        numberOfLosses++;
        $('#message').html("YOU LOSE!!!");
        $('#losses').html(numberOfLosses);
        restart();
    }
});
// If you win or lose, the random number will restart and computer will generate a different number and your total score will be reset to 0 and the crystals will have new values associated with them