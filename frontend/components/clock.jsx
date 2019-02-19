import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = new Date();
    this.render.bind(this);
    this.tick.bind(this);
    this.componentWillUnmount.bind(this);
  }
  render () {
    return (
      <div>
        <h1>This Is My Clock</h1>
        <h2>{`${this.state.getHours()}:${this.state.getMinutes()}:${this.state.getSeconds()}`}</h2>
        <h2>{`${this.state.getMonth()}/${this.state.getDate()}/${this.state.getFullYear()}`}</h2>
      </div>
    )
  }

  tick () {
    this.setState = new Date();
  }

  componentDidMount(){
    let interval = window.setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    window.clearInterval(this.interval)
  }

}

export default Clock;