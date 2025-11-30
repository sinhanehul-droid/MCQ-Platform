function Start() {
    document.getElementById("main").innerHTML = `<div id="register" class="register"><label for="username">Name</label><input id="username" class="input" type="text"><br><label for="email">Email</label><input id="email" class="input" type="email" required><br><br><br><button type="submit" id="startQuiz" onclick="Quiz()">Start Quiz</button></div>`
}
let allQuestions = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Machine Language", "Hyperloop Text Maker"], answer: 0 },
    { question: "JS stands for?", options: ["Java Syntax", "JavaScript", "Java Server", "Jumbo Script"], answer: 1 },
    { question: "CSS controls?", options: ["Logic", "Structure", "Design", "Database"], answer: 2 },
    { question: "Which tag displays an image?", options: ["<pic>", "<img>", "<imgsrc>", "<image>"], answer: 1 },
    { question: "Which is NOT a datatype in JS?", options: ["string", "boolean", "integer", "undefined"], answer: 2 },
    { question: "console.log() does?", options: ["Prints on screen", "Prints in console", "Creates popup", "Creates file"], answer: 1 },
    { question: "Which is a loop?", options: ["cycle", "for", "repeat", "again"], answer: 1 },
    { question: "Which tag creates a link?", options: ["<goto>", "<a>", "<linker>", "<l>"], answer: 1 },
    { question: "Which shows alert?", options: ["popup()", "warn()", "alert()", "msg()"], answer: 2 },
    { question: "Which removes last array item?", options: ["cut()", "pop()", "remove()", "delete()"], answer: 1 },

    { question: "CSS stands for?", options: ["Cascading Style Sheets", "Computer Style System", "Creative Styling Script", "Control Style Syntax"], answer: 0 },
    { question: "JS is what type of language?", options: ["Compiled", "Markup", "Programming", "Styling"], answer: 2 },
    { question: "Which tag is used for headings?", options: ["<p>", "<h1>", "<header>", "<title>"], answer: 1 },
    { question: "Which symbol is used for comments in JS?", options: ["//", "#", "<!-- -->", "**"], answer: 0 },
    { question: "Which operator assigns value?", options: ["=", "==", "===", "=>"], answer: 0 },
    { question: "InnerHTML modifies?", options: ["Page title", "CSS code", "Page content", "Browser tab"], answer: 2 },
    { question: "Which creates an array?", options: ["{}", "()", "[]", "<>"], answer: 2 },
    { question: "Length of 'Hello'?", options: ["3", "4", "5", "6"], answer: 2 },
    { question: "CSS file is linked using?", options: ["<script>", "<style>", "<css>", "<link>"], answer: 3 },
    { question: "Which tag is for lists?", options: ["<ol>", "<ls>", "<item>", "<ul2>"], answer: 0 },

    { question: "Bootstrap is a?", options: ["JS library", "CSS framework", "Database", "Browser"], answer: 1 },
    { question: "Which stores multiple values?", options: ["integer", "array", "string", "boolean"], answer: 1 },
    { question: "typeof 10 returns?", options: ["string", "boolean", "number", "object"], answer: 2 },
    { question: "Website layout is made using?", options: ["HTML", "CSS", "JS", "Python"], answer: 0 },
    { question: "Which triggers function?", options: ["onclick", "onhover", "onpress", "load()"], answer: 0 },
    { question: "Which increases count?", options: ["count++", "++count", "count+", "count+count"], answer: 0 },
    { question: "Which Boolean is true?", options: ["0", "1==2", "5>3", "null"], answer: 2 },
    { question: "DOM stands for?", options: ["Document Object Model", "Data Object Mark", "Digital Output Mode", "Document Output Module"], answer: 0 },
    { question: "setTimeout is a?", options: ["CSS rule", "JS function", "HTML tag", "Database"], answer: 1 },
    { question: "Which creates a function?", options: ["fun my()", "function test()", "make fun()", "func()"], answer: 1 },

    { question: "Which tag makes bold text?", options: ["<b>", "<bold>", "<stronger>", "<text>"], answer: 0 },
    { question: "Href is used for?", options: ["heading", "styling", "linking", "audio"], answer: 2 },
    { question: "CSS can be written in?", options: ["Inline", "Internal", "External", "All"], answer: 3 },
    { question: "Which is NOT JS?", options: ["alert()", "console.log()", "print()", "document.write()"], answer: 2 },
    { question: "Which defines table row?", options: ["<td>", "<tr>", "<table>", "<row>"], answer: 1 },
    { question: "Which defines table cell?", options: ["<td>", "<tr>", "<tb>", "<cell>"], answer: 0 },
    { question: "HTML is?", options: ["Programming language", "Display language", "Markup language", "Server language"], answer: 2 },
    { question: "CSS color format?", options: ["RGB", "HEX", "HSL", "All"], answer: 3 },
    { question: "Which tag for form?", options: ["<div>", "<form>", "<input>", "<enter>"], answer: 1 },
    { question: "JS array index starts from?", options: ["1", "0", "-1", "2"], answer: 1 },

    { question: "Which runs JS?", options: ["Browser", "Compiler", "Photoshop", "Excel"], answer: 0 },
    { question: "Which creates a button?", options: ["<input type='button'>", "<b>", "<buttonn>", "<btn>"], answer: 0 },
    { question: "Which tag breaks line?", options: ["<bl>", "<break>", "<br>", "<ln>"], answer: 2 },
    { question: "HTML attribute?", options: ["class", "function", "alert", "var"], answer: 0 },
    { question: "CSS border property?", options: ["thin()", "border:", "line:", "frame:"], answer: 1 },
    { question: "JS event?", options: ["click", "hover", "keydown", "All"], answer: 3 },
    { question: "document.body refers to?", options: ["whole page", "head tag", "CSS file", "images only"], answer: 0 },
    { question: "Which makes text italic?", options: ["<i>", "<italic>", "<emphasis>", "<it>"], answer: 0 },
    { question: "Which creates a variable?", options: ["let", "var", "const", "All"], answer: 3 },
    { question: "NaN means?", options: ["Not a Number", "New and Null", "No any Number", "Null and None"], answer: 0 }
];

