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
        <div style={{width: "700px", margin: "auto"}}> 
            <form className="input-group row">
                <input className="form-control form-control-lg" type="text" value={this.state.inputText} onChange={this.handleChanges}/>
                <button className="btn btn-primary btn-lg" onClick={this.addItemFunc}>Add Item</button>
                <button className="btn btn-danger btn-lg" onClick={this.deleteItemsFunc}>Delete Completed Items</button>
            </form>
            <br/>
            {this.props.todoItems.map( (item, index) => {
                return (
                    <p className={item.completed === true ? "alert alert-danger" : "alert alert-primary"} onClick={(e) => this.toggleItem(e, index)} key={index}>{item.item}</p>
            )
            })}
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
