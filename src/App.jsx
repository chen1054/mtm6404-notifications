import { useState } from "react"
import notificationsData from "./notifications"
import "./App.css"

function App() {

  const [notifications, setNotifications] = useState(notificationsData)

  function clearNotification(id) {
    const newNotifications = notifications.filter((notification) => notification.id !== id)
    setNotifications(newNotifications)
  }

  function clearAll() {
    setNotifications([])
  }

  return (
    <div className="App">
      <h1>Notifications</h1>

      <h2>You have {notifications.length} notifications</h2>

      <button onClick={clearAll}>Clear All</button>

      <NotificationList>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            id={notification.id}
            name={notification.name}
            message={notification.message}
            clearNotification={clearNotification}
          />
        ))}
      </NotificationList>

    </div>
  )
}

function NotificationList({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

function Notification({ id, name, message, clearNotification }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{message}</p>
      <button onClick={() => clearNotification(id)}>Clear</button>
    </div>
  )
}

export default App