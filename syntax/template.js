let name = 'JavaScript'

let document = `블로킹은 Node.js 프로세스에서 추가적인 ${name}
의 실행을 위해 ${name}가 아닌 작업이 완료될 때까지 기다려야만 하는 상황입니다.
이는 이벤트 루프가 블로킹 작업을 하는 동안 ${name} 실행을 계속할 수 없기 때문입니다.`;

console.log(document);