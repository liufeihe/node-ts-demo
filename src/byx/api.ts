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
    // this.baseUrl = 'http://byx-api.test.cht.ww5sawfyut0k.bitsvc.io/byx-interface';
    this.byxAuth = new ByxAuth(ByxConfig.appid, ByxConfig.appsecret, ByxConfig.usersecret);
  }

  async getJobList() {
    const url = `${this.baseUrl}/api/schedule/job/list?pageNo=1&pageSize=10`
    const res = await httpGet(url, {
      'X-Access-Token': this.byxAuth.getXAccessToken(),
      'cookie': 'BubbleAppCookie=3kj82YHyRBAyf46IYb9Rniim/Sn/aQKGwLJALLIU99JHHXWSsnIlwnMKOXDtZqsRA/z3P7Ttvt8r1J17wqSGpN5T/gNzasCXrQ3GRzR7eOGmKTidfwdzG7Kzp3KytbwFmMWq/gvIvW8eEXzuW7gneMohrKQZ2SNAnV+0M9bOJRrKyM6ygQ/ZTG/qupXAN9iu; XSRF-TOKEN=eyJpdiI6ImVjS21TNzZHbjRMcDlDbDFxVFNmZ2c9PSIsInZhbHVlIjoiQzN4ejgxRUkzaTlBS2tXNnZTQk1rZmlvV1luMVlVbTVjYUlXR1U1Zjl0YUtaNGRGNUZaVit1UnZcL2hwckxQYzhINE9HU1wvWUNLNG0reGZCTlhoSU5jQT09IiwibWFjIjoiMjU0YjhkODQxYmViNWJlNDBjNzVjZjViYmRmMzQ1ZTk4Nzk5NDE3OTgxZTlkM2RmZGJjYWRlNGUyZjA3M2VhNCJ9; laravel_session=eyJpdiI6IkVWK0JQRkJDYWJ0TnRCY0dpUDdMbFE9PSIsInZhbHVlIjoia2R4NFpPelZwOWlMT3lFanZqV203WDBvYnRcL1NyNlA2QjVHWTVhTE1SMVc1WEowdVBRQXJlUm5EdjdRdEtXbVJPOURxNGtsQWJBdStQaGVFOWlcL0VrZz09IiwibWFjIjoiMGUxYzc1M2VhZmI4MGE4NWFhNTVhOTNhOTY1NmQxMzI0YjFkYWM4OWM5ZjdkOWRhYmRiNmUwZWI5Mjc0Y2EzNCJ9',
      'X-XSRF-TOKEN': 'eyJpdiI6ImVjS21TNzZHbjRMcDlDbDFxVFNmZ2c9PSIsInZhbHVlIjoiQzN4ejgxRUkzaTlBS2tXNnZTQk1rZmlvV1luMVlVbTVjYUlXR1U1Zjl0YUtaNGRGNUZaVit1UnZcL2hwckxQYzhINE9HU1wvWUNLNG0reGZCTlhoSU5jQT09IiwibWFjIjoiMjU0YjhkODQxYmViNWJlNDBjNzVjZjViYmRmMzQ1ZTk4Nzk5NDE3OTgxZTlkM2RmZGJjYWRlNGUyZjA3M2VhNCJ9',
      'Host': 'test-byx.go.akamai-access.com',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
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
