import * as moment from 'moment';

function main() {
  console.log(moment.utc().unix(), new Date().getTime())
}

main();