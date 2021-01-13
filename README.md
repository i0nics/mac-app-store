<h1>Mac App Store</h1>
<img src='Screenshots/home.png'>
<p>The Mac App Store website aims to be a hub for users to discover absolutely any app available on the actual Mac App Store and at the same time, serve as a place where they can find songs via a dedicated Apple Music Section. Users can also download their purchased apps (demonstration purposes only) from a dedicated purchased section. The Mac App Store’s minimalistic design coupled with its features such featured, top charts, categories, search, and Apple Music will help users find their next app or song in no time.
</p>
<h1>Implementation Specifications</h1>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Javascript</li>
  <li>jQuery</li>
  <li>PHP</li>
  <li>Local Storage</li>
  <li>iTunes API</li>
</ul>
<h1>Logic Design</h1>
<h2>User Authentication (Login/Registration)</h2>
<img src='Screenshots/login.png'>
<ul>
  <li>PHP is used to store credentials in session cookies after user registers for a new account.</li>
  <li>Bycrypt is used to hash and store the password submitted by the user during registration. When the user wishes to sign in, the stored hash is compared with the new hash to authorize the user.</li>
  <li>Registration page requires a valid looking email address and a strong password in order for the user to successfully create a new account.</li>
  <li>The user is not allowed to go back to the Sign in/Registration Page until the user is logged out. The user is also not allowed to go to any other page except the login/registration page unless the user is signed in.</li>
</ul>
<h2>Dynamic Webpages</h2>
<img src='Screenshots/app.png'>
<ul>
  <li><b>Login/Registration:</b> If the user clicks on the “Create One!” link to register a new account, a new registration window will pop up and replace the existing login body. Closing the registration window will make it disappear and show the login window again.
  </li>
  <li>
   <b>Search:</b> Searching for an app on the home page will clear existing content in the body and show the app (if found) with a link to the app’s page. Closing the search window will bring the user back to the previous screen.
  </li>
  <li>
    <b>App Page:</b> Upon clicking on any app on the website, the user will be directed to a dynamic webpage showing the description, screenshots, reviews, etc. of that particular app only.
  </li>
  <li>
     <b>Music Page:</b> This page dynamically changes when the user searches for music. This page also dynamically changes back and forth between itself and the search page according to the user’s actions.
  </li>
  <li><b>Purchases Page:</b> This page dynamically changes back and forth between itself and the search page according to the user’s actions.</li>
</ul>
<h2>API/AJAX</h2>
<img src='Screenshots/search.png'>
<p>The iTunes API is accessed using a AJAX method to retrieve data about all apps and songs across the website which is then inserted into HTML code via jQuery.
</p>
<h2>Scrolling</h2>
<img src='Screenshots/home-scroll.png'>
<p>Clicking the left/right buttons in the Home Page will scroll the content left and right. The buttons will also seamlessly fade or reappear according to the content’s position which can be changed by either clicking the left/right button or even initiating a manual horizontal scroll.</p>
<h2>Local Storage</h2>
<img src='Screenshots/purchased.png'>
<p>Information about the app that the user wishes to visit or the apps that the user has purchased is stored in local storage and is used by various pages to retrieve that specific app's data.</p>
