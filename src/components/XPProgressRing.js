import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { getLevelFromXP, getXPProgress, formatXP } from '../constants/community';

/**
 * XP Progress Ring Component
 *
 * Displays a circular progress indicator showing XP progress to next level
 */
export default function XPProgressRing({ totalXP, size = 120 }) {
  const level = getLevelFromXP(totalXP);
  const progress = getXPProgress(totalXP);

  const ringWidth = size * 0.08;
  const innerSize = size - ringWidth * 2;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/* Background Ring */}
      <View
        style={[
          styles.ring,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: ringWidth,
            borderColor: Colors.borderLight,
          },
        ]}
      />

      {/* Progress Ring Overlay */}
      <View
        style={[
          styles.progressRing,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: ringWidth,
            borderColor: level.color || Colors.primary,
            transform: [{ rotate: '-90deg' }],
          },
        ]}
      >
        <View
          style={[
            styles.progressMask,
            {
              width: size - ringWidth,
              height: size - ringWidth,
              borderRadius: (size - ringWidth) / 2,
              transform: [{ rotate: `${(360 * progress.percentage) / 100}deg` }],
            },
          ]}
        />
      </View>

      {/* Center Content */}
      <View style={[styles.centerContent, { width: innerSize, height: innerSize }]}>
        <Text style={[styles.levelText, { color: level.color || Colors.primary }]}>
          {level.level}
        </Text>
        <Text style={styles.labelText}>Level</Text>
        <Text style={styles.xpText}>{formatXP(totalXP)} XP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  progressRing: {
    position: 'absolute',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  progressMask: {
    backgroundColor: Colors.background,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  levelText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  labelText: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  xpText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginTop: 4,
  },
});
