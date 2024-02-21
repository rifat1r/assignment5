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
        document.getElementById('total-price').innerText = total

    })
}

const totalText = document.getElementById('total-price').innerText;
let total = parseInt(totalText);
const ticketPrice = 550;
function calculateTotal(){
    total = total + ticketPrice;
    
}