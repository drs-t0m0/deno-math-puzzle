import { assertEquals } from "https://deno.land/std@0.128.0/testing/asserts.ts";
import { main } from "./index.ts";

Deno.test("11から探索し、585を返す", () => {
  const result = main(11);
  assertEquals(result, 585);
});
