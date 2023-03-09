interface Person_ {
  name: string;
}

const alice: Person_ = { name: "Alice" }; //타입 선언
const bob = { name: "Bob" } as Person_; //타입 단언

//타입 선언 -> 오류
const alicee: Person_ = {
  name: "Alice",
  occupation: "Typescript developer",
};

//타입 단언 -> 오류
const bobb = {
  name: "Alice",
  occupation: "Typescript developer",
} as Person_;
