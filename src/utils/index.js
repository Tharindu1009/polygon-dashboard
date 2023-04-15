
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode';

// check login status by cookies
export const checkUserLoginStatus = () => {
    const loginStatus = Cookies.get("isUserLogged")
    if (loginStatus === "1") {
        return true
    } else {
        return false
    }
}

// get username from authtoken
export const getUserFromToken = () => {
    const token = Cookies.get("token")
    const decodedData = jwt_decode(token);
    return decodedData.username;
}