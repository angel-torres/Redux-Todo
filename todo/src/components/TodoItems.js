import React, { Component } from 'react';
import { addItem, toggleItem } from '../actions/index'
import { connect } from 'react-redux';

class TodoItems extends Component {
    state = {
        inputText: '',
    }
    
    addItemFunc = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.inputText);
        this.setState({
            inputText: ''
        })
    }

    toggleItem = (e, index) => {
        e.preventDefault()
        this.props.toggleItem(index)
    }

    handleChanges = (e) => {
        e.preventDefault();
        this.setState({
            inputText: e.target.value,
        })
    }

    render() {
        return (
        <div>
            {this.props.todoItems.map( (item, index) => {
                return (
                    <p onClick={(e) => this.toggleItem(e, index)} key={index}>{item.item}</p>
            )
            })}
            <input type="text" value={this.state.inputText} onChange={this.handleChanges}/>
            <button onClick={this.addItemFunc}>Add Item</button>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoItems: state.todoItems,
    }
} 

export default connect(mapStateToProps, { addItem, toggleItem })(TodoItems)
