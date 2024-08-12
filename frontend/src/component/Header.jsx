import '../css/Header.css';

const Header = () => {
   return (
      <div className="Header">
         <div className="Header-logo">
            <h1>InStock</h1>
         </div>
         <div className="Header-actions">
            <a>Settings</a>
            |
            <a>About</a>
         </div>
      </div>
   );
};

export default Header;
