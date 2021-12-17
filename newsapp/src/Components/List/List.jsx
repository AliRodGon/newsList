import React, { Component } from "react";
import axios from 'axios';

class List extends Component {
  
    constructor(props) {
      super(props);
      this.state = { datanews: [] }
      // Event binding (Bindear eventos)
      // console.log(this.state.datanews)
    }
    async componentDidMount(){
      //await new Promise( resolve => setTimeout(resolve, 3000)); // Simular retardo de una carga más "lenta"
      
      const resp = await axios.get('https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=p7j0H5UQiOmNzNlm8EnUa5ZLGBsWT2oG');
      // const newObject = resp.data.response.docs[0].abstract;
      const newsarray = resp.data.response.docs
      const newBlockofNews= newsarray.slice(0, 5).map((item) => {
        
        console.log(item)
        return item;
    });


      
      // const results = resp.data; // []
      
  
      this.setState({
          datanews: ([newBlockofNews]) // []
         
      })
     
    }
    
    render() {
      
      return (
          <p> {}</p>
      );
    }
  }
  
export default List;