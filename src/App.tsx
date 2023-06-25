
import './App.css'

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
        <p className='info-text'>Discover the warmth and charm of Three Bears Motel, a small family-run establishment nestled in the heart of Lincoln, Montana. As your perfect haven for relaxation and adventure, our motel offers a delightful escape from the busyness of everyday life. Immerse yourself in the tranquil beauty of our surroundings and experience the genuine hospitality that sets us apart.</p>

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
        <h3>Spread out and relax in a King or Queen Bed. We also have a room with 3 Extra Long Twin Beds for the Singles!</h3>
        <ul className='room-features'>
          <li>Check-in is 3:00 pm and Check-out is 11:00 am. If you need an early Check-in or late Check-out please ask and we will do the best we can to accommodate your needs.</li>
          <li>Every room has a refrigerator, microwave, single serve coffee, and DISH TV.</li>
          <li>All rooms are NON-SMOKING.</li>
          <li>Pet friendly rooms are available. Please let us know at time of reservation that you are traveling with a pet.</li>
          <li>Quiet Time is between 10:00 pm and 8:00 am.</li>
        </ul>
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
