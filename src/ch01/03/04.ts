class Square3 {
  constructor(public width: number) {}
}

class Rectangle extends Square3 {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Shape3 = Square3 | Rectangle;

function calculateArea3(shape: Shape3) {
  if (shape instanceof Rectangle) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

// 런타임에 타입 체크하기(해결 3)
// 타입을 클래스로 만들기
// 클래스는 타입과 값으로 모두 사용 가능
