const variable = 'hello';
const html = '<div>\n' + variable + '\n</div>'

// 'string', "string"
//
function a(b) {
  return `${b} .....`;
}

const templateStringHtml = `
  <div>
    ${variable} ${a('hello')} 
  </div>
`;

console.log(templateStringHtml);
