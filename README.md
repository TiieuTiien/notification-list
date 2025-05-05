

# Simple React Notification App
=====================================

## Table of Contents
-----------------

* [Getting Started](#getting-started)
* [Features](#features)
* [Usage](#usage)
* [Contributing](#contributing)

## Getting Started
---------------

This project was bootstrapped with Create React App. To get started, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repo-name.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Features
--------

* Simple notification system with four types of notifications: info, success, warning, and error
* Notifications can be displayed with a custom duration
* Notifications are stacked vertically and can be closed individually

## Usage
-----

To use the notification system, simply call the `handleShowNotification` function and pass in the type of notification, the message, and optionally, the duration.

Example:
```jsx
<button onClick={() => handleShowNotification('info', 'This is a test info notification!')}>
  Show Info Notification
</button>
```
## Contributing
------------

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

### Style Guide

* CSS: Follow the CSS style guide outlined in the `src/Components/NotificationList/NotificationList.css` file.
* JSX: Follow the JSX style guide outlined in the `src/App.tsx` file.

### Commit Messages

* Follow the conventional commit message format: `<type>(<scope>): <subject>`

### API Documentation

* API documentation is not currently available. If you'd like to contribute to the API documentation, please submit a pull request.

### License

* This project is licensed under the MIT License. See the `LICENSE` file for more information.