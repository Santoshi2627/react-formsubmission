import React,{Component } from "react";
const obj=[{
    productName:"samsung galaxy s25",
    productPrice:"130000",
    productAvaliability:true,
},
{
    productName:"ipad",
    productPrice:"100000",
    productAvaliability:true,
},
{
productName:"macbook",
productPrice:"160000",
productAvaliability:false,
},
{
productName:"iphone",
productPrice:"160000",
productAvaliability:false,
},
{
productName:"samsung",
productPrice:"160000",
productAvaliability:true,
},
{
    productName:"one plus",
    productPrice:"60000",
    productAvaliability:true,
    },

]
class  ProductsMain extends Component{
    render(){
        return(
            <div style={{display: "grid",
    gridTemplateColumns: "repeat(3, 60px)",
    // alignContent:"space-evenly",
    gap: " 60px",
    padding: "100px",
    justifyContent: "space-evenly",backgroundColor:"pink",margin:"0"}}>
            <div style={{...styles.card,...obj[0].productAvaliability?styles.greenbox:styles.redbox}}>
                <h1>{obj[0].productName}</h1>
                <h2>{obj[0].productPrice}</h2>
            </div>
             <div style={{...styles.card,...obj[1].productAvaliability?styles.greenbox:styles.redbox}}>
             <h1>{obj[1].productName}</h1>
             <h2>{obj[1].productPrice}</h2>
         </div>
         <div style={{...styles.card,...obj[2].productAvaliability?styles.greenbox:styles.redbox}}>
             <h1>{obj[2].productName}</h1>
             <h2>{obj[2].productPrice}</h2>
         </div>
         <div style={{...styles.card,...obj[3].productAvaliability?styles.greenbox:styles.redbox}}>
             <h1>{obj[3].productName}</h1>
             <h2>{obj[3].productPrice}</h2>
         </div>
         <div style={{...styles.card,...obj[4].productAvaliability?styles.greenbox:styles.redbox}}>
             <h1>{obj[4].productName}</h1>
             <h2>{obj[4].productPrice}</h2>
         </div>
         <div style={{...styles.card,...obj[5].productAvaliability?styles.greenbox:styles.redbox}}>
             <h1>{obj[5].productName}</h1>
             <h2>{obj[5].productPrice}</h2>
         </div>
         <p>avaliable cards are in green and unavaliable cards are in red</p>
         </div>
        //  <> <p>avaliable cards are in green and unavaliable cards are in red</p></>
         
     )
        
    }
}
const styles={ 
    card: {
        width: "300px", // Fixed width for each card
        textAlign: "center", // Center-align text
    },
    redbox:{backgroundColor:"red",padding:"20px",color:"white"},
    greenbox:{backgroundColor:"green",padding:"20px",color:"black"},
//    avaliable:{color:"white"},
//    unavaliable:{color:"black"},
   
//    padding:"30px"
}

export default ProductsMain; 