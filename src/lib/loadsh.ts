import * as _ from 'loadsh';

function main() {
  // const res = _.differenceBy(
  //   [{"name":"n1"},{"name":"n2"},{"name":"n3"},  ],
  //   [{"name":"n3"}, {"name":"n4"},  ], 
  //   'name'
  // )
  // console.log(res)

  const a = [
    {
      name: 'n1',
      a: 1,
      b: {
        category: 'book',
      },
    },
    {
      name: 'n1',
      a: 2,
      b: {
        category: 'book',
      },
    },
    {
      name: 'n2',
      a: 1,
      b: {
        category: 'car',
      },
    },
    {
      name: 'n2',
      a: 3,
      b: {
        category: 'book',
      },
    },
  ]

  // console.log(_.groupBy(a, 'b.category'))
  console.log(_.groupBy(a, 'name'))
  // console.log(_.uniqBy(a, 'a'))
  // console.log(_.pickBy({a: 1, b: 0}))

  const a_c = _.cloneDeep(a);
  console.log(a_c[0] === a[0]);
  console.log(_.cloneDeep({a:1}), _.cloneDeep(undefined));
}

main();