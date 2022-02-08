import React, { Component } from "react";

class Field extends Component {
  render() {
    return (
      <div className="form-group">
        {this.props.elementName === "input" ? (
          <input
            className="form-control"
            id={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            required="required"
            data-validation-required-message="Molimmo vas unesite svoje ime."
            value={this.props.value}
            onChange={(e) => this.props.onChange(e)}
          />
        ) : (
          <textarea
            className="form-control"
            id={this.props.name}
            placeholder={this.props.placeholder}
            required="required"
            data-validation-required-message="Molimo vas da unesete vašu poruku."
            value={this.props.value}
            onChange={(e) => this.props.onChange(e)}
          />
        )}
        <p className="help-block text-danger"></p>
      </div>
    );
  }
}

export default Field;
