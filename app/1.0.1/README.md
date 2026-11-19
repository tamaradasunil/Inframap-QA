# InfraMap 1.0.1 — shared Android and iOS source

This is one Expo project for both Android and iOS. Use the same source folder and select the target platform when building.

## Android APK

```powershell
cd app/1.0.1
npm install
npx eas-cli build --platform android --profile preview
```

## iOS build

```powershell
cd app/1.0.1
npm install
npx eas-cli build --platform ios --profile preview-ios
```

App screens and business logic are shared. Expo applies platform-specific native settings at build time. Google Maps API keys are optional and are not included in this repository.

