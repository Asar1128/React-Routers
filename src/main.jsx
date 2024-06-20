import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter , Route , createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'
import Aboutsecondary from './Components/About/AboutSecondary.jsx'



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App/> ,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/>,
//       children:[
//        {
//         path:"aboutsecondary",
//         element:<Aboutsecondary/>
//        },
//       ]
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     },
//     {
//       path:"user/:UserId",
//       element:<User/>
//     },  {
//       loader:githubInfoLoader,
//       path:"github",
//       element:<Github/>
//     }
//   ]
  
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />}>
       <Route path='aboutsec' element={<Aboutsecondary />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={router}/>


  </React.StrictMode>,
)
