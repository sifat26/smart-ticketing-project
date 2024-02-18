let btnClick = 0;
let totalSeat = 0;
let bookedSeat = 0;
let totalCost = 0;
let grandTotal = 0;

const buttons = document.getElementsByClassName("bton");
for (let button of buttons) {
  button.addEventListener("click", function () {
    btnClick++;
    if (btnClick > 4) {
      alert("Please select 4 Ticket");
      return;
    }

    colorChange(button);
    CostCount();
  });
}
function colorChange(button) {
  button.style.backgroundColor = "#1DD100";
  button.disabled = true;
  const tSeat = document.getElementById("total-seat");
  const totalSeat = parseInt(tSeat.innerText) - 1;
  tSeat.innerText = totalSeat;
  const bSeat = document.getElementById("booked-seat");
  const bookedSeat = parseInt(bSeat.innerText) + 1;
  bSeat.innerText = bookedSeat;
  const p1 = document.createElement("p");
  p1.textContent = button.innerText;
  const p2 = document.createElement("p");
  p2.textContent = "Economoy";
  const p3 = document.createElement("p");
  p3.textContent = "550";
  let showSeat = document.getElementById("show-seat");
  showSeat.appendChild(p1);
  showSeat.appendChild(p2);
  showSeat.appendChild(p3);
  p2.classList.add("text-center");
  p3.classList.add("text-end");
}
function CostCount() {
  const tCost = document.getElementById("total-cost");
  totalCost += 550;
  tCost.innerText = totalCost;
  const gCost = document.getElementById("grand-total");
  grandTotal += 550;
  gCost.innerText = grandTotal;
  const btnClk = document.getElementById("btn-clk");
  btnClk.addEventListener("click", function () {
    const inputValue = document
      .getElementById("cpn-input")
      .addEventListener("keyup", function (event) {
        const input = event.target.value;
        if (input === "NEW15" && btnClick >= 4) {
          const aplyBtn = document.getElementById("apply-btn");
          aplyBtn.removeAttribute("disabled");

          btnClk.addEventListener("click", function () {
            gCost.innerText = grandTotal - grandTotal * 0.15;
            btnClk.style.display = "none";
          });
        } else if (input === "Couple 20" && btnClick >= 4) {
          const aplyBtn = document.getElementById("apply-btn");
          aplyBtn.removeAttribute("disabled");
          btnClk.addEventListener("click", function () {
            gCost.innerText = grandTotal - grandTotal * 0.2;
            btnClk.style.display = "none";
          });
        }
      });
  });
}

function discount(){
    
}