let quizQuestions = []
let userAnswers = []
let currentQ = 0
let timeLeft = 15
let timerInterval
function Quiz() {
    document.getElementById("main").innerHTML =
        '<div class="mcqBox">' +
        '<h2 id="qNumber"></h2>' +
        '<h3 id="questionText"></h3>' +
        '<div id="options"></div>' +
        '<p id="timer"></p>' +
        '<div style="display:flex;gap:10px;justify-content:center;margin-top:15px;">' +
        '<button id="backBtn" type="button">Back</button>' +
        '<button id="nextBtn" type="button">Next</button>' +
        '<button id="submitBtn" type="button">Submit</button>' +
        '<button id="restartBtn" type="button">Restart</button>' +
        '</div>' +
        '</div>';

    pickQuestions();
    currentQ = 0;
    timeLeft = 15;
    renderQuestion();
    startTimer();

    document.getElementById("nextBtn").onclick = nextQuestion;
    document.getElementById("submitBtn").onclick = submitQuiz;
    document.getElementById("backBtn").onclick = backQuestion;
    document.getElementById("restartBtn").onclick = restartQuiz;
}
function pickQuestions(){
quizQuestions=[];
userAnswers=[];
let used={};
while(quizQuestions.length<10){
let i=Math.floor(Math.random()*allQuestions.length);
if(!used[i]){
used[i]=true;
quizQuestions.push(allQuestions[i]);
userAnswers.push(null);
}
}
}
function renderQuestion(){
let q=quizQuestions[currentQ];
document.getElementById("qNumber").innerText="Question "+(currentQ+1)+" / "+quizQuestions.length;
document.getElementById("questionText").innerText=q.question;

let box=document.getElementById("options");
box.innerHTML="";

for(let i=0;i<q.options.length;i++){
let div=document.createElement("div");
div.className="option";
div.innerText=q.options[i];
div.onclick=function(){ selectOption(i); };
if(userAnswers[currentQ]===i) div.classList.add("selected");
box.appendChild(div);
}

document.getElementById("timer").innerText="Time Left: "+timeLeft+"s";
}

