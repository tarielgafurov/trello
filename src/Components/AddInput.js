import styled from "styled-components";
import { useDispatch , useSelector } from "react-redux";
import { addTodo, setNewTodos } from "../userReducer/slisces";
import { v4 } from "uuid";
import { useState } from "react";
import { setDate  } from "../userReducer/slisces";
import NewTodo from "./NewTodo";

export const AddInput = () => {
  const dispatch = useDispatch();
  const setNewTodo = useSelector((state) => state.userTrello.newTodos)
  const [todoValue, setTodoValue] = useState("");

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      text: todoValue,
      completed: false,
    };
    dispatch(setNewTodos())
    dispatch(addTodo(todo));
    setTodoValue("");
  };

  const closeHandler = () => {
    dispatch(setDate());
    
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Div>
      <div>
      <Input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Ввести зоголовок из списка"
      ></Input>
      
      <AddTodo onClick={() => addTodoHandler()}>Добавить карточку</AddTodo> 
      {setNewTodo && <NewTodo/>}
      <ButtonDelete onClick={closeHandler}>❌</ButtonDelete>
      </div>
        <div>
      {/* {setNewTodo && <NewTodo/>} */}
      </div>
      </Div>
    </form>
  );
};

const Div = styled.div`
display: flex;
/* border: 2px solid red; */
`

export const Input = styled.input`
  width: 260px;
  height: 32px;
  border: 3px solid black;
  border-radius: 4px;
  &:focus {
    border: 3px solid blue;
    opacity: 0.9;
  }
`;
export const ButtonDelete = styled.button`
border: 2px solid black;
width: 35px;

`;
export const AddTodo = styled.button`
  width: 203px;
  height: 28px;
  background-color: #008cba;
  color: white;
  /* border: none; */
  border-radius: 4px;
  border: 2px solid white;
  /* margin-top: 5px; */
  margin-right: 29px;
`;
