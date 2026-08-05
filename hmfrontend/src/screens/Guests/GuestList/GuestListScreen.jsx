import React, { useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

import styles from './GuestListScreenStyles';

import ScreenHeader from '../../../components/ScreenHeader/ScreenHeader';
import CommonSearchBar from '../../../components/CommonSearchBar/CommonSearchBar';
import LoadingView from '../../../components/LoadingView/LoadingView';
import EmptyState from '../../../components/EmptyState/EmptyState';
import GuestCard from '../../../components/GuestCard/GuestCard';

import GuestService from '../../../services/guestService';

const GuestListScreen = ({ navigation }) => {
  const [guests, setGuests] = useState([]);

  const [loading, setLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  const [search, setSearch] = useState('');

  const [showSearch, setShowSearch] = useState(false);

  const loadGuests = async () => {
    try {
      setLoading(true);

      const response = await GuestService.getAll();

      if (response.success) {
        setGuests(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadGuests();
  };

  useFocusEffect(
    useCallback(() => {
      loadGuests();
    }, []),
  );

  const filteredGuests = guests.filter(item => {
    const keyword = search.toLowerCase();

    const guestName = `${item.first_name || ''} ${
      item.last_name || ''
    }`.toLowerCase();

    return (
      guestName.includes(keyword) ||
      item.mobile?.includes(search) ||
      item.email?.toLowerCase().includes(keyword) ||
      item.guest_code?.toLowerCase().includes(keyword)
    );
  });

  if (loading) {
    return <LoadingView message="Loading Guests..." />;
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Guests"
        subtitle="Manage guest records"
        onBackPress={() => navigation.goBack()}
        rightActions={[
          {
            icon: showSearch ? 'close' : 'magnify',
            onPress: () => setShowSearch(!showSearch),
          },
        ]}
      />

      {showSearch && (
        <CommonSearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search Guest..."
        />
      )}

      {filteredGuests.length === 0 ? (
        <EmptyState
          title="No Guests Found"
          subtitle="Create your first guest profile"
          buttonTitle="Add Guest"
          onPress={() => navigation.navigate('AddGuest')}
        />
      ) : (
        <FlatList
          data={filteredGuests}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          refreshing={refreshing}
          onRefresh={onRefresh}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <GuestCard
              item={item}
              onPress={() =>
                navigation.navigate('GuestDetails', {
                  guestId: item.id,
                })
              }
            />
          )}
        />
      )}

      <FAB
        icon="plus"
        label="Add Guest"
        style={styles.fab}
        onPress={() => navigation.navigate('AddGuest')}
      />
    </View>
  );
};

export default GuestListScreen;
