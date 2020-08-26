const React = require('react')

class Index extends React.Component {
    render() {
        const { thing1, thing2 } = this.props.todos
        return (
            <div>
                <h1>To Do List</h1>
                {/* {
                    todos.map((todo, index)=>{
                        (todo ? xyz : 'There are no todos!')
                    })
                } */}
            </div>
        )
    }
}

module.exports = Index