class Todo {
  id: string
  text: string

  constructor(todoText: string) {
    this.text = todoText
    this.id = new Date().toISOString()
  }
}

export default Todo

// TS의 class를 사용할 때는 class에 프로퍼티를 추가하거나
// 추가할 속성이 있을 경우 사용
// 중괄호에서 바로 사용가능하다.
