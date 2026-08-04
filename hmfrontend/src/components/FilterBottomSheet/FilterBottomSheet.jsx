import React from 'react';
import { View, ScrollView } from 'react-native';
import { Modal, Portal, Text, Chip, Button, Divider } from 'react-native-paper';

import styles from './FilterBottomSheetStyles';

const FilterBottomSheet = ({
  visible,
  onDismiss,
  title = 'Filters',

  sections = [],

  selected = {},

  onSelect,

  onApply,

  onReset,
}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modal}
      >
        <View style={styles.handle} />

        <Text style={styles.title}>{title}</Text>

        <Divider style={styles.divider} />

        <ScrollView showsVerticalScrollIndicator={false}>
          {sections.map(section => (
            <View key={section.key} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>

              <View style={styles.chipsContainer}>
                {section.options.map(option => {
                  // const active = selected[section.key] === option;
                  const active = selected[section.key]?.includes(option);

                  return (
                    <Chip
                      key={option}
                      mode={active ? 'flat' : 'outlined'}
                      selected={active}
                      onPress={() => onSelect(section.key, option)}
                      style={[styles.chip, active && styles.activeChip]}
                      textStyle={[
                        styles.chipText,
                        active && styles.activeChipText,
                      ]}
                    >
                      {option}
                    </Chip>
                  );
                })}
              </View>
            </View>
          ))}
        </ScrollView>

        <Divider style={styles.divider} />

        <View style={styles.footer}>
          <Button
            mode="text"
            labelStyle={{
              fontWeight: '700',
              fontSize: 15,
            }}
            onPress={onReset}
          >
            Reset
          </Button>

          <Button
            mode="contained"
            style={{
              borderRadius: 14,
            }}
            labelStyle={{
              fontWeight: '700',
              fontSize: 15,
            }}
            onPress={onApply}
          >
            Apply
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

export default FilterBottomSheet;
