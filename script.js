let btnClick = 0;
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
    


}
