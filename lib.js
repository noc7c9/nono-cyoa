const KEY_ENTER = 13;

const outElem = document.getElementById('output');
const inElem = document.getElementById('input');
const button = document.getElementById('button');

inElem.addEventListener('keyup', function (event) {
    if (event.keyCode === KEY_ENTER) {
        event.preventDefault();
        document.getElementById('button').click();
    }
});

function print(text = '') {
    outElem.innerHTML += text + '<br>';
}

async function input(p) {
    print(p);
    return new Promise((resolve) => {
        button.onclick = () => {
            resolve(inElem.value);
            inElem.value = '';
        };
    });
}

// This function will repeatedly ask the user a question until they give a valid answer
//
// The question is a string
// The answers is either an array of strings
// or a record of strings where the key is the expected input and the value is
// additional information to display to the user
//
// For example:
//  > ask('what is your name', ['yes', 'no'])
//  what is your name (bob/alice)
//
//  > ask('what is your name', {b: 'bob', a: 'alice'})
//  what is your name (b bob/a alice)
//
async function ask(question, answers) {
    const prompt = Array.isArray(answers)
        ? `${question} (${answers.join('/')})`
        : `${question} (${Object.entries(answers)
              .map(([k, v]) => `${k} ${v}`)
              .join('/')})`;

    const validAnswers = Array.isArray(answers)
        ? answers
        : Object.keys(answers);

    // Keep asking the question until the user gives a valid answer
    while (true) {
        // Ask the question
        const answer = await input(prompt);

        // Check if the answer is valid
        if (validAnswers.includes(answer)) {
            // If the answer is valid return it
            return answer;
        } else {
            // If the answer is not valid print an error message and ask again
            print();
            print('sorry that is not a valid answer i will ask you again');
            print();
        }
    }
}
