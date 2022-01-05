import { httpGet, httpPost } from "../lib/http";
import { transferDatakeyToUnderLine } from "../util/common";
import { ByxAuth, ByxConfig } from "./auth";
import { IJobCreate, IJobDelete, IJobUpdate } from "./interface";

export class ByxApi {
  private baseUrl:string;
  private byxAuth: ByxAuth;
  constructor() {
    this.baseUrl = 'https://test-byx.go.akamai-access.com/byx-interface';
    // this.baseUrl = 'http://byx-api.test.niubit.io/byx-interface';
    this.byxAuth = new ByxAuth(ByxConfig.appid, ByxConfig.appsecret, ByxConfig.usersecret);
  }

  async getJobList() {
    const url = `${this.baseUrl}/api/schedule/job/list?pageNo=1&pageSize=10`
    const res = await httpGet(url, {
      'X-Access-Token': this.byxAuth.getXAccessToken(),
    });
    console.log(res);
  }
  
  async createJob(data: IJobCreate) {
    const url = `${this.baseUrl}/api/schedule/job/create`
    
    const res = await httpPost(url, transferDatakeyToUnderLine(data), {
      'X-Access-Token': this.byxAuth.getXAccessToken(),
    });
    console.log(res);
  }

  async updateJob(data: IJobUpdate) {
    const url = `${this.baseUrl}/api/schedule/job/update`
    const res = await httpPost(url, transferDatakeyToUnderLine(data), {
      'X-Access-Token': this.byxAuth.getXAccessToken(),
    });
    console.log(res);
  }

  async deleteJob(data: IJobDelete) {
    const url = `${this.baseUrl}/api/schedule/job/delete`
    const res = await httpPost(url, transferDatakeyToUnderLine(data), {
      'X-Access-Token': this.byxAuth.getXAccessToken(),
    });
    console.log(res);
  }
}
