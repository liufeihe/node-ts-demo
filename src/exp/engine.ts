import { create, all, equalText } from 'mathjs';

const math = create(all);
const limitedEvaluate = math.evaluate;
// 封锁一些其他方法
math.import(
  {
    import: function () {
      throw new Error('Function import is disabled');
    },
    createUnit: function () {
      throw new Error('Function createUnit is disabled');
    },
    parse: function () {
      throw new Error('Function parse is disabled');
    },
    simplify: function () {
      throw new Error('Function simplify is disabled');
    },
    derivative: function () {
      throw new Error('Function derivative is disabled');
    },
  },
  { override: true }
);


enum CalcOp {
  Eq = '==',
  Neq = '!=',
  Gt = '>',
  Ge = '>=',
  Lt = '<',
  Le = '<=',
  Seq = 'seq',
  Sne = 'sne'
}


export class CalcEngine {
  exec(expression: string, facts: Record<string, any>):boolean {
    const op = this.getOpFromExpression();
  }

  getOpFromExpression() {

  }
}