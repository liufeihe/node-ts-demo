import { printString, LabelActionService } from '@liufeihe/tiny';

// function testThrow() {
//   throw new Error('aaa');
// }

function main() {
  printString('hello peter');
  const a = new LabelActionService({
    "port": 6379,
    "host": "127.0.0.1",
    "family": 4,
    "password": "123456",
    "db": 0
  });
  console.log(a);
  // try {
  //   testThrow();
  // } catch (error) {
  //   console.log(error, error.message, error.stack);
  //   this.logger.error(error, 'xxx bao cuo ')
  // }
}

main();