const bill = document.querySelector(".bill");
const people = document.querySelector(".people");
const selects = document.querySelectorAll(".percente");
const custom = document.querySelector(".custom");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total-am");
const reset = document.querySelector(".reset");
let selectVL;
let billVL;
let peopleVL;
let customVL;

selects.forEach((select) => {
  select.addEventListener("click", selectButton);
});
bill.addEventListener("input", handleBill);
people.addEventListener("input", handlePeople);
custom.addEventListener("input", hadleCustom);

function selectButton(e) {
  selects.forEach((select) => {
    if (e.target.value == select.value) {
      select.classList.toggle("active");
      selectVL = select.value / 100;
      caculate();
    } else {
      select.classList.remove("active");
    }
  });

  //   console.log("selectButton -> selectVL", selectVL);
}

function handleBill(e) {
  billVL = e.target.value;

  caculate();
}

function handlePeople(e) {
  peopleVL = e.target.value;
  if (peopleVL > 0 || peopleVL == "") {
    e.target.parentNode.classList.remove("active");
    caculate();
  } else {
    e.target.parentNode.classList.add("active");
  }
}

function caculate() {
  const a = document.querySelector(".tip-amount p:nth-of-type(2)");
  const b = document.querySelector(".total p:nth-of-type(2)");

  let tip2 = (billVL / peopleVL) * selectVL;
  a.innerHTML = `$${tip2.toFixed(2)}`;
  let total2 = (billVL / peopleVL) * selectVL + billVL / peopleVL;
  b.innerHTML = `$${total2.toFixed(2)}`;

  if (customVL) {
    let tip2 = (billVL / peopleVL) * customVL;
    a.innerHTML = `$${tip2.toFixed(2)}`;
    let total2 = (billVL / peopleVL) * customVL + billVL / peopleVL;
    b.innerHTML = `$${total2.toFixed(2)}`;
  }
}

reset.onclick = () => {
  const a = document.querySelector(".tip-amount p:nth-of-type(2)");
  const b = document.querySelector(".total p:nth-of-type(2)");

  a.innerHTML = "$0.00";
  b.innerHTML = "$0.00";
  bill.value = "";
  people.value = "";
  custom.value = "";
};

function hadleCustom(e) {
  customVL = e.target.value / 100;
  caculate();
}
