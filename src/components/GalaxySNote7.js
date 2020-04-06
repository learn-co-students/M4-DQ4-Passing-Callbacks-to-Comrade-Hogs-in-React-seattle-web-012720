import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: false,
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.throwAFit()
    }, false)
  }

  throwAFit = () => {
    this.exclaim()
    this.setState({
      panicked: !this.state.panicked
    });
    this.props.alterEnvironment('inhospitable')
  };

  relax = () => {
    this.props.alterEnvironment('docile')
  }

  exclaim = () => {
    if (this.state.panicked) return
    this.exclaimAudio.play()
    this.squeelAudio.play()
  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  render() {
    return(
      <div id="galaxy-s-note" onClick={()=>this.throwAFit()}>
        {(this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}
