# Development Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** - [Download](https://git-scm.com/)
- **Expo CLI** - Will be installed with the project dependencies

### Platform-Specific Requirements

#### For iOS Development (macOS only):
- **Xcode** (latest version) - [Download from App Store](https://apps.apple.com/us/app/xcode/id497799835)
- **iOS Simulator** (included with Xcode)
- **CocoaPods** - Install with: `sudo gem install cocoapods`

#### For Android Development:
- **Android Studio** - [Download](https://developer.android.com/studio)
- **Android SDK** (API level 31 or higher)
- **Android Emulator** or a physical Android device

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/wxdtf/tenantportal.git
cd tenantportal
```

### 2. Install Dependencies

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

### 3. Start the Development Server

```bash
npm start
```

Or:

```bash
npx expo start
```

This will start the Expo development server and display a QR code in your terminal.

### 4. Run on Your Device or Emulator

#### Option A: Run on Physical Device

1. Install the **Expo Go** app on your device:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Scan the QR code displayed in your terminal using:
   - **iOS**: Built-in Camera app
   - **Android**: Expo Go app

#### Option B: Run on iOS Simulator (macOS only)

```bash
npm run ios
```

Or press `i` in the Expo development server.

#### Option C: Run on Android Emulator

```bash
npm run android
```

Or press `a` in the Expo development server.

#### Option D: Run on Web Browser

```bash
npm run web
```

Or press `w` in the Expo development server.

## Project Structure

```
tenantportal/
├── src/
│   ├── components/         # Reusable UI components
│   ├── screens/           # Screen components
│   │   ├── Auth/         # Authentication screens
│   │   ├── Home/         # Dashboard/Home screen
│   │   ├── Maintenance/  # Maintenance request screens
│   │   ├── Bills/        # Billing and payment screens
│   │   ├── Events/       # Events and amenities screens
│   │   ├── Marketplace/  # Community marketplace screens
│   │   ├── Messages/     # Messaging screens
│   │   └── Profile/      # Profile and settings screens
│   ├── navigation/        # Navigation configuration
│   ├── services/          # API services and data fetching
│   ├── utils/            # Utility functions and helpers
│   ├── constants/        # Constants (colors, layout, etc.)
│   ├── contexts/         # React Context providers
│   └── hooks/            # Custom React hooks
├── assets/               # Images, fonts, and other assets
├── docs/                 # Documentation
├── App.js               # Main app entry point
├── app.json            # Expo configuration
└── package.json        # Project dependencies
```

## Available Scripts

### Development

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator (macOS only)
- `npm run web` - Run in web browser

### Testing

```bash
# Run tests (to be implemented)
npm test
```

### Linting

```bash
# Run ESLint (to be configured)
npm run lint
```

## Environment Configuration

### Setting Up Environment Variables

Create a `.env` file in the root directory (never commit this file):

```env
API_BASE_URL=http://your-api-url.com
API_KEY=your-api-key
```

## Common Development Tasks

### Adding a New Screen

1. Create a new file in the appropriate `src/screens/` subdirectory
2. Import and use the screen in `src/navigation/AppNavigator.js`
3. Add navigation logic to connect the screen

Example:
```javascript
// src/screens/Example/ExampleScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExampleScreen() {
  return (
    <View style={styles.container}>
      <Text>Example Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

### Adding a New Component

1. Create a new file in `src/components/`
2. Export the component
3. Import and use it in your screens

### Modifying Colors and Styling

Global colors are defined in `src/constants/colors.js`. Update this file to change the app's color scheme.

Layout constants (spacing, border radius) are in `src/constants/layout.js`.

## Debugging

### React Native Debugger

1. Install React Native Debugger:
   ```bash
   brew install --cask react-native-debugger
   ```

2. Open the debugger and reload your app

### Expo Developer Tools

Access the Expo developer tools in your browser at `http://localhost:19002` when the dev server is running.

### Console Logs

View console logs in:
- Terminal where you ran `npm start`
- Browser developer console (web)
- Expo Go app shake menu > "Show Developer Menu" > "Debug JS Remotely"

## Troubleshooting

### Issue: Metro bundler not starting

**Solution:**
```bash
npx expo start -c
```

### Issue: iOS build fails

**Solution:**
```bash
cd ios
pod install
cd ..
npm run ios
```

### Issue: Android build fails

**Solution:**
1. Open Android Studio
2. Tools > SDK Manager
3. Ensure Android SDK Platform 31+ is installed
4. Sync Gradle files

### Issue: Module not found errors

**Solution:**
```bash
rm -rf node_modules
npm install
npx expo start -c
```

### Issue: Changes not reflecting

**Solution:**
- Shake device or press `R` to reload
- Or run: `npx expo start -c` to clear cache

## Building for Production

### Build APK/IPA with EAS Build

1. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   ```

2. Configure EAS:
   ```bash
   eas build:configure
   ```

3. Build for Android:
   ```bash
   eas build --platform android
   ```

4. Build for iOS:
   ```bash
   eas build --platform ios
   ```

### Publishing Updates

```bash
eas update
```

## Testing on Real Devices

### iOS (TestFlight)

1. Build with EAS Build
2. Submit to App Store Connect
3. Invite testers via TestFlight

### Android (Internal Testing)

1. Build with EAS Build
2. Upload to Google Play Console
3. Add testers to internal testing track

## Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [Expo Icons](https://icons.expo.fyi/)

## Getting Help

- Check the [Issues](https://github.com/wxdtf/tenantportal/issues) page
- Review existing documentation in the `docs/` folder
- Refer to React Native and Expo documentation

## Next Steps

1. Configure backend API endpoints in `src/services/`
2. Implement authentication logic with real API
3. Add state management (Context API or Redux)
4. Implement push notifications
5. Add offline support and caching
6. Write unit and integration tests
7. Set up CI/CD pipeline

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines.
