# 🌍 Community Identity Model

## Core Philosophy

**"Everyone is a citizen of the ecosystem — equal in identity, diverse in purpose."**

Instead of traditional roles, users have **states of participation**, determined by what they do, not what they are.

---

## 1. User Definition: "Community Citizen"

Each user is defined by **three evolving dimensions**:

### The Three Dimensions

| Dimension | Description | Example |
|-----------|-------------|---------|
| **Identity** | Who they are in the ecosystem (company, interest, location) | "Jack · Engineering · Tower B" |
| **Energy** | Their current level of engagement (XP / vitality) | 1,250 XP · Level 7 "Community Mentor" |
| **Impact** | Their contribution footprint — what they've shared, solved, or inspired | Helped 12 users, joined 5 events, hosted 1 workshop |

→ Together these form a **living profile**, representing both growth and influence.

### Data Model: Community Citizen

```javascript
{
  // Identity
  userId: "user_12345",
  displayName: "Jack Chen",
  department: "Engineering",
  location: "Tower B, Floor 12",
  company: "TechCorp",
  interests: ["Sustainability", "Fitness", "Tech"],

  // Energy
  totalXP: 1250,
  currentLevel: 7,
  levelTitle: "Community Mentor",
  xpToNextLevel: 250,
  streak: {
    current: 15,
    longest: 28
  },

  // Impact
  contributions: {
    helpedUsers: 12,
    eventsAttended: 23,
    eventsHosted: 1,
    workshopsCompleted: 8,
    maintenanceReports: 5,
    forumPosts: 34,
    upvotesReceived: 89
  },

  // Achievements
  badges: ["Helper", "Fitness Enthusiast", "Early Bird", "Problem Solver"],
  achievements: [
    {
      id: "first_help",
      title: "First Help",
      earnedAt: "2024-01-15T10:30:00Z"
    }
  ]
}
```

---

## 2. Activity-Driven Growth System

Instead of role-based privileges, users evolve through **activity types**:

### Activity Categories & XP Rewards

| Activity | XP Earned | Purpose |
|----------|-----------|---------|
| 🧠 **Learning / Attending** | 10–30 XP | Joining workshops, reading guides, participating in training |
| 💪 **Health / Fitness** | 10–20 XP | Gym sessions, yoga, steps logged, joining team sports |
| 🤝 **Helping / Mentoring** | 20–50 XP | Answering others' questions, assisting events, peer coaching |
| 🛠️ **Maintenance / Reporting** | 10 XP | Submitting quality facility feedback or quick fixes |
| 💬 **Community Engagement** | 5–15 XP | Posting in forums, sharing updates, voting in polls |
| 🎯 **Project Participation** | 50–100 XP | Joining sustainability programs, hosting learning circles |

### XP Level System

```javascript
const LEVEL_TIERS = [
  { level: 1, title: "New Citizen", minXP: 0 },
  { level: 2, title: "Active Neighbor", minXP: 100 },
  { level: 3, title: "Engaged Member", minXP: 300 },
  { level: 4, title: "Community Helper", minXP: 600 },
  { level: 5, title: "Trusted Guide", minXP: 1000 },
  { level: 6, title: "Community Leader", minXP: 1500 },
  { level: 7, title: "Community Mentor", minXP: 2100 },
  { level: 8, title: "Community Champion", minXP: 2800 },
  { level: 9, title: "Community Elder", minXP: 3600 },
  { level: 10, title: "Community Ambassador", minXP: 5000 }
];
```

XP fuels **badges**, **titles**, and **reputation tiers**.

---

## 3. Ecosystem Structure: "The Urban Village Map"

Instead of departments or floors, users navigate through **community zones**:

### The Five Zones

