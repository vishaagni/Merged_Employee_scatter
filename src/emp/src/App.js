import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import addEmp from './addEmp'; 
import Head from './Head';
import Foot from './Foot';
import Nav from './Nav';
import './App.css';
import Plot from './Plot'
//import Split from 'react-split'



class App extends Component {
  // initially data is empty in state
  state = { data: [] };

  componentDidMount() {

    fetch('http://localhost:5001/')
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(data => this.setState({ data }));
  }

  // dispalying the table of JSON values
  renderTable = () =>
  { 
    return this.state.data.map(Employee =>{
      return (
      
        <table>
        <tr>
          <td>{Employee.Name}</td>
          <td>{Employee.Designation}</td>
          <td>{Employee.Salary}</td>
        </tr>
        </table>
        
      )
    })
  }


NewPage()
{

     ReactDOM.render(<addEmp /> ,document.getElementById('Table'));
}


  render() {
    return (
      //rendering the generated table

        <div>
          <Head />
          
    <div class="split left">
      <div class="centered">
        <Nav />
    </div> 
   </div>



<div class="split1 right">
    <div class="centered">
    
       <Router>
            <div className = "middle">
                 <br></br><br></br><br></br>
                 <br></br>
              <table className = "Table" align= "center"> 
                 {this.state && this.state.data && this.renderTable()}
              </table>
              <Switch>
                   <Route exact path='/addemp' component={addEmp}/>
                   <Route exact path='/Plot' component={Plot}/>
                </Switch>
             </div>
        </Router>

    </div> 
  </div>
  <Foot />
        </div>
    );
  }
}
 
export default App;

