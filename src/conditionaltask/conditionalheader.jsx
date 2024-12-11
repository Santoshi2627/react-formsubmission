// import Home from "../home"

const ProductsHeader=()=>{
    return(
        <>
        <ul style={styles.ul}>
            <li>Home</li>
            <li>About us</li>
            <li>Log-in</li>
        </ul>
        </>
    )
}
// export default productsMain;
const styles={
   ul: {
    display:"flex",
    justifyContent:"flex-end",
    gap:"20px",
    listStyleType: "none",
    margin:"0",
    padding:"20px"
    }

}
export default ProductsHeader;