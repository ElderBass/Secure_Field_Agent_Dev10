# Secure Field Agent

## Overview 

### High Level Requirements

* Use the Fetch API to send all CRUD operations to the back-end data service.
* Display all API validation errors in the React UI.
* Implement the required client-side routes.
* Display a "Not Found" message if a route doesn't match one of the defined routes.
* Create new React components as needed to support the required client-side routes.
* Implement user login and registration.
* Require a user to login to view the Agents CRUD UI.
* Display the logged in user's username in the header.
* Provide a way for the user to logout.
* Add unit tests for at least one React component.

### Plan Outline
* I'm just using my Module 9 code so I'll to refactor it, getting rid of some the state and stuff I already had
* I had previously broken up Module 9 into separate components so I am leg up on that
* I'll start with some easy things, like Login, Logout, and NotFound components
* Create an Errors component as well, but I'll have to figure out exactly how I'm going to implement that in my app
    * I'll probably just have a Route to it that the user will be directed to if any errors show up, with a back 'button' that routes them back to Home or something
* Next I'll download react-router-dom, import it into app, and create Routes for all the components
* NotFound component
* Login Component
    * Display user info up in header along with logout link when user logged in
* Logout Component
* SignUp component
* AuthContext component
* Provide AuthContext in app and initialize with useEffect
* Login/Logout functions in App
* Unit tests for Login probably since that's what the 

## Tasks

### React Router Dom
* Download react-router-dom, import it into App class
* Wrap components in Router tag
* Create routes for all components
* Concurrently, change all relevant buttons to Links to the various "pages"

    **Estimated Time:** 45 minutes

### Login, Logout components
* This will be pretty simple, just going to copy/paste some code from previous lessons from the week
    * I have "form" CSS from previous assessment that I will attach via some classNames so they look pretty
* I'll start with just the JSX and flesh out state/props later

   **Estimated Time:** 20 minutes

### NotFound component
* Again, pretty simple, just follow the lead of previous lessons/exercises

    **Estimated Time:** 10 minutes

### AuthContext
* Set up a context like from exercises
* Import context into App class
* Provide context to all child components by wrapping it around Router
* Write functions for login, logout, that set userState
* Have an auth object that has values for user, login, logout, and pass this in as value prop to Provider

    **Estimated Time:** 30 minutes

### Login functionality
* Go back into Login and pass in the AuthContext
* Have an API call to login a user, pass this into auth.login, then return user back to HomePage (or something, that might be tbd)
* Shouldn't need to do much for Logout, just change the user state in App by calling auth.logout

    **Estimated Time:** 40 minutes

### SignUp component

* Start with the JSX which should be a simple form, I'll follow previous exercise example and add my own styling which won't take long
* Import AuthContext
* Have an API call on submission of form that passes username and password (will be validated by API) to API and gets an ID back
    * Chain another call to this for authenticating the user, then redirect to HomePage
    * If an error occurs, setError state (again, this might be a global state I'll use and have a separate component render based on the state, but likely I'll just follow the lead from the week)

    **Estimated Time:** 45 minutes

### Test out SignUp, Login, and Logout
* Just make sure this stuff is working before I proceed further

    **Estimated Time:** 10 minutes

### NotFound Component
* Create new component, add in some JSX following my spy theme (I'll think of something cute to say)
* Import this into App and create a Route for it

    **Estimated Time:** 20 minutes

### HomePage Refactor
* My homepage from last assessment was basically view agents, which isn't going to fly this time around.
* I'm going to port over some code from module 8 to flesh out home and add some bigger links for logging in/signing up in there

    **Estimated Time:** 40 minutes