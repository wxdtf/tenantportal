#!/bin/bash

echo "🧹 Clearing all caches and restarting..."
echo ""

# Kill any existing Metro bundler processes
echo "1. Killing existing Metro processes..."
pkill -f "react-native" || true
pkill -f "expo" || true

# Clear watchman
echo "2. Clearing Watchman..."
watchman watch-del-all 2>/dev/null || echo "Watchman not installed (optional)"

# Clear Metro bundler cache
echo "3. Clearing Metro bundler cache..."
rm -rf $TMPDIR/metro-* 2>/dev/null || true
rm -rf $TMPDIR/haste-* 2>/dev/null || true

# Clear npm cache
echo "4. Clearing npm cache..."
npm cache clean --force

# Clear Expo cache
echo "5. Clearing Expo cache..."
rm -rf .expo
rm -rf node_modules/.cache

# Clear iOS build cache (if exists)
if [ -d "ios" ]; then
    echo "6. Clearing iOS build cache..."
    rm -rf ios/build
    rm -rf ios/Pods
fi

# Clear Android build cache (if exists)
if [ -d "android" ]; then
    echo "7. Clearing Android build cache..."
    cd android
    ./gradlew clean 2>/dev/null || true
    cd ..
fi

echo ""
echo "✅ All caches cleared!"
echo ""
echo "🚀 Starting Expo with clean cache..."
echo ""

# Start Expo with clear cache
npx expo start --clear
