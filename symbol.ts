console.log(Symbol('foo') === Symbol('foo')); // false

// 고유하고 수정불가능한 값으로 만들어줍니다.
// 주로 접근을 제어하는데 쓰는 경우가 많습니다.

const sym = Symbol();

const obj = {
  [sym]: "value",
};

obj[sym]