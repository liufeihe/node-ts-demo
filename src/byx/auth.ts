import CryptoJS = require('crypto-js');

export class ByxAuth {
  private appId: string;
  private appSecret: string;
  private userSecret: string;
  private version: string;
  private splitSign: string;

  constructor(appId: string, appSecret: string, userSecret: string) {
    this.appId = appId;
    this.appSecret = appSecret;
    this.userSecret = userSecret;
    this.version = 'v1.0';
    this.splitSign = '+';
  }

  getTime(): string {
    return new Date().getTime().toString();
  }

  getToken() {
    let timestamp = this.getTime();
    let nonce = this.getNonce();
    let sign = this.getSign(timestamp, nonce);
    let token = this.getXAccessToken(timestamp, nonce, sign);
    console.log({timestamp, nonce, sign, token});
    return token;
  }

  // 从x-access-token中获取参数
  getParamsFromToken(token: string): string[] {
    const words = CryptoJS.enc.Base64.parse(token);
    const str = CryptoJS.enc.Utf8.stringify(words);
    // console.log(words, str);
    return str.split(this.splitSign);
  }

  // 获取x-access-token
  getXAccessToken(timestamp: string, nonce: string, sign: string): string {
    const str: string = this.appId + this.splitSign + timestamp + this.splitSign + nonce + this.splitSign + this.version + this.splitSign + sign;
    const words = CryptoJS.enc.Utf8.parse(str);
    const base64 = CryptoJS.enc.Base64.stringify(words);
    return base64;
  }

  // 获取6位随机数
  getNonce(): string {
    let nonce: string = "";
    const model: string = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
    const charList: string[] = model.split('');
    for (let i=0; i<6; i++) {
      let c = charList[Math.floor(Math.random()*36)];
      if (nonce.indexOf(c)!==-1) {
        i -= 1;
        continue;
      }
      nonce += c;
    }
    return nonce;
  }

  // 获取sign
  getSign(timestamp: string, nonce: string): string {
    const params: Record<string, string> = {
      appId: this.appId,
      timestamp,
      nonce,
      appSecret: this.appSecret,
      userSecret: this.userSecret
    }
    return this.getParamsSign(params);
  }

  // 所有参数进行排序加密
  getParamsSign(params: Record<string, string>): string {
    const keys: string[] = Object.keys(params);
    keys.sort();
    let paramsJsonStr = '';
    for (let i=0; i<keys.length; i++) {
      paramsJsonStr += params[keys[i]];
    }
    console.log('paramsJsonStr', paramsJsonStr);
    return CryptoJS.MD5(paramsJsonStr).toString(CryptoJS.enc.Hex).toUpperCase();
  }
}

export const config = {
  appid: '10004',
  appsecret: 'riUK!f-N@9nL',
  usersecret: 'fn93FjaPG*ZB'
}

function main() {
  let auth = new ByxAuth(config.appid, config.appsecret, config.usersecret);
  let token = auth.getToken();
  auth.getParamsFromToken(token);
}

main();