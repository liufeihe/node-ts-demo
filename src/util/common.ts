import { isObject } from "lodash";


function camelToUnderline(key: string) {
  let key2 = key.replace(/([A-Z])/g, (s) => {
    return ' '+s.toLowerCase();
  }).trim().split(' ');
  return key2.join('_');
}

function transferDatakeyToUnderLine(data: Record<string, any>): Record<string, any> {
  const data2: Record<string, any> = {};
  Object.keys(data).forEach(key => {
    let value = data[key];
    if (isObject(value)) {
      value = transferDatakeyToUnderLine(value);
    }
    data2[camelToUnderline(key)] = value;
  })
  return data2;
}

export {
  camelToUnderline,
  transferDatakeyToUnderLine
}