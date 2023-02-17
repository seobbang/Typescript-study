function getElement(elOrId: string | HTMLElement | null): HTMLElement {
  if (typeof elOrId === "object") {
    return elOrId; // error -> typeof null = "object"이므로 null은 걸러지지 않음! 이 함수는 HTMLElement를 반환해야함..!
  } else if (elOrId === null) {
    // 추가적으로 null 걸러주기
    return document.body;
  } else {
    const el = document.getElementById(elOrId); // el 이 null일 가능성이 있는데
    return el; // error -> 이 함수는 HTMLElement를 반환해야함..! null은 X
  }
}
