import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { Layout } from '../../constants/layout';

export default function EventsScreen() {
  const events = [
    { id: 1, title: 'Networking Mixer', date: '2024-02-10', time: '6:00 PM', location: 'Rooftop', attendees: 24 },
    { id: 2, title: 'Yoga Class', date: '2024-02-12', time: '7:00 AM', location: 'Gym', attendees: 12 },
    { id: 3, title: 'Tech Talk', date: '2024-02-15', time: '5:30 PM', location: 'Meeting Room A', attendees: 18 },
  ];

  const amenities = [
    { id: 1, name: 'Conference Room', icon: 'briefcase', available: true },
    { id: 2, name: 'Gym', icon: 'barbell', available: true },
    { id: 3, name: 'Rooftop Terrace', icon: 'sunny', available: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          {events.map((event) => (
            <View key={event.id} style={styles.eventCard}>
              <View style={styles.eventDate}>
                <Text style={styles.eventDay}>{event.date.split('-')[2]}</Text>
                <Text style={styles.eventMonth}>FEB</Text>
              </View>
              <View style={styles.eventInfo}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <View style={styles.eventDetails}>
                  <Ionicons name="time-outline" size={14} color={Colors.textSecondary} />
                  <Text style={styles.eventDetailText}>{event.time}</Text>
                  <Ionicons name="location-outline" size={14} color={Colors.textSecondary} style={{ marginLeft: 12 }} />
                  <Text style={styles.eventDetailText}>{event.location}</Text>
                </View>
                <View style={styles.eventFooter}>
                  <Text style={styles.attendeesText}>{event.attendees} attending</Text>
                  <TouchableOpacity style={styles.rsvpButton}>
                    <Text style={styles.rsvpButtonText}>RSVP</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Book Amenities</Text>
          <View style={styles.amenitiesGrid}>
            {amenities.map((amenity) => (
              <TouchableOpacity key={amenity.id} style={styles.amenityCard}>
                <Ionicons name={amenity.icon} size={32} color={Colors.primary} />
                <Text style={styles.amenityName}>{amenity.name}</Text>
                <View style={[styles.availabilityBadge,
                  { backgroundColor: amenity.available ? Colors.success : Colors.error }]}>
                  <Text style={styles.availabilityText}>
                    {amenity.available ? 'Available' : 'Booked'}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.backgroundLight },
  section: { paddingHorizontal: Layout.spacing.lg, marginTop: Layout.spacing.lg },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: Colors.text, marginBottom: Layout.spacing.md },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: Layout.borderRadius.lg,
    padding: Layout.spacing.md,
    marginBottom: Layout.spacing.md,
  },
  eventDate: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: Layout.borderRadius.md,
    marginRight: Layout.spacing.md,
  },
  eventDay: { fontSize: 24, fontWeight: 'bold', color: Colors.white },
  eventMonth: { fontSize: 12, color: Colors.white, marginTop: Layout.spacing.xs },
  eventInfo: { flex: 1 },
  eventTitle: { fontSize: 16, fontWeight: '600', color: Colors.text, marginBottom: Layout.spacing.xs },
  eventDetails: { flexDirection: 'row', alignItems: 'center', marginBottom: Layout.spacing.sm },
  eventDetailText: { fontSize: 12, color: Colors.textSecondary, marginLeft: 4 },
  eventFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  attendeesText: { fontSize: 12, color: Colors.textSecondary },
  rsvpButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Layout.spacing.md,
    paddingVertical: Layout.spacing.xs,
    borderRadius: Layout.borderRadius.md,
  },
  rsvpButtonText: { color: Colors.white, fontSize: 12, fontWeight: '600' },
  amenitiesGrid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -Layout.spacing.xs },
  amenityCard: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: Layout.borderRadius.lg,
    padding: Layout.spacing.md,
    margin: Layout.spacing.xs,
    alignItems: 'center',
  },
  amenityName: { fontSize: 14, fontWeight: '600', color: Colors.text, marginTop: Layout.spacing.sm },
  availabilityBadge: {
    marginTop: Layout.spacing.sm,
    paddingHorizontal: Layout.spacing.sm,
    paddingVertical: Layout.spacing.xs,
    borderRadius: Layout.borderRadius.sm,
  },
  availabilityText: { fontSize: 10, color: Colors.white, fontWeight: '600' },
});
