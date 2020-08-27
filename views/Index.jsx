const React = require('react')
const Default = require('./components/Default.jsx')

class Index extends React.Component {
    render() {
        const { todos } = this.props
        return (
            <Default>
                <h1>To Do List</h1>
                {
                    todos.length === 0 ? <h3>There are no To Dos yet!</h3> :
                        /*
                        Question: I was trying to write something like:
                        
                        {todos ? xDo the mapping methodx : 'There are no tasks yet'}
    
                        Doesn't (todos) by itself ask if the array exists and/or is empty?
    
                        */

                        <ul>
                            {todos.map((todo, i) => {
                                return (

                                    <form key={todo._id} action={`${todo._id}?_method=DELETE`} method='POST'>
                                        <li>{`${todo.todo} - ${todo.done ? 'Done' : 'Not Done'}`}
                                            <input type='submit' name='' value='DELETE' />
                                        </li>
                                    </form>

                                )
                            })}
                        </ul>
                }
                <hr />
                <form action='/' method='POST'>
                    <input type='text' name='todo' />
                    <input type='submit' name='' value='ADD TO DO' />
                </form>

            </Default>
        )
    }
}

module.exports = Index