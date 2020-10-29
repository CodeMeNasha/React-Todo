import React from "react";

class TodoForm extends React.Component {
    //constructor w state
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }
    handleChanges = e => {
        this.setState({
            input: e.target.value
        });
        //update state w each keystroke
    };

    //class property to submit form
    handleSubmit = () => {

    };

    render() {
        return (
            <form>
                <input onChange={this.handleChanges} type="text" name="item" />
                <button>Add This Item</button>
            </form>
        )
    }

};

export default TodoForm;
