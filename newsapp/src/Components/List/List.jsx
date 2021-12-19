import React, { Component, Fragment } from "react";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nbn: [] };

  }
  
  async componentDidMount() {

    const resp = await axios.get(
      // "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=p7j0H5UQiOmNzNlm8EnUa5ZLGBsWT2oG"
      "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=p7j0H5UQiOmNzNlm8EnUa5ZLGBsWT2oG"
     );
    
    // const newsarray = resp.data.response.docs;
    const newsarray = resp.data.results
     
    const newBlockofNews = newsarray.slice(0, 5).map((item) => {
      console.log(item)

      let card = {
        title: item.title,
        abstract: item.abstract,
        url: item.url,
      };
     
      return card;
      
 
  
    });

    this.setState({ nbn: newBlockofNews });
  }

  render() {
    
    return (
      <div>
       
        {this.state.nbn.map((item) => (
          
          <Fragment key={item.url}>
            <div className="container">
            <h2>{item.title}</h2>
             <p>{item.abstract}</p> 
            <a href={item.url}> <button>Ver</button></a>
            </div>
          </Fragment>
          
        ))}
      </div>
    );
  }
}

export default List;
