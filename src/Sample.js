export function Sample() {
  return (
    <div>
      <table style={{ backgroundColor: "gray", border: "2px solid" }}>
        {/* <tr>
            <td>1</td>
            <td>2</td>
         </tr>
         <tr></tr> */}
        <thead style={{ border: "2px solid" }}>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </thead>
        <tbody style={{border:"2px solid"}}>
          <tr>
            <td>Do little</td>
            <td>20</td>
            <td>hyd</td>
          </tr>
          <tr>
            <td>Stuart little</td>
            <td>21</td>
            <td>mumbai</td>
          </tr>
          <tr>
            <td>Bliss smurf</td>
            <td>22</td>
            <td>bangalore</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
// export default Sample;
