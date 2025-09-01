/**
 * 两个数相加函数
 * @param a 第一个数
 * @param b 第二个数
 * @returns 两数之和
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 两个数相减函数
 * @param a 第一个数
 * @param b 第二个数
 * @returns 两数之差
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * 两个数相乘函数
 * @param a 第一个数
 * @param b 第二个数
 * @returns 两数之积
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * 两个数相除函数
 * @param a 第一个数
 * @param b 第二个数
 * @returns 两数之商
 * @throws 当除数为0时抛出错误
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('除数不能为0');
  }
  return a / b;
} 