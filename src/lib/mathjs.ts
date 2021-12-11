import { evaluate } from 'mathjs';

function main() {
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

    console.log(evaluate('a/b > 1000', {a: 10, b: 0}));
    console.log(evaluate('a/b', {a: 10, b: 0}));
  } catch (error) {
    console.log(error);
  }
  
}

main()