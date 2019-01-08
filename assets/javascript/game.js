$(document).ready(function () {
      //generate random number b/w 19-120
      var randomNum = Math.floor(Math.random() * 101) + 19;

      //display the target number
      $("#randNum").text(randomNum);

      //scores
      var wins = 0;
      var losses = 0;
      var currentTotal = 0;
      console.log("Your total : " + currentTotal);

      //display score
      $("#wins").text(wins);
      $("#losses").text(losses);
      $("#currentTotal").text(currentTotal);

      //random number b/w 1-12 for the crystals
      var num1 = Math.floor(Math.random() * 11) + 1;
      var num2 = Math.floor(Math.random() * 11) + 1;
      var num3 = Math.floor(Math.random() * 11) + 1;
      var num4 = Math.floor(Math.random() * 11) + 1;

      console.log("Gem 1: " + num1);
      console.log("Gem 2: " + num2);
      console.log("Gem 3: " + num3);
      console.log("Gem 4: " + num4);

      function clear() {
            randomNum = Math.floor(Math.random() * 101) + 19;

            currentTotal = 0;
            $("#randNum").text(randomNum);
            $("#wins").text(wins);
            $("#losses").text(losses);
            $("#currentTotal").text(currentTotal);

            num1 = Math.floor(Math.random() * 11) + 1;
            num2 = Math.floor(Math.random() * 11) + 1;
            num3 = Math.floor(Math.random() * 11) + 1;
            num4 = Math.floor(Math.random() * 11) + 1;
            console.log("Gem 1: " + num1);
            console.log("Gem 2: " + num2);
            console.log("Gem 3: " + num3);
            console.log("Gem 4: " + num4);


      }

      function winner() {
            alert("You win!");
            wins++;
            $("#wins").text(wins);
            clear();
      }

      function loser() {
            alert("You lose!");
            losses++;
            $("#losses").text(losses);
            clear();
      }

      $("#cry1").click(function () {
            currentTotal = currentTotal + num1;
            console.log(currentTotal);
            $("#currentTotal").text(currentTotal);
            if (currentTotal == randomNum) {
                  winner();
            } else if (currentTotal > randomNum) {
                  loser();
            }
      });
      $("#cry2").click(function () {
            currentTotal = currentTotal + num2;
            console.log(currentTotal);
            $("#currentTotal").text(currentTotal);
            if (currentTotal == randomNum) {
                  winner();
            } else if (currentTotal > randomNum) {
                  loser();
            }
      });
      $("#cry3").click(function () {
            currentTotal = currentTotal + num3;
            console.log(currentTotal);
            $("#currentTotal").text(currentTotal);
            if (currentTotal == randomNum) {
                  winner();
            } else if (currentTotal > randomNum) {
                  loser();
            }
      });
      $("#cry4").click(function () {
            currentTotal = currentTotal + num4;
            console.log(currentTotal);
            $("#currentTotal").text(currentTotal);
            if (currentTotal == randomNum) {
                  winner();
            } else if (currentTotal > randomNum) {
                  loser();
            }
      });
});