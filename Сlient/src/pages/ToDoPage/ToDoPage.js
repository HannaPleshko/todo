import ToDo from "../../components/ToDo/ToDo";
import { useState } from "react";
import ContentTodo from "../../components/ContentTodo/ContentTodo";

function ToDoPage() {
    const data = ['Users', 'Tasks'];
    const [currentItem, setCurrentItem] = useState('Users');

    return (
        <>
            <ToDo data={data} setCurrentItem={setCurrentItem} />
            <ContentTodo currentItem={currentItem} />
        </>
    )
}

export default ToDoPage