import { useEffect, useState } from "react";
import "../notification-message/notification-message.component.css";

export function NotificationMessage(props) {
  const [showmessage, setShowMessage] = useState(false);

  function closeMessage() {
    setShowMessage(false)
  }

  useEffect(()=>{
    if(props.type !== ""){
        setShowMessage(true);
    }
  },[props.type]);
  return (
    <div className="notification-message">
      {showmessage && (
        <div data-type={props.type}>
          {props.message}
          <div
            className="close-btn"
            onClick={() => {
              closeMessage();
            }}
          >
            &times;
          </div>
        </div>
      )}
    </div>
  );
}
