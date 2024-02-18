let btnClick = 0;
let totalSeat=0;
let bookedSeat = 0;

const buttons=document.getElementsByClassName("bton");
for(let button of buttons){
    button.addEventListener("click",function(event){
        btnClick++;
        // console.log(btnClick);
        if(btnClick>4){
            alert("Please select 4 Ticket");
            return;
            
        }

        colorChange(button);

    });
}
function colorChange(button){
    button.style.backgroundColor = "#1DD100";
    const tSeat= document.getElementById('total-seat');
    const totalSeat=parseInt(tSeat.innerText)-1;
    tSeat.innerText=totalSeat;
    const bSeat= document.getElementById('booked-seat');
    const bookedSeat=parseInt(bSeat.innerText)+1;
    bSeat.innerText=bookedSeat;



    


}
