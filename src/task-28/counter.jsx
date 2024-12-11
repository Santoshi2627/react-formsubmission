import { Component } from "react";
import Button from 'react-bootstrap/Button';
const styles={
    button:{
        fontSize:"30px",
        display:"flex",
        gap:"30px",
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignContent:"center",
    }
}
export class Counter extends Component {
  // constructor() {
  //   super();
    state = {Counter: 5 };
  //we can write without this keyword 
  handleEvent = () => {
    this.setState({ Counter: this.state.Counter + 1 });
  };
  clickEvent = () => {
    this.setState({ Counter: this.state.Counter - 1 });
  };

  render() {
    const a = this.state.Counter;
    return (
      <div style={styles.button}>
        {/* <button onClick={this.handleEvent}>+1</button>
        <p>{a}</p>
        <button onClick={this.clickEvent}>-1</button> */}
        <Button variant="secondary" onClick={this.handleEvent}>Increment</Button>
        <p style={{fontSize:"30px",border:"2px solid",padding:"0px 20px"}}>{a}</p>
        <Button variant="success" onClick={this.clickEvent}>Decrement</Button>
      </div>
    );
  }
}
// const styles={
//     button:{
//         fontSize:"30px",
//         display:"flex",
//         gap:"30px",
//         justifyContent:"center",
//         alignItems:"center",
//     }
// }

