import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from '../scripts/firebase.js'

import './logout.js'
import './signinForm.js'
import {loginCheck} from './loginCheck.js'

onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
    /*if (user) {
        loginCheck(user)
    } else {
        loginCheck(user)
    }*/
})