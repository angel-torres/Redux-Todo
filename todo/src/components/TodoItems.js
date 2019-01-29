import React, { Component } from 'react';
import { addItem, toggleItem, deleteItems } from '../actions/index'
import { connect } from 'react-redux';

class TodoItems extends Component {
    state = {
        inputText: '',
    }
    
    addItemFunc = (e) => {
        e.preventDefault();
        if (this.state.inputText === '') {
            alert('Enter a to do item')
        } else {
            this.props.addItem(this.state.inputText);
            this.setState({
                inputText: ''
            })
        }
    }

    deleteItemsFunc = (e) => {
        e.preventDefault();
        this.props.deleteItems()
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
                    <p className={item.completed === true ? "alert alert-danger" : "alert alert-success"} onClick={(e) => this.toggleItem(e, index)} key={index}>{item.item}</p>
            )
            })}
            <form>
                <input type="text" value={this.state.inputText} onChange={this.handleChanges}/>
                <button onClick={this.addItemFunc}>Add Item</button>
                <button onClick={this.deleteItemsFunc}>Delete Completed Items</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoItems: state.todoItems,
    }
} 

export default connect(mapStateToProps, { addItem, toggleItem, deleteItems })(TodoItems)
