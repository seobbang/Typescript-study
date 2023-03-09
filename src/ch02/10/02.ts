function getStringLen(foo: String) {
  return foo.length;
}

// 둘다 정상
getStringLen("hello");
getStringLen(new String("hello"));

// 오류 : 그런데 string 을 매개변수로 받는 메서드에 String 객체를 전달하면 문제가 발생
function isGreeting(phrase: String) {
  return ["hello", "good day"].includes(phrase);
}

// 객체 래퍼 --> 런타임의 값은 기본형이기 떄문에
// string은 String에 할당 가능, 그러나 String은 string에 할당 불가
// BitInt랑 Symbol은 기본형 생성하므로 사용해도 좋음.
