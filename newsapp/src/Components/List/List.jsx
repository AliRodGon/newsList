import React, { Component, Fragment } from "react";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { nbn: [] };
    // Event binding (Bindear eventos)
    // console.log(this.state.datanews)
  }
  async componentDidMount() {
    //await new Promise( resolve => setTimeout(resolve, 3000)); // Simular retardo de una carga más "lenta"

    const resp = await axios.get(
      "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=p7j0H5UQiOmNzNlm8EnUa5ZLGBsWT2oG"
    );
    // const newObject = resp.data.response.docs[0].abstract;
    const newsarray = resp.data.response.docs;
    const newBlockofNews = newsarray.slice(0, 5).map((item) => {
      console.log({ item });

      let obj = {
        abstract: item.abstract,
        url: item.web_url,
      };
      console.log({ obj });
      return obj;
    });

    console.log("newBlockofNews: ", newBlockofNews);

    this.setState({ nbn: newBlockofNews });
  }
  render() {
    return (
      <div>
        {this.state.nbn.map((item) => (
          <Fragment key={item.url}>
            <p>{item.abstract}</p>
            <p>{item.url}</p>
          </Fragment>
        ))}
      </div>
    );
  }
}

export default List;
