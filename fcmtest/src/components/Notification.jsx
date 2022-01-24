import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { onMessageListener, requestForToken } from "../firebase";
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {

  const [notification, setNotification] = useState({title: '', body: ''});
  const notify = () =>  toast(<ToastDisplay/>);
  function ToastDisplay() {
    return (
      <div>
        <p><b>{notification?.title}</b></p>
        <p>{notification?.body}</p>
      </div>
    );
  };

  useEffect(() => {
    if (notification?.title ){
     notify()
    }
  }, [notification])

  requestForToken();

  onMessageListener().then((payload) => {
    setNotification({title: payload?.notification?.title, body: payload?.notification?.body});     
  })
  .catch((err) => console.log('failed: ', err));

  return <ToastContainer/>;
};

export default Notification;
