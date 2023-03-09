const elNull = document.getElementById("foo"); //HTMLElement | null
const ell = document.getElementById("foo")!; //null이 아님을 단언 --> HTMLElement

const el_ = document.body as Person; // 오류 : as ~~로 단언할 때 서로의 서브타입이어야 가능함.
// 이 오류를 해결할 때 unknown 타입 사용 가능. unknown은 모든 타입의 서브타입이기 때문
const el__ = document.body as unknown as Person;
