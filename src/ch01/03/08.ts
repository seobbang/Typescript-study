function turnLightOn() {}
function turnLightOff() {}
function setLightSwitch(value) {
  switch (value) {
    case true:
      turnLightOn();
      break;
    case false:
      turnLightOff();
      break;
    default:
      console.log("실행되지 않을까 걱정입니다.");
  }
}

interface LightApiResponse {
  lightSwitchValue: boolean;
}

async function setLight() {
  const response = await fetch("/Light");
  const result: LightApiResponse = await response.json();
  setLightSwitch(result.lightSwitchValue);
}

// TS에서는 result를 boolean값이라고 생각하고 타입 체크를 넘겼지만
// 실제 런타임에서 서버에서 날라온 값이 boolean이 아닌 문자열과 같다면
// setLightSwitch에서 문자열로 넘겨 마지막 default가 실행될 것
