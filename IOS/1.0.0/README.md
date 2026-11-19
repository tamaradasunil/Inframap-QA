# InfraMap iOS · Version 1.0.0

This folder is a complete Expo project source snapshot for InfraMap iOS version 1.0.0.

## Build

From this folder, run:

`powershell
npm install
npx eas-cli build --platform ios --profile preview-ios
`

The shared Expo screens are platform-aware. Android uses Google Maps; iOS uses Apple Maps until an iOS Google Maps API key is configured. No credentials or API keys are included in this source snapshot.
