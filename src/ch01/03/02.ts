interface Square1 {
  width: number;
}

interface Rectangle extends Square1 {
  height: number;
}

type Shape1 = Square1 | Rectangle;

function calculateArea1(shape: Shape1) {
  if ("height" in shape) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

//  런타임에 타입 체크하기(해결 1)
// 타입에 있는 속성 체크
