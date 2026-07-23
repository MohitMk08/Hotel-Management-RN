import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';

import styles from './RoomStatusStyles';

const RoomStatus = ({ data }) => {
  const renderItem = ({ item, index }) => (
    <View style={styles.itemWrapper}>
      <View style={styles.item}>
        <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
          <Icon source={item.icon} size={20} color="#FFFFFF" />
        </View>

        <View style={styles.contentBlock}>
          <Text style={styles.count}>{item.value}</Text>

          <Text
            style={[styles.label, { color: item?.color }]}
            numberOfLines={3}
          >
            {item.title}
          </Text>
        </View>
      </View>

      {index !== data.length - 1 && <View style={styles.divider} />}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Room Status</Text>

        <Pressable style={styles.viewAllContainer}>
          <Text style={styles.viewAll}>View All</Text>

          <Icon source="chevron-right" size={20} color="#2563EB" />
        </Pressable>
      </View>

      <View style={styles.card}>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

export default RoomStatus;
