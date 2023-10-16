/* eslint-disable react/prop-types */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/react-in-jsx-scope */
import ExpenseRow from './ExpenseRow'
export default function ListaGastos({ category, expenses, deleteCategory }) {
  const hanndleDeleteCategory = () => deleteCategory(category)
  const allCategories = expenses.map(expense => <ExpenseRow key={expense.name} expense={expense} />)
  const filteredCategories = expenses.filter(expense => {
    if (expense.category === category) return true
    return false
  })
    .map(expense => <ExpenseRow key={expense.name} expense={expense} />)
  return (
    <>
      <h2>{category}</h2>
      <table width='100%'>
        <thead>
          <th>Nombre Gasto</th>
          <th>Monto</th>
          <th>Categoria</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          {category === 'All'
            ? allCategories
            : filteredCategories}
        </tbody>
      </table>
    </>
  )
}
