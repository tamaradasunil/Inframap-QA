# InfraMap 1.0.1 — shared Android and iOS source

This is one Expo project for both Android and iOS. Use the same source folder and choose the target platform when building.

## Android APK

```powershell
npm install
npx eas-cli build --platform android --profile preview
```

## iOS build

```powershell
npm install
npx eas-cli build --platform ios --profile preview-ios
```

Run both commands from this folder. App screens and business logic are shared. Expo applies platform-specific native settings during the build. Google Maps API keys are optional and are not included in this repository.