| Zone | Symbolic Function | Activities | Visual Identity |
|------|------------------|------------|-----------------|
| 🧠 **Learning Zone** | Workshops, talks, seminars | • Attend events<br>• Complete courses<br>• Share knowledge | Blue/Purple gradient |
| 💪 **Wellness Zone** | Gym, sports, meditation, clinics | • Gym check-in<br>• Join classes<br>• Log activities | Green/Teal gradient |
| 🛍️ **Exchange Zone** | Marketplace, group-buy, sharing corner | • Trade items<br>• Join group buys<br>• Share resources | Orange/Yellow gradient |
| 🔧 **Service Zone** | Work orders, maintenance, concierge | • Report issues<br>• Request services<br>• Track tickets | Red/Pink gradient |
| 🎨 **Creation Zone** | Brand showcases, coworking, pop-ups | • Book spaces<br>• Host events<br>• Showcase work | Purple/Magenta gradient |

### Zone Data Model

```javascript
{
  zoneId: "learning",
  name: "Learning Zone",
  icon: "school-outline",
  color: "#6366F1",
  gradient: ["#6366F1", "#8B5CF6"],
  description: "Expand your mind, share your knowledge",

  liveActivities: [
    {
      id: "workshop_123",
      type: "workshop",
      title: "Product Design 101",
      time: "2024-02-01T14:00:00Z",
      participants: 12,
      maxParticipants: 20,
      xpReward: 30
    }
  ],

  stats: {
    totalActivities: 156,
    activeMembers: 89,
    upcomingEvents: 8
  }
}
```

Each zone grants **XP through participation**, forming a **gamified map of life and collaboration**.

---

## 4. Behavioral Loop: Growth through Contribution

```
┌─────────────────────────────────────────────┐
│  1. DISCOVER                                │
│  → Browse zones, see live activities       │
│  → Get personalized recommendations         │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│  2. PARTICIPATE                             │
│  → Learn, help, attend, share               │
│  → Complete activities & interactions       │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│  3. EARN                                    │
│  → Gain XP & Tokens                         │
│  → Immediate gratification feedback         │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│  4. REDEEM / SHARE                          │
│  → Use XP for rewards & privileges          │
│  → Share achievements with community        │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│  5. GROW STATUS                             │
│  → Earn visible badges & recognition        │
│  → Unlock new opportunities                 │
└──────────────┬──────────────────────────────┘
               │
               └──────────► Back to DISCOVER
```

→ The loop encourages **sustainable engagement** rather than transactional actions.

---

## 5. UX Manifestation

### A. Dashboard → "My Path"

**Purpose**: Personal growth timeline and activity stream

**Components**:
- **XP Progress Ring**: Circular progress showing level advancement
- **Recent Activities**: Timeline of earned XP with context
  - "+20 XP from Yoga Class"
  - "+40 XP from helping Lisa fix ticket"
- **Daily Streak Counter**: Gamified consistency tracking
- **Quick Actions**: Jump into recommended activities

