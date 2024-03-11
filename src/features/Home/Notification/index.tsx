import Snackbar from "@mui/material/Snackbar";
import { onMessage } from "firebase/messaging";
import { useState } from "react";
import { messaging } from "src/firebase";

const Notification = () => {
  const [notification, setNotification] = useState<any>();

  onMessage(messaging, (payload) => {
    if (payload?.notification) {
      setNotification(payload);
    }
  });
  return (
    <Snackbar
      open={!!notification}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={6000}
      onClose={() => setNotification(null)}
      message={notification?.notification?.body}
    />
  );
};

export default Notification;
