interface Person__ {
  name: string;
}

// Person[]를 원했지만 결과는 {name: string}[]
const people = ["alice", "bob", "jan"].map((name) => ({ name }));

// 타입 단언을 사용하면 --> 에러는 없지만 어디선가 쓸 때 런타임에 문제 발생
const peoplee = ["alice", "bob", "jan"].map((name) => ({} as Person__));

// 다음과 같이 타입과 함꼐 변수 선언하는 것이 가장 직관적 !!
const people_ = ["alice", "bob", "jan"].map((name) => {
  const person: Person__ = { name };
  return person;
});

// 좀 더 간결하게 하자면 ?
const people__ = ["alice", "bob", "jan"].map((name): Person__ => ({ name })); // (name: Person)은 name의 타입 명시ㅣ고, 반환 타입이 없기 때문에 오류
// or
const people___: Person__[] = ["alice", "bob", "jan"].map((name) => ({ name }));
