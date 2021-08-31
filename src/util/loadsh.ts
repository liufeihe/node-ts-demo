import * as _ from 'loadsh';

function main() {
  const res = _.differenceBy(
    [{"name":"n1"},{"name":"n2"},{"name":"n3"},  ],
    [{"name":"n3"}, {"name":"n4"},  ], 
    'name'
  )
  console.log(res)

  const a = [
    {
      a: 1,
      b: {
        category: 'book',
      },
    },
    {
      a: 2,
      b: {
        category: 'book',
      },
    },
    {
      a: 1,
      b: {
        category: 'car',
      },
    },
    {
      a: 3,
      b: {
        category: 'book',
      },
    },
  ]

  console.log(_.groupBy(a, 'b.category'))
  console.log(_.uniqBy(a, 'a'))
  console.log(_.pickBy({a: 1, b: 0}))
}

main();