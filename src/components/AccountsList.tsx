import { FlatList } from "react-native";
import AccountListItem from "./AccountListItem";
import { useEffect, useState } from "react";
import { accountsCollection } from "../db";
import Account from "../model/Account";
import { withObservables } from '@nozbe/watermelondb/react';


 function AccountList({accounts} : {accounts: Account[]}){

    // const [accounts, setAccounts] = useState<Account[]>([]);


    // useEffect(() =>{
    //     const fetchAccounts = async () =>{
    //         const accounts = await accountsCollection.query().fetch();
    //         setAccounts(accounts);
    //     }
    //     fetchAccounts();
    // }, [])

    


    return(
        <FlatList 
            data={accounts}
            contentContainerStyle={{gap: 5 }}
            renderItem={({item}) => <AccountListItem account = {item}/>}
        />
    );
}

const enhance = withObservables([], (account) => ({
    accounts: accountsCollection.query(),
}));

// const EnhancedAccountList = enhance(AccountList);

// export default EnhancedAccountList;

export default enhance(AccountList);


// export default withObservables([], () => ({
//     accounts: accountsCollection.query(),
// }))(AccountList);


// export default enhance(AccountList);