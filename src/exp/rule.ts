class RuleNode {
  public expression: string;
  public root: CalcNode;
  public leafs: Array<CalcNode>;

  constructor(expression: string) {
    this.expression = expression;
  }

  parseCalcNodeTree(expression: string) {
    if (exp) {}

  }
  
}

enum CalcNodeType {
  Logic = 0,
  Expression = 1,
}
class CalcNode {
  public type: CalcNodeType; // 'logic' / 'expression'
  public value: string; // '&' '|' 'a<1'
  public left: CalcNode;
  public right: CalcNode;
  public result: Boolean;

  constructor(type: CalcNodeType, value: string, left?: CalcNode, right?: CalcNode) {
    this.type = type;
    this.value = value;
    this.left = left;
    this.right = right;
  }
}