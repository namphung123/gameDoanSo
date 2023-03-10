const msg1 = document.getElementById("message1");
const msg2 = document.getElementById("message2");
const msg3 = document.getElementById("message3");
const my_btn = document.getElementById('my_btn');

const answer = Math.floor(Math.random() * 100) + 1;
let no_of_guess = 0;
let guessed_num = [];

my_btn.addEventListener("click",play);

function play() {
    const user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100) {
        alert("Please enter a number between 1 and 100");
    }
    else {
        guessed_num.push(user_guess);
        no_of_guess+=1;

        if(user_guess < answer) {
            msg1.textContent = "Your guess is too low";
            msg2.textContent = "No. of guess: " + no_of_guess;
            msg3.textContent = "Guessed numbers are: " + guessed_num;
        }

        else if(user_guess > answer) {
            msg1.textContent = "Your guess is too high";
            msg2.textContent = "No. of guess: " + no_of_guess;
            msg3.textContent = "Guessed numbers are: " + guessed_num;
        }

        else if (user_guess == answer) {
            msg1.textContent = "You win";
            msg2.textContent = "The number was:" + answer;
            msg3.textContent = "You guessed it in " + no_of_guess + " guesses";
            my_btn.disabled = true;
        }

    }
}
