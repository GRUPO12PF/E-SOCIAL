import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "../src/assets/build/css/app.css"
import { Provider } from "react-redux"
import { store } from "../src/redux/store/index.js"
import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
