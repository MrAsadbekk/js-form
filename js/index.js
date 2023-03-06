const userForm = document.querySelector(".form"),
  money = document.querySelector(".money"),
  option = document.querySelectorAll(".option"),
  btn = document.querySelector(".btn"),
  text = document.querySelector(".text"),
  span = document.querySelector(".span"),
  select = document.querySelector(".sel");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (select.value === option[0].value) {
    const x = money.value / 11000;
    text.textContent = x.toFixed(3) + ` USD`;
  } else if (select.value === option[1].value) {
    const x = money.value / 12000;
    text.textContent = x.toFixed(3) + ` yevro`;
  } else if (select.value === option[2].value) {
    const x = money.value / 10000;
    text.textContent = x.toFixed(3) + ` Yuan`;
  } else if (select.value === option[3].value) {
    const x = money.value / 4000;
    text.textContent = x.toFixed(3) + ` rubl`;
  } else if (select.value === option[4].value) {
    const x = money.value / 26000;
    text.textContent = x.toFixed(3) + ` dinor`;
  } else if (select.value === option[5].value) {
    const x = money.value / 9000;
    text.textContent = x.toFixed(3) + `funt`;
  } else if (select.value === option[6].value) {
    const x = money.value / 90000;
    text.textContent = x.toFixed(3) + ` JWT`;
  }
});

const weikday = document.querySelector(".box__weikday"),
  btn1 = document.querySelector(".box__btn"),
  addText = document.querySelector(".add__text");

btn1.addEventListener("click", (e) => {
  e.preventDefault();

  const x = weikday.value;

  switch (x) {
    case "1":
      addText.textContent = "Dushanba";
      break;
    case "2":
      addText.textContent = "Seshanba";
      break;
    case "3":
      addText.textContent = "Chorshanba";
      break;
    case "4":
      addText.textContent = "Payshanba";
      break;
    case "5":
      addText.textContent = "Juma";
      break;
    case "6":
      addText.textContent = "Shanba";
      break;
    case "7":
      addText.textContent = "Yakshanba";
      break;
    default:
      addText.textContent = "Bunday kun yo'q";
      break;
  }
});
