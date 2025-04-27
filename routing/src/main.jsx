import { StrictMode } from 'react'
import  ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'

// const router = createBrowserRouter([
//   {
//     path :'/',
//     element : <App/>,
//     children :[
//       {
//         path :'home',
//         element :<Home/>
//       },
//       {
//         path :'about',
//         element :<About/>
//       },
//       {
//         path :'contact',
//         element :<Contact/>
//       },
//       {
//         path :'user',
//         element :<User/>
//       },
//     ]
//   }
// ])

const router  = createBrowserRouter(
  createRoutesFromElements(
  <Route path ={'/'} element = {<App/>}>
    <Route path={'home'} element = {<Home/>}/>
    <Route path={'about'} element = {<About/>}/>
    <Route path={'contact'} element = {<Contact/>}/>
    <Route path={'user'} element = {<User/>}/>

  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
