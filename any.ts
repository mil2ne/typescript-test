// any 는 웬만하면 사용 x
// 하지만 쓸수 밖에 없는곳도 o

function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

any1.toString();


let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a: number = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({num: 0});
