/*
todo. 자바스크립트는 프로토타입 기반의 객체지향 언어이다
* ES5까지는 클래스가 없었지만 생성자함수와 프로토타입을 통해 객체지향 프로그래밍의 상속을 구현할 수 있었다
* ES6에서 클래스가 추가되었지만 자바스크립트의 클래스는 내부에서 생성자함수로 동작한다
*/

const Person = (function () {
  //* 생성자 함수
  function Person(name: string) {
    this.name = name
  }

  //* 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log('Hi! My name is ' + this.name)
  };

  Person.sayHello = function () {
    console.log('hello')
  }
  
  // 생성자 함수 반환
  return Person
}())

// 인스턴스 생성
const me = new Person('Lee')
me.sayHi(); //* Hi! My name is Lee

export {}