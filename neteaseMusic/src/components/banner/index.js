import React from "react";
import { Component } from "react";
import { getBanner } from "../../api";
import "./banner.scss";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfBanner: [],
      nowIndex: 0
    };
  }

  // setBannerBox() {
  //   let bannerbox = [];
  //   const nowIndex = this.state.nowIndex;
  //   const bannerList = [...this.state.listOfBanner];
  //   const before = nowIndex - 1 < 0 ? 7 : nowIndex - 1;
  //   const after = nowIndex + 1 > 7 ? 0 : nowIndex + 1;
  //   bannerbox = [bannerList[before], bannerList[nowIndex], bannerList[after]];

  //   return bannerbox;
  // }

  componentDidMount() {
    getBanner().then(data => {
      this.setState(state => ({
        listOfBanner: [...data.banners]
      }));
    });
  }

  render() {
    const { nowIndex, listOfBanner: bannerList } = this.state;
    let time = setTimeout(() => {
      this.setState(state => ({
        nowIndex: state.nowIndex + 1 > 7 ? 0 : state.nowIndex + 1
      }));
      time = null;
    }, 3000);
    if (bannerList.length > 0) {
      return (
        <div
          className="banner"
          style={{
            transform: `translateX(-${10.8 * nowIndex}rem)`
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
