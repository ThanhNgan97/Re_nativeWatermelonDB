import React, { useState, useLayoutEffect } from 'react';
import Feather from '@expo/vector-icons/Feather';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { supabase } from '../../lib/supabase';
import { useRouter,useNavigation } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import BackgroundScreen from '../../../BackgroundScreen'

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false); // Quản lý hiển thị mật khẩu
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const navigation = useNavigation();

  // const {width:number, height:number} = Dimensions.get('window');

  
  
  // Hide the header for this screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (

    
    <View style={styles.container}>
      <View style={styles.boder}>
         <BackgroundScreen/> 

      </View>
      <View>
        
      </View>

      <View style={styles.imageHello}>
        <Text style={styles.heading}>FINANCE APP</Text>
        <Text style={styles.subheading}>Welcome Back You've been missed!</Text>
      </View>

      <View style={{top:20}}>

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Enter Email"
          placeholderTextColor="#A3A3A3"
          autoCapitalize="none"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!isPasswordVisible} // Ẩn mật khẩu khi isPasswordVisible là false
          placeholder="Enter Password"
          placeholderTextColor="#A3A3A3"
          autoCapitalize="none"
          style={styles.input}
          
        />
          <View style={styles.iconUser}>
          <Feather name="user" size={30} color="grey" />
          </View>
        <TouchableOpacity 
          style={styles.eyeIcon} 
          onPress={() => setPasswordVisible(!isPasswordVisible)} // Thay đổi trạng thái
        >
          <AntDesign 
            name={isPasswordVisible ? 'eye' : 'eyeo'} // Icon mở mắt khi hiển thị mật khẩu
            size={28} 
            color="#A3A3A3" 
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => router.navigate('/forgot')}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
      </TouchableOpacity>

      <View style={styles.iconLock}>
        <AntDesign name="lock" size={33} color="grey" />
      </View>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={signInWithEmail}
        disabled={loading}
      >
        {/* <Text style={styles.signInButtonText}>SIGN IN</Text> */}
        <Text style={styles.signInButtonText}>{loading ? "Loading..." : "SIGN IN"}</Text>


      </TouchableOpacity>   

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.signUpText}>
          Create A New Account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="google" size={16} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
        <FontAwesome5 name="facebook-f" size={16} color="black" />
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

 

  imageStyle:{
    width:'auto',
    height:'auto',
    justifyContent: 'center',
    alignItems: 'center',
   

  },

  heading: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',

  },
  subheading: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    // color: '#6B6B6B',
  },
  inputContainer: {
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    paddingLeft:50,
    borderRadius: 50,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#007BFF',
    // textDecorationLine: 'underline',//chữ gạch chân
    fontWeight: 'bold',
  }
  ,
  signInButton: {
    backgroundColor: '#F43F5E', 
    paddingVertical: 15,
    borderRadius: 50,
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    textAlign: 'center',
    color: '#6B6B6B',
  },
  signUpLink: {
    color: '#000',
    fontWeight: 'bold',
  },
  orContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  orText: {
    color: '#6B6B6B',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  socialButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    width: 50,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 17,
    zIndex: 1,
    transform: [{ scale: 0.7 }]
  },

  iconUser:{
    position: 'absolute',
    left: 10,
    bottom:95,
    zIndex: 1,
    transform: [{ scale: 0.7 }]
  },

  iconLock:{
    position: 'absolute',
    left: 10,
    bottom: 275,
    zIndex: 1,
    transform: [{ scale: 0.7 }]
  },

  boder:{
    height:270,
    width:411,
    position: 'absolute',
    bottom:620 //620
  },

  imageHello:{
    bottom:60,
  }


});


