import React from "react";
import Accordion from "react-bootstrap/Accordion";
function ProductCart(props) {
   
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{props.title}</Accordion.Header>
          <Accordion.Body>
          <img 
  src={props.img} 
  alt={props.title} 
  style={{ maxWidth: "100%", height: "auto" }} 
/>

            {/* {props.img} */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default ProductCart;
