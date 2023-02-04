interface NamedVector {
  name: string;
  x: number;
  y: number;
}

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);

  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

// 구조적 타이핑에 의해 생기는 문제

// calculateLength는 x,y를 매개변수로 받는데, v의 경우 x,y를 포함하므로 z가 있더라도 호환되어버림.
// 따라서 calculateLength의 과정에서 z의 값은 포함되지 않으며
// 정규화가 제대로 이루어지지 않음.
