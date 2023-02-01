const states2 = [
  { name: "Alabma", capitol: "Montgomery" },
  { name: "Alabma", capitol: "Montgomery" },
  { name: "Alabma", capitol: "Montgomery" },
];

for (const state of states2) {
  console.log(state.capital);
}

// 어느쪽이 오타인지 알아낼 수 없다!
// -> interface를 통해 미리 의도를 명시해주자!
