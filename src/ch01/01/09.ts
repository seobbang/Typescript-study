const names = ["Alice", "Bob"];
console.log(names[2].toUpperCase());

// typescript는 이 오류를 잡아내지 못함
// -> 실행 후에 error message : cannot read properties of undefined
