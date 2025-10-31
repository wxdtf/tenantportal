import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { Layout } from '../constants/layout';
import { getLevelFromXP, getXPProgress, formatXP } from '../constants/community';

/**
 * XP Progress Card Component
 *
 * Displays user's current XP, level, and progress to next level
 */
export default function XPProgressCard({ totalXP, streak = 0 }) {
  const level = getLevelFromXP(totalXP);
  const progress = getXPProgress(totalXP);

  return (
    <View style={styles.card}>
      {/* Level Badge */}
      <View style={[styles.levelBadge, { backgroundColor: level.color + '20' }]}>
        <Text style={[styles.levelNumber, { color: level.color }]}>
          {level.level}
        </Text>
      </View>

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.levelTitle}>{level.title}</Text>
        <Text style={styles.xpText}>{formatXP(totalXP)} XP</Text>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${progress.percentage}%`,
                  backgroundColor: level.color,
                },
              ]}
            />
          </View>
          <Text style={styles.progressText}>
            {formatXP(progress.remaining)} to Level {level.level + 1}
          </Text>
        </View>
      </View>

      {/* Streak */}
      {streak > 0 && (
        <View style={styles.streakContainer}>
          <Ionicons name="flame" size={20} color="#F59E0B" />
          <Text style={styles.streakText}>{streak}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: Layout.borderRadius.lg,
    padding: Layout.spacing.md,
    alignItems: 'center',
  },
  levelBadge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Layout.spacing.md,
  },
  levelNumber: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
  },
  levelTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  xpText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  progressContainer: {
    marginTop: Layout.spacing.sm,
  },
  progressBar: {
    height: 6,
    backgroundColor: Colors.borderLight,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 11,
    color: Colors.textLight,
    marginTop: 4,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: Layout.spacing.sm,
    paddingVertical: Layout.spacing.xs,
    borderRadius: Layout.borderRadius.md,
  },
  streakText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F59E0B',
    marginLeft: 4,
  },
});
