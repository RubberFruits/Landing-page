import './Content.scss'
const Content = () => {
   return (
      <div className='content'>
         <div className='content__title'>
            What 10 Things Should You Do Every Day<br /> To Improve Your Life?
         </div>
         <div className='content__text'>
            Learning another language can keep your mind sharp. Music lessons increase intelligence. Challenging your beliefs strengthens your mind.  Increasing<br /> willpower just takes a little effort each day and it’s more responsible for your<br /> success than IQ.
         </div>
         <div className='content__features'>
            <div className='content__features-title'>
               Key features
            </div>
            <div className='content__features-list-container'>
               <ul className='content__features-list'>
                  <li className='content__features-list__item'>It will make you happier.</li>
                  <li className='content__features-list__item'>It will improve your relationships.</li>
                  <li className='content__features-list__item'>It can make you a better person.</li>
                  <li className='content__features-list__item'>It can make life better for everyone around you.</li>
               </ul>
            </div>
         </div>
         <div className='content__news'>
            <p className='content__news-title'>
               RECENT NEWS
            </p>
            <div className='content__news-container'>
               <div className='content__news-item'>
                  <div
                     className='content__news-item-img-1'
                  />
                  <div className='content__news-item-text'>Being in nature reduces stress, makes you more creative</div>
               </div>
               <div className='content__news-item'>
                  <div className='content__news-item-img-2' />
                  <div className='content__news-item-text'>Usability Testing for Mobile Is Easy</div>
               </div>
               <div className='content__news-item'>
                  <div className='content__news-item-img-3' />
                  <div className='content__news-item-text'>Infinite Scrolling Is Not for Every Website</div>
               </div>
               <div className='content__news-item'>
                  <div className='content__news-item-img-4' />
                  <div className='content__news-item-text'>Ecommerce UX: 3 Design Trends to Follow and 3 to Avoid</div>
               </div>
               <div className='content__news-item'>
                  <div className='content__news-item-img-5' />
                  <div className='content__news-item-text'>University Websites: Top 10 Design Guidelines</div>
               </div>
               <div className='content__news-item'>
                  <div className='content__news-item-img-6' />
                  <div className='content__news-item-text'>University Websites: Top 10 Design Guidelines</div>
               </div>
            </div>
         </div>
         <div className='footer'>
            <div className='footer__icon' />
            <div className='footer__text' >top</div>
         </div>
      </div>
   )
}

export default Content
