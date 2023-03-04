interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan; // Person, Lifespan 모두 충족해야함
type K = Person | Lifespan; // Person 다 충족하거나, Lifespan다 충족하거나, 둘 전부 다 있거나
