import '../styles/Logo.css'
import reactLogo from '../assets/react.svg'

const Logo = () => (
  <div className="logo-container">
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
    <h1>React</h1>
  </div>
);

export default Logo;
