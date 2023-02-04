let hello = "hello";
hello = 1234;

// hello의 타입이 string으로 추론되어 타입에러가 나지만,
// 타입 체크와 컴파일은 별개이기 때문에 컴파일은 정상적으로 작동함.

// 오류가 있을 때 컴파일하지 않으려면, tsconfig.json에 noEmitOnError를
// 설정하거나 빌드 도구에 동일하게 적용하면 됨.
