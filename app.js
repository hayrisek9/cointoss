// create scores tails and heads and reset at startup

let tails = 0;
let heads = 0;

// select buttons

let coin = document.querySelector('.coin')
let flipBtn = document.querySelector('#flip-coin')
let resetBtn = document.querySelector('#reset-stats')

// when clicked flip button

flipBtn.addEventListener('click',()=>{
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = 'none';
    if(i){
setTimeout(() => {
    coin.style.animation = 'spin-heads 3s forwards';
}, 100);
heads++;
    }else{
        setTimeout(() => {
            coin.style.animation = 'spin-tails 3s forwards'; 
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
})
function updateStats(){
    document.querySelector('#heads-coin').textContent = `heads: ${heads}`
    document.querySelector('#tails-coin').textContent = `tails: ${tails}`
}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener('click', () =>{
coin.style.animation = 'none';
heads=0
    tails=0
    updateStats()
})