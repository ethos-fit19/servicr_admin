import React from 'react'
import "./ProfilePageComponent.css"
import profile from "../../assets/User.jpg"
import { Form } from 'antd'
import { Label } from 'bizcharts'

function ProfilePageComponent() {
  return (
      <div class="card-container">
         <div class="upper-container">
            <div class="image-container">
              <center><img src={profile} /></center> 
            </div>
         </div>
         <div class="lower-container">
            <div>
               <Form>
               <label for="username"> User Name</label>
               {/* <input type="text" id="fname" name="fname"></input><br/> */}
               <h2 class='status'>Anil Siridasa</h2>
               <label for="userid">User Id</label>
               <h2 class='status'>sp09345ef</h2>
               <label for="usertype"> User Type</label>
               <h2 class='status'>Service Provider</h2>
               <label for="useremail">User Email</label>
               <h2 class='status'>sp1@example.com</h2>
               <label for="userlocation">User Location</label>
               <h2 class='status'>Panadura</h2>
               </Form>
            </div>
         </div>
    </div>
  )
}

export default ProfilePageComponent