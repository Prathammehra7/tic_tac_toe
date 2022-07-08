var PlayerTurn = true;

const turn = () =>
{
    if (PlayerTurn) {
        PlayerTurn =! PlayerTurn;
        return "X";
    }
    else {
        PlayerTurn =! PlayerTurn;
        return "O";
    }
}

var boxes = document.getElementsByClassName("col");
for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click", () =>{
        boxes[i].innerHTML = turn();
        if(boxes[0].innerHTML && boxes[0].innerHTML === boxes[1].innerHTML && boxes[1].innerHTML === boxes[2].innerHTML ) 
        {
            boxes[0].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[1].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[2].style.backgroundColor = "rgb(93, 255, 93)";
        }
        else if(boxes[3].innerHTML && boxes[3].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[5].innerHTML)
        {
            boxes[3].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[4].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[5].style.backgroundColor = "rgb(93, 255, 93)";
        }
        else if(boxes[6].innerHTML && boxes[6].innerHTML === boxes[7].innerHTML && boxes[7].innerHTML === boxes[8].innerHTML)
        {
            boxes[6].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[7].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[8].style.backgroundColor = "rgb(93, 255, 93)";
 
        }
        else if(boxes[0].innerHTML && boxes[0].innerHTML === boxes[3].innerHTML && boxes[3].innerHTML === boxes[6].innerHTML)
        {
            boxes[0].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[3].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[6].style.backgroundColor = "rgb(93, 255, 93)";
           
        }
        else if(boxes[1].innerHTML && boxes[1].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[7].innerHTML)
        {
            boxes[1].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[4].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[7].style.backgroundColor = "rgb(93, 255, 93)";
            
        }
        else if(boxes[2].innerHTML && boxes[2].innerHTML === boxes[5].innerHTML && boxes[5].innerHTML === boxes[8].innerHTML)
        {
            boxes[2].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[5].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[8].style.backgroundColor = "rgb(93, 255, 93)";
            
        }
        else if(boxes[0].innerHTML && boxes[0].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[8].innerHTML)
        {
            boxes[0].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[4].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[8].style.backgroundColor = "rgb(93, 255, 93)";
           
        }
        else if(boxes[2].innerHTML && boxes[2].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[6].innerHTML)
        {
            boxes[2].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[4].style.backgroundColor = "rgb(93, 255, 93)";
            boxes[6].style.backgroundColor = "rgb(93, 255, 93)";
            
        }
        function playerturn() {
            if (this.innerHTML !== EMPTY) {
                return;
            }
            this.innerHTML = turn;
            moves += 1;
            score[turn] += this.identifier;
            if (win(this)) {
                alert('Winner: Player ' + turn);
                startNewGame();
            } else if (moves === N_SIZE * N_SIZE) {
                alert("Draw");
                startNewGame();
            } else {
                turn = turn === "X" ? "O" : "X";
                document.getElementById('turn').textContent = 'Player ' + turn;
            }
        }
    
        init();
    });
}
