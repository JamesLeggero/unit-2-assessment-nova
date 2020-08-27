const React = require('react')

class Index extends React.Component {
    render() {
        const { todos } = this.props
        return (
            <body>
                <h1>To Do List</h1>
                {/* {todos.map((todo, i)=>{
                    (todo === 5) ? console.log('hi') : 'No tasks'
                })} */}
                
                
                {todos.length === 0 ? <h3>There are no To Dos yet!</h3> : <hr/>}
            </body>
        )
    }
}

module.exports = Index