import { evaluate, parse } from 'mathjs';

function doParse(expression: string) {
  const node = parse(expression);
  const facts = {volume:100, volume5:20, userTag:1};
  console.log(expression, node);
  checkNode(node, facts, 0);
}

function checkNode(node: math.MathNode, facts: any, dep: number) {
  if (!['and', 'or', '==', '!=', '>', '>=', '<', '<=', '+', '-', '*', '/'].includes(node.op)) {
    console.log('op is invalid', node.op);
    return;
  }
  if (['and', 'or'].includes(node.op)) {
    if (dep >= 3) {
      console.log('dep is more than 3', dep);
    return;
    }
    // 检查args
    node.args.forEach(node => {
      checkNode(node, facts, dep+1);
    })
  } else {
    const value = node.evaluate(facts);
    if (value!==false && value!==true) {
      console.log('node不是一个表达式', node);
    }
  }
}

function doEvaluate() {
  try {
    // const exps = ['a==1e2', 'b>1e1','a>b']
    // const res = evaluate(exps, {a:100, b:1.1e1})
    // const res2 = evaluate(exps.join('&'), {a:'100', b:1.1e1})
    // console.log(res, res2)

    // console.log(evaluate(['a==1e2', 'b<=100'], {a:100, b:'101'}));
    // console.log(evaluate('registerDayInterval<3&a==100', {registerDayInterval: 11, a: 100}))
    // const res1 = evaluate('10<a*2<11 & (a-b)<11', {a: 11, b: 1, c: "a"});
    // const res2 = equalText('a', 'a');
    // const res3 = 0;
    // const res4 = 1;
    // const res5 = 1;
    // console.log(res1, res2, evaluate('res3 & (res4 | res5) ', {res1, res2, res3, res4, res5}))
    // console.log(evaluate('t2==t2v', {a: 1, b:2, t2:'t2', t2v: 't2'}))

    // console.log(equalText('a', 'a'));
    // console.log(evaluate('(volume > 10 & volume < 100)', {volume: 111}));
    // console.log(evaluate('10<0 & 1>0 & 1>0'));
    // console.log(evaluate('1 & 0 & 1'));
    // console.log(evaluate('true & false & true'));
    // console.log(evaluate('1 | 0 | 1'));
    // console.log(evaluate('true | false | true'));

    // console.log(evaluate('a/b > 1000', {a: 10, b: 0}));
    // console.log(evaluate('a/b', {a: 10, b: 0}));
    console.log(evaluate('volume+2>200&volume5*3>userTag+5|userTag==1', {volume:100, volume5:20, userTag:1}))
  } catch (error) {
    console.log(error);
  }
}

function main() {
  doEvaluate();
  doParse('volume>2 and volume5*3>userTag+5 or userTag<=10 or userTag<=10  or userTag<=10');
}

main()