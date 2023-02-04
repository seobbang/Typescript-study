interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x + v.y);
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = { x: 3, y: 4, name: "Zee" };
calculateLength(v);

// 구조적 타이핑
// NamedVector와 Vector2D가 다름에도 NamedVector의 구조가 Vector2D와 호환이 가능해 함수 호출 가능
