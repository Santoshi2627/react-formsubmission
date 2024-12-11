import React from "react";
import Accordion from "react-bootstrap/Accordion";
const styles={
  
  body:{
    backgroundColor:"lightpink",
    

  }
}
export function Accordian(props) {
  return (
    <div>
      {/* <h1>hello</h1> */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item>
          <Accordion.Header style={styles.header}>{props.title}</Accordion.Header>
          <Accordion.Body style={styles.body}>
            <img src={props.img} alt={props.title} height="100" width="100" />
            <p>{props.desc}</p>
            <div style={{display:"flex",justifyContent:"space-between",color:"darkred"}}>
            <p>Price:{props.price}</p>
            <p>Rating:{props.rating.rate}</p>
            <p>{props.category}</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
// const styles={
//   header:{
//     fontSize:"bold"
//   }
// }
