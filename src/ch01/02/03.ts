const el = document.getElementById("status");
// el.textContent = "Ready";

// 해결
// null 체크 코드
if (el) {
  el.textContent = "Ready";
}
// 단언문(assertion) 추가
el!.textContent = "Ready"; //강제 캐스팅, 강제 형변환 : null이어도 null아니게 해 <-> ?
