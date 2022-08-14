import './rightbar.css';
import {Users} from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">

        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText"><b>Rahul Kumar</b> and <b>3 other friends</b> have a birthday today</span>
        </div>

        <img className='rightbarAd' src="assets/ad.png" alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">

          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}

{/* 
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>John Carter</span>
          </li> */}
          
        </ul>
      </div>
    </div>
  )
}
