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
  detail: string; // 详细信息
  queryHql: string; //查询的hql语句
  triggers: string; // crontab表达式
}