import styled from "styled-components"
// import TrelloLog from '../img/TrelloLog.png'
import TrelloLog from '../assets/img/TrelloLog.png'
import Global from '../assets/img/Global.jpg'
import { createGlobalStyle } from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { setEmail, setIsLoading, setPassword , setGlobalWindow , setIsSecond } from "../userReducer/userSlice"
import { Loading } from "./isLoading"

const Form = () =>{

  const dispatch = useDispatch()
  const validEmail = useSelector((state) => state.user.validEmail)
  const validPassword = useSelector((state) => state.user.validPassword)
  const isLoading = useSelector((state) => state.user.isLoading)
  
  const formHandler = (e) => {
    e.preventDefault()
    dispatch(setIsLoading())
    setTimeout(() => {
      dispatch(setIsSecond())
      dispatch(setIsLoading())
      dispatch(setGlobalWindow())    
    } , 2000)
  }
return (
  <form onSubmit={formHandler}>
  <DivNav>
  <H1>Trello</H1>
  <ImageLogo/>
  </DivNav>
  <DivContainer>
    <H3>Вход в Trello</H3>
    {!validEmail && <p style={{color : "red"}} >такого пользователя не существует</p>}
  <InputEmail onChange={(e) => {dispatch(setEmail(e.target.value)) }} type="text" placeholder='Укажите фдрес электронный почты' />
  {!validPassword && <p style={{color : "red"}} >Неверный пароль</p>}
  <InputPassword onChange={(e) => {dispatch(setPassword(e.target.value))}} type="password" placeholder='Введите пароль'/>
  <Button disabled={!validEmail || !validPassword}>Войти</Button>
  {isLoading && <Loading/>}
  
  <Fon/>
    </DivContainer>
  </form>
)
}

export default Form

const Fon = createGlobalStyle`
body{
  background-image: url(${Global});
  background-repeat: no-repeat;
  background-size: cover;
  
}
`
const DivContainer = styled.div`
margin: auto;
align-items: center;
width: 320px;
height: 320px;
background-color: #FFFFFF;
border-radius: 3px;
padding: 25px 40px;
box-shadow: rgb(0 0 0 / 10%) 0 0 10px;

`
const DivNav = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row-reverse;
`

const H1 = styled.h1`
color: #213A6F;
font-size: 50px;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const ImageLogo = styled.img.attrs({
src : `${TrelloLog}`
})`
width: 60px;
height: 62px;
`
const H3 = styled.h3`
  margin: 10px 0px 25px;
  color: #5E6C84;
`

const Button = styled.button`
width: 320px;
height: 34px;
background-color: rgb(90, 192, 70);
border: none;
border-radius: 4px;
color: white;
margin-top: 16px;
font-family:'bold';
`
const InputEmail = styled.input`
width: 320px;
height: 44px;
font-size: 14px;
background-color: #FAFBFC;
border: 2px solid #DFE1E6;
border-radius: 3px;
margin:  0 0 19.2px;
box-sizing: border-box;
padding: 8px;
&:focus {
outline: none;
border-color: #4C9AFF;
color: #676767;
}
`
const InputPassword = styled.input`
width: 320px;
height: 44px;
font-size: 14px;
background-color: #FAFBFC;
border: 2px solid #DFE1E6;
border-radius: 3px;
margin:  0 0 19.2px;
box-sizing: border-box;
padding: 8px;
&:focus {
outline: none;
border-color: #4C9AFF;
color: #676767;
}
`

