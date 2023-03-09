interface Person {
  first: string;
  last: string;
}

const first: Person["first"] = p["first"];
const firstt: Person["first"] = p.first;
const firsttt: Person.first = p["first"]; // error : 타입의 속성을 얻을 때는 반드시 obj['field']를 사용해야 함.

type PersonEl = Person["first" | "last"]; // 타입 : string
type Tuple = [string, number, Date];
type TupleEl = Tuple[number]; // number가 0,1,2가 될 수 있으니까 --> 타입 : string| number | Date
