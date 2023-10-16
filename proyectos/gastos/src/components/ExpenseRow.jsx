/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function ExpenseRow({ expense, hanndleDeleteCategory }) {
  return (
    <tr key={expense.name}>
      <td>{expense.name}</td>
      <td>{expense.amount}</td>
      <td>{expense.category}</td>
      <button onClick={hanndleDeleteCategory}>Eliminar</button>
    </tr>
  )
}