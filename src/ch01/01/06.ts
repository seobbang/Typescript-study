interface State {
  name: string;
  capital: string;
}

const states3: State[] = [
  { name: "Alabma", capitol: "Montgomery" },
  { name: "Alabma", capitol: "Montgomery" },
  { name: "Alabma", capitol: "Montgomery" },
];

for (const state of states3) {
  console.log(state.capital);
}

// interface를 명시해주자 오류를 제대로 찾아내었다!
