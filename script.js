// function to check win
function checkWin() {
    let value = new Array()
    for (let index = 1; index <= 9; index++) {
        value[index] = document.getElementById(index).textContent
        // console.log(value[index])
    }
    if (value[1] == value[2] && value[2] == value[3] && value[1] != "") {
        console.log("you won")
        return true
    }
    else if (value[4] == value[5] && value[5] == value[6] && value[4] != "") {
        console.log("You won")
        return true
    }
    else if (value[7] == value[8] && value[8] == value[9] && value[7] != "") {
        console.log("You won")
        return true
    }
    else if (value[1] == value[4] && value[4] == value[7] && value[1] != "") {
        console.log("You won")
        return true
    }
    else if (value[2] == value[5] && value[5] == value[8] && value[2] != "") {
        console.log("You won")
        return true
    }
    else if (value[3] == value[6] && value[6] == value[9] && value[9] != "") {
        console.log("You won")
        return true
    }
    else if (value[1] == value[5] && value[5] == value[9] && value[1] != "") {
        console.log("You won")
        return true
    }
    else if (value[3] == value[5] && value[5] == value[7] && value[3] != "") {
        console.log("You won")
        return true
    }
    else {
        return false
    }
}

// add event listener to take the input
let result
document.addEventListener('DOMContentLoaded', (event) => {
    const boxes = document.querySelectorAll(".boxes")
    function disable(){
        boxes.forEach(box => {
            box.classList.add("disabled")
        });
    } 
    let isX = true
    let clickedCount = 0
    const totalBoxes = boxes.length
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            if (isX) {
                box.textContent = 'X'
            }
            else {
                box.textContent = 'O'
            }
            box.classList.add('disabled')
            result = checkWin()
            if (result == true) {
                if (isX == true) {
                    document.querySelector(".result").textContent = 'X won'
                    console.log("X won")
                }
                else {
                    document.querySelector(".result").textContent = 'O won'
                    console.log("O won")
                }
                disable()
            }
            isX = !isX
            clickedCount++
            if (clickedCount == totalBoxes) {
                if (result == false) {
                    document.querySelector(".result").textContent = 'Draw'
                    console.log("draw")
                }
            }
        })
    })
})