**Wireframe**:
```
┌─────────────────────────────────────┐
│  ◉ Jack Chen                        │
│  Level 7 · Community Mentor         │
│  ┌───────┐  1,250 XP                │
│  │  ███  │  250 to Level 8          │
│  │ ███ █ │                          │
│  │███   █│  🔥 15 day streak        │
│  └───────┘                          │
├─────────────────────────────────────┤
│  Today's Activities                 │
│  ┌─────────────────────────────┐   │
│  │ 🧠 +30 XP · Workshop         │   │
│  │ "Product Design 101"         │   │
│  │ 2 hours ago                  │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ 💪 +15 XP · Gym Check-in     │   │
│  │ This morning                 │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

### B. Community Feed

**Purpose**: Mix content and calls-to-action

**Feed Types**:
- 📢 Announcements
- 🎯 Activity Opportunities ("Who needs help with event setup?")
- 🏆 Community Achievements
- 💬 Community Posts
- 🎉 Celebrations (milestones, new members)

**Example Feed Items**:
```javascript
[
  {
    type: "opportunity",
    title: "Help Needed: Event Setup",
    description: "Saturday community BBQ needs 3 volunteers",
    xpReward: 50,
    participants: "2/5",
    category: "helping"
  },
  {
    type: "challenge",
    title: "30-Day Sustainability Challenge",
    participants: 45,
    daysRemaining: 12,
    xpReward: 100,
    category: "project"
  },
  {
    type: "achievement",
    user: "Sarah Lin",
    title: "reached Level 10!",
    badge: "Community Ambassador",
    reactions: 23
  }
]
```

### C. Mini-Map of Zones

**Purpose**: Visual navigation to community spaces

**Features**:
- Interactive zone tiles with live activity counts
- Tap a zone to see detailed activities
- Visual indicators for new/trending activities
- Heat map showing current activity levels

**Layout**:
```
┌────────────┬────────────┐
│  🧠        │  💪        │
│  Learning  │  Wellness  │
│  8 active  │  12 active │
├────────────┼────────────┤
│  🛍️        │  🔧        │
│  Exchange  │  Service   │
│  5 active  │  3 active  │
├────────────┴────────────┤
│  🎨 Creation Zone       │
│  2 active               │
└─────────────────────────┘
```

### D. Level Ring & Badges

**Level Progress Ring**:
- Circular progress meter
- Shows current level and XP to next level
- Animated fills as XP increases
- Glows when milestone reached

**Badge Display**:
- Grid of earned badges
- Locked badges shown as silhouettes
- Tap for badge details and requirements
- Share achievements to feed

### E. Social Recognition

**Leaderboards**:
- Top 10 Helpers this Month
- Most Active by Zone
- Rising Stars (biggest XP gain this week)
- Streak Champions

**Recognition Format**:
```
┌─────────────────────────────────────┐
│  🏆 Top Helpers This Month          │
├─────────────────────────────────────┤
│  1. 👤 Sarah Lin        450 XP      │
│  2. 👤 Jack Chen        380 XP      │
│  3. 👤 Mike Wang        320 XP      │
│  ...                                │
└─────────────────────────────────────┘
```

---

## 6. Technical Implementation

### Backend Requirements

1. **XP Calculation Engine**
   - Track all user activities
   - Calculate XP based on activity type
   - Handle bonus multipliers (streaks, events)

2. **Badge System**
   - Define badge requirements
   - Auto-award on achievement
   - Notification system

3. **Leaderboard Service**
   - Real-time ranking updates
   - Multiple leaderboard types
   - Privacy settings

4. **Activity Feed Generator**
   - Mix algorithm for personalized feed
   - Real-time activity streaming
   - Recommendation engine

### Mobile App Features

1. **Gamification UI Components**
   - XP progress ring (animated)
   - Badge showcase
   - Achievement popups
   - Streak counter

2. **Zone Navigation**
   - Interactive zone map
   - Zone detail screens
   - Activity filtering

3. **Social Features**
   - User profiles with impact stats
   - Follow/connection system
   - Activity sharing

---

## 7. Philosophical Tagline

> **"Live, grow, and give — every act builds the community."**

This encapsulates:
- **Live**: Engage with your environment
- **Grow**: Personal development through participation
- **Give**: Contribution creates collective value

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Daily Active Users | 70% | Users opening app daily |
| XP Earning Rate | 80% users/week | Users earning XP weekly |
| Zone Participation | 60% | Users active in 3+ zones |
| Helping Actions | 40% | Users helping others monthly |
| Event Attendance | 50% | Users attending events monthly |
| Streak Maintenance | 30% | Users with 7+ day streaks |

---

## Next Steps for Implementation

1. ✅ **Foundation** (Current)
   - Basic navigation structure
   - Screen framework

2. 📋 **Phase 1: Identity System**
   - User profile with 3 dimensions
   - XP tracking system
   - Level progression

3. 📋 **Phase 2: Activity Engine**
   - Activity types and XP rewards
   - Badge system
   - Achievement tracking

4. 📋 **Phase 3: Zone Navigation**
   - Zone-based UI
   - Activity discovery
   - Interactive map

5. 📋 **Phase 4: Community Features**
   - Feed implementation
   - Leaderboards
   - Social recognition

6. 📋 **Phase 5: Gamification Polish**
   - Animations and celebrations
   - Notifications
   - Rewards system

---

**Status**: Vision Documented ✅
**Next Action**: Design data models and UI mockups
