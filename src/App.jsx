import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Books from './components/Books/Books'


function App() {


  return (
    <>
      <Header></Header>
      <main className='md:flex'>
        <Blogs></Blogs>
        <Books></Books>
        
      </main>

    </>
  )
}

export default App
