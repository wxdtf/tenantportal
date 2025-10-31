/**
 * Community Identity Model - Constants
 *
 * Defines all XP values, levels, zones, and activity types
 */

// ============================================================================
// LEVEL TIERS
// ============================================================================

export const LEVEL_TIERS = [
  { level: 1, title: "New Citizen", minXP: 0, maxXP: 99, color: "#9CA3AF" },
  { level: 2, title: "Active Neighbor", minXP: 100, maxXP: 299, color: "#60A5FA" },
  { level: 3, title: "Engaged Member", minXP: 300, maxXP: 599, color: "#34D399" },
  { level: 4, title: "Community Helper", minXP: 600, maxXP: 999, color: "#FBBF24" },
  { level: 5, title: "Trusted Guide", minXP: 1000, maxXP: 1499, color: "#F59E0B" },
  { level: 6, title: "Community Leader", minXP: 1500, maxXP: 2099, color: "#F97316" },
  { level: 7, title: "Community Mentor", minXP: 2100, maxXP: 2799, color: "#EC4899" },
  { level: 8, title: "Community Champion", minXP: 2800, maxXP: 3599, color: "#A855F7" },
  { level: 9, title: "Community Elder", minXP: 3600, maxXP: 4999, color: "#8B5CF6" },
  { level: 10, title: "Community Ambassador", minXP: 5000, maxXP: 99999, color: "#6366F1" },
];

/**
 * Get level info from XP
 */
export const getLevelFromXP = (xp) => {
  for (let i = LEVEL_TIERS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_TIERS[i].minXP) {
      return LEVEL_TIERS[i];
    }
  }
  return LEVEL_TIERS[0];
};

/**
 * Calculate XP progress to next level
 */
export const getXPProgress = (xp) => {
  const currentLevel = getLevelFromXP(xp);
  const nextLevel = LEVEL_TIERS.find(l => l.level === currentLevel.level + 1);

  if (!nextLevel) {
    return { current: xp, needed: 0, percentage: 100 };
  }

  const xpInCurrentLevel = xp - currentLevel.minXP;
  const xpNeededForNextLevel = nextLevel.minXP - currentLevel.minXP;
  const percentage = (xpInCurrentLevel / xpNeededForNextLevel) * 100;

  return {
    current: xpInCurrentLevel,
    needed: xpNeededForNextLevel,
    remaining: xpNeededForNextLevel - xpInCurrentLevel,
    percentage: Math.min(percentage, 100),
  };
};

// ============================================================================
// ACTIVITY TYPES & XP REWARDS
// ============================================================================

export const ACTIVITY_TYPES = {
  // Learning Activities (10-30 XP)
  WORKSHOP_ATTEND: { id: 'workshop_attend', name: 'Attend Workshop', xp: 30, category: 'learning', icon: 'school' },
  COURSE_COMPLETE: { id: 'course_complete', name: 'Complete Course', xp: 25, category: 'learning', icon: 'book' },
  GUIDE_READ: { id: 'guide_read', name: 'Read Guide', xp: 10, category: 'learning', icon: 'document-text' },
  TRAINING_ATTEND: { id: 'training_attend', name: 'Join Training', xp: 20, category: 'learning', icon: 'school' },

  // Fitness Activities (10-20 XP)
  GYM_CHECKIN: { id: 'gym_checkin', name: 'Gym Check-in', xp: 15, category: 'fitness', icon: 'barbell' },
  YOGA_CLASS: { id: 'yoga_class', name: 'Yoga Class', xp: 20, category: 'fitness', icon: 'body' },
  STEPS_LOGGED: { id: 'steps_logged', name: 'Log 10k Steps', xp: 10, category: 'fitness', icon: 'walk' },
  SPORTS_TEAM: { id: 'sports_team', name: 'Join Team Sport', xp: 20, category: 'fitness', icon: 'basketball' },

  // Helping Activities (20-50 XP)
  HELP_USER: { id: 'help_user', name: 'Help Another User', xp: 40, category: 'helping', icon: 'hand-left' },
  ANSWER_QUESTION: { id: 'answer_question', name: 'Answer Question', xp: 20, category: 'helping', icon: 'chatbubble' },
  MENTOR_SESSION: { id: 'mentor_session', name: 'Mentor Session', xp: 50, category: 'helping', icon: 'people' },
  EVENT_ASSIST: { id: 'event_assist', name: 'Assist Event', xp: 30, category: 'helping', icon: 'hand-right' },

  // Maintenance Activities (10 XP)
  REPORT_ISSUE: { id: 'report_issue', name: 'Report Issue', xp: 10, category: 'maintenance', icon: 'construct' },
  QUALITY_FEEDBACK: { id: 'quality_feedback', name: 'Quality Feedback', xp: 10, category: 'maintenance', icon: 'clipboard' },

  // Engagement Activities (5-15 XP)
  FORUM_POST: { id: 'forum_post', name: 'Forum Post', xp: 10, category: 'engagement', icon: 'chatbubbles' },
  SHARE_UPDATE: { id: 'share_update', name: 'Share Update', xp: 5, category: 'engagement', icon: 'share-social' },
  POLL_VOTE: { id: 'poll_vote', name: 'Vote in Poll', xp: 5, category: 'engagement', icon: 'checkbox' },
  COMMENT_HELPFUL: { id: 'comment_helpful', name: 'Helpful Comment', xp: 15, category: 'engagement', icon: 'thumbs-up' },

  // Project Activities (50-100 XP)
  SUSTAINABILITY_PROJECT: { id: 'sustainability', name: 'Sustainability Program', xp: 100, category: 'project', icon: 'leaf' },
  LEARNING_CIRCLE: { id: 'learning_circle', name: 'Host Learning Circle', xp: 80, category: 'project', icon: 'people-circle' },
  COMMUNITY_INITIATIVE: { id: 'initiative', name: 'Community Initiative', xp: 50, category: 'project', icon: 'bulb' },
};

