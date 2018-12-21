import React from 'react'
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import addEmp from './addEmp'; 

export default class Nav extends React.Component {


render(){
    return(
    
      <ul>
      <li><a href="./addemp">Add Emp</a></li>
      <li><a href="./">Histogram</a></li>
      <li><a href="./Plot">Scatter Plot</a></li>
    </ul>

    );
    }

}
