import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './COMPONENTS/Header.tsx'
import Content1 from './COMPONENTS/Content1.tsx'
import Content2 from './COMPONENTS/Content2.tsx'
import Content3 from './COMPONENTS/Content3.tsx'
import Content4 from './COMPONENTS/Content4.tsx'
import Footer from './COMPONENTS/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Content1/>
    <Content2/>
    <Content3/>
    <Content4/>
    <Footer/>
  </React.StrictMode>,
)
