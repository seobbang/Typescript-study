interface Point {
  x: number;
  y: number;
}

type PointKeys = keyof Point;

// 파라미터 key가 파라미터 val에 들어가는 것의 keyof를 타입으로 하는지 타입체크함.
function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  vals.sort((a, b) => (a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : +1));
  return vals;
}

const pts: Point[] = [
  { x: 1, y: 1 },
  { x: 2, y: 0 },
];

// key는 "x" | "y" 이어야 함.
sortBy(pts, "x");
sortBy(pts, "y");
sortBy(pts, Math.random() < 0.5 ? "x" : "y");
sortBy(pts, "z");

//제네릭
