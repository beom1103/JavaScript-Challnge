const budget = document.getElementById("income");

const expenseName = document.getElementById("expense-name");
const expenseCost = document.getElementById("expense-amount");
const expenseBtn = document.getElementById("add-expense-button");

const income = document.querySelector(".income");
const expense = document.querySelector(".expense");
const balance = document.querySelector(".balance");

const exPanel = document.querySelector(".expenses-panel");

let expenseList = [];

const changeColor = () => {
  const total = balance.innerHTML;
  console.log(total.slice(0, -1));
  if (Number(total.slice(0, -1)) < 0) {
    balance.classList.add("negative");
    balance.classList.remove("positive");
  } else {
    balance.classList.add("positive");
    balance.classList.remove("negative");
  }
};

// 예산 추가
const getBudget = () => {
  const prevBudget = localStorage.getItem("budget");

  if (!prevBudget) {
    localStorage.setItem("budget", budget.value);
  }
  const newBudget = Number(prevBudget) + Number(budget.value);
  localStorage.setItem("budget", newBudget);
  income.textContent = `${newBudget}₩`;
  budget.value = "";
};

// expense list 만드는 함수
const paintList = (list) => {
  const div = document.createElement("div");
  div.id = list.id;
  div.innerHTML = `<h2>Expenses</h2>
        <div class="expense-table">
          <div>${list.exName}</div>
          <div>${list.cost}₩</div>
          <div class="delete">
            <button id=${list.id}name="delete-expense" class="delete-expense">
              <img src="./images/trash.svg" alt="Tash" />
            </button>
          </div>`;
  exPanel.appendChild(div);
  const deleteBtn = document.getElementById(list.id);
  deleteBtn.addEventListener("click", deleteList);
};

// expense list 추가
const submitExpense = () => {
  getBudget();
  const getExpenseObj = {
    id: String(Date.now()),
    exName: expenseName.value,
    cost: expenseCost.value,
  };
  expenseList.push(getExpenseObj);
  localStorage.setItem("history", JSON.stringify(expenseList));
  expenseName.value = "";
  expenseCost.value = "";
  paintList(getExpenseObj);
  updatePrice();
  changeColor();
};

// localStorage에서 지출 리스트 load
const loadList = () => {
  expenseList = JSON.parse(localStorage.getItem("history")) || [];
  expenseList.forEach((item) => paintList(item));
};

const updatePrice = () => {
  const cost = expenseList.map((item) => Number(item.cost));
  const expenseCost = cost.reduce((acc, cur) => (acc += cur), 0);
  const budget = localStorage.getItem("budget");
  const total = budget - expenseCost;

  expense.textContent = `${expenseCost}₩`;
  balance.textContent = `${total}₩`;
};

const deleteList = (e) => {
  const deleteBtn = e.target.parentNode;
  const div = deleteBtn.parentNode;
  const parentDiv = div.parentNode;
  const rootDiv = parentDiv.parentNode;

  exPanel.removeChild(rootDiv);
  expenseList = expenseList.filter((item) => item.id !== rootDiv.id);
  localStorage.setItem("history", JSON.stringify(expenseList));
  updatePrice();
  changeColor();
};

expenseBtn.addEventListener("click", submitExpense);

getBudget();
loadList();
updatePrice();
changeColor();
