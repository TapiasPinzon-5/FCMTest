import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { onMessageListener, requestForToken } from "../firebase";
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {

  // Se crea un usestate para almacenar el contenido de la notificacion.
  const [notification, setNotification] = useState({title: '', body: '', url:''});

  // Se crea la forma de la notificacion con la librearia react-toastify
  const notify = () =>  toast(<ToastDisplay/>);
  function ToastDisplay() {
    return (
      <div>
        <p><b>{notification?.title}</b></p>
        <p>{notification?.body}</p>
        <p>{notification?.url}</p>
      </div>
    );
  };

  // un useEffect que esta pendiente de cuando hay notificaciones nuevas.
  useEffect(() => {
    if (notification?.title ){
     notify()
    }
  }, [notification])

  // Funcion para pedir permisos de enviarle notificaciones y generacion del token del navegador.
  requestForToken();

  // Esta funcion esta pendiente de las nuevas notifiaciones
  onMessageListener().then((payload) => {
    setNotification({
      title: payload?.notification?.title, 
      body: payload?.notification?.body, 
      url: payload?.notification?.url});     
  })
  .catch((err) => console.log('failed: ', err));

  return <ToastContainer/>;
};

export default Notification;
