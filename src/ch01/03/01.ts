interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

// instanceof
// obj instanceof Class
// obj가 Class에 속하거나 Class를 상속받는 클래스에 속하면 true가 반환됩니다.

// JS로 컴파일되는 과정에서 모든 인터페이스, 타입, 타입 구문은 그냥 제거됨.
// --> Rectangle은 인터페이스가 다 지워진 시점에서 아무것도 아닌 것이 되는 것.
