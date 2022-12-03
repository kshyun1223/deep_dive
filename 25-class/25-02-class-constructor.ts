/* 
todo. 하지만 자바스크립트의 클래스와 생성자함수도 몇가지 차이점은 있다
* 클래스는 new 연산자 없이 호출하면 에러가 발생하지만 생성자함수는 일반 함수로서 호출된다
* 클래스는 상속을 지원하는 extends와 super 키워드를 제공하지만 생성자함수는 지원하지 않는다
* 클래스는 암묵적으로 strict mode가 지정되며 해제할 수도 없지만 생성자함수는 암묵적으로 strict mode가 지정되지 않는다
* 클래스의 모든 메서드는 열거되지 않는다 
*/

class Person {
  name: string
  //* 생성자
  constructor(name: string) {
    // 인스턴스 생성 및 초기화
    this.name = name // name 프로퍼티는 public하다.
  }

  //* 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`)
  }

  // 정적 메서드
  static sayHello() {
    console.log('Hello!')
  }
}

// 인스턴스 생성
const me = new Person('Lee')

// 인스턴스의 프로퍼티 참조
console.log(me.name) // Lee

// 프로토타입 메서드 호출
me.sayHi() //* Hi! My name is Lee

// 정적 메서드 호출
Person.sayHello() // Hello!

export {}