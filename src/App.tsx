
import './App.css'
import './scripts/gallery.js'
import { openModal, closeModal, plusSlides, currentSlide } from './scripts/gallery.js';

function App() {

  return (
    <>
      <img className='logo' src='https://threebearsmotel.com/wp-content/uploads/2021/06/sign2.jpg' />
      <div>
        <h3>Welcome to</h3>
        <h1>Three Bears Motel</h1>
        <h2>Lincoln, MT</h2>

{/*fix addy/more readable HOB*/}
        <p className='address'>MT HWY 200 
          203 Main St Lincoln
          Montana 59639</p>

{/*bigger phone number HOB*/}
        <p className='phoneNumber'>406-362-4355</p>
      </div>

      <div className="section">
        <img className='fullpg' src='https://threebearsmotel.com/wp-content/uploads/2021/06/3bearsoutside.jpg' />
      </div>

      <div className='section'>

        
{/*center, bring in sides HOB */}
        <h2>Your Cozy Retreat in Lincoln, Montana!</h2>
        <p className='info-text'>Escape to the tranquility and charm of Three Bears Motel, a hidden gem nestled in the heart of Lincoln, Montana. Immerse
          yourself in the genuine warmth and hospitality that sets us apart from the rest. Our family-run motel offers a
          delightful haven for relaxation, adventure, and unforgettable experiences.
        </p>

{/* alt text HOB

         <p Discover the serenity and allure of Three Bears Motel, an enchanting retreat tucked away in scenic 
          Lincoln, Montana. Indulge in the authentic hospitality and peaceful ambiance that distinguishes us from the 
          competition. As a locally-owned establishment, our motel provides an idyllic sanctuary for unwinding, 
          embarking on thrilling escapades, and creating cherished memories.
          </p>  */}

        
{/*new icons HOB*/}
      </div >
      <div className='section'>
        <div className='icons'>
          <div className='icon-tile'>
            <img src='https://threebearsmotel.com/wp-content/uploads/2021/06/wifi-signal-480x480.png' />
            <h3>WIFI</h3>
            <p>Free WiFi available for our guests.</p>
          </div>
          <div className='icon-tile'>
            <img src='https://threebearsmotel.com/wp-content/uploads/2021/06/dog-480x480.png' />
            <h3>PET FRIENDLY</h3>
            <p>Pet friendly rooms upon request. </p>
          </div>
          <div className='icon-tile'>
            <img src='https://threebearsmotel.com/wp-content/uploads/2022/03/tipi-480x480.png' />
            <h3>TIPI</h3>
{/*ADD LINK to learn more HOB */}
            <p>Sleep under the stars in a spacious tipi. Learn more. </p>
          </div>
        </div>
      </div>


{/*2x2 > 1x4 HOB*/}
      <div className='section'>
        <h2>Rooms</h2>
        {/* add room gallery */}


        <div className="row">
          <div className="column">
            <img src="https://threebearsmotel.com/wp-content/uploads/2021/06/room05-400x284.jpg" onClick={() => { openModal(); currentSlide(1); }} className="hover-shadow" />
          </div>
          <div className="column">
            <img src="https://threebearsmotel.com/wp-content/uploads/2021/06/room01-400x284.jpg" onClick={() => { openModal(); currentSlide(2); }} className="hover-shadow" />
          </div>
          <div className="column">
            <img src="https://threebearsmotel.com/wp-content/uploads/2021/06/room03-400x284.jpg" onClick={() => { openModal(); currentSlide(3); }} className="hover-shadow" />
          </div>
          <div className="column">
            <img src="https://threebearsmotel.com/wp-content/uploads/2021/06/room02-400x284.jpg" onClick={() => { openModal(); currentSlide(4); }} className="hover-shadow" />
          </div>
        </div>

        {/* The Modal/Lightbox */}
        <div id="myModal" className="modal">
          <span className="close cursor" onClick={() => closeModal()}>&times;</span>
          <div className="modal-content">

            <div className="mySlides">
              <div className="numbertext">1 / 4</div>
              <img src="https://threebearsmotel.com/wp-content/uploads/2021/06/room05-scaled.jpg" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
              <div className="numbertext">2 / 4</div>
              <img src="https://threebearsmotel.com/wp-content/uploads/2021/06/room01-scaled.jpg" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
              <div className="numbertext">3 / 4</div>
              <img src="https://threebearsmotel.com/wp-content/uploads/2021/06/room03-scaled.jpg" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
              <div className="numbertext">4 / 4</div>
              <img src="https://threebearsmotel.com/wp-content/uploads/2021/06/room02-scaled.jpg" style={{ width: '100%' }} />
            </div>

            {/* Next/previous controls */}
            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

            {/* Caption text */}
            <div className="caption-container">
              <p id="caption"></p>
            </div>

            {/* Thumbnail image controls */}
            <div className="column">
              <img className="demo" src="https://threebearsmotel.com/wp-content/uploads/2021/06/room05-400x284.jpg" onClick={() => currentSlide(1)} alt="" />
            </div>

            <div className="column">
              <img className="demo" src="https://threebearsmotel.com/wp-content/uploads/2021/06/room01-400x284.jpg" onClick={() => currentSlide(2)} alt="" />
            </div>

            <div className="column">
              <img className="demo" src="https://threebearsmotel.com/wp-content/uploads/2021/06/room03-400x284.jpg" onClick={() => currentSlide(3)} alt="" />
            </div>

            <div className="column">
              <img className="demo" src="https://threebearsmotel.com/wp-content/uploads/2021/06/room02-400x284.jpg" onClick={() => currentSlide(4)} alt="" />
            </div>
          </div>
        </div>


        <h3>Unforgettable Comfort and Convenience</h3>
        <p className='info-text'>Step into our well-appointed rooms, designed with your comfort in mind. Sink into plush bedding and 
          feel the stress melt away as you unwind in our cozy atmosphere. Stay connected with complimentary Wi-Fi, catch up on your 
          favorite shows with our dish TV, and enjoy the convenience of in-room amenities such as a refrigerator, microwave, 
          and single-serve coffee. We go above and beyond to ensure your stay feels like a home away from home.</p>

{
{/*   ATL TEXT HOB */}
          // <p className='info-text'> Experience ultimate comfort and relaxation in our thoughtfully-designed rooms at Three Bears Motel. Our plush bedding invites you to 
          // unwind, letting go of the day's worries in our serene atmosphere. Stay connected with our complimentary Wi-Fi and indulge in your 
          // preferred shows on our satellite TV. Enjoy the convenience of in-room amenities, including a refrigerator, microwave, and single-serve 
          // coffee maker, providing all the comforts of home during your stay. We prioritize your comfort to make your visit a truly memorable one. 
          // </p>}
        
{/*
           <ul className='room-features'>
          <li>Check-in is 3:00 pm and Check-out is 11:00 am. If you need an early Check-in or late Check-out please ask and we will do the best we can to accommodate your needs.</li>
          <li>Every room has a refrigerator, microwave, single serve coffee, and DISH TV.</li>
          <li>All rooms are NON-SMOKING.</li>
          <li>Pet friendly rooms are available. Please let us know at time of reservation that you are traveling with a pet.</li>
          <li>Quiet Time is between 10:00 pm and 8:00 am.</li>
        </ul> */}
        
      </div>

      <div className='section'>
        <h2>Gateway to Nature's Splendor</h2>
        <div className='icons'>
          <div className='icon-tile'>
            <img src='https://threebearsmotel.com/wp-content/uploads/2021/06/fishing-480x480.png' />
            <h3>FISHING</h3>
          </div>
          <div className='icon-tile'>
            <img src='https://threebearsmotel.com/wp-content/uploads/2021/06/backpack-480x480.png' />
            <h3>HIKING</h3>
          </div>
          <div className='icon-tile'>
            <img src='https://threebearsmotel.com/wp-content/uploads/2021/06/snowmobile-480x480.png' />
            <h3>SNOWMOBILING</h3>
          </div>
        </div>
        <p className='info-text'>Prepare to be captivated by the natural beauty that surrounds us. Lincoln, Montana is a gateway to an outdoor 
          paradise. Explore miles of hiking trails that wind through lush forests and reveal breathtaking vistas. Cast your line into the 
          crystal-clear waters of the Blackfoot River, known for its world-class fishing. Set up camp in tranquil campsites and fall asleep 
          under a blanket of stars. Let nature's splendor rejuvenate your spirit and create memories to last a lifetime.</p>

{/* ATL TEXT HOB */}
{/*           <p className='info-text'> Immerse yourself in the awe-inspiring natural wonders that await you in Lincoln, Montana. As a gateway 
          to an outdoor paradise, our location will leave you spellbound. Embark on exhilarating adventures along our extensive network 
          of scenic hiking trails, meandering through verdant forests and unveiling breathtaking panoramas. Experience world-class fishing 
          in the pristine, crystal-clear waters of the renowned Blackfoot River. Discover tranquility as you set up camp in peaceful 
          campsites and drift off to sleep under a mesmerizing canopy of stars. Let the splendor of nature revive your soul and forge 
          unforgettable memories to cherish forever. */}
          

      </div>

      <div className='section'>
        {/* add events gallery */}
        <h2>Embrace Local History and Culture</h2>
        <p className='info-text'>Uncover the rich tapestry of Lincoln's history and immerse yourself in its vibrant culture. Visit the Lincoln 
          Area Historical Society Museum, where fascinating exhibits bring the town's past to life. Discover the stories of the hardy pioneers 
          and the resilient community that shaped this remarkable place. Dive into the intriguing connections to historical figures like Ted 
          Kaczynski, adding a layer of depth to your understanding of this unique town.</p>

{/*ATL TEXT HOB
          <p className='info-text'>Unveil the captivating heritage and vibrant culture of Lincoln, Montana, as you delve into its storied past. 
          Explore the engaging exhibits at the Lincoln Area Historical Society Museum, where the town's history comes alive before your eyes. 
          Unearth the tales of the courageous pioneers and the resilient community that have left an indelible mark on this extraordinary 
          destination. Immerse yourself in the intriguing connections to historical figures, including Ted Kaczynski, adding a fascinating 
          dimension to your exploration of this distinctive town.</p>
          */}
        
      </div>

      <div className='section'>
{/*move events to bottom HOB  */}
        <h2>Events</h2>
        <p>To find events druing your stay please visit the Lincoln Valley Chamber of Commerce<a href='https://lincolnmontana.com/events/'>Events Page</a>.</p>
      </div>


      <div className='section'>
        {/* add events gallery */}
        <h2>A Haven for Art Enthusiasts</h2>
        <p className='info-text'>Indulge your artistic side and explore Lincoln's thriving arts scene. Engage with local artists and artisans at 
          art festivals and events, where their talent and creativity shine. Wander through galleries that showcase captivating works inspired by 
          the rugged beauty of Montana. Unleash your own creativity by participating in workshops and learning from skilled craftsmen. Lincoln is 
          a haven for art enthusiasts, where inspiration awaits at every turn.</p>

{/* ATL TEXT HOB
          <p className='info-text'>Nurture your artistic spirit and immerse yourself in the flourishing arts scene of Lincoln, Montana. Immerse 
          yourself in the vibrant atmosphere of art festivals and events, where local artists and artisans display their remarkable talent and 
          creativity. Stroll through galleries that exhibit captivating works inspired by the untamed allure of Montana's landscapes. Unleash 
          your own artistic prowess by engaging in workshops and learning from skilled craftsmen. Lincoln is an idyllic retreat for art enthusiasts, 
          where boundless inspiration awaits at every corner.</p> */
        }
        
      </div>

      <div className='section'>
        {/* add events gallery */}
        <h2>Local Flavors and Dining Delights</h2>
        <p className='info-text'>Savor the flavors of Lincoln and treat your taste buds to a culinary journey. From cozy cafes to charming restaurants, 
          our town offers a diverse range of dining options. Dive into hearty Montana fare, featuring locally sourced ingredients that reflect the 
          region's natural bounty. Don't miss the opportunity to indulge in the legendary huckleberry pie, made from the wild berries that grow 
          abundantly in our mountains. Discover a culinary paradise that will delight even the most discerning palate.</p>

{/*ALT TEXT HOB 
          <p className='info-text'>Treat your palate to a memorable culinary journey in Lincoln, Montana, where an enticing array of dining options 
          awaits. From charming cafes to inviting restaurants, our town offers a diverse selection of culinary experiences. Indulge in hearty Montana 
          cuisine infused with locally sourced ingredients, celebrating the region's natural abundance. Be sure to savor the renowned huckleberry pie, 
          a must-try dessert made from the wild berries that thrive in our mountainous surroundings. Discover a culinary paradise that will satisfy 
          even the most discerning palate, leaving you with unforgettable dining memories.</p> */}

        
      </div>

      <div className='section'>
        {/* add events gallery */}
        <h2>Experience Genuine Hospitality</h2>
        <p className='info-text'>At Three Bears Motel, hospitality is our passion. As a small family-run establishment, we pour our heart and soul 
          into ensuring your stay is exceptional. We welcome you with open arms, providing personalized recommendations for local attractions and 
          activities. From the moment you arrive, you'll feel like part of our extended family, and we'll go above and beyond to make your stay 
          unforgettable.</p>
      </div>

      <div className='section'>
        {/* add events gallery */}
        <h2>Plan Your Stay at Three Bears Motel</h2>
        <p className='info-text'>Escape to the serenity and charm of Three Bears Motel, your perfect retreat in the heart of Lincoln, Montana. 
          Begin your adventure today by booking your stay with us. Create cherished memories, connect with nature, and experience the genuine 
          warmth of our hospitality. We can't wait to welcome you to our cozy haven in the mountains.</p>
      </div>


      <div className='footer'>
        <div>
          <h2>COME ON IN!</h2>
          <span>Office Hours</span><span>8 AM to 10:00 PM </span>
          <span>OPEN YEAR ROUND</span><span>Excluding the first two weeks of December. </span>
        </div>
        <div className='contact'>
          <h2>CONTACT</h2>
          <span>Phone </span><span>(406) 362-4355 </span>
          <span>Email </span><span>threebearsmotel@gmail.com </span>
          <span>ADDRESS </span><span>MT HWY 200
            203 Main St.
            Lincoln, Montana  59639</span>
        </div>
        <div className='section'>
          <h2>EXPLORE LINCOLN</h2>
          <img src='https://threebearsmotel.com/wp-content/uploads/2021/06/LincolnLogo-300x183.png' />
          {/* add links */}
          <p>Lincoln Valley Chamber of Commerce

            Lincoln Montana Upcoming Events

            Blackfoot Pathways Sculpture in the Wild

            Continental Divide Trail

            Hi-Country Snack Foods</p>
        </div>
        <div>
          <p>© Copyright threebearsmotel.com</p>
        </div>
      </div>


    </>
  )
}

export default App
