import React, { Component } from "react";
import Domain_arch from './domain_arch'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [[2],[3],[4],[5]],
    };
  }

  

  render() {
    return (
      <div>
          {this.state.data.map((row, i) => (
              <div key={i}>
                  <div>{row}</div>
                  <div><Domain_arch key={i}/></div>
                </div>
          ))}
      </div>
    );
  }
}

export default Dashboard;
