import { assertEquals } from "https://deno.land/std@0.65.0/testing/asserts.ts"; // ローカルに保存されていない場合、実行時にダウンロードされる
import mainFunc from "./main.ts"; // Node.js と違い拡張子は省略不可

Deno.test("Test", () => {
  ["hoge", "fuga", "piyo"].forEach((value, idx) => {
    const vo = { id: idx + 1, value }; // インターフェースの定義を満たしていれば（今回だと id, value が指定した型で定義されていれば）OK
    assertEquals(mainFunc(vo), `Id: ${vo.id}, Name: ${vo.value}`);
  });
});
