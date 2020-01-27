import React from "react"
import styled from "styled-components"
import Image from "./image"
import Card from "./Card"
import Aplikasi from "./aplikasi"

const HeroStyle = styled.div`
  overflow-x: hidden;
  .container {
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    position: relative;
  }
  .heroImage {
    width: 100vw;
    height: 100vh;
    max-height: 100%;
    max-width: 100%;
  }
  .overlay {
    width: 100vw;
    height: 100vh;
    max-height: 100%;
    max-width: 100%;
    z-index: 1;
    backdrop-filter: grayscale(0.8) opacity(0.3);
    background: rgba(15, 59, 94, 0.8);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .mainContainer {
    position: absolute;
    max-width: 100vw;
    max-height: 100vh;
  }
  .title {
    height: 100%;
    font-family: "Helvetica";
    font-weight: bold;
    font-size: 1.5em;
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .subTitle {
    color: white;
    font-family: "Helvetica";
    font-weight: normal;
    font-size: 1em;
    margin-top: 1em;
  }
  .centerContainer {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding-top: 2em;
    padding-bottom: 2em;
  }
  .leftContainer {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
  .rightContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    flex: 1;
  }
  .pti {
    font-size: 10vw;
    -webkit-text-stroke: 1px #ea4668;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
  .topText {
    color: #ffe92c;
    text-align: left;
  }
  .bottomText {
    color: white;
    text-align: right;
  }
  @media screen and (max-width: 620px) {
    .pti {
      font-size: 5vw;
    }
    .centerContainer {
      display: none;
    }
  }
  @media screen and (max-width: 420px) {
    .centerContainer {
      display: none;
    }
  }
`

const Hero = () => (
  <HeroStyle>
    <div className="container">
      <Image className="heroImage" filename="fasilkom.jpg" />
      <div className="mainContainer">
        <div className="overlay">
          <div className="leftContainer">
            {Aplikasi.slice(0, 4).map(aplikasi => (
              <Card nama={aplikasi.nama} url={aplikasi.url} />
            ))}
          </div>
          <div className="centerContainer">
            <div className="title">
              <div className="topText">
                <div>To live in a world,</div>
                <div>to solve problems,</div>
                <div>
                  to invent solutions&nbsp;
                  <s> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</s>
                </div>
              </div>
              <div className="bottomText">
                <div>PTI</div>
                <div style={{ color: "#ffe92c" }}>#ImpactThroughTech</div>
              </div>
            </div>
          </div>
          <div className="rightContainer">
            {Aplikasi.slice(4, 9).map(aplikasi => (
              <Card nama={aplikasi.nama} url={aplikasi.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </HeroStyle>
)

export default Hero
