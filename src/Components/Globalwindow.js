import styled, { createGlobalStyle } from "styled-components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Fon2 from "../assets/img/Fon3.jpg";
import { setDate  } from "../userReducer/slisces";
import { AddInput } from "./AddInput";
// import TodoItem from "./TodoItem";
const GlobalWindow = () => {
  const dispatch = useDispatch();
  const setIsDate = useSelector((state) => state.userTrello.date);


  function clickTodo() {
    dispatch(setDate());
  }

  return (
    <div>
      <Nav>
        <ImageMenu src="https://img.icons8.com/ios-glyphs/344/circled-menu.png" />
        <ImageLogo />
        <H3>Trello</H3>
        <DivContainer>
          <Selected>
            <Options>Рабочие пространства</Options>
          </Selected>
          <Selected>
            <Options>Недавные</Options>
          </Selected>
          <Selected>
            <Options>В избранном</Options>
          </Selected>
          <Selected>
            <Options>Шаблоны</Options>
          </Selected>
          <Button>Создать</Button>
          <Search type="search" placeholder="🔎  Поиск"></Search>
          <ButtonNo>ℹ️</ButtonNo>
          <ButtonKolokolchik>🔕</ButtonKolokolchik>
          <ButtonName>TG</ButtonName>
        </DivContainer>
        <FonGlobal />
      </Nav>

      <DivInput>
        {(setIsDate && <AddInput />  ) || (<ButInput onClick={clickTodo}> ➕ Добавить список</ButInput>
        )}
      </DivInput>
    </div>
  );
};

export default GlobalWindow;

const FonGlobal = createGlobalStyle`
body{
  background-image: url(${Fon2});
  background-repeat: no-repeat;
  background-size: cover;
}
`;
export const ButInput = styled.button`
  width: 268px;
  height: 35px;
  text-align: left;
  opacity: 0.7;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const DivInput = styled.div`
  margin-top: 10px;
  margin-left: 7px;
  width: 330px;
  &:focus {
    background-color: white;
  }
`;

const Nav = styled.header`
  height: 47px;
  background-color: #0fdbf0;
  padding-top: 10px;
  display: flex;
  opacity: 0.9;
`;
const DivContainer = styled.div``;
const H3 = styled.h3`
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-bottom: 5px;
  height: 0px;
`;

const ImageMenu = styled.img`
  background-repeat: no-repeat;
  display: flex;
  height: 30px;
  width: 30px;
  color: black;
`;
const ImageLogo = styled.img.attrs({
  src: `${"https://img.icons8.com/color/2x/trello.png"}`,
})`
  width: 30px;
  height: 30px;
  border: none;
`;
const Selected = styled.select`
  background-color: #0fdbf0;
  height: 30px;
  border: none;
  color: white;
  margin-left: 25px;
  &:hover {
    color: #808080;
    border-radius: 7px;
    background-color: #fff8dc;
    opacity: 0.5;
  }
`;
const Options = styled.option`
  border: none;
`;
const Button = styled.button`
  width: 80px;
  height: 30px;
  color: #4169e1;
  border-radius: 6px;
  border: none;
  background-color: #fff8dc;
  opacity: 0.9;
  margin-left: 25px;
  &:hover {
    color: #778899;
    border-radius: 7px;
    background-color: #fff8dc;
    opacity: 0.6;
  }
`;
const Search = styled.input`
  width: 200px;
  height: 30px;
  color: #4169e1;
  border-radius: 6px;
  border: none;
  background-color: #fff8dc;
  opacity: 0.7;
  margin-left: 450px;
  &:hover {
    color: #778899;
    border-radius: 7px;
    background-color: #fff8dc;
    border: 1px solid white;
    opacity: 0.5;
  }
  &:focus {
    width: 480px;
    height: 30px;
    margin-left: 60px;
  }
`;
const ButtonNo = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 15px;
  opacity: 0.5;
  margin-left: 12px;
`;
const ButtonKolokolchik = styled.button`
  width: 32px;
  height: 30px;
  opacity: 0.7;
  border-radius: 15px;
  margin-left: 12px;
  text-align: center;
`;
const ButtonName = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 15px;
  color: black;
  background-color: blue;
  opacity: 0.8;
  margin-left: 12px;
`;
