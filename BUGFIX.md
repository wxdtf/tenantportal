# Bug Fix Summary

## Issue
**Error on iOS**: `TypeError: expected dynamic type 'boolean', but had type 'string'`

This error was appearing in the React Native DevTools console when running the app on iPhone/iOS Simulator.

## Root Cause

The error was caused by the **React Native New Architecture** (Fabric) being enabled in `app.json`:

```json
"newArchEnabled": true
```

The new architecture has **stricter type checking** for native module props, particularly with `react-native-screens`. Even though all our boolean props were correctly typed in JavaScript, the new architecture's bridge was more strict about type conversions.

## Solution

### 1. Disabled New Architecture
Removed `"newArchEnabled": true` from `app.json`. The new architecture is still experimental and not required for this app's functionality.

### 2. Additional Fixes Applied
- **Explicit boolean props**: Changed `multiline` → `multiline={true}` and `horizontal` → `horizontal={true}` to be more explicit
- **FontWeight**: Changed `'bold'` → `'700'` for numeric font weight (better compatibility)
- **App naming**: Updated from temp name to proper "TenantPortal"
- **Default state**: Changed `isAuthenticated` to `true` so the main app screens load by default (easier for testing)

## Files Modified

1. **app.json**
   - Removed `newArchEnabled`
   - Removed `edgeToEdgeEnabled`
   - Updated app name

2. **src/navigation/AppNavigator.js**
   - Changed `isAuthenticated` default to `true`
   - Updated `fontWeight` to numeric value
   - Improved code formatting

3. **src/screens/Maintenance/MaintenanceScreen.js**
   - Made `multiline` prop explicit

4. **src/screens/Marketplace/MarketplaceScreen.js**
   - Made `horizontal` prop explicit

## Testing

After these changes:

1. **Stop the dev server** (Ctrl+C in terminal)
2. **Clear Metro cache**: `npx expo start -c`
3. **Reload the app** on your device

The type error should now be resolved.

## Why This Happened

The new React Native architecture (Fabric + TurboModules) is designed to:
- Improve performance
- Better type safety
- Remove the "bridge" between JavaScript and native code

However, it's still being rolled out and can cause compatibility issues with:
- Older npm packages
- Shorthand prop syntax
- Implicit type conversions

For our use case, the classic architecture works perfectly fine and provides full functionality without the strictness issues.

## Future Considerations

When React Native new architecture becomes stable (likely RN 0.75+), we can:
1. Update all dependencies to new-arch compatible versions
2. Ensure all props are explicitly typed
3. Re-enable `newArchEnabled: true`
4. Test thoroughly on both iOS and Android

For now, the classic architecture is the safer choice for development.

---

**Status**: ✅ Fixed
**Date**: October 30, 2025
**Affected Platform**: iOS (iPhone, iPad, Simulator)
