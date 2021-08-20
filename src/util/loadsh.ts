import * as _ from 'loadsh';

function main() {
  const res = _.differenceBy(
    [{"name":"n1"},{"name":"n2"},{"name":"n3"},  ],
    [{"name":"n3"}, {"name":"n4"},  ], 
    'name'
  )
  console.log(res)
}

main();