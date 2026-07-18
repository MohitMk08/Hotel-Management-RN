import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import styles from './QuickActionsStyles';

const QuickActions = ({ data }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Pressable
      android_ripple={{ color: '#E5E7EB' }}
      style={styles.card}
      onPress={() => {
        if (item.screen) {
          navigation.navigate(item.screen);
        }
      }}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: item.color + '15',
          },
        ]}
      >
        <Icon source={item.icon} size={28} color={item.color} />
      </View>

      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Quick Actions</Text>

        <Pressable>
          <Text style={styles.viewAll}>View All</Text>
        </Pressable>
      </View>

      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default QuickActions;
