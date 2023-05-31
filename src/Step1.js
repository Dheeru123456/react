import React from 'react';
import '../App.css';
// import App from '../App';

class Step1 extends React.Component {


  constructor(props) {
    super(props)
    // this.state = {
    //   name: "",
    //   dob: ""
    // }

    
      //  this.arr = [1,2];
      // this.validate = this.validate.bind(this);
      // this.details = this.details.bind(this);
  }

  // validate(e){
  //   e.preventDefault();
  //   debugger
  //     if(this.name === ""){
  //         this.setState.error = "this field is required";
  //     }
  // }


  details(e) {
    e.preventDefault();
    // this.validate();
    

    this.props.allData({[e.target.name]: e.target.value});
  }

  componentDidUpdate() {
    

  }
  render() {
    console.log("->",this.props.state);
    return (
      <>
      {/* {false && <Step1 props = {this.state} />} */}
    <form>
      {/* {console.log("this.state",this.state)} */}
      <div className="Resume">
        <header className="Resume-header">
          <h1>Personal Details</h1>
          <div>
            <label ><b>Name</b></label>
          </div>
          <div>
            <input onChange={(e) => this.details(e)} id="name" className="person-det" name="name" type="text" value={this.props.state.name}></input>
            <span>{this.props.val}</span>
          </div>
          <div>
            <label><b>Date of Birth</b></label>
          </div>
          <div>
            <input onChange={(e) => this.details(e)} id="dob" className="person-det" name='dob' type="date" value={this.props.state.dob}></input>
            <span >{this.props.val}</span>

            {/* {this.arr.map((val)=><button>val{val}</button>)} */}
          </div>


        </header>
      </div>
    </form>
    </>
    )
  }

}

export default Step1;