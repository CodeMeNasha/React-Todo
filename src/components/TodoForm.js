import React from 'react';

class TodoForm extends React.Component {
    handleChanges = e => {

    }
    render() {
        return (
            <form>

                <input type='text' name='item' />
                <button>Add This</button>
            </form>
        )
    }
}

export default TodoForm;