// ============================================================================
// ZONES
// ============================================================================

export const ZONES = {
  LEARNING: {
    id: 'learning',
    name: 'Learning Zone',
    icon: 'school-outline',
    emoji: '🧠',
    color: '#6366F1',
    gradient: ['#6366F1', '#8B5CF6'],
    description: 'Expand your mind, share your knowledge',
    tagline: 'Learn, grow, teach',
    activities: ['workshop_attend', 'course_complete', 'guide_read', 'training_attend'],
  },
  WELLNESS: {
    id: 'wellness',
    name: 'Wellness Zone',
    icon: 'fitness-outline',
    emoji: '💪',
    color: '#10B981',
    gradient: ['#10B981', '#059669'],
    description: 'Strengthen body and mind',
    tagline: 'Move, breathe, thrive',
    activities: ['gym_checkin', 'yoga_class', 'steps_logged', 'sports_team'],
  },
  EXCHANGE: {
    id: 'exchange',
    name: 'Exchange Zone',
    icon: 'swap-horizontal-outline',
    emoji: '🛍️',
    color: '#F59E0B',
    gradient: ['#F59E0B', '#D97706'],
    description: 'Share resources, trade goods',
    tagline: 'Share, trade, connect',
    activities: ['forum_post', 'share_update'],
  },
  SERVICE: {
    id: 'service',
    name: 'Service Zone',
    icon: 'settings-outline',
    emoji: '🔧',
    color: '#EF4444',
    gradient: ['#EF4444', '#DC2626'],
    description: 'Maintain, improve, support',
    tagline: 'Report, fix, enhance',
    activities: ['report_issue', 'quality_feedback', 'help_user'],
  },
  CREATION: {
    id: 'creation',
    name: 'Creation Zone',
    icon: 'color-palette-outline',
    emoji: '🎨',
    color: '#8B5CF6',
    gradient: ['#8B5CF6', '#7C3AED'],
    description: 'Showcase talent, build together',
    tagline: 'Create, showcase, inspire',
    activities: ['learning_circle', 'initiative'],
  },
};

// ============================================================================
// BADGES
// ============================================================================

