const squaresContainer = document.querySelector('.squares-container');

for (let i = 1; i <= 100 ; i++ ){
    
    // squaresContainer.innerHTML += `<div class="square" id="square-${i}"></div>`
    // let square = document.getElementById(`square-${i}`);

    const square = document.createElement("div");
    const squareText = document.createElement("span");

    square.classList.add('square');
    square.id = (`square-${i}`);
    square.append(squareText);
    squaresContainer.append(square);

    if (i % 3 == 0 || i % 5 == 0){
        if ( i % 3 == 0){
            square.classList.add("fizz");
            squareText.innerHTML += "Fizz";
        }
        if ( i % 5 == 0){
            square.classList.add("buzz");
            squareText.innerHTML += "Buzz";
        }
    }else {
        squareText.innerHTML = i;
    }
}