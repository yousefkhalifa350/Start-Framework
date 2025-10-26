import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './Componets/About/About'
import Portfolio from './Componets/Portfolio/Portfolio'
import Contact from './Componets/Contact/Contact'
import Layout from './Componets/Layout/Layout'
import Notfound from './Componets/Notfound/Notfound'
import StartFramework from './Componets/StartFramework/StartFramework'


let y = createBrowserRouter([

{

path:'/' , element: <Layout/> , children:[
{index:true , element: <StartFramework/>},
{path:'About', element:<About/>},
{path:'portfolio', element:<Portfolio/>},
{path:'contact' , element: <Contact/>},
{path:'*' , element: <Notfound/>},

]

}

])

function App() {


  return (
    <>
<RouterProvider router={y}> </RouterProvider>
    </>
  )
}

export default App
