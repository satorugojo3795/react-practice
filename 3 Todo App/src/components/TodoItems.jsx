import TodoItem from './TodoItem';

const TodoItems = ({todoItems}) => {
  return (
    <>
        <div className='item-container'>
            {todoItems.map(item => <TodoItem key={item.id} todoDate={item.date} todoName={item.name}></TodoItem>)}
        </div>
    </>
  )
}

export default TodoItems;
