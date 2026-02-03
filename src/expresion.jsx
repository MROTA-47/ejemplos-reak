function Expresiones() {
  const nombre = "Rene David";
  const apellidos = "Cabrera Gonzalez";

  return (
    <div>
      <h2>Expresiones</h2>
      <h3>
        Tu nombre es: {nombre} y tus apellidos son: {apellidos}
      </h3>
      <Lista />
    </div>
  );
}

function Lista() {
  const users = [
    { id: 1, name: "Jorge", role: "web developer" },
    { id: 2, name: "Victor Dorian", role: "web designer" },
    { id: 3, name: "Osmar", role: "Team Leader" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Expresiones;