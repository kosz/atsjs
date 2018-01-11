
function defParam(one = 1, two, { three = 3, four }) {
  return one + two + three + four;
}

console.log(defParam(undefined, undefined, { a: 1, four: 2 }));
