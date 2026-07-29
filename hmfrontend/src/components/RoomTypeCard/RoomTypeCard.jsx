import React from 'react';

import InfoCard from '../InfoCard/InfoCard';

const RoomTypeCard = ({ item, onEdit, onDelete }) => {
  return (
    <InfoCard
      title={item.type_name}
      subtitle="Standard Room"
      price={Number(item.base_price).toFixed(2)}
      capacity={item.max_capacity}
      bedType={item.bed_type || 'Standard'}
      description={item.description}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default RoomTypeCard;
