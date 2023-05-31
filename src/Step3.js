import React from 'react';
import '../App.css';

class Step3 extends React.Component{

    constructor(props){
      super(props)
      this.state = {
        designation:"",
        email:""
      }
      
    }

    details(e){
      this.setState({
      [e.target.name]:e.target.value
    }
    )

    this.props.allData({ [e.target.name]: e.target.value } );
    }

    componentDidUpdate(){
      console.log(this.state);
    }

     render(){

        return<form>
             <div className="Resume">
      <header className="Resume-header">
        <h1>Email and Designation</h1>
        <div>
          <label><b>Designation</b></label>
        </div>
        <div>
          <input onChange={(e)=>this.details(e)} id="design" name='designation' type="text" value={this.props.designation}></input>
          <span>{this.props.val}</span>
        </div>
        <div>
          <label><b>Email</b></label>
        </div>
        <div>
          <input onChange={(e)=>this.details(e)} id="email" name='email' type="email" value={this.props.email}></input>
          <span>{this.props.val}</span>
        </div>
      </header>
    </div>
        </form>
     }

}

export default Step3;