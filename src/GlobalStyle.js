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
    font-size: 16px;
    border: none;
  }

  .btn.reset-btn{
    background-color: rgb(20, 50, 73)
  }

  .btn.confirm {
    display: inline-block;
    width: 88px;
    background-color: rgb(50, 90, 60);
  }

  .btn.cancel {
    display: inline-block;
    width: 87px;
    background-color: rgb(90, 50, 60);
  }

  .resetOptions {
    width: 175px;
    margin: 0 auto;
  }
  .btn:focus {
    outline: none;
  }
  .btn::-moz-focus-inner {
    border: 0;
  }



  @media screen and (min-width: 600px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 300px);
      grid-template-rows: 175px repeat(4, 40px) 225px;
      grid-auto-flow: row dense;
      justify-content: center;
      align-content: center;
      min-height: 100vh;
    }
  }
`

export default GlobalStyle