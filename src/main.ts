// main.ts
// インターフェースを定義することで関数間でやりとりする型を明示できる
interface ValueObject {
  id: number;
  value: string;
}

export default function (vo: ValueObject): string {
  // TypeScript が使えるので型を明示できる
  return `Id: ${vo.id}, Name: ${vo.value}`;
}
