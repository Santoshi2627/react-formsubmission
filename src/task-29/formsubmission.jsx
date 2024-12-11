import React, { Component } from "react";
export class FormSubmission extends Component {
  constructor() {
    super();
    // this.state={text:this.formSubmission}
    // this.state={mail:this.formSubmission}
    this.state = {
      text1: this.formSubmission,
      mail: this.formSubmission,
      text2:this.formSubmission,
      submitted: false,
    };
  }
  formSubmission = (e) => {
    e.preventDefault();
    this.setState({
      text1: e.target.id1.value,
      mail: e.target.id2.value,
      text2:e.target.id3.value,
      submitted: true,
    });
    // this.setState({mail:e.target.id2.value})
    // submitted:true
  };
  render() {
    return (
      <>
        <pre>
          <div>
            <form onSubmit={this.formSubmission} style={{ margin: "5% 10%" }}>
              <label htmlFor="id1">Name:</label>
              <input id="id1" type="text" required />
              <br />
              <br />
              <label htmlFor="id2">EMail:</label>
              <input id="id2" type="email" required />
              <br />
              <br />
              <label htmlFor="id3">Blood-Group:</label>
              <input id="id3" type="text" required/>
              <br />
              <br />
              <input type="submit" />
              <br />
              <br />
              <input type="reset" />
              <p>submit your form and you can see your details</p>
            </form>
          </div>
        </pre>
        {this.state.submitted && (
          <div
            style={{
              border: "1px solid",
              height: "40vh",
              width: "40vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 0px 10px gray",
              margin: "0%",
              marginLeft:"10%",
              borderRadius: "30px",
            }}
          >
            <h1>Name:<span>{this.state.text1}</span></h1>
            <h1>Email:<span>{this.state.mail}</span></h1>
            <h1>Blood-Group:<span>{this.state.text2}</span></h1>
          </div>
        )}
      </>
    );
  }
}
