import React from "react";
import Usercomp from "./usercomp";
import Admincomp from "./admin";
export class Parent extends React.Component{
  render(){
    return(
      <>
     { this.props.login==="user"?<Usercomp/>:<Admincomp/>}
      </>

    )
  }
}
