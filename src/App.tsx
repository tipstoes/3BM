
import './App.css'
import './scripts/gallery.js'
import { openModal, closeModal, plusSlides, currentSlide } from './scripts/gallery.js';

function App() {

  return (
    <>
      <img className='logo' src='https://threebearsmotel.com/wp-content/uploads/2021/06/sign2.jpg' />
      <div>
        <h1>Three Bears Motel Lincoln, MT</h1>
        <p className='address'>MT HWY 200 203 Main St Lincoln, Montana 59639</p>
        <p className='phoneNumber'>406-362-4355</p>
      </div>

      <div className="section">
        <img className='fullpg' src='https://threebearsmotel.com/wp-content/uploads/2021/06/3bearsoutside.jpg' />
      </div>

      <div className='section'>
        <h2>Welcome to Three Bears Motel</h2>
        <h2>Your Cozy Retreat in Lincoln, Montana!</h2>
        <p className='info-text'>Escape to the tranquility and charm of Three Bears Motel, a hidden gem nestled in the heart of Lincoln, Montana. Immerse
          yourself in the genuine warmth and hospitality that sets us apart from the rest. Our family-run motel offers a
          delightful haven for relaxation, adventure, and unforgettable experiences.
        </p>

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
            <p>We have pet friendly rooms upon request. </p>
          </div>
          <div className='icon-tile'>
            <img src='https://threebearsmotel.com/wp-content/uploads/2022/03/tipi-480x480.png' />
            <h3>TIPI</h3>
            <p>Sleep under the stars in a spacious tipi. Learn more. </p>
          </div>
        </div>
      </div>



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


        <h3>Spread out and relax in a King or Queen Bed. We also have a room with 3 Extra Long Twin Beds for the Singles!</h3>
        <p>Step into our well-appointed rooms, designed with your comfort in mind. Sink into plush bedding and feel the stress melt away as you unwind in our cozy atmosphere. Stay connected with complimentary Wi-Fi, catch up on your favorite shows with our dish TV, and enjoy the convenience of in-room amenities such as a refrigerator, microwave, and single-serve coffee. We go above and beyond to ensure your stay feels like a home away from home.</p>
        {/* <ul className='room-features'>
          <li>Check-in is 3:00 pm and Check-out is 11:00 am. If you need an early Check-in or late Check-out please ask and we will do the best we can to accommodate your needs.</li>
          <li>Every room has a refrigerator, microwave, single serve coffee, and DISH TV.</li>
          <li>All rooms are NON-SMOKING.</li>
          <li>Pet friendly rooms are available. Please let us know at time of reservation that you are traveling with a pet.</li>
          <li>Quiet Time is between 10:00 pm and 8:00 am.</li>
        </ul> */}
      </div>

      <div className='section'>
        <h2>EXPERIENCE LINCOLN MONTANA</h2>
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
        <p className='info-text'>Go fishing along the Blackfoot River. Hike the Continental Divide Trail. Experience the hundreds of miles of snowmobile and ATV trails. Or simply pull up a chair outside and take in the fresh air!</p>

      </div>

      <div className='section'>
        {/* add events gallery */}
        <h2>INDEPENDENCE DAY PARADE AND FIREWORKS</h2>
        <h2>BLACKFOOT PATHWAYS: SCULPTURE IN THE WILD</h2>
        <h2>EXPERIENCE
          WILDLIFE</h2>
      </div>

      <div className='section'>
        <h2>Events</h2>
        <p>To find events druing your stay please visit the Lincoln Valley Chamber of Commerce<a href='https://lincolnmontana.com/events/'>Events Page</a>.</p>
      </div>

      <div className='footer'>
        <div>
          <h2>COME ON IN!</h2>
          <span>Office Hours</span><span>8 AM to 10:00 PM</span>
          <span>OPEN YEAR ROUND</span><span>Excluding the first two weeks of December. </span>
        </div>
        <div className='contact'>
          <h2>CONTACT</h2>
          <span>Phone</span><span>(406) 362-4355</span>
          <span>Email</span><span>threebearsmotel@gmail.com</span>
          <span>ADDRESS</span><span>MT HWY 200
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
          <p>© Copyright threebearsmotel.com Icons made by Freepik from www.flaticon.com</p>
        </div>
      </div>


    </>
  )
}

export default App
