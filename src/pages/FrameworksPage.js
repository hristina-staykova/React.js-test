import React from "react";
import { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import items from "./items";

@observer
class FrameworksPage extends Component {
  @observable toSearch = "";
  @observable itemsVisible = items.slice();

  handleInputChange = event => {
    this.toSearch = event.target.value;
    this.itemsVisible = items.filter(
      element =>
        element.title.toLowerCase().includes(this.toSearch) ||
        element.description.toLowerCase().includes(this.toSearch)
    );
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  showResults = () => {
    return (
      <ul className="list-group">
        {this.itemsVisible.map(item => (
          <li className="list-group-item border-0">
            <h3>{item.title}</h3>
            <p>{item.description}}</p>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div className="p-3">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              value={this.toSearch}
              name="firstName"
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              placeholder="Start searching..."
            />
          </div>
        </form>
        {this.showResults()}
      </div>
    );
  }
}

export default FrameworksPage;
