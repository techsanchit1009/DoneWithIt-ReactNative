import { useEffect } from "react";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import expoPushTokensApi from '../api/expoPushTokens';


export default useNotifications = (notificationListener) => {

  useEffect(() => {
    registerForPushNotification();
    if (notificationListener) {
      Notifications.addNotificationReceivedListener(notificationListener);
    }
  }, []);

  const registerForPushNotification = async() => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;
  
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      expoPushTokensApi.register(token);
    } catch(err) {
      console.log('Error getting push token', err);
    }
  }

};