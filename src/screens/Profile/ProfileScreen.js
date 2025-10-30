import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { Layout } from '../../constants/layout';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const menuItems = [
    { id: 1, title: 'Edit Profile', icon: 'person-outline', action: 'edit' },
    { id: 2, title: 'My Unit', icon: 'business-outline', action: 'unit' },
    { id: 3, title: 'Payment Methods', icon: 'card-outline', action: 'payment' },
    { id: 4, title: 'Documents', icon: 'document-text-outline', action: 'documents' },
    { id: 5, title: 'Help & Support', icon: 'help-circle-outline', action: 'help' },
    { id: 6, title: 'About', icon: 'information-circle-outline', action: 'about' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarLarge}>
            <Ionicons name="person" size={48} color={Colors.white} />
          </View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@email.com</Text>
          <Text style={styles.profileUnit}>Unit 405, Building A</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <View style={styles.menuCard}>
            <View style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <Ionicons name="notifications-outline" size={24} color={Colors.text} />
                <Text style={styles.menuItemText}>Push Notifications</Text>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: Colors.border, true: Colors.primary }}
              />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.menuCard}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.menuItem,
                  index !== menuItems.length - 1 && styles.menuItemBorder
                ]}
              >
                <View style={styles.menuItemLeft}>
                  <Ionicons name={item.icon} size={24} color={Colors.text} />
                  <Text style={styles.menuItemText}>{item.title}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={20} color={Colors.error} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.backgroundLight },
  profileHeader: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingVertical: Layout.spacing.xl,
    marginBottom: Layout.spacing.lg,
  },
  avatarLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Layout.spacing.md,
  },
  profileName: { fontSize: 24, fontWeight: 'bold', color: Colors.text, marginBottom: Layout.spacing.xs },
  profileEmail: { fontSize: 14, color: Colors.textSecondary, marginBottom: Layout.spacing.xs },
  profileUnit: { fontSize: 14, color: Colors.primary, fontWeight: '500' },
  section: { paddingHorizontal: Layout.spacing.lg, marginBottom: Layout.spacing.lg },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: Colors.text, marginBottom: Layout.spacing.md },
  menuCard: { backgroundColor: Colors.white, borderRadius: Layout.borderRadius.lg, overflow: 'hidden' },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Layout.spacing.md,
  },
  menuItemBorder: { borderBottomWidth: 1, borderBottomColor: Colors.borderLight },
  menuItemLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  menuItemText: { fontSize: 16, color: Colors.text, marginLeft: Layout.spacing.md },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginHorizontal: Layout.spacing.lg,
    padding: Layout.spacing.md,
    borderRadius: Layout.borderRadius.lg,
    marginBottom: Layout.spacing.md,
  },
  logoutText: { fontSize: 16, color: Colors.error, fontWeight: '600', marginLeft: Layout.spacing.sm },
  version: { textAlign: 'center', fontSize: 12, color: Colors.textLight, marginBottom: Layout.spacing.xl },
});
