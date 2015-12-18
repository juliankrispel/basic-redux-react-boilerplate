import React, {PropTypes as T, Component} from 'react';
import {connect} from 'react-redux';
import {addItem, removeItem, updateItem} from 'app/example/actions';

function noOp(){}

export class Example extends Component{
  static propTypes = {
    items: T.arrayOf(T.object),
    updateItem: T.func.isRequired,
    removeItem: T.func.isRequired,
    addItem: T.func.isRequired,
  };

  static defaultProps = {
    items: [],
    updateItem: noOp,
    removeItem: noOp,
    addItem: noOp,
  };

  updateItem(index, event) {
    this.props.updateItem(index, event.target.value);
  }

  renderItems(items=[]) {
    return items.map(({value}, index)=> {
      return (<li key={index}>
        <input
          onChange={this.updateItem.bind(this, index)}
          value={value}
          type="text"/>
        <button
          onClick={this.props.removeItem.bind(this, index)}>
          Remove Item
        </button>
      </li>);
    });
  }

  render() {
    return (
      <div>
        <h1>This is an example List Component</h1>
        <div>Items Count: {this.props.items.length}</div>
        <ul>{this.renderItems(this.props.items)}</ul>
        <div>
          <button ref="addButton" onClick={this.props.addItem}>Add Item</button>
        </div>
      </div>
    );
  }
}

export function mapStateToProps(items) {
  return {items: items};
}

export default connect(
  mapStateToProps,
  {addItem, removeItem, updateItem}
)(Example);
