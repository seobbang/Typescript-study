function getKey<K extends string>(val: any, key: K) {
  // ...
}

//type K가 string을 extends --> string 리터럴 타입, string 리터럴 타입의 유니온, string 자신을 포함하는 타입이 되는 것

getKey({}, "x");
getKey({}, Math.random() > 0.5 ? "a" : "b");
getKey({}, document.title);
getKey({}, 12); //string 아니라서 오류
