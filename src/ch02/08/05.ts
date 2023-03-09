interface Person {
    first: string
    last: string
}
function email(options: {person: Person; subject: string; body: string}) {
    // ...
}

/** 오류 : 값의 관점에서 Person과 string이 해석되기 때문에 오류가 남.
 * Person이라는 변수명과 string이라는 일므을 가진 두 개 변수를 생성하려고 한 것.
 * string은 심지어 중복되었다는 오류까지 남
 */
function email ({person: Person; subject: string; body: string}) {
    // ...
}

/** 해결 : 타입과 값 구분하기 */
function email ({person, subject, body} : {person: Person; subject: string; body: string}) {
    // ...
}