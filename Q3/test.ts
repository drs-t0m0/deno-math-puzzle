import { assertEquals } from "https://deno.land/std@0.128.0/testing/asserts.ts";
import { main } from "./index.ts";

Deno.test("100以内の平方数を返す", () => {
  const answer = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
  const result = main(100);
  assertEquals(result, answer);
});
