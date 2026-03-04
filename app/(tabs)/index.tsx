import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, FontWeight, Spacing, BorderRadius, Shadows } from '../../src/constants/theme';

const RECOMMENDED_JOBS = [
  {
    id: '1',
    title: 'Senior UI Designer',
    company: 'Stripe',
    location: 'San Francisco (Remote)',
    salary: '$140k - $190k',
    isNew: true,
    icon: 'color-palette' as const,
    iconBg: '#6366F1',
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Airbnb',
    location: 'New York',
    salary: '$160k - $210k',
    isNew: false,
    icon: 'cube' as const,
    iconBg: '#EC4899',
  },
  {
    id: '3',
    title: 'Data Analyst',
    company: 'Google',
    location: 'London (Remote)',
    salary: '$120k - $160k',
    isNew: true,
    icon: 'stats-chart' as const,
    iconBg: '#10B981',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning 👋</Text>
          <Text style={styles.userName}>Welcome back, Eddy</Text>
        </View>
        <Pressable style={styles.notifButton}>
          <Ionicons name="notifications" size={22} color={Colors.primary} />
          <View style={styles.notifDot} />
        </Pressable>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={Colors.textTertiary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search jobs, roles, or skills..."
          placeholderTextColor={Colors.textTertiary}
        />
      </View>

      {/* AI Workspace */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>AI Workspace</Text>
      </View>
      <View style={styles.aiWorkspace}>
        {/* ATS CV Analysis */}
        <Pressable style={[styles.aiCard, { backgroundColor: Colors.backgroundSecondary }]}
          onPress={() => router.push('/(tabs)/interview')}
        >
          <View style={[styles.aiCardIcon, { backgroundColor: Colors.accent + '20' }]}>
            <Ionicons name="document-text" size={24} color={Colors.accent} />
          </View>
          <Text style={styles.aiCardTitle}>ATS CV Analysis</Text>
          <Text style={styles.aiCardSubtitle}>Optimize your profile</Text>
        </Pressable>

        {/* Start AI Interview */}
        <Pressable style={[styles.aiCard, { backgroundColor: Colors.primary }]}
          onPress={() => router.push('/(tabs)/interview')}
        >
          <View style={[styles.aiCardIcon, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
            <Ionicons name="mic" size={24} color={Colors.textWhite} />
          </View>
          <Text style={[styles.aiCardTitle, { color: Colors.textWhite }]}>Start AI Interview</Text>
          <Text style={[styles.aiCardSubtitle, { color: 'rgba(255,255,255,0.7)' }]}>Practice with AI</Text>
        </Pressable>
      </View>

      {/* Recommended Jobs */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommended Jobs</Text>
        <Pressable onPress={() => router.push('/(tabs)/jobs')}>
          <Text style={styles.seeAll}>See all</Text>
        </Pressable>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.jobsScrollContent}>
        {RECOMMENDED_JOBS.map((job) => (
          <Pressable
            key={job.id}
            style={styles.jobCard}
            onPress={() => router.push(`/job/${job.id}`)}
          >
            {job.isNew && (
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>NEW</Text>
              </View>
            )}
            <View style={[styles.jobIconContainer, { backgroundColor: job.iconBg }]}>
              <Ionicons name={job.icon} size={22} color={Colors.textWhite} />
            </View>
            <Text style={styles.jobTitle} numberOfLines={2}>{job.title}</Text>
            <Text style={styles.jobCompany}>{job.company} • {job.location}</Text>
            <Text style={styles.jobSalary}>{job.salary}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Quick Actions */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
      </View>
      <View style={styles.quickActions}>
        <Pressable style={styles.quickAction}>
          <View style={[styles.quickActionIcon, { backgroundColor: Colors.success + '15' }]}>
            <Ionicons name="sparkles" size={22} color={Colors.success} />
          </View>
          <Text style={styles.quickActionText}>Improve CV</Text>
        </Pressable>
        <Pressable style={styles.quickAction}>
          <View style={[styles.quickActionIcon, { backgroundColor: Colors.accent + '15' }]}>
            <Ionicons name="search" size={22} color={Colors.accent} />
          </View>
          <Text style={styles.quickActionText}>AI Search</Text>
        </Pressable>
        <Pressable style={styles.quickAction}>
          <View style={[styles.quickActionIcon, { backgroundColor: Colors.warning + '15' }]}>
            <Ionicons name="notifications" size={22} color={Colors.warning} />
          </View>
          <Text style={styles.quickActionText}>Job Alerts</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingTop: 56,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xxl,
    marginBottom: Spacing.xl,
  },
  greeting: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  userName: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
  },
  notifButton: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifDot: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.error,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.lg,
    height: 48,
    marginHorizontal: Spacing.xxl,
    marginBottom: Spacing.xxl,
    gap: Spacing.md,
  },
  searchInput: {
    flex: 1,
    fontSize: FontSize.md,
    color: Colors.textPrimary,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xxl,
    marginBottom: Spacing.lg,
    marginTop: Spacing.sm,
  },
  sectionTitle: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
  },
  seeAll: {
    fontSize: FontSize.md,
    color: Colors.accent,
    fontWeight: FontWeight.medium,
  },
  aiWorkspace: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.xxl,
    gap: Spacing.md,
    marginBottom: Spacing.xxl,
  },
  aiCard: {
    flex: 1,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    gap: Spacing.md,
  },
  aiCardIcon: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aiCardTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
  },
  aiCardSubtitle: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  jobsScrollContent: {
    paddingHorizontal: Spacing.xxl,
    gap: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  jobCard: {
    width: 170,
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    gap: Spacing.sm,
  },
  newBadge: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
    backgroundColor: Colors.success + '20',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  newBadgeText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.success,
  },
  jobIconContainer: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  jobTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
    lineHeight: 20,
  },
  jobCompany: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
  },
  jobSalary: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
    color: Colors.primary,
    marginTop: Spacing.xs,
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.xxl,
    gap: Spacing.md,
    marginBottom: Spacing.xxl,
  },
  quickAction: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.sm,
  },
  quickActionIcon: {
    width: 52,
    height: 52,
    borderRadius: BorderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickActionText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
});
