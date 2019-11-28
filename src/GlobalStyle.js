import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    background-color: rgb(30,30,30);
  }

  .btn {
    display: block;
    width: 175px;
    height: 40px;
    margin: 0 auto;
    background-color: rgb(50, 50, 99);
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    border: none;
  }

  .confirm {
    display: inline-block;
    width: 88px;
    height: 40px;
    background-color: rgb(50, 90, 60);
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    border: none;
  }

  .cancel {
    display: inline-block;
    width: 87px;
    height: 40px;
    background-color: rgb(90, 50, 60);
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    border: none;
  }

  .resetOptions {
    width: 175px;
    margin: 0 auto;
  }
`

export default GlobalStyle