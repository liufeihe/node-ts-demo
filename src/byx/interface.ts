export interface IJobDep {
  depJobId: number; // 上游依赖id
  depType: number; // 依赖类型，默认为1
  validTime: String; // 有效时间
}

export interface IJobDetail {
  queryHql: string; // 查询hql语句
  engine?: string; // 查询引擎
  version?: string; // 版本号
}

export interface IJobTrigger {
  type: string; // 触发类型，默认是crontab
  crontab: string; // crontab表达式
  offset: string; // 偏移量，默认-1
  refTime: string; // 开始时间，毫秒级时间戳
}
export interface IJobCreate {
  jobId: number; // 任务id，新建时为null
  jobName: string; // 任务name
  jobDesc: string; // 任务描述
  jobOwner: string; // 责任人
  jobGroup: string; // 业务组
  jobType: number; // 任务类型，99: 普通任务
  jobStatus: number; // 任务状态，1：启用，0:禁用
  maxInst: number; // 最大实例，默认3，最高5
  cycle: string; // 任务周期，hour/day/week/month
  depList?: IJobDep[]; // 上游依赖列表，与triggers二选一
  detail: IJobDetail; // 详细信息
  triggers?: IJobTrigger[]; // 触发条件列表
}

export interface IJobUpdate {
  jobId: number; // 任务id，新建时为null
  jobName: string; // 任务name
  jobDesc: string; // 任务描述
  jobOwner: string; // 责任人
  jobOwnerId: string; // 责任人ID
  jobGroup: string; // 业务组
  jobType: number; // 任务类型，99: 普通任务
  jobStatus: number; // 任务状态，1：启用，0:禁用
  maxInst: number; // 最大实例，默认3，最高5
  cycle: string; // 任务周期，hour/day/week/month
  depList?: IJobDep[]; // 上游依赖列表，与triggers二选一
  detail: IJobDetail; // 详细信息
  triggers?: IJobTrigger[]; // 触发条件列表
  clusterId: string; // 集群id
  jobRank: number; // 优先级
  retryCount: number; // 出错重试
  retryDelay: number; // 重试间隔
}

export interface IJobDelete {
  ids: string; // 任务id列表，逗号分隔
  username: string; //用户账号名称
}

export interface IJobResponse {
  success: boolean;
  code: number; // 200 表示正常
  message: string;
  result: Record<string, any>;
  timestamp: string;
  jobId: string;
}