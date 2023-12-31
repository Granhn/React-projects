/* eslint-disable space-before-function-paren */
/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { useState } from 'react'
import ExpensesList from './components/ExpensesList'
function App() {
  const [categories, setCategories] = useState(['All', 'mascotas', 'dinosaurios'])
  const [category, setCategory] = useState('All')
  const [expenses, setExpenses] = useState([{ name: 'McDonalds', amount: 0, category: 'mascotas' }, { name: 'T-rex', amount: 200, category: 'dinosaurios' }])
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }
  const handleDeleteCategory = (categoryName) => {
    if (categoryName === 'All') return
    setCategories(prevCategories => prevCategories.filter(category => category !== categoryName))
    setCategory('All')
  }
  return (
    <>
      <label>Filter by category</label>
      <select name="cars" id="cars" onChange={handleCategoryChange}>
        {categories.map(category => <option key={category}>{category}</option>)}
      </select>
      <ExpensesList
        category={category}
        expenses={expenses}
        deleteCategory={handleDeleteCategory}
      />
    </>
  )
}

export default App
