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

  componentDidMount() {
    getBanner().then(data => {
      this.setState(state => ({
        listOfBanner: [...data.banners]
      }));
    });

    this.timer = setInterval(() => {
      let {nowIndex}=this.state
      nowIndex= nowIndex + 1 > 7 ? 0 : nowIndex + 1
      this.setState({
        nowIndex:nowIndex
      });
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

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
