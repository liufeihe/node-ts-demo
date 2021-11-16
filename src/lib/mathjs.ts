import { evaluate } from 'mathjs';

function main() {
  const exps = ['a==1e2', 'b>1e1','a>b']
  const res = evaluate(exps, {a:100, b:1.1e1})
  const res2 = evaluate(exps.join('&'), {a:100, b:1.1e1})
  console.log(res, res2)
  // console.log(evaluate('registerDayInterval<3&a==100', {registerDayInterval: 1, a: 100}))
  // console.log(evaluate('t2==t2v', {a: 1, b:2, t2:'t2', t2v: 't2'}))
}

main()