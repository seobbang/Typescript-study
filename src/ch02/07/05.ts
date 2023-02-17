type AB__ = "A" | "B";
type AB12__ = "A" | "B" | 12;

const ab: AB__ = Math.random() < 0.5 ? "A" : "B";
const ab12: AB12__ = ab;
declare let twelve_: AB12; //declare : 타입스크립트에서만 인식 -> 컴파일 후 사라짐

const back: AB = twelve; // twelve가 AB보다  더 집합이 큼.
