import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from 'react-jss'
import theme from './resources/theme'
// import SidebarComponent from './layouts/Sidebar'
// import { SidebarContext } from './context/SidebarContext'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './routes/Routes'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <Main />
        </Router>
    </ThemeProvider>,
    document.getElementById('root'),
)

// {
//     /* <React.StrictMode>
//     <App />
//   </React.StrictMode> */
// }
