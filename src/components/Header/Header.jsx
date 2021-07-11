import './Header.scss'
const Header = () => {
   return (
      <div className='header' >
         <div className='header-text-container'>
            <span className='header-text-container__title'>SITENAME</span>
            <span className='header-text-container__description'>my first web page</span>
         </div>
         <div className='header-login-container'>
            <div className='header-login-container__login-box'>
               <div className='header-login-container__icon-key' />
               <span className='header-login-container__login'>LOGIN</span>
            </div>
            <div className='header-login-container__button'>CONTACT ME</div>
         </div>
      </div>
   )
}

export default Header
