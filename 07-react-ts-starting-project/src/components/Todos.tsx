import React from 'react'
import Todo from '../models/todo'
import TodoItem from './TodoItem'

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  )
}

export default Todos

// props는 객체이고 items는 key이며 문자열 배열을 값으로 갖는다
// 하지만 객체에는 항상 특별한 프로퍼티(prop)이 있음
// children 프로퍼티 타입을 모르지
// 함수형 컴포넌트를 바로 제네릭 함수로 변환해서 사용
// FC는 함수형 컴포넌트 (Functional Component)
// FC는 이미 제네릭타입이다

// React.FC<>는 항상 children을 가질 수 있다.
// 컴포넌트에 children이 있을 수 있다는 것을 의미

// React.FC를 쓰는 것이 꼭 나쁘지만은 않지만
// props를 타이핑 하는 것이 조금 더 자바스크립트의 느낌과 비슷하고,
// 다양한 경우의 수로 부터 족므 더 안전해 질수 있다.
