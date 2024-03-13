export default function UserList(){

    return (
        <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>LatName</th>
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
                    <td><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4EnkLaTUlHA&psig=AOvVaw1nekrIn0MjCeJ0utkavG1C&ust=1710375952493000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiS2v_874QDFQAAAAAdAAAAABAE" alt="" /></td>
                </tr>
                <tr>
                    <td>Jhon</td>
                    <td>Snow</td>
                    <td>jhonsnow@gmail.com</td>
                    <td>852467</td>
                    <td><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Findiehoy.com%2Fseries%2Fjon-snow-nos-cuenta-detalles-del-final-game-of-thrones%2F&psig=AOvVaw3JRr6c_zAKcJe2_-GgQ9OG&ust=1710376028732000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjflaT974QDFQAAAAAdAAAAABAI" alt="" /></td>
                </tr>
            </tbody>
        </table>
    );
}