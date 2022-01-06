// function main() {
//   // for(let i=0; i<=5; i++) {
//   //   for(let j=0; j<=3; j++) {
//   //     if (j==1) {
//   //       break;
//   //     }
//   //     console.log(i,j);
//   //   }
//   // }

//   // let map:Map<string, number> = new Map();
//   // map.set('a', 1);
//   // map.set('b', 2);
//   // map.set('c', 3);

//   // for (let [k, v] of map) {
//   //   console.log(k, v);
//   //   if (k==='b') {
//   //     map.delete('b');
//   //   }
//   // }
//   // console.log(map);

//   let obj: Record<string, number> = {};
//   obj['a'] = 1;
//   obj['b'] = 2;
//   obj['c'] = 3;
//   for (let [k] of Object.entries(obj)) {
//     if (k==='b') {
//       delete obj['b'];
//     }
//   }
//   console.log(obj);
// }

// main();