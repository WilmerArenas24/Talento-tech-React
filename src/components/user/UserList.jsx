export default function UserList() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Identification</th>
            <th>Avatar</th>
          </tr>
        </thead>
  
        <tbody>
          <tr>
            <td>Jhon</td>
            <td>Snow</td>
            <td>jhonsnow@gmail.com</td>
            <td>123465</td>
            <td>
              <img style={{
                with:50,
                height:50,
                
              }}
                  
                src="https://es.rollingstone.com/wp-content/uploads/2022/06/Kit-Harrington-regresara-como-Jon-Snow-en-secuela-de-Game-of-Thrones.jpg"
                alt="Avatar 1"
              />
            </td>
          </tr>
          <tr>
            <td>Daemon</td>
            <td>Targaryen</td>
            <td>principecanalla@gmail.com</td>
            <td>852467</td>
            <td>
            <img style={{
                with:50,
                height:50,
                
              }}
                  
                src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Daemon-Targaryen.jpg"
                alt="Avatar 1"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  