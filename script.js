const ticTac = document.querySelectorAll(".ticTac");
const popWinner = document.querySelector(".popWinner");
const pWinner = document.querySelector(".pWinner");
const btnNew = document.querySelector(".btnNew");

let firstPlayer = true;
let count = 0;

//  იქსის და ნოლის ჩაწერა და ფუნქციის გამოძახება
ticTac.forEach((item) => {
    item.addEventListener("click", function (){
        if(item.innerText == ""){
            if (firstPlayer){
                item.innerText = "X";
            }
        else{
                item.innerText = "O";
            }
        }
        count += 1;
        firstPlayer = !firstPlayer;
        checkWinner();
    })
})

// გამარჯვებულის ფანჯარის ჩახურვა და ახალი თამაშის დაწყება
btnNew.addEventListener("click", function(){
    popWinner.close();
    popWinner.style.visibility = "hidden";
    window.location.reload();
})

//  გამარჯვებულის შემოწმების ფუნქცია
function checkWinner(){
    if (ticTac[4].innerText.length != 0){
        if (ticTac[1].innerText == ticTac[4].innerText && ticTac[4].innerText == ticTac[7].innerText ||
            ticTac[0].innerText == ticTac[4].innerText && ticTac[4].innerText == ticTac[8].innerText ||
            ticTac[2].innerText == ticTac[4].innerText && ticTac[4].innerText == ticTac[6].innerText ||
            ticTac[3].innerText == ticTac[4].innerText && ticTac[4].innerText == ticTac[5].innerText){
                popWinner.style.visibility = "visible";
                if (count % 2 == 1){
                    pWinner.innerHTML = "გამარჯვებულია I მოთამაშე!";
                }
                else {
                    pWinner.innerHTML = "გამარჯვებულია II მოთამაშე!";
                }
                popWinner.showModal();
        }
    }
    if (ticTac[0].innerText.length != 0){
        if (ticTac[0].innerText == ticTac[1].innerText && ticTac[1].innerText == ticTac[2].innerText ||
            ticTac[0].innerText == ticTac[3].innerText && ticTac[3].innerText == ticTac[6].innerText){
                popWinner.style.visibility = "visible";
                if (count % 2 == 1){
                    pWinner.innerHTML = "გამარჯვებულია I მოთამაშე!";
                }
                else {
                    pWinner.innerHTML = "გამარჯვებულია II მოთამაშე!";
                }
                popWinner.showModal();
        }
    }
    if (ticTac[8].innerText.length != 0){
        if (ticTac[2].innerText == ticTac[5].innerText && ticTac[5].innerText == ticTac[8].innerText ||
            ticTac[6].innerText == ticTac[7].innerText && ticTac[7].innerText == ticTac[8].innerText){
                popWinner.style.visibility = "visible";
                if (count % 2 == 1){
                    pWinner.innerHTML = "გამარჯვებულია I მოთამაშე!";
                }
                else {
                    pWinner.innerHTML = "გამარჯვებულია II მოთამაშე!";
                }
                popWinner.showModal();
        }
    }
    if (count >= 9) {
        popWinner.style.visibility = "visible";
        pWinner.innerHTML = "თამაში დასრულდა ფრე!";
        popWinner.showModal();
        }
}