import React, { Component } from "react";
import { getRoman } from "./roman";

const TEXT = "Insert a value";

export class Input extends Component {
  state = { value: TEXT };
  render() {
    return (
      <div>
        <input
          type="number"
          max="4999"
          min="1"
          autoFocus
          onChange={event => {
            try {
              const value =
                event.target.value === ""
                  ? TEXT
                  : getRoman(parseInt(event.target.value));
              this.setState({
                value
              });
            } catch (_) {
              this.setState({ value: "Wrong input value" });
            }
          }}
        />
        <p>
          <strong>Result: </strong>
          {this.state.value}
        </p>
      </div>
    );
  }
}
