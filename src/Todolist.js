import React from 'react'
import { Fragment } from 'react'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render () {
        return (
            <Fragment>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
                <button onClick={this.handleClick.bind(this)}>submit</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleClick(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemClick(index) {
        /* immutable state不允许我们直接改变, 要用setState api */
        let list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list,
        })
    }
}

export default TodoList
