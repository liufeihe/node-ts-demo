import { ByxApi } from "./api";

async function main() {
  try {
    const api = new ByxApi();
    await api.getJobList();
  } catch (error) {
    console.log(error);
  }
}
main();