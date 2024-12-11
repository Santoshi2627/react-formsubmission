// import Table from "react-bootstrap/Table";
// import { Carttable } from './cartdata'

export default function Table1(props) {
  return (
    <> 
        
          <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>
              <img
                src={props.img}
                alt={props.title}
                style={{ width: "50px", height: "50px" }}
              />
            </td>

            <td>{props.catg}</td>
            <td>{props.price}</td>
            <td>{props.desc}</td>
            <td>{props.rate}</td>
          </tr>
         
        
      
    </>
  );
}
