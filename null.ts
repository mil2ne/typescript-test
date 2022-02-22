// let MyName: string = null; 
let v: void = undefined;

let union: string | null = null; // union type

union = "Mark";

// null 이라는 값으로 할당된것을 null
// 무언가 있는데, 사용할 준비가 덜 된 상태
// null 이라는 타입은  null 이라는 값만 가질수 있다. 
// 런타임에서 typeof 연산자를 이용해서 알아내면 object 입니다.

// 값을 할당하지 않은 변수는 undefined
// 무언가가 아예 준비가 안된 상태
// object 의 property 가 없을때도 undefined
// 런타임에서 typeof 연산자를 이용해서 알아내면 undefined 입니다.