const seats = document.getElementsByClassName('seat');
for(const seat of seats){
    seat.addEventListener('click',
    function(event){
        //change bg color on click
        seat.style.backgroundColor = '#1DD100';
        //take the ticket
        const ticketName = event.target.innerText;
        // console.log(ticketName);
        const ticketPlace = document.getElementById('ticket-place');
        const ticketDiv = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = ticketName;
        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        const p3 = document.createElement('p');
        p3.innerText = '550';
        ticketPlace.appendChild(ticketDiv);
        ticketDiv.appendChild(p);
        ticketDiv.appendChild(p2);
        ticketDiv.appendChild(p3);
        //total price calculation
        calculateTotal()
        document.getElementById('total-price').innerText = total;
        couponCheck()
        calculateLeftSeat()
        document.getElementById('seat-left').innerText = convertedSeatLeft;
    })
}

const phoneNo = document.getElementById('phone-no');
const nextBtn = document.getElementById('next-button');

phoneNo.addEventListener('input',function(){
    if(phoneNo.value.trim() !== ''){
        nextBtn.removeAttribute('disabled');
    }
})


const leftSeat = document.getElementById('seat-left').innerText;
let convertedSeatLeft = parseInt(leftSeat);

function calculateLeftSeat(){
    convertedSeatLeft = convertedSeatLeft - 1;
    return convertedSeatLeft;   
}



const totalText = document.getElementById('total-price').innerText;
let total = parseInt(totalText);
const ticketPrice = 550;
function calculateTotal(){
    total = total + ticketPrice;
    return total;
}
const couponInput = document.getElementById('coupon-input').value;

function couponCheck() {
    const couponInput = document.getElementById('coupon-input').value;
    const totalText = document.getElementById('total-price').innerText;
    let total = parseInt(totalText);
    

    if (couponInput === 'NEW15') {
        const discount = total * 0.15;
        const grandTotal = total - discount;
        document.getElementById('grand-total').innerText = grandTotal;
    } else if (couponInput === 'Couple 20') {
        const discount = total * 0.20;
        const grandTotal = total - discount;
        document.getElementById('grand-total').innerText = grandTotal;
    } else {
        document.getElementById('grand-total').innerText = total;
    }
}


