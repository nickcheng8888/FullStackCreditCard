<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/nickcheng8888/Tesla-Replica">

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

User creates new customer by entering email address & password. After authentication, user can create new cards which are validated using the react-credit-cards library.
After a card has been validated, it will be encrypted using their password and stored onto firebase through the backend. Users can access their cards through the 'Digital Wallet' button, and access all their cards stored.

[Link to Screenshots](https://github.com/nickcheng8888/FullStackCreditCard/tree/main/client/assets).

### Built With

* []() React.JS
* []() Javascript
* []() CSS
* []() Firebase



<!-- GETTING STARTED -->
## Tasks Complete

* Displays an active credit card.
* Real-time card number input with a max input limit of 16 digits.
* Card Number, Card Name, Expiration Date and CVV as real-time inputs.
* Storing the card details in a backend system using firebase.
* You also have to account for error handling, and.
* Your card MUST be able to recognise 'ALL' credit card brands. 
* User Authentication
* Card details pushed to backend with AES encryption
* No card details stored on Firebase
    
## Tasks To-do
* Mobile
* Deploy the website
* Store the backend on AWS
* Display only the current user's saved credit cards in the credit card storing functionality


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nickcheng8888/FullStackCreditCard.git
   ```
2. Add API Keys for Firebase in the files client/.env and server/.env
2. Install NPM packages
   ```sh
   cd client
   ```
   ```sh
   npm install --global yarn
   ```
   ```sh
   cd server
   ```
   ```sh
   npm install
   ```
3. Launch the server
  ```sh
   cd server
   ```
   ```sh
   npm start
   ```
4. Launch the client
  ```sh
   cd client
   ```
   ```sh
   npm start
   ```
<!-- CONTACT -->
## Contact

Nicholas Cheng - nicholascheng25@gmail.com

Project Link: [https://github.com/nickcheng8888/FullStackCreditCard]




