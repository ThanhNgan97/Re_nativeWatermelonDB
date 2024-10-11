import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';
import { useNavigation } from 'expo-router';

export default function SessionScreen() {
  const { user, logout } = useAuth();
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const [isCancelPressed, setCancelPressed] = useState(false); // State to manage color change

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleLogoutPress = () => {
    setModalVisible(true); // Show confirmation modal
  };

  const confirmLogout = () => {
    setModalVisible(false);
    logout(); // Execute the logout function
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user?.email}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutPress} activeOpacity={0.3}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      {/* Logout Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.iconContainer}>
              <Text style={styles.exclamationIcon}>⚠️</Text>
            </View>
            <Text style={styles.modalText}>Do you want to log out?</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.cancelButton, isCancelPressed && styles.cancelButtonPressed]}
                onPressIn={() => setCancelPressed(true)}  // Trigger when button is pressed
                onPressOut={() => setCancelPressed(false)} // Trigger when button is released
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.confirmButton} onPress={confirmLogout}>
                <Text style={styles.confirmButtonText}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#111',
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#6B6B6B',
  },
  value: {
    fontSize: 18,
    color: '#111',
  },
  logoutButton: {
    backgroundColor: '#F43f5e',
    paddingVertical: 15,
    borderRadius: 50,
  },

  logoutButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent dark background
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#FFE0B2',
    borderRadius: 50,
    padding: 10,
    marginBottom: 15,
  },
  exclamationIcon: {
    fontSize: 40,
    color: '#F57C00',
  },
  modalText: {
    fontSize: 18,
    color: '#111',
    marginBottom: 25,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  cancelButton: {
    flex: 1,
    backgroundColor: '#9E9E9E',
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelButtonPressed: {
    backgroundColor: '#757575', // Darker color when pressed
  },

  cancelButtonText: {
    color: '#FFF',
    fontSize: 16, // Updated to make it visible
    fontWeight: 'bold',
  },

  confirmButton: {
    flex: 1,
    backgroundColor: '#F43F5E',
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
