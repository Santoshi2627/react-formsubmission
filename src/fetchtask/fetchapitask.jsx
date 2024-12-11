import React from "react";
import { Accordian } from "../accordion/accordian";

 export class LifeCycle extends React.Component{
    constructor(){
        console.log("constructor")
        super()
        this.state={}
    }
    componentDidMount(){
        console.log("mounting")
        fetch("").then(r=>r.json()).then(json=>console.log(json))
    }
    static getDerivedStateFromProps(){
        console.log("statederived from props");
        return null;    
    }
    render(){
        console.log("rendering");
        return(
            <div><Accordian/> </div>
        )
        
    }

}
// export default LifeCycle;