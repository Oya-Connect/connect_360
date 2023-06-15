import React from 'react'
import NavBar from './NavBar'


const AppLayout = ({children}) => {
  return (
    <div className='app'>
        <header className='app__header'>
            <NavBar/>
        </header>

        <footer className='app__footer'>

        </footer>
    </div>
  )
}

export default AppLayout