import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
		padding: 20px 40px;
    font-family: 'Open Sans', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

	a {
		color: #090809;
		text-decoration: none;
	}

  html, body {
    height: 100%;
  }

	.errorMessage {
		margin-bottom: 16px;
		display: inline-block;
		font-size: 16px;
		color: #eb4034;
	}
`
