import React from "react";
import { Component } from "react";
import { getBanner } from "../../api";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfBanner: [],
      nowIndex: 0
    };
  }

  componentDidMount() {
    getBanner().then(data => {
      this.setState(state => ({
        listOfBanner: [...data.banners]
      }));
    });
  }
  render() {
    console.log(this.state.listOfBanner);
    return this.state.listOfBanner.map(itm => {
      return <img src={itm.imageUrl} key={itm.targetId} />;
    });
  }
}

export default Banner;
