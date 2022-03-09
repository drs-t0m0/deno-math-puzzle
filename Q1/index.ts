/**
 * 文字列型に逆順を返すメソッドを追加
 * @param str
 */
const reverse = (str: string): string => {
  return str.split("").reverse().join("");
};

/**
 * 11から探索開始
 * @param num
 */
export const main = (num: number): number => {
  while (true) {
    if (
      num.toString() === reverse(num.toString()) &&
      num.toString(8) === reverse(num.toString(8)) &&
      num.toString(2) === reverse(num.toString(2))
    ) {
      return num;
    }

    // 奇数だけを探すため、2つずつ増やす
    num += 2;
  }
};
