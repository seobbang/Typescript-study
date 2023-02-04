interface Square2 {
  kind: "square";
  width: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape2 = Square2 | Rectangle;

function calculateArea2(shape: Shape2) {
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

// 런타임에 타입 체크하기(해결 2)
// '태그' 기법 : 명시적으로 타입을 저장해서 확인하기
