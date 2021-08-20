// const data = new Map();
// data.set('a', 1);
// data.set('b', 2);
// data.set('c', 3);
// data.set('d', 4);

const data = new Map(Object.entries({
  'a': [{'a1':1, del: true,}],
  'b': [{'b1':1}],
  'c': [{'c1':1}],
  'd': [{'d1':1}],
}))

function main() {
  for (let entry of data) {
    console.log(entry)
    let k = entry[0]
    let v = entry[1][0]
    v['e'] = 2
    if (v['del']) {
      data.delete(k)
    }
  }
  console.log(data)
}

main()