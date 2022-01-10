document.getElementById('E-ticket-increase').addEventListener('click', function(){
    handleProductChange('E',true);
});

document.getElementById('E-ticket-decrease').addEventListener('click', function(){
    handleProductChange('E',false);
});

document.getElementById('F-ticket-increase').addEventListener('click', function(){
    handleProductChange('F',true);
});

document.getElementById('F-ticket-decrease').addEventListener('click', function(){
    handleProductChange('F',false);
});
function handleProductChange(ticket,isIncrease){

    const ticketInout = document.getElementById(ticket+'-ticket-count');
    const ticketCount = parseInt(ticketInout.value);
    let ticketNewCount = ticketCount;
    if(isIncrease == true ){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount>0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInout.value = ticketNewCount;
    let ticketTotal =0;
    if(ticket=='E'){
        ticketTotal = ticketNewCount * 100;
    }if(ticket=='F'){
        ticketTotal = ticketNewCount * 150;
    }
    calculateTotal();
}
function calculateTotal(){
    const ETicketInput = document.getElementById('E-ticket-count');
    const ETicketCount = parseInt(ETicketInput.value);
    const FTicketInput = document.getElementById('F-ticket-count');
    const FTicketCount =parseInt(FTicketInput.value);
    const priceWithOutTax = (FTicketCount * 150) + (ETicketCount * 100)
    document.getElementById('ticket-total').innerText ='$' + priceWithOutTax;
    const tax = Math.round(priceWithOutTax * 0.1);
    document.getElementById('tax-amount').innerText = '$'+tax;
    const grandTotal = priceWithOutTax + tax;
    document.getElementById('grandTotal').innerText = '$'+grandTotal;

}




// document.getElementById('ticket-increase').addEventListener('click', function(){
//     const ticketInout = document.getElementById('ticket-count');
//     const ticketCount = parseInt(ticketInout.value);
//     const ticketNewCount = ticketCount + 1;
//     ticketInout.value = ticketNewCount;
//     const ticketTotal = ticketNewCount * 100;
//     document.getElementById('ticket-total').innerText ='$' + ticketTotal;

// });

// document.getElementById('ticket-decrease').addEventListener('click', function(){
//     const ticketInout = document.getElementById('ticket-count');
//     const ticketCount = parseInt(ticketInout.value);
//     const ticketNewCount = ticketCount - 1;
//     ticketInout.value = ticketNewCount;
//     const ticketTotal = ticketNewCount * 100;
//     document.getElementById('ticket-total').innerText ='$' + ticketTotal;

// });