import React from "react"
import { getUser } from "../services/auth"

const Profile = () => (
    <div class="profile-window">
    <h1>Your profile</h1>
    <ul>
    <li>Name: {getUser().name}</li>
    <li>E-mail: {getUser().email}</li>
    </ul>
    </div>
)

export default Profile
