const ticTac = document.querySelectorAll(".ticTac");
const popWinner = document.querySelector(".popWinner");
const pWinner = document.querySelector(".pWinner");
const btnNew = document.querySelector(".btnNew");

let firstPlayer = true;
let count = 0;

ticTac.forEach((item) => {
    item.addEventListener("click", function (){
        if (firstPlayer){
            if(item.innerText == ""){
                item.innerText = "X";
            }
        }
        else{
            if(item.innerText == ""){
                item.innerText = "O";
            }
        }
        count += 1;
        firstPlayer = !firstPlayer;
        if (ticTac[0].innerText == "X" && ticTac[1].innerText == "X" && ticTac[2].innerText == "X"
            || ticTac[3].innerText == "X" && ticTac[4].innerText == "X" && ticTac[5].innerText == "X"
            || ticTac[6].innerText == "X" && ticTac[7].innerText == "X" && ticTac[8].innerText == "X"
            || ticTac[0].innerText == "X" && ticTac[3].innerText == "X" && ticTac[6].innerText == "X"
            || ticTac[1].innerText == "X" && ticTac[4].innerText == "X" && ticTac[7].innerText == "X"
            || ticTac[2].innerText == "X" && ticTac[5].innerText == "X" && ticTac[8].innerText == "X"
            || ticTac[0].innerText == "X" && ticTac[4].innerText == "X" && ticTac[8].innerText == "X"
            || ticTac[2].innerText == "X" && ticTac[4].innerText == "X" && ticTac[6].innerText == "X")
            {
            popWinner.style.visibility = "visible";
            pWinner.innerHTML = "გამარჯვებულია I მოთამაშე!";
            popWinner.showModal();
        }
        else if (ticTac[0].innerText == "O" && ticTac[1].innerText == "O" && ticTac[2].innerText == "O"
        || ticTac[3].innerText == "O" && ticTac[4].innerText == "O" && ticTac[5].innerText == "O"
        || ticTac[6].innerText == "O" && ticTac[7].innerText == "O" && ticTac[8].innerText == "O"
        || ticTac[0].innerText == "O" && ticTac[3].innerText == "O" && ticTac[6].innerText == "O"
        || ticTac[1].innerText == "O" && ticTac[4].innerText == "O" && ticTac[7].innerText == "O"
        || ticTac[2].innerText == "O" && ticTac[5].innerText == "O" && ticTac[8].innerText == "O"
        || ticTac[0].innerText == "O" && ticTac[4].innerText == "O" && ticTac[8].innerText == "O"
        || ticTac[2].innerText == "O" && ticTac[4].innerText == "O" && ticTac[6].innerText == "O")
        {
            popWinner.style.visibility = "visible";
            pWinner.innerHTML = "გამარჯვებულია მე-II მოთამაშე!";
            popWinner.showModal();
        }
        else if (count >= 9) {
            popWinner.style.visibility = "visible";
            pWinner.innerHTML = "თამაში დასრულდა ფრე!";
            popWinner.showModal();
        }
    })
})

btnNew.addEventListener("click", function(){
    popWinner.close();
    popWinner.style.visibility = "hidden";
    window.location.reload();
})