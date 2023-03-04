type T = Exclude<string | Date, string | number>; //왼쪽 타입에서 오른쪽 타입에 할당 가능한 타입을 배제한다.
type NonZeroNums = Exclude<number, 0>; // 결과가 적절한 타입스크립트 타입일 때만 유효하기 때문에 여전히 number
// type Exclude<T, U> = T extends U ? never : T
