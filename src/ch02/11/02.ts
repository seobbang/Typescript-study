interface Options {
  title: string;
  darkMode?: boolean;
}

//잉여 속성체크는 객체 리터럴이 아닐 때, 타입 단언문을 사용할 때 적용되지 않음.
//둘 다 string 타입 title을 가지고 있어서 정상, 객체 리터럴이 아니기 때문에 잉여 속성 체크가 되지 않음.
const o1: Options = document;
const o2: Options = new HTMLAnchorElement();

// dark'm'ode가 있더라도 정상 작동
const intermediate = { darkmode: true, title: "Ski Free" }; // 객체 리터럴
const o: Options = intermediate; // 객체리터럴이 아님 --> 잉여 속성 체크가 적용되지 ㅇ낳음.

function createWindow(options: Options) {
  if (options.darkMode) {
    //..
  }
}

createWindow({
  title: "Spider Solitaire",
  darkmode: true, // m이 소문자라 오류
});
