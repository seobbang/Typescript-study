function add(a: number, b: number) {
  return a + b;
}
function add(a: string, b: string) {
  return a + b;
}

// 타입스크립트에서는 컴파일 시 타입이 다 제거되므로 사실 상 중복 함수가 됨.
// 따라서 오버로드 불가능
