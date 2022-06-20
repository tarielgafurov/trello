import styled from "styled-components";
import { useDispatch } from "react-redux/es/exports";
import { removeTodo } from "../userReducer/slisces";

const TodoItem = ({ todo }) => {

  const dispatch = useDispatch()

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id))
  }


  return (
    <div>
    <DivContainer>
      <TodoValue>{todo.text}</TodoValue>
      <span onClick={() => removeTodoHandler(todo.id)} >📑</span>
    </DivContainer>
    </div>
  );
};
export default TodoItem;



const DivContainer = styled.div`
  margin-left: 38px;
  padding-top: 5px;
  border-radius: 1px;
  width: 261px;
  border: 2px solid #a9a9a9;
  background-color: #E6E6FA;
  display: flex;
  justify-content: center;
`;

const TodoValue = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  width: 240px;
  height: 30px;
  border-radius: 4px;
  margin-top: 7px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
`;
