
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

function parseExp(expression: string) {
  const logicOps = new Set(['&', '|']);
  let left: string, op: string, right:string;
  let logicIdx: number;
  let parenthesisCnt = 0;
  for (let i=0; i<expression.length; i++) {
    const ch = expression[i];
    if (ch === '(') {
      parenthesisCnt++;
    } else if (ch === ')') {
      parenthesisCnt--;
    }
    if (parenthesisCnt===0 && logicOps.has(ch)) {
      logicIdx = i;
      break;
    }
  }
  if (logicIdx===undefined) {
    if (expression[0]==='(' && expression[expression.length-1]===')') {
      parseExp(expression.substring(1,expression.length-1))
    }
  } else {
    left = expression.substring(0,logicIdx);
    op = expression.substring(logicIdx, logicIdx+1);
    right = expression.substring(logicIdx+1);
  }
  console.log({left, op, right});
  if (left && (left.includes('&') || left.includes('|'))) {
    parseExp(left);
  }
  if (right && (right.includes('&') || right.includes('|'))) {
    parseExp(right);
  }
}

function main() {
  const expression = '(((a<1)&(b>1|(c>2|d<a)))&(d<1))';
  // const expStrList = getExpStrList(expression);
  // console.log(expStrList);
  parseExp(expression);
}


main();