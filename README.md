# Activity-Mates
Activity Mate - An app app for finding other people to do activities with and make friends!




# Mobile app development and Expo


## Run locally
1. Create a new dev build by running: `eas build --profile development-simulator --platform ios`
2. Wait for the build to complete, when prompted in the terminal to install on ios simulator, select yes.
3. On the PC, run the command `npx expo start`
4. press `i` to open the iOS simulator on the pc.



## Run on physical iPhone
1. Create a new dev build by running: `eas build --profile development --platform ios`.
2. Install the new build on the phone by scanning the QR code.
3. On the PC, run the command `npx expo start`
4. Open the expo app on the physical iPhone, adn open the app (note: phone and PC must be on same network)


## Distribute the app to a Phone
Download the app on your phone, to be able to run WITHOUT the expo server.

1. Run `eas build --profile test --platform ios`
2. Install the app on the phone by scanning the QR code from the build

## Other
* To add a device to expo, run `eas device:create` (requires apple developer account)
