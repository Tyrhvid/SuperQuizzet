class Question {
  constructor(statement, correctAnswer) {
    this.statement = statement;
    this.correctAnswer = correctAnswer;
  }
}

const questions = [new Question("Hej", true), new Question("Då", false)];

console.log(questions);

const questionsList = document.querySelector("#questions");

console.log(questionsList);

for (const question of questions) {
  console.log(question);

  const li = document.createElement("li");
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardFooter = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const trueBtn = document.createElement("button");
  const falseBtn = document.createElement("button");

  li.classList.add("list-group-item", "bg-dark", "border-danger");
  card.classList.add("card", "bg-dark", "container");
  cardBody.classList.add("card-body", "row");
  cardFooter.classList.add("card-footer", "row", "container");
  cardTitle.classList.add("card-title", "text-info", "text-center");
  trueBtn.classList.add("btn", "btn-success", "mx-1", "col");
  falseBtn.classList.add("btn", "btn-danger", "mx-1", "col");

  trueBtn.innerText = "True";
  trueBtn.onclick = ()=> {
    console.log("Du tryckte på true!");
  };
  falseBtn.innerText = "False";
  falseBtn.onclick= ()=>{
    console.log("Du tryckte på false!");
  };

  cardTitle.innerText = question.statement;

  cardBody.appendChild(cardTitle);
  cardFooter.appendChild(trueBtn);
  cardFooter.appendChild(falseBtn);

  card.appendChild(cardBody);
  card.appendChild(cardFooter);
  li.appendChild(card);

  questionsList.appendChild(li);
}
