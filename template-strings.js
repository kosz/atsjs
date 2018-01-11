var variable = 'hello';
var html = '<div>\n' + variable + '\n</div>';
// 'string', "string"
//
function a(b) {
    return b + " .....";
}
var templateStringHtml = "\n  <div>\n    " + variable + " " + a('hello') + " \n  </div>\n";
console.log(templateStringHtml);
