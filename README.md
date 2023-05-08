# PlayGreen - Sports App
## PlayGreen is a sports app that allows users to view and like/dislike random sports photos. This app was developed using ReactJS and TypeScript and consumes an API that provides random sports photos.

# API
This app consumes data from TheSportsDB API to provide random leagues, then the unsplash API was used to find the images of each sports.
* (It was done like this because the API call to see the images in TheSportsDB API was paid, so i used a diferent aproach to the proyect and api calls, they were still made with axios and there is still an API call made from TheSportsDB)

# Design
The design of the app was based on this Figma mockup and is optimized for iPhone XR.

# Requirements
## To ensure the quality of the app, it was developed according to the following requirements:

* API requests were made using the axios library. ✔️
* Styles were managed with styled-components. ✔️
* Developed using TypeScript. ✔️
* Additionally, the app has login functionality with Firebase and Firestore integration:

* Authentication was implemented using google & email-password methods from Firebase. ✔️
* A Firestore collection was created to store the user's likes and dislikes. This information is shown in the user's history section. ✔️
# Additional Points
## To further improve the app, additional features were implemented:

* Dark mode. ✔️
* Animations. ➖
* Responsive design. ✔️
* Clean code and good file architecture. ✔️
* Configuration was added to make the app a Progressive Web App (PWA). ❌
* The repository was well-maintained with proper branching and committing. ✔️
* A sign-up process was implemented. ✔️
* Deployment ✔️
## The app has been deployed and is available at (https://playgreen-web.web.app). 
* ( you should inspect the page and run it in responsive mode using the iPhone XR layout. This will ensure that the application is displayed in the correct format and that all features and functionalities are easily accessible.)
## You can use the folowing Log-In info:
- adminplaygreen@gmail.com
- admin123
- Or if you want you can also create a new account or Sign-In with google

# Instructions

## To run the app locally, follow these instructions:
* Clone the repository.
``git clone https://github.com/sebastianvelezg/playgreen-web.git``
* Install the necessary dependencies using npm install.
``npm install``
* Run the app using npm start.
``npm start``

# Contact
If you have any questions or comments about the project, feel free to contact me at (sebastianvelezg42@gmail.com).
