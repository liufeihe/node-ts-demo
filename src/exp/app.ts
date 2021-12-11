function getExpStrList(expression: string) {
  expression = expression.replace(new RegExp('[(]', 'g'), '');
  expression = expression.replace(new RegExp('[)]', 'g'), '');
  let expStrList = [];
  const expStTempList = expression.split('&');
  expStTempList.forEach(item => {
    expStrList = expStrList.concat(item.split('|'));
  });
  return expStrList;
}

function getVarFromExp(exp: string) {
  const opList = ['==', '!=', '>=', '>', '<=', '<'];
  let varList = [];
  for (let i=0; i<opList.length; i++) {
    let op = opList[i];
    if (exp.includes(op)) {
      varList = exp.split(op);
      break;
    }
  }
  return varList.map(item => item.trim());
}

function main() {
  const expression = '(a < 1)&(b >1 |(c>2|d<a))';
  const expStrList = getExpStrList(expression);
  console.log(expStrList);
}

main();