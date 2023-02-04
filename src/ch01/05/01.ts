let age: number;
age = "12"; // 오류
age = "12" as any; // 통과
age += 1; // <-- "121"

// as any 를 사용함에 따라 age에 string 타입값 할당이 가능해짐
