import React,{Component} from "react";
import PortfolioHeader from "./portfolioheader";
import PortfolioMain from "./portfoliomain";
class PortfolioHome extends Component{
    render(){
        return(
            <>
            <PortfolioHeader/>
            <PortfolioMain/>
            </>
            
        );
    }

}
export default PortfolioHome;