function selectOption(i){
userAnswers[currentQ]=i;
let all=document.getElementsByClassName("option");
for(let a=0;a<all.length;a++){ all[a].classList.remove("selected"); }
all[i].classList.add("selected");
}

function startTimer(){
clearInterval(timerInterval);
timeLeft=15;
timerInterval=setInterval(function(){
timeLeft--;
document.getElementById("timer").innerText="Time Left: "+timeLeft+"s";
if(timeLeft<=0){
clearInterval(timerInterval);
nextQuestion();
}
},1000);
}

function nextQuestion(){
clearInterval(timerInterval);
if(currentQ < quizQuestions.length-1){
currentQ++;
renderQuestion();
startTimer();
}else{
submitQuiz();
}
}

function backQuestion(){
if(currentQ>0){
currentQ--;
renderQuestion();
}
}

function restartQuiz(){
pickQuestions();
currentQ=0;
timeLeft=15;
renderQuestion();
startTimer();
}


function generateRandomQuestions() {
    quizQuestions = []
    userAnswers = []
    let total = allQuestions.length
    if (total < 15) { alert("Only " + total + " questions available. Quiz will use all of them.") }
    let required = Math.min(15, total)
    let used = {}
    while (quizQuestions.length < required) {
        let index = Math.floor(Math.random() * total)
        if (!used[index]) {
            used[index] = true
            quizQuestions.push(allQuestions[index])
            userAnswers.push(null)
        }
    }
}
function loadQuestion() {
    let q = quizQuestions[currentQ]
    document.getElementById("qNumber").innerText = `Question ${currentQ + 1}/15`
    document.getElementById("questionText").innerText = q.question
    let optBox = document.getElementById("options")
    optBox.innerHTML = ""
    for (let i = 0; i < q.options.length; i++) {
        let div = document.createElement("div")
        div.className = "option"
        div.innerText = q.options[i]
        div.onclick = function () { selectOption(i) }
        if (userAnswers[currentQ] === i) { div.classList.add("selected") }
        optBox.appendChild(div)
    }
}
function selectOption(i) {
    userAnswers[currentQ] = i
    let opts = document.getElementsByClassName("option")
    for (let j = 0; j < opts.length; j++) { opts[j].classList.remove("selected") }
    opts[i].classList.add("selected")
}
function startTimer() {
    timeLeft = 15
    document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`
    timerInterval = setInterval(function () {
        timeLeft--
        document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`
        if (timeLeft <= 0) {
            clearInterval(timerInterval)
            autoNext()
        }
    }, 1000)
}
function autoNext() {
    clearInterval(timerInterval)
    if (currentQ < quizQuestions.length - 1) {
        currentQ++
        loadQuestion()
        startTimer()
    } else {
        submitQuiz()
    }
}
function nextQuestion() {
    clearInterval(timerInterval)
    if (currentQ < quizQuestions.length - 1) {
        currentQ++
        loadQuestion()
        startTimer()
    } else {
        submitQuiz()
    }
}
function submitQuiz() {
    clearInterval(timerInterval)
    let confirmSubmit = confirm("Are you sure you want to submit the test now?")
    if (!confirmSubmit) { startTimer(); return }
    let total = quizQuestions.length
    let score = 0
    for (let i = 0; i < total; i++) {
        if (userAnswers[i] === quizQuestions[i].answer) { score++ }
    }
    document.getElementById("main").innerHTML = `<div class="mcqBox"><h1>Your Score: ${score} / ${total}</h1><button id="showAnswersBtn" onclick="showAnswers()">Show Correct Answers</button></div>`
}
function showAnswers() {
    let total = quizQuestions.length
    let html = `<div class="mcqBox"><h1>Correct Answers</h1>`
    for (let i = 0; i < total; i++) {
        let q = quizQuestions[i]
        html += `<p><b>${i + 1}. ${q.question}</b><br>Correct Answer: <span style="color:lightgreen">${q.options[q.answer]}</span><br>Your Answer: <span style="color:${userAnswers[i] === q.answer ? "lightgreen" : "red"}">${userAnswers[i] == null ? "No Answer" : q.options[userAnswers[i]]}</span><br><br></p>`
    }
    html += `</div>`
    document.getElementById("main").innerHTML = html
}
