interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}

const r: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: "present", // 오류
};

//임시 변수를 도입해서 했을 때는 OK!
const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: "present",
}; // -> obj의 타입은 {numDoors: number; ceilingHeightFt: number; elephant: string}으로 추론되므로 Room 타입의 부분집합을 포함해서 Room에 할당 가능하게 되는 것
const rr: Room = obj;
