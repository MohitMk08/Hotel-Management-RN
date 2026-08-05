import React, { useState } from 'react';
import { View, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Button, FAB } from 'react-native-paper';

import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import CommonSearchBar from '../../components/CommonSearchBar/CommonSearchBar';
import BookingList from '../../components/DashComp/BookingList/BookingList';
import FilterBottomSheet from '../../components/FilterBottomSheet/FilterBottomSheet';
import LoadingView from '../../components/LoadingView/LoadingView';

import styles from './BookingListStyles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const BookingListScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const [searchVisible, setSearchVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  const [bookings, setBookings] = useState([]);

  const [filterVisible, setFilterVisible] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState({
    status: [],
    roomType: [],
  });

  const filterSections = [
    {
      key: 'status',
      title: 'Booking Status',
      options: ['Confirmed', 'Checked In', 'Checked Out', 'Cancelled'],
    },
    {
      key: 'roomType',
      title: 'Room Type',
      options: ['Standard', 'Deluxe', 'Suite'],
    },
  ];

  const handleFilterSelect = (section, option) => {
    setSelectedFilters(prev => {
      const values = prev[section] || [];

      const exists = values.includes(option);

      return {
        ...prev,
        [section]: exists
          ? values.filter(item => item !== option)
          : [...values, option],
      };
    });
  };

  const toggleSearch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    if (searchVisible) {
      setSearch('');
      setSearchVisible(false);
    } else {
      setSearchVisible(true);
    }
  };

  if (loading) {
    return <LoadingView message="Loading bookings..." />;
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Bookings"
        subtitle="Manage hotel reservations"
        onBackPress={() => navigation.goBack()}
        // rightActions={[
        //   {
        //     icon: searchVisible ? 'close' : 'magnify',
        //     onPress: () => {
        //       if (searchVisible) {
        //         setSearch('');
        //         setSearchVisible(false);
        //       } else {
        //         setSearchVisible(true);
        //       }
        //     },
        //   },
        //   {
        //     icon: 'tune-variant',
        //     onPress: () => setFilterVisible(true),
        //   },
        // ]}

        rightActions={[
          {
            icon: searchVisible ? 'close' : 'magnify',
            onPress: toggleSearch,
          },
          {
            icon: 'tune-variant',
            onPress: () => setFilterVisible(true),
          },
        ]}
      />
      <View style={styles.content}>
        {searchVisible && (
          <CommonSearchBar
            value={search}
            onChangeText={setSearch}
            placeholder="Search bookings..."
            autoFocus
          />
        )}

        <BookingList
          bookings={bookings}
          title="All Bookings"
          showViewAll={false}
          onAddBooking={() => {
            // navigation.navigate('AddBooking');
          }}
        />
      </View>

      <FAB
        icon="plus"
        label="Add Booking"
        style={styles.fab}
        onPress={() => navigation.navigate('AddBooking')}
      />

      <FilterBottomSheet
        visible={filterVisible}
        onDismiss={() => setFilterVisible(false)}
        title="Filter Bookings"
        sections={filterSections}
        selected={selectedFilters}
        onSelect={handleFilterSelect}
        onApply={() => setFilterVisible(false)}
        onReset={() =>
          setSelectedFilters({
            status: [],
            roomType: [],
          })
        }
      />
    </View>
  );
};

export default BookingListScreen;
