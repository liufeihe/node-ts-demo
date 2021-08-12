import { evaluate } from 'mathjs';

function main() {
  const res = evaluate('a+b', {a:1, b:2})
  console.log(res)
}


main()