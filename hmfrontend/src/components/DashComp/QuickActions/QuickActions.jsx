import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import styles from './QuickActionsStyles';
import COLORS from '../../../constants/colors';

const QuickActions = ({ data }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Pressable
      android_ripple={{ color: COLORS.surfaceAccent }}
      style={styles.card}
      onPress={() => {
        if (item.screen) {
          navigation.navigate(item.screen);
        }
      }}
    >
      <View style={styles.iconContainer}>
        <Icon source={item.icon} size={36} color={item.color} />
      </View>

      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Quick Actions</Text>

        <Pressable style={styles.viewAllContainer}>
          <Text style={styles.viewAll}>View All</Text>

          <Icon source="chevron-right" size={20} color={COLORS.primary} />
        </Pressable>
      </View>

      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default QuickActions;
