const divEl = document.querySelector("#myButton");
if (divEl) {
  divEl.addEventListener("click", (e) => {
    e.currentTarget;
    const button = e.currentTarget as HTMLButtonElement; // 타입 단언이 꼭 필요한 경우 : 타입체커가 추론한 타입보다 우리가 판단하는 타입이 더 정확할 때
    button;
  });
}
