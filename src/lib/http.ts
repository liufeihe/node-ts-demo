import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

function getInstance(cfg?: AxiosRequestConfig): AxiosInstance {
  // 使用axios.post这种方式去调用的话，如果请求很多的话，会有问题
  return axios.create(cfg);
}

export async function httpGet(url: string, headers?: Record<string, any>) {
  const res = await getInstance().get( 
    url,
    {
      headers: { 
        'Content-Type': 'application/json', 
        ...headers,
      }
    }
  );
  return res['data'];
}

export async function httpPost(url: string, data: Record<string, any>, headers?: Record<string, any>) {
  const res = await getInstance().post( 
    url, 
    data, 
    {
      headers: { 
        'Content-Type': 'application/json', 
        ...headers,
      }
    }
  );
  return res['data'];
}