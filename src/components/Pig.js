import React from "react"
import exclamation from "../assets/exclamation.png"

let timer = null
export default class Pig extends React.Component {


  panic = () => (<img className="exclamation" src={exclamation} alt="" />)

  freakOut = () => {
    clearInterval(timer);
    if (this.props.environment == "inhospitable"){
      this.panic()
    }
    timer = setTimeout(this.props.relax, 2000)
  }

  render() {
    return(
      <div id={this.props.name} className="sheeple">
      {this.freakOut()}
      </div>
    )
  }
}
