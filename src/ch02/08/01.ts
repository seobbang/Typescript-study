interface Cylinder {
  radius: number;
  height: number;
}
const Cylinder = (radius: number, height: number) => ({ radius, height });
function calculateVolumee(shape: unknown) {
  //Cylinder 타입인지 체크하려고 했지만, instanceof 는 자바스크립트의 런타임 연산자로 값에 대해 연산을 함. 따라서 값으로 쓰임
  if (shape instanceof Cylinder) {
    shape.radius; //근데..값이 없는데? --> 오류
  }
}
