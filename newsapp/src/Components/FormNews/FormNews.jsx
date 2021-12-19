import React, { Component, Fragment } from "react";
import Card from "../Card/Card";
class FormNews extends Component {

  constructor(props) {
    super(props);
    this.state={
      new: []
    }
  }
  //   this.tiular = React.createRef(); // crear la referencia
  //   this.summary = React.createRef();
  //   this.state = {
   
createNew=(entry)=>{
  const newTitle={entry}
    
  this.setState({new:[...this.state.new,newTitle]}) 
 
  console.log(newTitle)
  
}

handleSubmit=(event)=>{
      event.preventDefault()
      const entry=event.target.entry.value;
      
      
      this.createNew(entry)
      
}
  
deleteNew=(elementoABorrar)=>{
    const updatedNew=this.state.new.filter((e,i)=> i!== elementoABorrar)

      this.setState({new:updatedNew})
      // this.setState({[event.target.description] : event.target.value})

    }
paintNew=()=>{
    return this.state.new.map(
      (e,i)=>{
        return <Card delete ={()=>this.deleteNew(i)} description={e.entry} key={i}/>
      }
    )
    }  


  render() {
    return (
      <>
    <form onSubmit={this.handleSubmit}>
        <label htmlFor="entry">Añada noticia nueva</label>
        <textarea type="textarea" name="entry" placeholder="Escriba aquí"/>
    
        <input type="submit" />
     </form>
      {this.paintNew()}
     </>
     )
  }
}

export default FormNews;
