import React, { Fragment } from 'react';

class TodoList extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <Fragment>
                Todo List
                {data.map((todo, index) => {
                    return (<h1 key={index} >
                        {todo}

                    </h1>)
                })}
            </Fragment>
        )
    }
}

export default TodoList;