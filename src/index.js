import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import App from './App'
import ContentPage from './page/Content'
import FeaturePage from './page/Feature'
import reportWebVitals from './reportWebVitals'
import { StoreProvider } from './store'
import './index.css'

ReactDOM.render(
  <Router>
    <StoreProvider>
      <App />
      <Routes>
        <Route path="/" />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/feature" element={<FeaturePage />} />
      </Routes>
    </StoreProvider>
  </Router>,

  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()