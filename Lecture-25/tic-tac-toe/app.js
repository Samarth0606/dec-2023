

let cellElements = document.querySelectorAll('.cell');
// console.log(cellElements);

let circle_turn = false;

for(let cell of cellElements){
    cell.addEventListener('click' , handleCLick, {once:true})
}
let winning_combination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function handleCLick(event){
    // mark the symbol (x/o)
    let clickedCell = event.target;
    let currentClass = circle_turn ? "circle" : "x";
    clickedCell.classList.add(currentClass)


    // check won
    if(checkWin(currentClass)){
       document.querySelector('.final-winner').innerHTML = `WINNER IS ${currentClass}`
       document.querySelector('.winnerMessage').classList.add('show')
    }

    // check draw
    else if(checkDraw()){
        document.querySelector('.final-winner').innerHTML = 'Draw'
       document.querySelector('.winnerMessage').classList.add('show')
    }

    // toggle turn
    circle_turn = !circle_turn
}

function checkWin(currentClass){
    return winning_combination.some(function(itemRow){
        return itemRow.every(function(item){
            return cellElements[item].classList.contains(currentClass)
        })
    })
}

function checkDraw(){
    return [...cellElements].every(function(cell){
        return cell.classList.contains('x') || cell.classList.contains('circle')
    })
}

function restart(){
    window.location.reload();
}

document.querySelector('#restart-btn').onclick = restart
document.querySelector('#startBtn').onclick = restart

