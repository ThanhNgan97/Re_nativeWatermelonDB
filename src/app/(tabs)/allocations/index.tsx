import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import Allocation from '../../../model/Allocation';
import AllocationList from '../../../components/AllocationList';
import { useEffect } from 'react';
import { accountAllocationColection } from '../../../db';
import Feather from '@expo/vector-icons/Feather';
import { mySync } from '../../../db/sync';
import { Button } from '@rneui/themed';
import { supabase } from '../../../lib/supabase';
import *as Crypto from 'expo-crypto';
export default function HomeScreen() {
  const test =async () => {
    const res=await supabase.rpc('create_account',{
      _id:Crypto.randomUUID(),
      _user_id:Crypto.randomUUID(),
      _name: 'Example Name',
      _cap:1000.0,
      _tap:500.0,
      _created_at: new Date().toISOString(),
      _updated_at: new Date().toISOString(),
    });
      console.log(res);
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Allocations',
        headerRight: () =>(
          <Feather 
          name="refresh-cw" 
          size={20} 
          color="black" 
          onPress={mySync}/>
      ),
      }}/>

      <Button title='Test' onPress={test}/>

      <Link href="/allocations/new" asChild>
        <Text style={styles.button}>New Allocation</Text>
      </Link>

      <AllocationList/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  button: {
    backgroundColor: 'green',
    color:'white',
    margin: 10,
    padding:10,
    textAlign:'center',
    fontWeight:'bold',
    borderRadius: 5,
    overflow: 'hidden',

  },  
});