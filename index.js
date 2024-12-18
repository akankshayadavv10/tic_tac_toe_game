
// Variable Declarations 
let turn = "X";
let arr = new Array(9).fill(null)
let isWin = false;
let div = document.getElementById("alert")
let btns = document.querySelectorAll(".box")


// Play Function 
function play(e) {
    if(!isWin) {
        if (arr[e.id] == null) {
            if (turn == "X") {
                turn = "O"
            } else {
                turn = "X"
            }
            e.innerText = turn
            arr[e.id] = turn
            checkWinner();

        } else {
            return;
        }
    } else {
        return;
    }


}


// checkWinner Function 

function checkWinner() {
    if (
        arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2] ||
        arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5] ||
        arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8] ||
        arr[0] !== null && arr[0] == arr[2] && arr[2] == arr[6] ||
        arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6] ||
        arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7] ||
        arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8] ||
        arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8] ||
        arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]
    ) {
        isWin = true
        div.style.visibility="visible"
        document.getElementById("title").innerText=`Congratulation Player ${turn}`
    } else {
        if (arr.includes(null)) {
            return
        } else {
        div.style.visibility="visible"
        document.getElementById("title").innerText=`Game is Draw`
        document.getElementById("sub-title").innerText=`No one win the Game `

        }
    }
}

// restartGame Function 

function restartGame() {
    div.style.visibility = "hidden";

    arr = new Array(9).fill(null)

    for (let i = 0; i < btns.length; i++) {
        btns[i].innerText = ""

    }

    isWin=false
}
