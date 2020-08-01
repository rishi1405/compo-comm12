import React from 'react';
import ReactDOM from 'react-dom';

const EmployeeContext=React.createContext();
class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      data: {Id:101},
      changeEmployeeInfo:  this. updateEmployeeDetails,
    };

  }
  changeEmpData=()=>{
        this.setState({data:{Id:102}});
      }
   render() {
    return <div>
      <h2>Welcome to App Component</h2>
      <p>
        <label>Employee Id : <b>{this.state.data.Id}</b></label>
      </p>
      <EmployeeContext.Provider value={this.state}>
      <Employee />
        </EmployeeContext.Provider> 
        <p>
         <button onClick={this. changeEmpData }>Change</button></p>
        </div>
  }
}

class Employee extends React.Component {
  static contextType = EmployeeContext;
  render() {
    return <div>
      <h2>Welcome to Employee Component...</h2>
      <p>
        <label>Employee Id : <b>{this.context.data.Id}</b></label>
      </p>
      <Salary></Salary>
      </div>
  }
}

class Salary extends React.Component{
    static contextType=EmployeeContext;
    render(){
      return<div>
        <h2>Welcome to Salary Component</h2>
        <p><label>Employee Id: <b>{this.context.data.Id}</b></label></p>
        
      </div>
    }
  }

const element=<App/>
ReactDOM.render(element,document.getElementById('root'));