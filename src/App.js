import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  state={
    name:"",
    surname:"",
    fname:"",
    adress:"",
    number:"",
    isValid:true
  }
  handleClick=(event)=>{
this.setState({name:event.target.value})
  }
  handleClicks=(event)=>{
this.setState({surname:event.target.value})
  }
  handleClickf=(event)=>{
this.setState({fname:event.target.value})
  }
  handleClickad=(event)=>{
this.setState({adress:event.target.value})
  }
  handleClickn=(event)=>{
this.setState({number:event.target.value})
if(this.state.number!=""){
  this.setState({isValid:false})
}
  }
  handleSubmit=(e)=>{
    e.preventDefault();
  }
  clicker=()=>{
    console.log(this.state)
  }
  
  render() {
   
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>
Name:<input
value={this.state.name}
id='name'
name='name'
type="text"
onChange={this.handleClick}
required
 />
          </label>
          <br/>
          <label htmlFor='name'>
SurName:<input
value={this.state.surname}
id='name'
name='name'
onChange={this.handleClicks}
required
 />

          </label>
          <br/>
          <label htmlFor='name'>
FatherName:<input

id='name'
name='name'
value={this.state.fname}
onChange={this.handleClickf}
required

 />

          </label>
          <br/>
          <label htmlFor='name'>
Adress:<input
id='name'
name='name'
value={this.state.adress}
onChange={this.handleClickad}
required

 />

          </label>
          <br/>
          <label htmlFor='name'>
Number:<input
id='name'
name='name'
type="number"
value={this.state.number}
required
onChange={this.handleClickn}
 />

          </label>
          <label htmlFor='name'>
<button type="submit" onClick={this.clicker} disabled={this.state.isValid}
onChange={this.handleClickn}>Submit</button>
          </label>

        </form>
      </>
    )
  }
}
