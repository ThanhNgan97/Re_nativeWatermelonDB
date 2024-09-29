import { accountsCollection } from './../db/index';
// model/Post.js
import { Model } from '@nozbe/watermelondb'
import { date, field, readonly, text, writer, children, nochange } from '@nozbe/watermelondb/decorators'
import { allocationsCollection } from '../db';
import { Associations } from '@nozbe/watermelondb/Model';
import AccountAllocation from './AccountAllocation';

export default class Allocation extends Model {
  static table = 'allocations';
  static associations:Associations = {//chii ra kieu du lieu
    account_allocations: { type: 'has_many', foreignKey: 'allocation_id' },
  };


  
  @field('income') income: number;
  @readonly @date('create_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt:Date;
  @nochange @field('user_id') userId: string;
  // @writer static async create(income: number){
  //   return await allocationsCollection.create((newAllocation) =>{
  //     newAllocation.income = income;
  //   });
  // }


  @children('account_allocations') accountAllocations;
}