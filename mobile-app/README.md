

# Expo

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