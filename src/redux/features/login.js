import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
import jwt from 'jwt-encode';

// secret key for create jwt token
const secretKey = 'TD$POLY1009$';

// pre declared authtoken for predefined username and password
const staticAuthToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxMDA5IiwicGFzc3dvcmQiOiJwd2QxMDA5In0.ewkiC33KzpeAd3eyAR4Ulq1XrfVz04SBGe0Phtju9Eg`;

export const loginSlice = createSlice({
    name: "login",
    initialState: { error: { errorStatus: false, errorMessage: "" } },
    reducers: {
        handleError: (state, action) => {
            state.error.errorStatus = true;
            state.error.errorMessage = action.payload;
        },
        clearError: (state) => {
            state.error.errorStatus = false;
            state.error.errorMessage = "";
        }
    },
});

export const loginUser = (data, navigate) => async (dispatch) => {
    try {
        //create authtoken with including user data
        const token = jwt(data, secretKey);
        // compair staticAuthToken with newly created token for authenticate user
        if (staticAuthToken === token) {
            // set token and login status in cookies
            Cookies.set('token', token, { secure: true, sameSite: 'strict' });
            Cookies.set('isUserLogged', 1, { secure: true, sameSite: 'strict' });
            // redirect to home route, if user is authorized
            navigate('/home')
        } else {
            // handle error for invalid login credentials
            dispatch(handleError("Invalid credentials"));
        }
    } catch (err) {
        dispatch(handleError(err.message));
    }
};

export const { handleError, clearError } = loginSlice.actions;
export default loginSlice.reducer;