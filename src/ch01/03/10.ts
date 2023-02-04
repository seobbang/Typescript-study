function add(a: number, b: number): number;
function add(a: string, b: string): string;

//구현체
function add(a, b) {
  return a + b;
}

const three = add(1, 2);
const twelve = add("1", "2");

// 그러나 위와 같이 타입 선언 오버로드는 가능!
// 결국 컴파일 시 구현체만 남게 됨.
