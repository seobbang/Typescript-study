// 인덱스 시그니처를 이용해도 잉여 속성 체크를 하지 않음.
interface Optionss {
  darkMode?: boolean;
  [otherOptions: string]: unknown; // 인덱스 시그니처. key 값과 value값에 모두 타입 설정, key의 타입은 string, number, symbol, Template literal 타입만 가능
}
const oo: Optionss = { darkmode: true }; // OK
