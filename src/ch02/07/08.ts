interface Person {
  name: string;
}

interface PersonSpans extends Person {
  birth: Date;
  death?: Date;
}
