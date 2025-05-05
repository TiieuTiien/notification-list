import React, { useRef } from 'react';
import NotificationList, { NotificationListRef } from './Components/NotificationList/NotificationList.tsx';
import './App.css';

function App() {
  const notificationListRef = useRef<NotificationListRef>(null);

  // Refactored function to handle showing any type of notification
  const handleShowNotification = (type: 'info' | 'success' | 'warning' | 'error', message: string, duration?: number) => {
    notificationListRef.current?.addNotification(message, type, duration);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
        {/* Update button onClick handlers to use the new function */}
        <button onClick={() => handleShowNotification('info', 'This is a test info notification!')}>
          Show Info Notification
        </button>
        <button onClick={() => handleShowNotification('success', 'Action successful!')}>
          Show Success Notification
        </button>
        <button onClick={() => handleShowNotification('warning', 'Something might be wrong.')}>
          Show Warning Notification
        </button>
        <button onClick={() => handleShowNotification('error', 'An error occurred!')}>
          Show Error Notification
        </button>
        {/* Example with custom duration */}
         <button onClick={() => handleShowNotification('info', 'This notification lasts 2 seconds!', 2000)}>
          Show Short Info
        </button>
      </header>
      {/* Render the NotificationList component */}
      <NotificationList ref={notificationListRef} />
    </div>
  );
}

export default App;