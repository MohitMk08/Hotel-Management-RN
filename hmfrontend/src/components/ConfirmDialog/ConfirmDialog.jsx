import React from 'react';
import { Portal, Dialog, Paragraph, Button } from 'react-native-paper';

const ConfirmDialog = ({
  visible,
  title,
  message,
  onCancel,
  onConfirm,
  loading = false,
}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel} dismissable={!loading}>
        <Dialog.Title>{title}</Dialog.Title>

        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>

        <Dialog.Actions>
          <Button onPress={onCancel} disabled={loading}>
            Cancel
          </Button>

          <Button textColor="#D32F2F" loading={loading} onPress={onConfirm}>
            Delete
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ConfirmDialog;
