import ItemToDo from './ItemToDo';

const ToDo = ({ data, setCurrentItem }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <ItemToDo key={index} item={item} setCurrentItem={setCurrentItem} {...item} />
      ))}
    </ul>
  );
};

export default ToDo;
