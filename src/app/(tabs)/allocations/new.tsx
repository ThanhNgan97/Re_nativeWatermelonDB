import { Stack,router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import database, { accountAllocationColection, accountsCollection, allocationsCollection } from '../../../db';
import { withObservables } from '@nozbe/watermelondb/react';
import Account from '../../../model/Account';
import Allocation from '../../../model/Allocation';
import { useAuth } from '../../../providers.tsx/AnthProvider';


function NewAllocationScreen({ accounts }: {accounts: Account[]}) {
  const [income, setIncome] = useState('0');

  const {user}=useAuth();

  const save = async () => {
    await database.write(async () => {
      const allocation = await allocationsCollection.create((newAllocation) =>{
        newAllocation.income = Number.parseFloat(income);
        newAllocation.userId = user?.id;
      });

      await Promise.all(  
            accounts.map(account => accountAllocationColection.create((item) => {
              item.account.set(account);
              item.allocation.set(allocation);
              item.cap= account.cap;
              item.amount= allocation.income * account.cap / 100;
              item.userId=user?.id;
          })
        )
      );

      
    });

    // Allocation.create(Number.parseFloat(income));

    setIncome('');
    router.back();
  };


  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:'New Allocations'}}/>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Income</Text>
          <TextInput value={income}
            onChangeText={setIncome}
            placeholder="$123"
            style={styles.input}
          />
      </View>

    {accounts.map((account) => (
      <View key={account.id} style={styles.inputRow}>
        <Text style={{flex: 1 }}>
          {account.name}: {account.cap}%
        </Text>

        <Text>
          {(Number.parseFloat(income) * account.cap) / 100 } nghìn đồng
        </Text>
      </View>
    ))}

      <Button title='save' onPress={save}/>


    </View>
  );
}



const enhance = withObservables([], () => ({
  accounts: accountsCollection.query(),
}));
export default enhance( NewAllocationScreen);


const styles = StyleSheet.create({
  container: {
    padding:10,
    gap:10,
  },

  inputRow:{
    
    flexDirection:'row',
    alignItems:'center',
    gap: 10,
  },

  label:{
    
    fontWeight:'bold',
    width:100,
  },
  input:{
    backgroundColor: 'white',
    padding:10,
    borderRadius: 5,
    flex:1,
  },

});