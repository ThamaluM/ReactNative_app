import { Notification, Notifications } from 'expo';
import * as Permissions from '../node_modules/expo-permissions';

const PUSH_ENDPOINT ='https://exp.host/--/api/v2/push/send' ;

export default async function registerForPushNotificationsAsync() {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (status !== 'granted') {
        alert('No notification permissions!');
        return;
    }

    let token = await Notifications.getExpoPushTokenAsync();
    return fetch(PUSH_ENDPOINT, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: JSON.stringify(
            {
                to: token,
                title:"Your Patient",
                body: "This is the message buddy"
                  
              }
        ),
    });

}
