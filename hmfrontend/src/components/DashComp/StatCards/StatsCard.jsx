import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';

import styles from '../StatCards/StatsCardStyles';

const StatsCards = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View
          style={[styles.iconContainer, { backgroundColor: item.color + '15' }]}
        >
          <Icon source={item.icon} size={20} color={item.color} />
        </View>

        <Text style={styles.value}>{item.value}</Text>

        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      accessibilityHint="scroll"
      height="50"
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default StatsCards;
