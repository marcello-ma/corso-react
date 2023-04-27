import React, {useState} from "react";

const todos: any[] = [
    {
        id: 1,
        title: "Install Node",
        done: true
    },
    {
        id: 2,
        title: "Create React App",
        done: true
    },
    {
        id: 3,
        title: "Create Todo List Component",
        done: true
    }
]

function List() {

    const [list, setList] = useState(todos);
    const [filter, setFilter] = useState('')

    const handleChange = (event: any) => {
        setFilter(event.target.value);

        setList(
            () => {
                return todos.filter(
                    (todo) => {
                        return todo.title.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1;
                    }
                )
            }
        );
    }

    return (
        <div>
            <h1>List</h1>

            Filtro: <input type="text" value={filter} onChange={handleChange}/>

            <ul>
                {list.map((todo) => {return <li>{todo.title}</li>})}
            </ul>
        </div>
    );
}

export default List;