export const BADGES = {
  // Starter Badges
  FIRST_STEP: { id: 'first_step', name: 'First Step', description: 'Complete your first activity', icon: 'footsteps', rarity: 'common' },
  EARLY_BIRD: { id: 'early_bird', name: 'Early Bird', description: 'Active before 7 AM', icon: 'sunny', rarity: 'common' },

  // Streak Badges
  WEEK_WARRIOR: { id: 'week_warrior', name: 'Week Warrior', description: '7 day streak', icon: 'flame', rarity: 'rare' },
  MONTH_MASTER: { id: 'month_master', name: 'Month Master', description: '30 day streak', icon: 'trophy', rarity: 'epic' },

  // Helping Badges
  HELPER: { id: 'helper', name: 'Helper', description: 'Helped 5 users', icon: 'hand-left', rarity: 'common' },
  MENTOR: { id: 'mentor', name: 'Mentor', description: 'Helped 25 users', icon: 'people', rarity: 'rare' },
  GUIDE: { id: 'guide', name: 'Guide', description: 'Helped 100 users', icon: 'navigate', rarity: 'epic' },

  // Fitness Badges
  FITNESS_FAN: { id: 'fitness_fan', name: 'Fitness Fan', description: '10 gym visits', icon: 'barbell', rarity: 'common' },
  WELLNESS_WARRIOR: { id: 'wellness_warrior', name: 'Wellness Warrior', description: '50 fitness activities', icon: 'body', rarity: 'rare' },

  // Learning Badges
  CURIOUS_MIND: { id: 'curious_mind', name: 'Curious Mind', description: '5 workshops attended', icon: 'book', rarity: 'common' },
  KNOWLEDGE_SEEKER: { id: 'knowledge_seeker', name: 'Knowledge Seeker', description: '20 learning activities', icon: 'school', rarity: 'rare' },

  // Community Badges
  ENGAGED_CITIZEN: { id: 'engaged_citizen', name: 'Engaged Citizen', description: '50 forum posts', icon: 'chatbubbles', rarity: 'rare' },
  PROBLEM_SOLVER: { id: 'problem_solver', name: 'Problem Solver', description: '10 maintenance reports', icon: 'construct', rarity: 'common' },

  // Special Badges
  SUSTAINABILITY_CHAMPION: { id: 'sustainability', name: 'Sustainability Champion', description: 'Completed green program', icon: 'leaf', rarity: 'epic' },
  COMMUNITY_BUILDER: { id: 'community_builder', name: 'Community Builder', description: 'Hosted 5 events', icon: 'people-circle', rarity: 'legendary' },
};

// ============================================================================
// NOTIFICATION TEMPLATES
// ============================================================================

export const NOTIFICATION_TEMPLATES = {
  XP_EARNED: (xp, activity) => ({
    title: `+${xp} XP Earned!`,
    message: `Great job on ${activity}`,
    icon: 'star',
  }),

  LEVEL_UP: (level, title) => ({
    title: `Level Up!`,
    message: `You're now Level ${level}: ${title}`,
    icon: 'trophy',
  }),

  BADGE_UNLOCKED: (badgeName) => ({
    title: `Badge Unlocked!`,
    message: `You earned: ${badgeName}`,
    icon: 'ribbon',
  }),

  STREAK_MILESTONE: (days) => ({
    title: `${days} Day Streak!`,
    message: `Keep the momentum going!`,
    icon: 'flame',
  }),
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Calculate total XP for an activity with multipliers
 */
export const calculateXP = (activityId, multipliers = {}) => {
  const activity = Object.values(ACTIVITY_TYPES).find(a => a.id === activityId);
  if (!activity) return 0;

  let xp = activity.xp;

  // Apply streak multiplier (e.g., 1.2x for 7+ day streak)
  if (multipliers.streak && multipliers.streak >= 7) {
    xp *= 1.2;
  }

  // Apply event multiplier (e.g., 1.5x during special events)
  if (multipliers.event) {
    xp *= multipliers.event;
  }

  return Math.floor(xp);
};

/**
 * Get activity color by category
 */
export const getActivityColor = (category) => {
  const colors = {
    learning: '#6366F1',
    fitness: '#10B981',
    helping: '#EC4899',
    maintenance: '#EF4444',
    engagement: '#F59E0B',
    project: '#8B5CF6',
  };
  return colors[category] || '#6B7280';
};

/**
 * Format XP number with commas
 */
export const formatXP = (xp) => {
  return xp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Get random encouragement message
 */
export const getEncouragementMessage = () => {
  const messages = [
    "Keep going! You're doing great!",
    "Every action builds the community!",
    "Your contribution matters!",
    "Together we grow stronger!",
    "You're making a difference!",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};
