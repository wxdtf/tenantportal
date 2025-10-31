/**
 * Community Identity Model - Type Definitions
 *
 * This file contains all TypeScript-style type definitions for the
 * Community Identity Model system.
 */

// ============================================================================
// USER / CITIZEN MODELS
// ============================================================================

/**
 * Community Citizen - Complete user profile
 */
export const CitizenProfile = {
  // Identity Dimension
  userId: String,
  displayName: String,
  email: String,
  phone: String,
  avatar: String,

  // Location & Context
  company: String,
  department: String,
  location: {
    building: String,
    floor: Number,
    unit: String,
  },

  // Interests & Tags
  interests: Array, // ["Sustainability", "Fitness", "Tech"]
  skills: Array, // ["JavaScript", "Design", "Photography"]

  // Energy Dimension
  energy: {
    totalXP: Number,
    currentLevel: Number,
    levelTitle: String,
    xpToNextLevel: Number,
    xpProgress: Number, // percentage to next level

    // Streaks
    streak: {
      current: Number,
      longest: Number,
      lastActiveDate: Date,
    },

    // Recent milestones
    recentMilestones: Array,
  },

  // Impact Dimension
  impact: {
    contributions: {
      helpedUsers: Number,
      eventsAttended: Number,
      eventsHosted: Number,
      workshopsCompleted: Number,
      maintenanceReports: Number,
      forumPosts: Number,
      upvotesReceived: Number,
      itemsShared: Number,
      problemsSolved: Number,
    },

    // Zone participation
    zoneActivity: {
      learning: Number,
      wellness: Number,
      exchange: Number,
      service: Number,
      creation: Number,
    },
  },

  // Achievements
  badges: Array, // Array of badge IDs
  achievements: Array, // Array of achievement objects

  // Settings
  preferences: {
    notifications: Boolean,
    publicProfile: Boolean,
    showInLeaderboard: Boolean,
  },

  // Metadata
  createdAt: Date,
  lastActiveAt: Date,
};

// ============================================================================
// XP & LEVELING SYSTEM
// ============================================================================

/**
 * Level Tier Definition
 */
export const LevelTier = {
  level: Number,
  title: String,
  minXP: Number,
  maxXP: Number, // For current level
  perks: Array, // Unlocked privileges
  badge: String, // Associated badge
};

/**
 * XP Activity Record
 */
export const XPActivity = {
  id: String,
  userId: String,
  activityType: String, // 'learning', 'fitness', 'helping', etc.
  activityName: String,
  xpEarned: Number,
  multiplier: Number, // Bonus multiplier (events, streaks)
  timestamp: Date,
  zoneId: String,
  metadata: Object, // Additional context
};

/**
 * Activity Type Definition
 */
export const ActivityType = {
  id: String,
  name: String,
  category: String, // 'learning', 'fitness', 'helping', etc.
  baseXP: Number,
  icon: String,
  color: String,
  description: String,
  requirements: Object,
};

// ============================================================================
// BADGE & ACHIEVEMENT SYSTEM
// ============================================================================

/**
 * Badge Definition
 */
export const Badge = {
  id: String,
  name: String,
  description: String,
  icon: String,
  color: String,
  rarity: String, // 'common', 'rare', 'epic', 'legendary'

  // Requirements to earn
  requirements: {
    type: String, // 'xp', 'activity_count', 'streak', 'contribution'
    target: Number,
    category: String, // Optional specific category
  },

  // Visual
  image: String,
  glowColor: String,
};

/**
 * User Achievement
 */
export const Achievement = {
  id: String,
  userId: String,
  badgeId: String,
  earnedAt: Date,
  progress: Number, // For progressive achievements
  isUnlocked: Boolean,
  isNew: Boolean, // For highlighting new achievements
};

// ============================================================================
// ZONE SYSTEM
// ============================================================================

/**
 * Community Zone
 */
export const Zone = {
  zoneId: String,
  name: String,
  description: String,
  tagline: String,

  // Visual identity
  icon: String,
  color: String,
  gradient: Array, // [startColor, endColor]
  image: String, // Background image

  // Stats
  stats: {
    totalActivities: Number,
    activeMembers: Number,
    upcomingEvents: Number,
    currentActivity: Number, // Live activity count
  },

  // Available activities
  activityTypes: Array, // Supported activity types in this zone

  // Featured content
  featured: Array, // Featured activities or events
};

/**
 * Live Activity in Zone
 */
export const LiveActivity = {
  id: String,
  zoneId: String,
  type: String,
  title: String,
  description: String,

  // Timing
  startTime: Date,
  endTime: Date,
  duration: Number, // in minutes

  // Participation
  host: String, // User ID
  participants: Array, // User IDs
  maxParticipants: Number,

  // Rewards
  xpReward: Number,
  badges: Array, // Potential badge unlocks

  // Location
  location: String,
  isVirtual: Boolean,

  // Status
  status: String, // 'upcoming', 'live', 'completed'
};

// ============================================================================
// COMMUNITY FEED
// ============================================================================

