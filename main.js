
const quesJSON = [
  {
    correctAns: 'Three ',
    ans: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "Q1.How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAns: 'L. Frank Baum',
    ans: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Q2.Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAns: 'Atlanta United',
    ans: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Q3.Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAns: 'A Nanny',
    ans: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'Q4.A female goat is known as what?',
  },
  {
    correctAns: 'P. L. Travers',
    ans: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Q5.Which author wrote 'Mary Poppins'?",
  },
];

let score = 0;
let currQ = 0;
let totalScore = quesJSON.length;
const q1 = document.getElementById('q1');
const a1 = document.getElementById('ans1');
const n1 = document.getElementById('next');
const t1 = document.getElementById('timer');
n1.style.color = 'black';
n1.style.display = 'inline-block';
n1.style.backgroundColor = 'black';
n1.style.color = '#9fdfbf';
n1.style.border = 'none';
n1.style.borderRadius = '20px';
n1.style.padding = '5px ';
n1.style.fontSize = '16px';
n1.style.marginTop = '15%';
n1.style.width = '150px'
n1.style.cursor = 'pointer';

showQuestion();

n1.addEventListener('click', () => {
  // q1.textContent = `Score:${score}/${totalScore}`;
  // startTimer();
  nextQues();
});


function showQuestion() {
  // startTimer();
  //destructuring the elements
  const { question, correctAns, ans } = quesJSON[currQ];
  //setting the text content

  q1.textContent = question;
  let out = shuffleOpt(ans);
  out.forEach((ans1) => {

    const btn1 = document.createElement('button');
    btn1.textContent = ans1;
    a1.appendChild(btn1);
    btn1.addEventListener('click', () => {
      if (ans1 === correctAns) {
        score++;

      }
      // else if(currQ === quesJSON.length){
      //   alert("click on submit button");

      // }
      q1.textContent = `Quiz Completed Score:${score}/${totalScore}`;
      nextQues();
    });

  })
  q1.appendChild(t1);
  q1.appendChild(a1);
  q1.appendChild(n1);

}
function nextQues() {

  currQ++;
  a1.textContent = '';
  if (currQ >= quesJSON.length) {
    // q1.textContent = `Quiz Completed Score:${score}/${totalScore}`;
  }
  if (currQ === quesJSON.length) {
    q1.innerHTML = "Your Quiz is completed <br> Click on Submit button to view your score";
    const bt = document.createElement('button');
    bt.innerHTML = "submit";
    bt.addEventListener('click', () => {
      q1.textContent = `Quiz Completed Score:${score}/${totalScore}`;
    })
    q1.append(bt);

  }
  else {
    showQuestion();
  }
}
function shuffleOpt(opt) {
  for (let i = opt.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [opt[i], opt[j]] = [opt[j], opt[i]];
  }
  return opt;
}

function startTimer() {
  var timeLeft = 60;
  var timerElement = document.getElementById("timer");

  var countdown = setInterval(function () {
    timeLeft--;
    timerElement.textContent = `Time Left:00.${timeLeft}seconds`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert("Time's up!");
      q1.innerHTML = "Your Quiz is completed <br> Click on Submit button to view your score";
      const bt = document.createElement('button');
      bt.innerHTML = "submit";
      bt.addEventListener('click', () => {
        q1.textContent = `Quiz Completed Score:${score}/${totalScore}`;
      })
      q1.append(bt);
    }
  }, 1000);
}






