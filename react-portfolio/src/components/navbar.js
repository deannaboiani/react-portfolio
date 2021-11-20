import '../App.css';

function Navbar() {
  return (
    <div className="navbar">
     <div className='navlinks'>
         <ul>
         <li><a href='/'>Home</a></li>
         <li><a href='/projects'>Projects</a></li>
         <li><a href='/contact'>Contact</a></li>
         <li><a href='/resume'>Resume</a></li>
         </ul>
     </div>
    </div>
  );
}

export default Navbar;