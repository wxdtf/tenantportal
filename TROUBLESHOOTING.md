# Troubleshooting Guide

## Current Issue: Boolean Type Error on iOS

### Error Message
```
TypeError: expected dynamic type 'boolean', but had type 'string'
at RNSScreen / react-native-screens
```

### Fixes Applied

1. ✅ Disabled React Native New Architecture
2. ✅ Made all boolean props explicit
3. ✅ Refactored Tab.Navigator to use static screen options
4. ✅ Changed fontWeight to numeric value

### Steps to Resolve (In Order)

#### Step 1: Complete Cache Clear

Run the reset script:
```bash
./reset-and-start.sh
```

OR manually:
```bash
# Stop any running processes
# Press Ctrl+C in the terminal running expo

# Clear all caches
rm -rf .expo
rm -rf node_modules/.cache
rm -rf $TMPDIR/metro-*
rm -rf $TMPDIR/haste-*

# Clear watchman (if installed)
watchman watch-del-all

# Reinstall dependencies
rm -rf node_modules
npm install

# Start with clear cache
npx expo start --clear
```

#### Step 2: Hard Reload on Device

**On iOS Simulator:**
1. Press `Cmd + D` (or shake device)
2. Select "Reload"
3. If that doesn't work, **close the Expo Go app completely**
4. Reopen Expo Go and scan the QR code again

**On Physical iOS Device:**
1. Shake the device
2. Tap "Reload"
3. If that doesn't work, **force quit Expo Go**:
   - Swipe up from bottom and hold
   - Swipe up on Expo Go app
   - Reopen and scan QR code again

#### Step 3: Verify App Configuration

Check `app.json` doesn't have these:
```json
// ❌ DO NOT have these:
"newArchEnabled": true,
"edgeToEdgeEnabled": true
```

#### Step 4: Check React Navigation Versions

Ensure compatible versions:
```bash
npm list react-native-screens @react-navigation/bottom-tabs
```

Should show:
- `react-native-screens@4.x.x`
- `@react-navigation/bottom-tabs@7.x.x`

### Alternative: Downgrade react-native-screens

If the issue persists, try downgrading:

```bash
npm install react-native-screens@3.31.1
npx expo start --clear
```

### Nuclear Option: Fresh Install

If nothing else works:

```bash
# 1. Backup your src/ folder
cp -r src ~/Desktop/tenantportal-src-backup

# 2. Delete everything
cd ..
rm -rf tenantportal

# 3. Re-clone
git clone https://github.com/wxdtf/tenantportal.git
cd tenantportal

# 4. Fresh install
npm install

# 5. Start
npx expo start --clear
```

## Common React Native Screens Errors

### Issue: Props Type Mismatch

**Symptoms:**
- `expected dynamic type 'boolean'`
- `expected dynamic type 'number'`
- App crashes on iOS but works on Android

**Causes:**
- String values passed to boolean props
- Boolean values passed to string props
- New RN Architecture strict type checking

**Solutions:**
1. Make all boolean props explicit: `multiline={true}` not just `multiline`
2. Use numeric font weights: `'700'` instead of `'bold'`
3. Disable new architecture in app.json
4. Check navigation screen options for string/boolean mismatches

### Issue: Stale Cache

**Symptoms:**
- Code changes don't reflect
- Old errors persist after fixes
- Random crashes

**Solution:**
```bash
# Complete reset
rm -rf .expo node_modules/.cache
npx expo start --clear
```

### Issue: Metro Bundler Issues

**Symptoms:**
- Bundle fails to load
- "Unable to resolve module"
- Constant reloading

**Solution:**
```bash
# Kill all metro processes
pkill -f "react-native" || pkill -f "expo"

# Clear watchman
watchman watch-del-all

# Restart
npx expo start --clear
```

## Debugging Tools

### 1. React Native DevTools

Open in browser when dev server is running:
```
http://localhost:19002
```

### 2. Metro Bundler Logs

Watch the terminal where you ran `npm start` for detailed errors

### 3. iOS Simulator Logs

In simulator:
- Device → Trigger Shake Gesture
- Debug → Open System Log

### 4. Expo Go App Logs

In Expo Go:
- Shake device
- Tap "Show Developer Menu"
- Tap "Debug Remote JS"

## Getting Help

1. **Check the error stack trace** - Look for the file and line number
2. **Search the error** - Google the exact error message
3. **Check GitHub Issues**:
   - https://github.com/software-mansion/react-native-screens/issues
   - https://github.com/react-navigation/react-navigation/issues
4. **Ask in Discord**:
   - React Native Community Discord
   - Expo Discord

## Useful Commands Reference

```bash
# Start fresh
npx expo start --clear

# Start on specific platform
npx expo start --ios
npx expo start --android
npx expo start --web

# Check dependencies
npm list
npm outdated

# Fix dependency issues
rm -rf node_modules package-lock.json
npm install

# Check Expo diagnostics
npx expo-doctor

# Update Expo SDK
npx expo install --fix
```

## Prevention Tips

1. **Always test on both platforms** (iOS & Android) after changes
2. **Clear cache when switching branches**
3. **Use explicit boolean values** in props
4. **Keep dependencies updated** (but test after updates)
5. **Commit often** so you can revert if needed

## Last Resort

If absolutely nothing works, reach out with:

1. Full error log
2. `package.json` contents
3. `app.json` contents
4. Platform and device info
5. Steps already tried

---

**Last Updated:** October 30, 2025
