import React from "react";
import { Component } from "react";
import { getBanner } from "../../api";
import "./banner.scss";
var time = null;
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfBanner: [],
      nowIndex: 0
    };
    // this.time = null;
  }

  // static time = null;

  componentDidMount() {
    getBanner().then(data => {
      this.setState(state => ({
        listOfBanner: [...data.banners]
      }));
    });

    time = setInterval(() => {
      this.setState(state => ({
        nowIndex: state.nowIndex + 1 > 7 ? 0 : state.nowIndex + 1
      }));
    }, 3000);
  }
  // componentWillUnmount() {
  //   time = null;
  // }

  render() {
    const { nowIndex, listOfBanner: bannerList } = this.state;
    if (bannerList.length > 0) {
      return (
        <div
          className="banner"
          style={{
            transform: `translateX(-${100 * nowIndex}vw)`
          }}
        >
          {bannerList.map((itm, idx) => (
            <div key={idx} className="bannerbox">
              {<img src={itm.imageUrl} alt="bannerImg" />}
            </div>
          ))}
        </div>
      );
    }
    return "banner get failed!";
  }
}

export default Banner;
