import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [occupation, setOccupation] = useState('');
  const [gender, setGender] = useState('');

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleSave = () => {
    // Save action here
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.profileContainer}>
        <View style={styles.profileCircle}>
          <Image
            source={{ uri: 'https://example.com/profile.jpg' }}
            style={styles.profilePicture}
          />
        </View>
        <TouchableOpacity style={styles.cameraIconContainer}>
          <Icon name="add" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
        <Icon name="edit" size={20} color="#333333" style={styles.editIcon} />
      </View>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
        <Icon name="edit" size={20} color="#333333" style={styles.editIcon} />
      </View>

      {/* Birthdate Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={birthdate}
          onChangeText={setBirthdate}
          placeholder="Birthdate"
        />
        <Icon name="edit" size={20} color="#333333" style={styles.editIcon} />
      </View>

      {/* Occupation Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={occupation}
          onChangeText={setOccupation}
          placeholder="Occupation"
        />
        <Icon name="edit" size={20} color="#333333" style={styles.editIcon} />
      </View>

      {/* Gender Selection */}
      <View style={styles.genderContainer}>
        <TouchableOpacity onPress={() => handleGenderSelect('Male')} style={styles.genderOption}>
          <View
            style={[
              styles.radioCircle,
              gender === 'Male' && styles.selectedCircle,
              gender === 'Male' && { borderWidth: 0 }, // Loại bỏ border khi chọn
            ]}
          >
            {gender === 'Male' && <Icon name="check" size={14} color="#FFFFFF" />}
          </View>
          <Text style={styles.genderLabel}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGenderSelect('Female')} style={styles.genderOption}>
          <View
            style={[
              styles.radioCircle,
              gender === 'Female' && styles.selectedCircle,
              gender === 'Female' && { borderWidth: 0 }, // Loại bỏ border khi chọn
            ]}
          >
            {gender === 'Female' && <Icon name="check" size={14} color="#FFFFFF" />}
          </View>
          <Text style={styles.genderLabel}>Female</Text>
        </TouchableOpacity>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    top: 95,
    right: 115,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f43f5e',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  profileCircle: {
    width: 85,
    height: 85,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#f43f5e',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    right: 120,
    bottom: 40,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 35,
    backgroundColor: '#f43f5e',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    padding: 4,
    left: 80,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  editIcon: {
    marginLeft: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  selectedCircle: {
    backgroundColor: '#f43f5e',
  },
  genderLabel: {
    fontSize: 16,
    color: '#333333',
  },
  saveButton: {
    backgroundColor: '#f43f5e',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    bottom:-50
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
