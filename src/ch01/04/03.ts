class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}

const c = new C("instance of C"); // C를 값으로 사용하여 선언한 경우

// C를 type으로 사용한 경우
// --> 타입으로 선언했기 때문에 constructor을 무시하고 foo만 충족하면 됨.
const d: C = { foo: "object literal" };
