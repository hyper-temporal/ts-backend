export function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
  }
   
  // Parameter 'n' is of type 'string'
  // 'parsed' is of type 'number[]'
export default map