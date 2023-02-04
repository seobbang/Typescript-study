function asNumber(val: number | string): number {
  return val as number;
}

// 타입 연산은 런타임에 영향을 주지 못하기 때문에 결국
// 그냥 return val이 되어버리므로 JS로 정확한 연산을 필요로함
