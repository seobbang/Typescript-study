/**  타입 기본형들은 불변이며 메서드를 가지지 않는다.
 * 그런데 기본형인 string의 경우 메서드를 가지고 있는 것처럼 보임
 * string '기본형'에는 메서드가 없지만, JS에 메서드를 가지는 String '객체' 타입이 정의되어 있다.
 *
 * JS는 기본형과 객체 타입을 서로 자유롭게 변환함.
 *
 * string 기본형에 charAt과 같은 메서드 사용 시
 * JS가 기본형을 String 객체로 래핑하고 메서드 호출 후 래핑한 객체를 버림
 *
 * 그러나 string 기본형과 객체 래퍼가 항상 동일하게 동작하는 것은 아님
 * ex) String 객체는 오직 자기 자신하고만 동일
 *
 * "hello" === new String("hello") --> false
 * new String("hello") = new String("hello") --> false
 *
 * number -> Number, boolean -> Boolean, symbol --> Symbol, bigint --> BigInt 마찬가지.
 * null과 undefined는 객체 래퍼 없음.
 */
