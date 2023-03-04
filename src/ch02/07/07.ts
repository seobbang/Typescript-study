interface Identified {
  id: string;
}

interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
  death?: Date;
}

//keyof : 모든 프로퍼티의 키값을 union 형태로 반환
type PersonSpan_ = Person & Lifespan;
type K_ = keyof (Person | Lifespan); // 타입이 never

type Keyof_Person = keyof Person; //name
type Keyof_Lifespan = keyof Identified; //id

// 반대 개념이라고 생각하면 됨.
// keyof (A&B) = (keyof A) | (keyof B) --> A&B모두의 keyof이므로, A의 keyof와 B의 keyof의 합집합으로 해석되는 개념.
// keyof (A|B) = (keyof A) & (keyof B)
