import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, TextInput, Icon } from 'react-native-paper';

import styles from './GuestFormStyles';
import COLORS from '../../constants/colors';

const BasicInfoStep = ({ formData, setFormData }) => {
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.headerContainer}>
        <Text style={styles.title}>Add New Guest</Text>

        <Text style={styles.subtitle}>
          Create a complete guest profile before assigning a room or making a
          booking.
        </Text>
      </View>

      {/* Progress */}

      <View style={styles.progressContainer}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>Guest Profile Completion</Text>

          <Text style={styles.progressValue}>Step 1 of 2</Text>
        </View>

        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: '50%' }]} />
        </View>
      </View>

      {/* Personal Information */}

      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionIconContainer}>
            <Icon source="account-outline" size={22} color={COLORS.primary} />
          </View>

          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Personal Details</Text>

            <Text style={styles.sectionSubtitle}>
              Basic information about the guest
            </Text>
          </View>
        </View>

        <TextInput
          label="First Name *"
          value={formData.first_name}
          mode="outlined"
          outlineColor={COLORS.border}
          activeOutlineColor={COLORS.primary}
          textColor={COLORS.textPrimary}
          placeholderTextColor={COLORS.placeholder}
          style={styles.input}
          theme={{
            roundness: 16,
            colors: {
              primary: COLORS.primary,
              outline: COLORS.border,
              background: COLORS.surface,
            },
          }}
          onChangeText={text =>
            setFormData({
              ...formData,
              first_name: text,
            })
          }
        />

        <TextInput
          label="Last Name"
          value={formData.last_name}
          mode="outlined"
          outlineColor={COLORS.border}
          activeOutlineColor={COLORS.primary}
          textColor={COLORS.textPrimary}
          placeholderTextColor={COLORS.placeholder}
          style={styles.input}
          theme={{
            roundness: 16,
            colors: {
              primary: COLORS.primary,
              outline: COLORS.border,
              background: COLORS.surface,
            },
          }}
          onChangeText={text =>
            setFormData({
              ...formData,
              last_name: text,
            })
          }
        />

        <Text style={styles.label}>Gender</Text>

        <View style={styles.genderContainer}>
          {[
            {
              label: 'Male',
              icon: 'gender-male',
            },
            {
              label: 'Female',
              icon: 'gender-female',
            },
            {
              label: 'Other',
              icon: 'account-outline',
            },
          ].map(item => {
            const selected = formData.gender === item.label;

            return (
              <TouchableOpacity
                key={item.label}
                activeOpacity={0.9}
                onPress={() =>
                  setFormData({
                    ...formData,
                    gender: item.label,
                  })
                }
                style={[styles.genderPill, selected && styles.genderPillActive]}
              >
                <Icon
                  source={item.icon}
                  size={20}
                  color={selected ? COLORS.primary : COLORS.textSecondary}
                />

                <Text
                  style={[
                    styles.genderText,
                    selected && styles.genderTextActive,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Contact Information */}

      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionIconContainer}>
            <Icon source="phone-outline" size={22} color={COLORS.primary} />
          </View>

          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Contact Details</Text>

            <Text style={styles.sectionSubtitle}>
              How we can contact the guest
            </Text>
          </View>
        </View>

        <TextInput
          label="Mobile Number *"
          keyboardType="phone-pad"
          maxLength={15}
          value={formData.mobile}
          left={<TextInput.Icon icon="phone-outline" color={COLORS.primary} />}
          mode="outlined"
          outlineColor={COLORS.border}
          activeOutlineColor={COLORS.primary}
          textColor={COLORS.textPrimary}
          placeholderTextColor={COLORS.placeholder}
          style={styles.input}
          theme={{
            roundness: 16,
            colors: {
              primary: COLORS.primary,
              outline: COLORS.border,
              background: COLORS.surface,
            },
          }}
          onChangeText={text =>
            setFormData({
              ...formData,
              mobile: text.replace(/[^0-9]/g, ''),
            })
          }
        />

        <TextInput
          label="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.email}
          left={<TextInput.Icon icon="email-outline" color={COLORS.primary} />}
          mode="outlined"
          outlineColor={COLORS.border}
          activeOutlineColor={COLORS.primary}
          textColor={COLORS.textPrimary}
          placeholderTextColor={COLORS.placeholder}
          style={styles.input}
          theme={{
            roundness: 16,
            colors: {
              primary: COLORS.primary,
              outline: COLORS.border,
              background: COLORS.surface,
            },
          }}
          onChangeText={text =>
            setFormData({
              ...formData,
              email: text,
            })
          }
        />
      </View>

      {/* <Text style={styles.stepText}>Step 1 of 2</Text> */}
    </View>
  );
};

export default BasicInfoStep;
