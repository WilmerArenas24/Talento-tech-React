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
            <td>Robert</td>
            <td>Baratheon</td>
            <td>robert@gmail.com</td>
            <td>123465</td>
            <td>
              <img
                src="URL_DE_TU_IMAGEN_1"
                alt="Avatar 1"
              />
            </td>
          </tr>
          <tr>
            <td>John</td>
            <td>Snow</td>
            <td>johnsnow@gmail.com</td>
            <td>852467</td>
            <td>
              <img
                src="URL_DE_TU_IMAGEN_2"
                alt="Avatar 2"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  