import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { Layout } from '../../constants/layout';

export default function MarketplaceScreen() {
  const items = [
    { id: 1, title: 'Office Chair', price: 150, seller: 'Unit 302', condition: 'Like New', category: 'Furniture' },
    { id: 2, title: 'Monitor 27"', price: 200, seller: 'Unit 405', condition: 'Good', category: 'Electronics' },
    { id: 3, title: 'Standing Desk', price: 300, seller: 'Unit 201', condition: 'New', category: 'Furniture' },
    { id: 4, title: 'Coffee Maker', price: 50, seller: 'Unit 508', condition: 'Good', category: 'Appliances' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Community Marketplace</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add-circle" size={32} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          {['All', 'Furniture', 'Electronics', 'Appliances', 'Services'].map((cat) => (
            <TouchableOpacity key={cat} style={styles.categoryChip}>
              <Text style={styles.categoryText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.itemsGrid}>
          {items.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <View style={styles.imagePlaceholder}>
                <Ionicons name="image-outline" size={48} color={Colors.textLight} />
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
                <View style={styles.itemDetails}>
                  <Text style={styles.itemCondition}>{item.condition}</Text>
                  <Text style={styles.itemSeller}>by {item.seller}</Text>
                </View>
                <TouchableOpacity style={styles.contactButton}>
                  <Ionicons name="chatbubble-outline" size={16} color={Colors.white} />
                  <Text style={styles.contactButtonText}>Contact</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.backgroundLight },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Layout.spacing.lg,
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.text },
  addButton: {},
  categories: { paddingHorizontal: Layout.spacing.lg, marginBottom: Layout.spacing.md },
  categoryChip: {
    backgroundColor: Colors.white,
    paddingHorizontal: Layout.spacing.md,
    paddingVertical: Layout.spacing.sm,
    borderRadius: Layout.borderRadius.xl,
    marginRight: Layout.spacing.sm,
  },
  categoryText: { fontSize: 14, color: Colors.text, fontWeight: '500' },
  itemsGrid: { paddingHorizontal: Layout.spacing.lg },
  itemCard: {
    backgroundColor: Colors.white,
    borderRadius: Layout.borderRadius.lg,
    marginBottom: Layout.spacing.md,
    overflow: 'hidden',
  },
  imagePlaceholder: {
    height: 150,
    backgroundColor: Colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemInfo: { padding: Layout.spacing.md },
  itemTitle: { fontSize: 16, fontWeight: '600', color: Colors.text, marginBottom: Layout.spacing.xs },
  itemPrice: { fontSize: 20, fontWeight: 'bold', color: Colors.primary, marginBottom: Layout.spacing.xs },
  itemDetails: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: Layout.spacing.sm },
  itemCondition: { fontSize: 12, color: Colors.success, fontWeight: '500' },
  itemSeller: { fontSize: 12, color: Colors.textSecondary },
  contactButton: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    padding: Layout.spacing.sm,
    borderRadius: Layout.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactButtonText: { color: Colors.white, fontSize: 14, fontWeight: '600', marginLeft: Layout.spacing.xs },
});
