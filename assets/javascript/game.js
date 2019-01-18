var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var wins = 0;
        var losses = 0;
        var remainingGuess = 10;
        var guessedLetters = [];

        document.onkeyup = function (event) {
            if (alphabet.indexOf(event.key.toLowerCase()) === -1) {
                return;
            }

            var userGuess = event.key;
            // console.log('userGuess', userGuess);
            guessedLetters.push(userGuess);
            // console.log('guessedLetters', guessedLetters);

            var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

            if (userGuess === computerGuess) {
                wins++;
                remainingGuess--;
            }

            if (userGuess !== computerGuess) {
                remainingGuess--;
            }

            if (remainingGuess == 0) {
                losses++;
                guessedLetters = [];
                remainingGuess = 10;
            }

            document.getElementById('wins').innerHTML = wins;
            document.getElementById('losses').innerHTML = losses;
            document.getElementById('remain').innerHTML = remainingGuess;
            document.getElementById('guess').innerHTML = guessedLetters;

        }