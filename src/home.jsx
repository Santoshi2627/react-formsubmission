import React from "react";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
class Home extends React.Component {
  render() {
    return (
      <>
        {/* <Footer/> */}
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default Home;
