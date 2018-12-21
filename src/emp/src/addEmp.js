import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import querystring from 'querystring';


export default class addEmp extends React.Component {
    constructor(props) {
      super(props);
      // Default null value
      this.state = {Name: '',
      Designation: '', Salary: ''};

   //Handles text change 
      this.handleChangeN = this.handleChangeN.bind(this);
      this.handleChangeD = this.handleChangeD.bind(this);
      this.handleChangeS = this.handleChangeS.bind(this);

  //Handles button click event
  this.handleSubmit = this.handleSubmit.bind(this);
    }

  //Sets recent values to the components 
    handleChangeN(event) {
      const re = /^[a-zA-Z]*$/;

      // if value is not blank, then test the regex
  
      if (event.target.value === '' || re.test(event.target.value)) {
         this.setState({Name: event.target.value})
      }
      else{
          alert("Please enter a valid Name");
      }
    
    }

    handleChangeD(event) {
      const re = /^[a-zA-Z]*$/;

      // if value is not blank, then test the regex
  
      if (event.target.value === '' || re.test(event.target.value)) {
         this.setState({Designation: event.target.value})
      }
      else{
          alert("Please enter a valid designation");

      }
    
    }

    handleChangeS(event) {
      console.log(event.target.value);

      const re = /^[0-9\b]+$/;

      // if value is not blank, then test the regex
  
      if (event.target.value === '' || re.test(event.target.value)) {
         this.setState({Salary: event.target.value})
      }
      else{
          alert("Please enter a valid salary");
      }
    
    }
  
    //An alert message for proper submition
    handleSubmit(event) {
      event.preventDefault();

    var data = 
            {
             'Name': this.state.Name,
             'Designation': this.state.Designation,
             'Salary': this.state.Salary
            };

            //posting the data to the server

            axios.post('http://localhost:5000/addemp', querystring.stringify(data))
            .then(res=>{console.log(res);
            })
            .catch(err=>{console.log(err);
            })

            window.location.assign("/");
}
    
    render() {
      return (
        //form creation
        
        <div className= "EmpData">
        <form className="Table" method="POST"   onSubmit={this.handleSubmit}>
         <input id = "Name" placeholder = "Employee Name" onChange={this.handleChangeN} required/><br></br>
         <input id = "Designation" placeholder = "Employee Designation" onChange={this.handleChangeD} required/><br></br>
         <input id = "Salary" placeholder = "Employee Salary" onChange={this.handleChangeS} required/><br></br><br></br>
         <input type="submit" value="Submit"/>
        </form>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <addEmp />,
    document.getElementById('root')
  );
