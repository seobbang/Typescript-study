const states = [
  { name: "Alabma", capital: "Montgomery" },
  { name: "Alabma", capital: "Montgomery" },
  { name: "Alabma", capital: "Montgomery" },
];
for (const state of states) {
  console.log(state.capitol);
}

// 오류 발생 x, 의도와 다르게 동작하는 코드
// --> capital이 아니라 capitol로 철자를 틀렸지만 'undefined'라는 결과로 잘 동작하게 되는 경우
