// parse_csv_to_json.ts
try {
  // read* や write* は Promise 型を返す
  // 処理完了を待機する場合は await を使う
  const inputData = await Deno.readTextFile("./input.csv");
  const outputData = inputData
    .split("\n")
    .filter((v) => !!v)
    .map((v) => {
      const [id, name] = v.split(",");
      return { id, name };
    });
  await Deno.writeTextFile("./output.json", JSON.stringify(outputData));
  console.log("Completed");
} catch (err) {
  // 途中でエラーになった場合は処理を中断してここに到達する
  console.error(err);
}
