import {Link} from 'react-router-dom'
const App = () => {
  return (
    <>
      <ul>
        <li><Link className="link" to="/home">Home</Link></li>
        <li><Link className="link" to="/about">About</Link></li>
        <li><Link className="link" to="/profile">Profile</Link></li>
      </ul>
    </>
  )

}

export default App