import { FirebaseApp, initializeApp } from "firebase/app";
import { Messaging, getMessaging, getToken } from "firebase/messaging";
import { SetStateAction, useEffect } from "react";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

type FirebaseProps = {
  setToken: SetStateAction<any>;
};

const firebaseConfig: FirebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_FIREBASE_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_APPSPOT}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`,
};

const app: FirebaseApp = initializeApp(firebaseConfig);
let messaging: Messaging = getMessaging(app);

const FirebaseInitializer = ({ setToken }: FirebaseProps) => {
  useEffect(() => {
    const generateToken = async (): Promise<void> => {
      const permission: NotificationPermission =
        await Notification.requestPermission();

      if (permission === "granted") {
        console.log("Notification permission granted.");

        const currentToken = await getToken(messaging, {
          vapidKey:
            "BL6p7634vOQUV9rNBJlzLC315AZi5vZNMI8k8wC75kxVoFJ-PfKHJtDu-bsI6DZiQ9aFzWPtU7v_GKOiNwBG_t8",
        });

        if (currentToken) {
          setToken(currentToken);
        } else {
          console.log("Cannot get token");
        }
      } else {
        console.log("Do not have permission!");
      }
    };

    generateToken();
  }, [setToken]);

  return <></>;
};

export { FirebaseInitializer, messaging };
