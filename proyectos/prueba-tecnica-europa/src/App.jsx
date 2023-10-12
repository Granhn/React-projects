import { useEffect, useMemo, useRef, useState } from 'react'
import { UsersList } from './Components/UsersList'
import './App.css'

function App () {
  const [users, setUsers] = useState([])
  const [showColors, setShowColores] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)
  const initialList = useRef([])
  const [filterCountry, setFilterCountry] = useState(null)

  const filteredUsers = useMemo(() => {
    return filterCountry
      ? users.filter(user => user.location.country.toLowerCase().includes(filterCountry.toLowerCase()))
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    return sortByCountry
      ? filteredUsers.toSorted((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
      : filteredUsers
  }, [filteredUsers, sortByCountry])

  const restoreUsers = () => {
    setUsers(initialList.current)
    setFilterCountry(null)
  }
  const toggleColors = () => setShowColores(color => !color)
  const toggleSortByCountry = () => setSortByCountry(prevState => !prevState)
  const deleteUser = (userUUID) => {
    const filteredUsers = users.filter((user) => user.login.uuid !== userUUID)
    setUsers(filteredUsers)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://randomuser.me/api?results=100')
        const data = await res.json()
        setUsers(data.results)
        initialList.current = data.results
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <div className='App'>
      <header>
        <button onClick={toggleColors}>Colorear Filas</button>
        <button onClick={toggleSortByCountry}>Sort</button>
        <button onClick={restoreUsers}>Restore</button>
        <input placeholder='Filter by country' onChange={(e) => setFilterCountry(e.target.value)}></input>
      </header>
      <main>
        <UsersList users={sortedUsers} showColors={showColors} deleteUser={deleteUser}/>
      </main>
    </div>
  )
}

export default App
