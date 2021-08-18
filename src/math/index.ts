import { evaluate } from 'mathjs';

function main() {
  const exps = ['1+b>0', 'a-b<0','a>b']
  // const res = evaluate(exps.join('&'), {a:1, b:2})
  const res = evaluate(exps, {a:1, b:2})
  console.log(res)
}


main()