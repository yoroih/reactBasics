import './App.css'
import Logo from './components/logo'
import ProfileList from './components/r1-jsx-com-props/ProfileList'


function App() {

  return (
    <div className='app-container'>
      <Logo />
      <div className='content-container'>
        <ProfileList />
      </div>
    </div> 
  )
}

export default App
