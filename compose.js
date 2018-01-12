
function makeDiv(text) {
  return `
    <div>
      ${text}
    </div>
    `;
}

function makeRed(text) {
  return `
    <div style="color: red">
      ${text}
    </div>
    `;
}

function makeBorder(text) {
  return `
    <div style="border: 1px solid black;">
      ${text}
    </div>
    `;
}

function makeRedDivWithBorder(text) {
  return makeDiv(makeRed(makeBorder(text)));
}

const compose = (...functions) => payload =>
  functions.reduce((payload, reducer) => reducer(payload), payload);

let composedRedDivWithBorder = compose(makeDiv, makeRed, makeBorder);
console.log(composedRedDivWithBorder('iasdf World'));


//console.log(makeRedDivWithBorder('Hello World'));
