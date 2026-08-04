import React, { useState } from 'react';
import { View } from 'react-native';

import {
  Text,
  TextInput,
  Menu,
  Button,
  Switch,
  Icon,
} from 'react-native-paper';

import styles from './GuestFormStyles';
import COLORS from '../../constants/colors';

const AdditionalInfoStep = ({ formData, setFormData }) => {
  const [idMenuVisible, setIdMenuVisible] = useState(false);

  const idTypes = [
    {
      label: 'Aadhar Card',
      value: 'Aadhar',
    },
    {
      label: 'Passport',
      value: 'Passport',
    },
    {
      label: 'Driving License',
      value: 'Driving License',
    },
    {
      label: 'PAN Card',
      value: 'PAN',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.headerContainer}>
        <Text style={styles.title}>Additional Guest Details</Text>

        <Text style={styles.subtitle}>
          Verify guest identity and record preferences for a smoother stay
          experience.
        </Text>
      </View>

      {/* Progress */}

      <View style={styles.progressContainer}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>Guest Profile Completion</Text>

          <Text style={styles.progressValue}>Step 2 of 2</Text>
        </View>

        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: '100%' }]} />
        </View>
      </View>

      {/* Identity */}

      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionIconContainer}>
            <Icon
              source="card-account-details-outline"
              size={21}
              color={COLORS.primary}
            />
          </View>

          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Identity Verification</Text>

            <Text style={styles.sectionSubtitle}>
              Government or travel identification
            </Text>
          </View>
        </View>

        <TextInput
          label="Nationality"
          mode="outlined"
          value={formData.nationality}
          left={<TextInput.Icon icon="flag-outline" color={COLORS.primary} />}
          style={styles.input}
          contentStyle={styles.inputContent}
          outlineStyle={styles.inputOutline}
          activeOutlineColor={COLORS.primary}
          outlineColor="#D6DEE9"
          textColor={COLORS.textPrimary}
          onChangeText={text =>
            setFormData({
              ...formData,
              nationality: text,
            })
          }
        />

        <Text style={styles.label}>ID Type</Text>

        <Menu
          visible={idMenuVisible}
          onDismiss={() => setIdMenuVisible(false)}
          anchor={
            <View style={styles.dropdownField}>
              <Button
                mode="text"
                icon="chevron-down"
                uppercase={false}
                contentStyle={styles.dropdownContent}
                labelStyle={styles.dropdownLabel}
                textColor={
                  formData.id_type ? COLORS.textPrimary : COLORS.placeholder
                }
                onPress={() => setIdMenuVisible(true)}
              >
                {formData.id_type
                  ? idTypes.find(item => item.value === formData.id_type)?.label
                  : 'Select ID Type'}
              </Button>
            </View>
          }
          mode="elevated"
          contentStyle={{
            backgroundColor: COLORS.white,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: COLORS.border,
            overflow: 'hidden',
            paddingVertical: 4,
            elevation: 5,
          }}
        >
          {idTypes.map(type => (
            <Menu.Item
              key={type.value}
              title={type.label}
              onPress={() => {
                setFormData({
                  ...formData,
                  id_type: type.value,
                });

                setIdMenuVisible(false);
              }}
              containerStyle={{ width: 300 }}
              titleStyle={{ color: COLORS.black }}
            />
          ))}
        </Menu>
        <TextInput
          label="ID Number"
          mode="outlined"
          value={formData.id_number}
          left={
            <TextInput.Icon
              icon="card-account-details-outline"
              color={COLORS.primary}
            />
          }
          style={styles.input}
          contentStyle={styles.inputContent}
          outlineStyle={styles.inputOutline}
          activeOutlineColor={COLORS.primary}
          outlineColor="#D6DEE9"
          textColor={COLORS.textPrimary}
          onChangeText={text =>
            setFormData({
              ...formData,
              id_number: text,
            })
          }
        />
      </View>

      {/* Address */}

      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionIconContainer}>
            <Icon
              source="map-marker-outline"
              size={22}
              color={COLORS.primary}
            />
          </View>

          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Residential Address</Text>

            <Text style={styles.sectionSubtitle}>
              Guest's residential address
            </Text>
          </View>
        </View>

        <TextInput
          label="Street Address"
          mode="outlined"
          multiline
          numberOfLines={3}
          value={formData.address}
          style={styles.input}
          contentStyle={styles.inputContent}
          outlineStyle={styles.inputOutline}
          activeOutlineColor={COLORS.primary}
          outlineColor="#D6DEE9"
          textColor={COLORS.textPrimary}
          onChangeText={text =>
            setFormData({
              ...formData,
              address: text,
            })
          }
        />

        <TextInput
          label="City"
          mode="outlined"
          value={formData.city}
          style={styles.input}
          contentStyle={styles.inputContent}
          outlineStyle={styles.inputOutline}
          activeOutlineColor={COLORS.primary}
          outlineColor="#D6DEE9"
          textColor={COLORS.textPrimary}
          onChangeText={text =>
            setFormData({
              ...formData,
              city: text,
            })
          }
        />

        <TextInput
          label="State"
          mode="outlined"
          value={formData.state}
          style={styles.input}
          contentStyle={styles.inputContent}
          outlineStyle={styles.inputOutline}
          activeOutlineColor={COLORS.primary}
          outlineColor="#D6DEE9"
          textColor={COLORS.textPrimary}
          onChangeText={text =>
            setFormData({
              ...formData,
              state: text,
            })
          }
        />

        <TextInput
          label="Country"
          mode="outlined"
          value={formData.country}
          style={styles.input}
          contentStyle={styles.inputContent}
          outlineStyle={styles.inputOutline}
          activeOutlineColor={COLORS.primary}
          outlineColor="#D6DEE9"
          textColor={COLORS.textPrimary}
          onChangeText={text =>
            setFormData({
              ...formData,
              country: text,
            })
          }
        />

        <TextInput
          label="ZIP Code"
          mode="outlined"
          keyboardType="numeric"
          maxLength={10}
          value={formData.zip_code}
          style={styles.input}
          contentStyle={styles.inputContent}
          outlineStyle={styles.inputOutline}
          activeOutlineColor={COLORS.primary}
          outlineColor="#D6DEE9"
          textColor={COLORS.textPrimary}
          onChangeText={text =>
            setFormData({
              ...formData,
              zip_code: text.replace(/[^0-9]/g, ''),
            })
          }
        />
      </View>

      {/* Preferences */}

      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionIconContainer}>
            <Icon source="star-outline" size={21} color={COLORS.primary} />
          </View>

          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Guest Preferences</Text>

            <Text style={styles.sectionSubtitle}>
              Special recognition and notes
            </Text>
          </View>
        </View>

        <View style={styles.vipCard}>
          <View style={styles.switchContent}>
            <View style={styles.switchLabelRow}>
              <Text style={styles.switchLabel}>⭐ VIP Guest</Text>
            </View>

            <Text style={styles.switchDescription}>
              Mark this guest for priority service.
            </Text>
          </View>

          <Switch
            value={formData.vip_status}
            onValueChange={value =>
              setFormData({
                ...formData,
                vip_status: value,
              })
            }
          />
        </View>

        <TextInput
          label="Notes"
          mode="outlined"
          multiline
          numberOfLines={5}
          value={formData.notes}
          style={[styles.input, styles.notesInput]}
          contentStyle={styles.inputContent}
          outlineStyle={styles.inputOutline}
          activeOutlineColor={COLORS.primary}
          outlineColor="#D6DEE9"
          textColor={COLORS.textPrimary}
          onChangeText={text =>
            setFormData({
              ...formData,
              notes: text,
            })
          }
        />
      </View>

      <Text style={styles.stepText}>Step 2 of 2</Text>
    </View>
  );
};

export default AdditionalInfoStep;
