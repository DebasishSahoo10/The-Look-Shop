<h1 align="center">The Look Shop</h1>


## 🙂 About
This Project has been coded to showcase React Skills (Frontend in general) under the Fourth Asignment of NeoGcamp. So for the front end is on React and to mock the backend (mostly API calls) [MockBee](https://mockbee.netlify.app/) has been used. And to put User Authorisation in place JWT Tokens has been used. The Template that has been used is `Create-React-App` as MockBee natively supports that only. Yes, as of now that template is not reccommended anymore, `Vite`'s React template is more optimised, but functionality wise the project would have been no-different.

## 🏁 Getting Started
To get your own copy of the Project (to run it on your local server). First Fork this repo. then open the repo in your choice of IDE. then follow below steps
1. create a .env file in the root folder and put this in that file
    ```
     REACT_APP_JWT_SECRET = "ANY_STRING_WILL_GO_HERE_IN_THIS_FORMAT"
    ```
2. Install NPM Modules
    ```
    npm install
    ```
3. And finally to run this on your local host
    ```
    npm start
    ```
and there you go ✳️
## 🚀 Features and Utilities
- **SPA** (with the help of React Router this app can do everything without a reload after the first render)
- **Authorisation and Private Routes** (some routes in the app are private and can't be accessed without a login. and as of authorisation goes, we can signup and then login or can just use Test Credential button)
- **React Context** (to make a single state accessible to every route/component in the app, things like AUTH, Product Database and Filters put in as Contexts)
- **Razorpay Integration** (When you click on Checkout button Razorpay will pop up. Currently it works in Test Mode of Razorpay API.)
- **Debouncing in Search** (Search will only work if time between two key presses is 500ms. It is used to limit API calls to reduce stress on backend)
- **MockBee Backend** (this gives us place to put database and APIs to get it or manage it)
- **Responsive** (the whole app is responsive to every type of screen widths from desktop screens to foldable)
- **React Toastify** (Visual UI Pieces like action buttons gives you a toast (visual confirmation) when you click on them)

## ✍️ Design and Credits
The Design Style used here is called NEO BRUTALISM. And the inspiration came from multiple websites but mainly from Gumroad. Since the day I started my UI journey, I have always wanted to re-create this design style and what a better time than my first major project. For the character illustrations : when I made the first sketch of UI, I knew that I will need illustrations that will be matching with the design and since I have that freedom here, I searched a lot and then landed on a deisgn set from FreePik made by the artist named PIKI SUPERSTAR. All the credit link are below : 
- [PIKI SUPERSTAR](https://www.freepik.com/author/pikisuperstar)
- [Gumroad](https://gumroad.com/)
- [First Draft On Figma](https://www.figma.com/community/file/1244213181283177424/The-Look-Shop---NEUBRUTALISM)

## 🎈 Future Versions
I have not decided if I will be adding any new things to the app or not, as I already completed all the requirements for the assignement, but Hey who doesn't want his app to be perfect, so I will try my best, below are some of the possible future additions. And I welcome everyone to send the Pull Requests on anything, you feel, should be improved:
- Adding Firebase : as both the data and auth is not persistent here. so once you refresh the page, it is gone. so we need an actual cloud here.
- Address Management : <strike>since the mock backend doesn't support address management, I haven't found a more right way to do it.</strike>. I have added it recently but implementation is not accurate as backend doesn't have this feature.
- Razorpay Integration : <strike>more than half of the industry uses it, so able to deal with its APIs is definately a skill.</strike>
- Performance Imporvements : as of now the CLS and LCP scores of the app is not that good. so will fix it soon. I have also added React.Lazy and Suspense to fetch the Route Components only when it is rendered, but somehow they are not improving the performance as much I wanted. so yeah that is another room for improvement.
## 🤜🤛 Connect with me
Thank you for checking this project out. If you have any queries regarding the project or have some suggestions, feel free to connect with me on my social links given below :

[![Twitter Link](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/dddddddeeeeevvv)
[![Linkedin Link](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/debasishsahoo1998)