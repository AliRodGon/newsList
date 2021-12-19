import React, { Component, Fragment } from "react";
import Card from "../Card/Card";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nbn: [] };

  }
  
  async componentDidMount() {

    const resp = await axios.get(
      "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=p7j0H5UQiOmNzNlm8EnUa5ZLGBsWT2oG"
    );
    // const newObject = resp.data.response.docs[0].abstract;
    const newsarray = resp.data.response.docs;
    const newBlockofNews = newsarray.slice(0, 5).map((item) => {
      // console.log({ item });

      let card = {
        abstract: item.abstract,
        url: item.web_url,
      };
      // console.log(nbn)
      console.log( card );
      return card;
 
  
    });

    this.setState({ nbn: newBlockofNews });
  }

  render() {
    
    return (
      <div>
        console.log(card)
        {this.state.nbn.map((item) => (
          
          <Fragment key={item.url}>
            <p>{item.abstract}</p>
            <a href={item.url}> <p>Ver noticia completa</p></a>
            {/* <button
              onClick={() => {this.setState({item:""})}
        }/> */}
          </Fragment>
          
        ))}
      </div>
    );
  }
}

export default List;
