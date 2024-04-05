# PWA Shopping App with Firebase Realtime Database

This is a simple Progressive Web App (PWA) for managing your shopping list. It utilizes Firebase Realtime Database to store the list items in real-time.

## Features

- Add items to your shopping list
- Remove items from your shopping list
- Real-time synchronization across devices
- Responsive design for mobile and desktop use
- Uses Firebase Realtime Database for data storage

## Usage

1. Clone or download the repository.
2. Set up a Firebase project and configure it with your Firebase credentials.
3. Open `index.html` in your web browser.
4. Add items to your shopping list using the input field and click the "Add to list" button.
5. Click on an item to remove it from the list.

## Technologies Used

- HTML, CSS, JavaScript
- Firebase Realtime Database

## Firebase Configuration

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com).
2. Add firebase Configuration

```javascript
// Make sure to replace "YOUR_DATABASE_URL" with the actual URL of your Firebase Realtime Database.
// Because of security concerns, ensure not to expose your database URL publicly.
const firebaseConfig = {
  databaseURL: "YOUR_DATABASE_URL",
};
```
