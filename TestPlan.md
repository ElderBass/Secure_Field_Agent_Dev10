
# Module 10 Assessment Requirements Checklist and Test Plan

## Requirements Checklist

* [x] Features (each feature complete, works without errors)
  * [x] Home
  * [x] Login
  * [x] Register
  * [x] Agents
  * [x] Add Agent
  * [x] Edit Agent
  * [x] Delete Agent
  * [x] Not Found (displays for all unknown routes)
* [x] Security
  * [x] Login State (the current logged in user's username displays somewhere on the page along with a "Logout" button)
  * [x] Logout (app provides a way for the current user to logout)
  * [X] Protected Routes (Agents, Add Agent, Edit Agent, and Delete Agent [if implemented] require a logged in user)
* [ ] Validation Errors (API validation errors display in the React UI)
* [x] React Router
  * [x] Client-Side Routes (all required routes implemented)
  * [x] `useHistory` Hook (used to programmatically redirect users)
  * [x] `useParams` Hook (used to access parameters, paths, and other data)
* [x] React Context (used to share global state and helper functions to components throughout the app)
* [x] Secured Field Agent Service (provided back-end service used for all user/agent operations)
* [x] Fetch API (used for all async HTTP requests to the back-end data service)
* [x] JavaScript (valid, well-organized, clean and consistent formatting)
* [x] JSX (valid, well-organized, clean and consistent formatting)
* [x] HTML/CSS (migrated from the previous assessment or used a CSS framework)

## Test Plan

* [x] Home
  * [x] Displays when browsing to `/`
  * [x] Available to all users (anonymous and authenticated)
* [x] Login
  * [x] Displays when browsing to `/login`
  * [x] Includes "Username" and "Password" fields
  * [x] Login fails for bad username/password combination
  * [x] Generic "login failed" message displayed in the UI on failed login attempt
  * [x] Login succeeds for good username/password combination
  * [x] User is redirected to the "Home" page after a successful login
* [x] Register
  * [x] Displays when browsing to `/register`
  * [x] Includes "Username", "Password", and "Confirmation Password" fields
  * [x] API validation errors are displayed in the UI when submitting bad data
  * [x] User account is created when submitting good data
  * [x] User is automatically logged in and redirect to the "Home" page or is redirect to the "Login" page after successfully registering
* [x] Security
  * [x] Username and "Logout" button is displayed on every page after a successful login
  * [x] Clicking the "Logout" button logs out the current user
  * [x] User is redirected to the "Login" page when attempting to browse to any of the agent related routes without being logged in
* [x] Agents
  * [x] Displays when browsing to `/agents`
  * [x] Displays a list of the agents with basic information from the backend service
  * [x] Includes a button/link to browse to the "Add Agent" page
  * [x] For each agent, includes buttons/links to browse to the "Edit Agent" and "Delete Agent" pages for the associated agent
* [x] Add Agent
  * [x] Displays when browsing to `/agents/add`
  * [x] Displays a form for the user to enter an agent's information
  * [x] Includes a button to submit the form
  * [x] Includes a button/link to cancel the add operation and return to the "Agents" page
  * [x] API validation errors are displayed in the UI when submitting bad data
  * [x] An agent's information can be entered into the form and when the form is submitted, the agent is added to the backend service
  * [x] The user is redirect to the "Agents" page after successfully creating an agent
* [x] Edit Agent
  * [x] Displays when browsing to `/agents/edit/1` (replace `1` with a valid agent ID)
  * [x] Displays a form for the user to edit an agent's information
  * [x] Includes a button to submit the form
  * [x] Includes a link to cancel the edit operation and return to the "Agents" page
  * [x] The form pre-populates with the agent's current information
  * [x] API validation errors are displayed in the UI when submitting bad data
  * [x] The agent's information can be changed in the form and when the form is submitted, the agent is updated in the backend service
  * [x] The user is redirect to the "Agents" page after successfully updating an agent
* [x] Delete Agent
  * [x] Displays when browsing to `/agents/delete/1` (replace `1` with a valid agent ID)
  * [x] Displays an agent's basic information
  * [x] Displays a delete confirmation message
  * [x] Includes a button to complete the delete operation
  * [x] Includes a link to cancel the delete operation and return to the "Agents" page
  * [x] Proceeding with the delete operation removes the agent from the backend service
  * [x] The user is redirect to the "Agents" page after successfully deleting an agent
* [x] Not Found
  * [x] Attempting to browse to an unknown route displays the "Not Found" page