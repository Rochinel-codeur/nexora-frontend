import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, FontWeight, Spacing, BorderRadius, Shadows } from '../../src/constants/theme';

const MENU_ITEMS = [
  { icon: 'person-outline' as const, label: 'Edit Profile', route: '' },
  { icon: 'document-text-outline' as const, label: 'My CVs', route: '' },
  { icon: 'briefcase-outline' as const, label: 'Applications', route: '' },
  { icon: 'bookmark-outline' as const, label: 'Saved Jobs', route: '' },
  { icon: 'notifications-outline' as const, label: 'Job Alerts', route: '' },
  { icon: 'card-outline' as const, label: 'Subscription', route: '' },
  { icon: 'settings-outline' as const, label: 'Settings', route: '' },
];

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <Pressable>
          <Ionicons name="settings-outline" size={22} color={Colors.textSecondary} />
        </Pressable>
      </View>

      {/* User card */}
      <View style={styles.userCard}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={36} color={Colors.accent} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Eddy Fotso</Text>
          <Text style={styles.userEmail}>eddy@nexora.ai</Text>
        </View>
        <View style={styles.planBadge}>
          <Text style={styles.planText}>PRO</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Applications</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>85</Text>
          <Text style={styles.statLabel}>ATS Score</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Interviews</Text>
        </View>
      </View>

      {/* Menu */}
      <View style={styles.menuContainer}>
        {MENU_ITEMS.map((item, index) => (
          <Pressable key={index} style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name={item.icon} size={22} color={Colors.textPrimary} />
            </View>
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={18} color={Colors.textTertiary} />
          </Pressable>
        ))}
      </View>

      {/* Logout */}
      <Pressable style={styles.logoutButton} onPress={() => router.replace('/(auth)/signin')}>
        <Ionicons name="log-out-outline" size={22} color={Colors.error} />
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { paddingTop: 56, paddingHorizontal: Spacing.xxl, paddingBottom: 32 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  headerTitle: { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.textPrimary },

  userCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.backgroundSecondary,
    borderRadius: BorderRadius.lg, padding: Spacing.lg, gap: Spacing.lg, marginBottom: Spacing.xxl,
  },
  avatar: {
    width: 56, height: 56, borderRadius: 28, backgroundColor: Colors.accent + '15',
    justifyContent: 'center', alignItems: 'center',
  },
  userInfo: { flex: 1, gap: 2 },
  userName: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  userEmail: { fontSize: FontSize.sm, color: Colors.textSecondary },
  planBadge: {
    backgroundColor: Colors.accent, borderRadius: 6, paddingHorizontal: Spacing.md, paddingVertical: 4,
  },
  planText: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, color: Colors.textWhite },

  statsRow: { flexDirection: 'row', gap: Spacing.md, marginBottom: Spacing.xxl },
  statCard: {
    flex: 1, backgroundColor: Colors.backgroundSecondary, borderRadius: BorderRadius.lg,
    padding: Spacing.lg, alignItems: 'center', gap: 4,
  },
  statNumber: { fontSize: FontSize.xxxl, fontWeight: FontWeight.extrabold, color: Colors.primary },
  statLabel: { fontSize: FontSize.xs, color: Colors.textSecondary, fontWeight: FontWeight.medium },

  menuContainer: {
    backgroundColor: Colors.backgroundSecondary, borderRadius: BorderRadius.lg,
    marginBottom: Spacing.xxl, overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row', alignItems: 'center', padding: Spacing.lg,
    gap: Spacing.lg, borderBottomWidth: 1, borderBottomColor: Colors.borderLight,
  },
  menuIconContainer: { width: 36, height: 36, borderRadius: BorderRadius.sm, backgroundColor: Colors.background, justifyContent: 'center', alignItems: 'center' },
  menuLabel: { flex: 1, fontSize: FontSize.lg, fontWeight: FontWeight.medium, color: Colors.textPrimary },

  logoutButton: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: Spacing.md,
    borderWidth: 1, borderColor: Colors.error + '40', borderRadius: BorderRadius.xl,
    paddingVertical: Spacing.lg, marginBottom: Spacing.xxl,
  },
  logoutText: { fontSize: FontSize.lg, fontWeight: FontWeight.semibold, color: Colors.error },
});
