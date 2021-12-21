function testThrow() {
  throw new Error('aaa');
}

function main() {
  try {
    testThrow();
  } catch (error) {
    console.log(error, error.message, error.stack);
    this.logger.error(error, 'xxx bao cuo ')
  }
}

main();