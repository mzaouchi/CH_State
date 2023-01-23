import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      tasks : [
        { text: 'Buy tabbac', id : uuidv4() , isDone:false},        
        {text: 'Buy more tabbac', id: uuidv4() , isDone:false},
        {text:'Quit smoking', id: uuidv4(), isDone:false}
          ],
      textP : ''
    }
  }
  handleAdd=()=> this.state.textP == "" ? alert('Empty') : this.setState({tasks : [...this.state.tasks,{text:this.state.textP,id : uuidv4(), isDone : false}]})
  handleDelete=(a)=> this.setState({tasks : this.state.tasks.filter(el=> el.id != a)})
  handleEdit=(a)=> this.setState({tasks : this.state.tasks.map(el=> el.id == a ? {...el,isDone : !el.isDone} : el)})
  render(){
    return(
      <div>
        <h1>TODO List</h1>
        {
          this.state.tasks.map(el => 
          <div>
            <h3 className={el.isDone ? "chateb" : ""}>{el.text}</h3>
            <h2>{el.isDone ? 'TRUE' : 'FALSE'}</h2>
            <button onClick={()=>this.handleEdit(el.id)}>Done</button>
            <button onClick={()=>this.handleDelete(el.id)}>Delete</button>
          </div>
          )
        }

        <input type='text' onChange={(e)=> this.setState({textP : e.target.value})}/>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    )
  }
}
export default App;
