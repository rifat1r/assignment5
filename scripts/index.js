const seats = document.getElementsByClassName('seat');
let selectedSeatCount = 0; 
let selectedSeats = new Set(); 

for (const seat of seats) {
    seat.addEventListener('click', function(event) {
        
        if (selectedSeats.has(seat.innerText)) {
            return; 
        }
        
        
        selectedSeats.add(seat.innerText);
        // Change background color on click
        seat.style.backgroundColor = '#1DD100';

        // Update the selected seat count
        selectedSeatCount++;
        document.getElementById('seat-number').innerText = selectedSeatCount;

        // Take the ticket
        const ticketName = event.target.innerText;

        // Update ticket information
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

        // Total price calculation
        calculateTotal();
        document.getElementById('total-price').innerText = total;
        
        // Apply coupon check
        couponCheck();

        // Update remaining seats
        calculateLeftSeat();
        document.getElementById('seat-left').innerText = convertedSeatLeft;
    });
}


const phoneNo = document.getElementById('phone-no');
const nextBtn = document.getElementById('next-button');

phoneNo.addEventListener('input',function(){
    if(phoneNo.value.trim() !== ''){
        nextBtn.removeAttribute('disabled');
    }
})

// scroll

const scrollButton = document.getElementById('buy-now');
const form = document.getElementById('main');

scrollButton.addEventListener('click', function() {
    form.scrollIntoView({ behavior: '' });
});


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


