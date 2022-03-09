export const main = (num: number): number[] => {
  const result: number[] = [];
  for (let i = 1; i <= num; i++) {
    let flag = false;
    for (let j = 1; j <= num; j++) {
      if (i % j == 0) flag = !flag;
    }
    if (flag) result.push(i);
  }
  return result;
};
