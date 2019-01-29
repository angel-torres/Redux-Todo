import React, { Component } from 'react';
import { addItem } from '../actions/index'
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

    handleChanges = (e) => {
        e.preventDefault();
        this.setState({
            inputText: e.target.value,
        })
    }

    render() {
        console.log(this.props)
        return (
        <div>
            {this.props.todoItems.map( item => {
                return (
                    <p key={item}>{item}</p>
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
        todoItems: state.todo,
    }
} 

export default connect(mapStateToProps, { addItem })(TodoItems)
