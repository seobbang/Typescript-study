const states = [
  { name: "Alabma", capital: "Montgomery" },
  { name: "Alabma", capital: "Montgomery" },
  { name: "Alabma", capital: "Montgomery" },
];
for (const state of states) {
  console.log(state.capitol);
}

// capital이 아니라 capitol로 철자를 틀린 것도 찾아낼 수 있게 됨.
// error message : Property 'capitol' does not exist on type '{name: string; capital: string;}'. Did you mean 'capital'?
