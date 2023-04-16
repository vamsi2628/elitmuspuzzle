var correctImage = "image2"; // Set the correct image filename here
    var chancesLeft = 2; // Number of chances left for the user
    
    function checkImage(imageId) {
      var selectedImage = document.getElementById(imageId);
      if (selectedImage.id === correctImage) {
        alert("Correct image selected!");
        alert('There is a locker in the next clue which has 4 digit password');
        alert('The four digits are derived from two clues, namely the first hint (two digits) and the second clue (two digits).');
        alert("You have only 2 chances for each clue")
        window.location.href = "clue4.html"; // Redirect to another page on correct selection
      } else {
        chancesLeft--;
        if (chancesLeft === 0) {
          alert("Incorrect image selected. You have no chances left.");
          window.location.href = "index.html"; // Redirect to another page on incorrect selection and no chances left
        } else {
          alert("Incorrect image selected. Chances left: " + chancesLeft);
        }
      }
    }

    var correctLocker1 = 96; // Generate a random two-digit number between 10 and 99 for the first locker
    var correctLocker2 =56; // Generate a random two-digit number between 10 and 99 for the second locker
    var chances1 = 2; // Number of chances for the first locker
    var chances2 = 2; // Number of chances for the second locker

    function guessLocker1() {
        var guess1 = parseInt(prompt("Enter a two-digit number to guess the first 2 digit number :"));
        chances1--;

        if (guess1 === correctLocker1) {
            alert("Congratulations! You guessed correctly! Now guess the second 2 digit number.");
            guessLocker2();
        } else if (chances1 > 0) {
            alert("Try again! Chances left: " + chances1);
        } else {
            alert("Sorry, you ran out of chances. Better luck next time!");
            window.location.href = "index.html";
        }
    }

    function guessLocker2() {
        var guess2 = parseInt(prompt("Enter a two-digit number to guess the second 2 digit number :"));
        chances2--;

        if (guess2 === correctLocker2) {
            alert("Congratulations! You guessed correctly! You opened locker.");
            window.location.href = "finish.html"; // Redirect to another page
        } else if (chances2 > 0) {
            alert("Try again! Chances left: " + chances2);
        } else {
            alert("Sorry, you ran out of chances. Better luck next time!");
            window.location.href = "index.html";
        }
    }
        function handleImageClick() {
            alert('Congrats,on to the next clue');
            window.location.href = "clue2.html";
            // Add your desired code here for handling the click event on the image portion
          }
          function handleImageClick2() {
            alert('Congrats,on to the next clue');
            alert('Be careful as there are only two chances on your next clue to move forward')
            alert('Pay close attention to the next page because it will be essential in the last hint.')
            window.location.href = "clue3.html";
            // Add your desired code here for handling the click event on the image portion
          }
