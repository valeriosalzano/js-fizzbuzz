const squaresContainer = document.querySelector('.squares-container');

const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

submitBtn.addEventListener('click',
    function(){
        squaresContainer.innerHTML = "";

        const userSquares = document.getElementById("userSquares");
        const userFirstNumber = document.getElementById("userFirstNumber");
        const userSecondNumber = document.getElementById("userSecondNumber");

        let squaresNumber = Math.abs(userSquares.value);
        let fizzNumber = Math.abs(userFirstNumber.value);
        let buzzNumber = Math.abs(userSecondNumber.value);

        for (let i = 1; i <= squaresNumber ; i++ ){
            
            // squaresContainer.innerHTML += `<div class="square" id="square-${i}"></div>`
            // let square = document.getElementById(`square-${i}`);

            const square = document.createElement("div");
            const squareText = document.createElement("span");

            square.classList.add('square');
            square.id = (`square-${i}`);
            square.append(squareText);
            squaresContainer.append(square);

            if (i % fizzNumber == 0 || i % buzzNumber == 0){
                if ( i % fizzNumber == 0){
                    square.classList.add("fizz");
                    squareText.innerHTML += "Fizz";
                }
                if ( i % buzzNumber == 0){
                    square.classList.add("buzz");
                    squareText.innerHTML += "Buzz";
                }
            }else {
                squareText.innerHTML = i;
            }

            console.log(squareText.innerHTML)
        }

        squaresContainer.classList.remove("d-none");
        squaresContainer.classList.add("d-flex");
    }
);

resetBtn.addEventListener('click',
    function(){
        userSquares.value = "";
        userFirstNumber.value = "";
        userSecondNumber.value = "";

        squaresContainer.classList.add("d-none");
        squaresContainer.classList.remove("d-flex");
    }
);