/**
 * Feed Item
 */
export const FeedItem = {
  id: String,
  type: String, // 'announcement', 'opportunity', 'achievement', 'post', 'challenge'

  // Content
  title: String,
  description: String,
  image: String,

  // Author
  authorId: String,
  authorName: String,
  authorAvatar: String,

  // Interaction
  xpReward: Number,
  category: String,
  zoneId: String,

  // Engagement
  likes: Number,
  comments: Number,
  shares: Number,
  participants: Number,

  // Timing
  createdAt: Date,
  expiresAt: Date,

  // Call to action
  actionLabel: String,
  actionLink: String,
};

/**
 * Opportunity (Call-to-Action Feed Item)
 */
export const Opportunity = {
  ...FeedItem,
  type: 'opportunity',

  // Specific fields
  spotsAvailable: Number,
  totalSpots: Number,
  deadline: Date,
  requirements: Array,
  participants: Array,
};

/**
 * Challenge
 */
export const Challenge = {
  id: String,
  title: String,
  description: String,

  // Duration
  startDate: Date,
  endDate: Date,
  daysRemaining: Number,

  // Participation
  participants: Array,
  goal: String,

  // Rewards
  xpReward: Number,
  badges: Array,

  // Progress tracking
  milestones: Array,

  // Visual
  image: String,
  color: String,
};

// ============================================================================
// LEADERBOARD
// ============================================================================

/**
 * Leaderboard Entry
 */
export const LeaderboardEntry = {
  rank: Number,
  userId: String,
  displayName: String,
  avatar: String,

  // Score
  score: Number, // XP or activity count
  change: Number, // Rank change since last period

  // Context
  level: Number,
  levelTitle: String,
  badges: Array,

  // Highlight
  isCurrentUser: Boolean,
  isTopRanked: Boolean,
};

/**
 * Leaderboard Type
 */
export const Leaderboard = {
  id: String,
  title: String,
  description: String,
  period: String, // 'daily', 'weekly', 'monthly', 'alltime'
  category: String, // 'overall', 'helping', 'fitness', etc.

  entries: Array, // Array of LeaderboardEntry
  lastUpdated: Date,
};

// ============================================================================
// NOTIFICATIONS
// ============================================================================

/**
 * Notification
 */
export const Notification = {
  id: String,
  userId: String,

  type: String, // 'xp_earned', 'badge_unlocked', 'level_up', 'opportunity', etc.

  title: String,
  message: String,
  icon: String,

  // Action
  actionLabel: String,
  actionLink: String,

  // State
  isRead: Boolean,
  createdAt: Date,

  // Data
  data: Object, // Additional context data
};

// ============================================================================
// ACTIVITY TRACKING
// ============================================================================

/**
 * User Activity Log
 */
export const ActivityLog = {
  id: String,
  userId: String,

  activityType: String,
  activityName: String,
  zoneId: String,

  xpEarned: Number,
  timestamp: Date,

  // Context
  eventId: String, // If related to an event
  relatedUsers: Array, // Other users involved

  // Metadata
  metadata: {
    duration: Number,
    location: String,
    notes: String,
  },
};

// ============================================================================
// REWARDS & REDEMPTION
// ============================================================================

/**
 * Reward
 */
export const Reward = {
  id: String,
  name: String,
  description: String,

  // Cost
  xpCost: Number,

  // Type
  type: String, // 'privilege', 'item', 'experience'
  category: String,

  // Visual
  image: String,
  icon: String,

  // Availability
  stock: Number,
  isUnlimited: Boolean,
  expiresAt: Date,

  // Requirements
  minLevel: Number,
  requiredBadges: Array,
};

/**
 * Redemption Record
 */
export const Redemption = {
  id: String,
  userId: String,
  rewardId: String,

  xpSpent: Number,
  redeemedAt: Date,

  status: String, // 'pending', 'fulfilled', 'expired'
  fulfillmentDate: Date,
};

// ============================================================================
// HELPER CONSTANTS
// ============================================================================

export const ACTIVITY_CATEGORIES = {
  LEARNING: 'learning',
  FITNESS: 'fitness',
  HELPING: 'helping',
  MAINTENANCE: 'maintenance',
  ENGAGEMENT: 'engagement',
  PROJECT: 'project',
};

export const ZONE_IDS = {
  LEARNING: 'learning',
  WELLNESS: 'wellness',
  EXCHANGE: 'exchange',
  SERVICE: 'service',
  CREATION: 'creation',
};

export const BADGE_RARITY = {
  COMMON: 'common',
  RARE: 'rare',
  EPIC: 'epic',
  LEGENDARY: 'legendary',
};

export const NOTIFICATION_TYPES = {
  XP_EARNED: 'xp_earned',
  BADGE_UNLOCKED: 'badge_unlocked',
  LEVEL_UP: 'level_up',
  ACHIEVEMENT: 'achievement',
  OPPORTUNITY: 'opportunity',
  REMINDER: 'reminder',
  SOCIAL: 'social',
};
