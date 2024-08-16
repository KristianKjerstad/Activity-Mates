# Activity-Mates
Activity Mate - An app app for finding other people to do activities with and make friends!




# Mobile app development and Expo


* To start the app locally in a simulator, run this command, then open the expo app in the simulator.
```bash
pnpm run ios
# start in browser: pnpm run web
```



* To create a new dev build for a iOS simulator, use the command: 
```bash
eas build --profile development-simulator --platform ios
```


* To create a new dev build for iOS you can download on iPhone, use the command:
```bash
eas build --profile development --platform ios
```


* To add a device to expo, run `eas device:create` (requires apple developer account)



* Do a local build, not on the expo server

```bash
eas build --profile development --platform ios --local
```