let plusBtn = document.getElementById('plus-btn');
let minusBtn = document.getElementById('minus-btn');
let qty = document.getElementById('qty');
let total = document.getElementById('total');

// Event Listener to Add product with Calculation
plusBtn.addEventListener('click', function(){
    let qtyInt = parseInt(qty.innerText);
    qtyInt ++;
    qty.innerText = qtyInt;
    total.innerText = 2500*qtyInt;
})