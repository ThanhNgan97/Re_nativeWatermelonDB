import { FlatList } from "react-native";
import AllocationsListItem from "./AllocationsListItem";
import { withObservables } from "@nozbe/watermelondb/react";
import Allocation from "../model/Allocation";
import { allocationsCollection } from "../db";
import { Q } from "@nozbe/watermelondb";


function AllocationsList({allocations}:{allocations: Allocation[]}){
    return(
        <FlatList 
        // style={{backgroundColor:'red'}}
        data={allocations} 
        contentContainerStyle={{gap: 10, padding: 10}}
        renderItem={({item}) => <AllocationsListItem allocation={item}/>}/>
    )
}

const enhance = withObservables([], () => ({
    allocations:allocationsCollection.query(Q.sortBy('create_at', Q.asc)),
}))

// 

export default enhance(AllocationsList);