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

function redo_question() {
    print();
    print('sorry that is not a valid answer i will ask you again');
    print();
}
