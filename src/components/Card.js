import React from "react"
import styled from "styled-components"

const CardStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .cardContainer {
    background: ${props => (props.hovered ? "#ea4668" : "white")};
    display: flex;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.4s;
    max-width: 100%;
    max-height: 100%;
    width: 50%;
    height: 70%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: rgba(40, 40, 40, 0.4) 0px 5px 50px;
    opacity: 1;
    /* background: green; */
  }
  .backgroundImage {
    width: 100%;
    height: 100%;
  }

  .topTitle {
    font-size: 2em;
    font-family: "Helvetica";
    font-weight: bold;
    -webkit-text-stroke: ${props =>
      `1px ${props.hovered ? "white" : "#ea4668"} `};
    -webkit-text-fill-color: ${props => (props.hovered ? "#ea4668" : "white")};
  }
  .bottomTitle {
    font-size: 1em;
    font-family: "Helvetica";
    font-weight: bold;
    color: ${props => (props.hovered ? "white" : "#ea4668")};
  }
  .bgImageContainer {
    max-width: 100%;
    max-height: 100%;
  }
  @media screen and (max-width: 620px) {
    .bottomTitle {
      font-size: 0.8em;
    }
  }
  @media screen and (max-width: 550px) {
    .topTitle {
      font-size: 2em;
    }
  }
`

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hovered: false }
  }
  render() {
    const { nama, url } = this.props
    return (
      <CardStyle hovered={this.state.hovered}>
        <a
          href={url}
          target="_blank"
          className="cardContainer"
          onMouseEnter={() =>
            this.setState({
              hovered: !this.state.hovered,
            })
          }
          onMouseLeave={() =>
            this.setState({
              hovered: !this.state.hovered,
            })
          }
        >
          <div className="topTitle">
            {nama
              ? `${nama
                  .split(" ")[0]
                  .charAt(0)
                  .toUpperCase() +
                  nama
                    .split(" ")[1]
                    .charAt(0)
                    .toUpperCase()}`
              : ""}
          </div>
          <div className="bottomTitle">{nama}</div>
          <div className="backgroundTitle"></div>
        </a>
      </CardStyle>
      // <CardStyle hovered={this.state.hovered}>
      //   <BackgroundImage filename="leo.png" className="cardContainer">
      //     <a
      //       href={url}
      //       target="_blank"
      //       // className="cardContainer"
      //       onMouseEnter={() =>
      //         this.setState({
      //           hovered: !this.state.hovered,
      //         })
      //       }
      //       onMouseLeave={() =>
      //         this.setState({
      //           hovered: !this.state.hovered,
      //         })
      //       }
      //     >
      //       <div className="topTitle">
      //         {nama
      //           ? `${nama
      //               .split(" ")[0]
      //               .charAt(0)
      //               .toUpperCase() +
      //               nama
      //                 .split(" ")[1]
      //                 .charAt(0)
      //                 .toUpperCase()}`
      //           : ""}
      //       </div>
      //       <div className="bottomTitle">{nama}</div>
      //       <div className="backgroundTitle"></div>
      //     </a>
      //   </BackgroundImage>
      // </CardStyle>
    )
  }
}

export default Card
