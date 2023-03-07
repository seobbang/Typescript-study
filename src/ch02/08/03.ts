class Cylinderrr {
  radius = 1;
  height = 1;
}

function calculateVolumeee(shape: unknown) {
  if (shape instanceof Cylinderrr) {
    shape;
    shape.radius;
  }
}

const vv = typeof Cylinderrr; // vv = function <-- 클래스가 자바스크립트에서는 실제 함수로 구현되기 때문에

// 두 개 다름
type TT = typeof Cylinderrr; // typeof Cylinderrr
type TTT = Cylinderrr; //Cylinderrr

type CC = InstanceType<typeof Cylinderrr>;

28:58;