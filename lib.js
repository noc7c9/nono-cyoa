const KEY_ENTER = 13;

const $output = document.querySelector('.output');
const $input = document.querySelector('.input > input');
const $button = document.querySelector('.input > button');
const $error = document.querySelector('.error');

$input.addEventListener('keyup', function (event) {
    if (event.keyCode === KEY_ENTER) {
        event.preventDefault();
        $button.click();
    }
});

function print(text = '', klass = null) {
    const p = document.createElement('p');
    text = text.trim();
    p.innerHTML = text == '' ? '&nbsp;' : text;
    if (klass !== null) {
        p.classList.add(klass);
    }

    $output.appendChild(p);

    // scroll to the bottom
    $output.scrollTop = $output.scrollHeight;
}

async function input(p = null) {
    if (p !== null) {
        print(p);
    }
    return new Promise((resolve) => {
        $button.onclick = () => {
            const value = $input.value.trim();

            // Ignore empty input
            if (value === '') {
                return;
            }

            resolve($input.value);
        };
    });
}

function clearInput() {
    $input.value = '';
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

    // Ask the question (happens only once)
    print(prompt);

    // Keep reading user input until the a valid answer is given
    while (true) {
        // Read user input
        const answer = await input();

        // Check if the input is a valid answer
        if (validAnswers.includes(answer)) {
            // Hide the error message (if it is visible)
            $error.classList.add('hidden');

            // Print the answer
            print(answer, 'input');

            // Clear the input
            clearInput();

            // Return the answer
            return answer;
        } else {
            // If the answer is not valid show an error message and ask again
            $error.innerHTML = `Error: Invalid answer, expected one of: ${validAnswers.join(
                ', ',
            )}`;

            // Reset the animation
            $error.classList.remove('anim-x-shake');
            // src: https://css-tricks.com/restart-css-animation/#aa-update-another-javascript-method-to-restart-a-css-animation
            void $error.offsetWidth; // trigger a DOM reflow
            $error.classList.add('anim-x-shake');

            // Show the error message
            $error.classList.remove('hidden');
        }
    }
}
