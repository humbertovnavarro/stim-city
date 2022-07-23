import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, pan: null };
    this.pan = this.pan.bind(this);
    this.startPan = this.startPan.bind(this);
    this.stopPan = this.stopPan.bind(this);
  }
  pan() {
    if(this.props.disabled)
    return;
    this.next();
    this.state.pan =
    setInterval(() => {
      if(this.state.panning) {
        this.next();
      }
    }, 3000);
  }
  startPan() {
    if(this.props.disabled)
    return;
    if(this.state.pan) {
      clearInterval(this.state.pan);
    }
    this.setState({ panning: true });
    this.pan();
  }
  stopPan() {
    if(this.props.disabled)
    return;
    clearInterval(this.pan);
    this.setState({ panning: false });
    this.setState({index: 0});
  }
  next() {
    if(this.props.disabled)
    return;
    let nextIndex = this.state.index + 1;
    if (nextIndex > this.props.slides.length - 1) {
      nextIndex = 0;
    }
    this.setState({ source: this.props.slides[nextIndex], index: nextIndex });
  }

  render() {
    const $dots = this.props.slides.map((slide, index) => {
      return <span key={index} className={`
      ${index === this.state.index ? 'text-black' : 'text-gray-500'}
      transition-all
      material-icons ${this.state.panning ? 'opacity-100' : 'opacity-0'}
      `}>circle</span>
    });
    return (
      <div className="carousel relative">
          {<img onMouseOver={this.startPan} onMouseLeave={this.stopPan} className={`z-1 rounded-lg absolute`} src={this.props.slides[this.state.index]}></img>}
          <div className="absolute m-1">
            {$dots}
          </div>
      </div>
    );
  }
}
