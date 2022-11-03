import { ExpenseItem } from './components/ExpenseItem'

function App() {
  const expense = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      amount: 222.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: 'e3',
      title: 'Toilet Paper',
      amount: 94.14,
      date: new Date(2022, 7, 14),
    },
    {
      id: 'e4',
      title: 'Toilet Paper',
      amount: 94.13,
      date: new Date(2023, 7, 14),
    },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  )
}

export default App
