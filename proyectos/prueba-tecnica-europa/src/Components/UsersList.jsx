/* eslint-disable react/prop-types */
export function UsersList ({ users, showColors, deleteUser }) {
  const handleDeleteUser = (user) => {
    deleteUser(user.login.uuid)
  }
  return (
    <table width='100%'>
      <thead>
        <th>Foto</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Pais</th>
        <th>Acciones</th>
      </thead>
      <tbody>{
        users.map((user, index) => {
          const backgroundColor = index % 2 === 0 ? '#333' : '#555'
          const color = showColors ? backgroundColor : 'transparent'
          return(
            <tr key={user.login.uuid} style={{ backgroundColor: color }}>
              <td>
                <img src={user.picture.thumbnail}/>
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={(e) => handleDeleteUser(user)}>Borrar</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
