import { ByxApi } from "./api";
import { getFile } from "./utils";
import fs = require('fs');

function readData(): string {
  let data = fs.readFileSync(getFile('./data.json'));
  return data.toString();
}

async function main() {
  try {
    let data = readData();
    data = JSON.parse(data);
    console.log(data);
    const api = new ByxApi(data['url']);
    await api.getJobList();
  } catch (error) {
    console.log(error);
  }
}
main();