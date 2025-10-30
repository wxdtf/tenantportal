import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { Layout } from '../../constants/layout';

export default function BillsScreen() {
  const bills = [
    { id: 1, type: 'Rent', amount: 2500, dueDate: '2024-02-01', status: 'Pending' },
    { id: 2, type: 'Utilities', amount: 150, dueDate: '2024-02-05', status: 'Pending' },
    { id: 3, type: 'Parking', amount: 100, dueDate: '2024-01-15', status: 'Paid' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Outstanding</Text>
          <Text style={styles.balanceAmount}>$2,650.00</Text>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>Pay All Bills</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Bills</Text>
          {bills.map((bill) => (
            <View key={bill.id} style={styles.billCard}>
              <View style={styles.billHeader}>
                <Ionicons name={bill.status === 'Paid' ? 'checkmark-circle' : 'card-outline'}
                  size={24} color={bill.status === 'Paid' ? Colors.success : Colors.warning} />
                <View style={styles.billInfo}>
                  <Text style={styles.billType}>{bill.type}</Text>
                  <Text style={styles.billDate}>Due: {bill.dueDate}</Text>
                </View>
                <Text style={styles.billAmount}>${bill.amount}</Text>
              </View>
              {bill.status === 'Pending' && (
                <TouchableOpacity style={styles.paySmallButton}>
                  <Text style={styles.paySmallButtonText}>Pay Now</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.backgroundLight },
  balanceCard: {
    backgroundColor: Colors.primary,
    margin: Layout.spacing.lg,
    padding: Layout.spacing.xl,
    borderRadius: Layout.borderRadius.lg,
    alignItems: 'center',
  },
  balanceLabel: { fontSize: 14, color: Colors.white, opacity: 0.9 },
  balanceAmount: { fontSize: 36, fontWeight: 'bold', color: Colors.white, marginVertical: Layout.spacing.md },
  payButton: {
    backgroundColor: Colors.white,
    paddingHorizontal: Layout.spacing.lg,
    paddingVertical: Layout.spacing.md,
    borderRadius: Layout.borderRadius.lg,
  },
  payButtonText: { color: Colors.primary, fontSize: 16, fontWeight: 'bold' },
  section: { paddingHorizontal: Layout.spacing.lg, marginBottom: Layout.spacing.lg },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: Colors.text, marginBottom: Layout.spacing.md },
  billCard: {
    backgroundColor: Colors.white,
    borderRadius: Layout.borderRadius.lg,
    padding: Layout.spacing.md,
    marginBottom: Layout.spacing.md,
  },
  billHeader: { flexDirection: 'row', alignItems: 'center' },
  billInfo: { flex: 1, marginLeft: Layout.spacing.md },
  billType: { fontSize: 16, fontWeight: '600', color: Colors.text },
  billDate: { fontSize: 12, color: Colors.textSecondary, marginTop: Layout.spacing.xs },
  billAmount: { fontSize: 18, fontWeight: 'bold', color: Colors.text },
  paySmallButton: {
    backgroundColor: Colors.primary,
    marginTop: Layout.spacing.md,
    padding: Layout.spacing.sm,
    borderRadius: Layout.borderRadius.md,
    alignItems: 'center',
  },
  paySmallButtonText: { color: Colors.white, fontSize: 14, fontWeight: '600' },
});
