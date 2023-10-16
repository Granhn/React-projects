/* eslint-disable space-before-function-paren */
/* eslint-disable react/react-in-jsx-scope */
export default function ListaGastos({ category, expenses, deleteCategory }) {
  const hanndleDeleteCategory = () => deleteCategory(category)
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
          {expenses.map(expense => {
            return (
              <tr key={expense.name}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <button onClick={hanndleDeleteCategory}>Eliminar</button>
              </tr>
            )
          })}
          <tr>
            <td>
              Dada
            </td>
          </tr>
          { }
        </tbody>
      </table>
    </>
  )
}
