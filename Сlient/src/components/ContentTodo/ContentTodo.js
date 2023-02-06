import { useEffect } from 'react';
import ItemUsers from './ItemUsers';
import ItemTasks from './ItemTasks';

const ContentTodo = ({ currentItem }) => {
  const changeContent = () => {
    if (currentItem === 'Users') {
      return <ItemUsers />;
    } else if (currentItem === 'Tasks') {
      return <ItemTasks />;
    } 
  };

  useEffect(() => { }, [currentItem]);

  return <div>{changeContent()}</div>;
};

export default ContentTodo;
