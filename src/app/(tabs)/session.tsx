import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';
import { useNavigation } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function SessionScreen() {
  const { user, logout } = useAuth();
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCancelPressed, setCancelPressed] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleLogoutPress = () => {
    setModalVisible(true);
  };

  const confirmLogout = () => {
    setModalVisible(false);
    logout();
  };

  return (
    <View style={styles.container}>
      {/* Blue Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.iconCircle}>
        <AntDesign name="user" size={50} color="#f43f5e" style={{bottom:2}}/>
      </View>
      <Text style={styles.title}></Text>

      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <FontAwesome6 name="user-large" size={24} color="#6B6B6B" />
          <Text style={styles.value}>{user.user_metadata.userName || 'User Name'}</Text>
        </View>

        <View style={styles.row}>
          <MaterialIcons name="phone" size={24} color="#6B6B6B" />
          <Text style={styles.value}>{user.user_metadata.phoneNumber || 'Phone Number'}</Text>
        </View>

        <View style={styles.row}>
          <MaterialIcons name="email" size={24} color="#6B6B6B" />
          <Text style={styles.value}>{user?.email || 'Email'}</Text>
        </View>
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
                onPressIn={() => setCancelPressed(true)}
                onPressOut={() => setCancelPressed(false)}
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
  header: {
    backgroundColor: '#f43f5e', // Blue color for the header
    height: 140, // Adjust height as needed
    justifyContent: 'center',
    alignItems: 'center',
    width:411,
    right:30,
    bottom:189
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',//tu than canh giua
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
    bottom:310
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  value: {
    fontSize: 18,
    color: '#111',
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#F43f5e',
    paddingVertical: 15,
    borderRadius: 50,
    bottom:-50
  },
  logoutButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    backgroundColor: '#757575',
  },
  cancelButtonText: {
    color: '#FFF',
    fontSize: 16,
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
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginBottom: 20,
    alignSelf: 'center',
    bottom:230,
    borderColor:"#f43f5e"
  },
});
