import './Navbar.scss';
const Navbar = () => {
   return (
      <div className='navbar'>
         <div className='navbar-container'>
            <div className='navbar-container__links'>
               <div className='navbar-container__links-item'>HOME</div>
               <div className='navbar-container__links-item'>ABOUT</div>
               <div className='navbar-container__links-item'>NEWS</div>
               <div className='navbar-container__links-item'>PORTFOLIO</div>
               <div className='navbar-container__links-item'>BLOG</div>
            </div>
            <div className='navbar-container__search-bar'>
               <div className='navbar-container__search-bar__title'>
                  <p>SEARCH</p>
               </div>
               <div className='navbar-container__search-bar__icon'>
                  {/* icon */}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Navbar
