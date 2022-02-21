## 자바스크립트 실행환경 설치

### nvm
- https://github.com/creationix/nvm
- https://github.com/coreybutler/nvm-windows

### npm
- `npm i typescript -g`
- `node_modules/.bin/tsc`
- `tsc source.ts`

### Visual Studio plugin 설치
- Visual Studio 2017 / 2015 Update 3 이후로는 디폴트로 설치되어 있음
- 아니면 설치

## 글로벌 typescript 간략 테스트
- `npm i typescript -g`
- 샘플 코드
```js
console.log('hello');
```
- `tsc --init`
- `tsc`

### watch mode
- ts 수정 시, 자동 컴파일
- `tsc -w`


## 특정 프로젝트에만 typescript 설치 테스트
- `npm init -y`
- `npm i typescript`
- `node_modules/.bin/tsc` or `npx tsc`
- `npx tsc --init`
- 샘플 코드
```js
console.log('hello');
```
- `npx tsc`
- 또는 `package.json` 안에 scrpit 부분 변경 ( `"build": "tsc"` )
- `npm run build`

