import { StyleSheet, Text, View,Button, TextInput } from 'react-native';
import AccountListItem from '../../components/AccountListItem';
import AccountList from '../../components/AccountsList';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';
import database,{accountsCollection} from '../../db';
import Account from '../../model/Account';
import { useAuth } from '../../providers.tsx/AnthProvider';

export default function AccountsScreen() {
    const [name, setName] = useState('');
    const [cap, setCap] = useState('');
    const [tap, setTap] = useState('');

    const {user}=useAuth();


    const createAccount = async () => {
        // console.warn('create account, ', name);

        await database.write(async () => {
            await accountsCollection.create((account) =>{
                account.name = name;
                account.cap = Number.parseFloat(cap);
                account.tap = Number.parseFloat(tap); 
                account.userId=user?.id;
            })
        });

        setName('');
        setCap('');
        setTap('');
        
    };


    // const onTest = async () =>{
    //     await database.write(async () => {
    //         const accounts = await accountsCollection.query().fetch();
    //         const account = accounts[0];
    //         account.update(updateAccount => {
    //             updateAccount.name = '1234445';
    //         });
    //     });
    // };

    

  return (
    <View style={{gap: 5, padding: 5,}}>
      {/* <Text>Account</Text> */}
        <View style={styles.header}>
            <Text>Name</Text>
            <Text>Cap</Text>
            <Text>Tap</Text>
        </View>

    <AccountList/>

        <View style={styles.inputRow}>
            <TextInput 
                value = {name} 
                onChangeText={setName}
                placeholder="Name" 
                style={styles.input}/>

            <TextInput 
                value = {cap} 
                onChangeText={setCap}
                placeholder="Cap %" 
                style={styles.input}/>

            <TextInput 
                value = {tap} 
                onChangeText={setTap}
                placeholder="Tap %" 
                style={styles.input}/>

            <Entypo name="check" size={20} color="green" />
        </View>



    <Button title='Add Account' onPress={createAccount}/>
    {/* <Button title='Test update' onPress={onTest} /> */}

    </View>
  );
}


const styles = StyleSheet.create({
    header:{
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingVertical:10,
        
        
    },

    inputRow:{
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingVertical:10,
    },

    input:{
        flex:1, 
    }
});

function userAuth(): { user: any; } {
    throw new Error('Function not implemented.');
}
