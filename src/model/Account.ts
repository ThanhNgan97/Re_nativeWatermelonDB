// model/Post.js
import { Model } from '@nozbe/watermelondb'
import { field, nochange, text, readonly, date} from '@nozbe/watermelondb/decorators'


export default class Account extends Model {
  static table = 'accounts'

  @readonly @date('create_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt:Date;

  @text('name') name: string;
  @field('tap') tap: number;
  @field('cap') cap: number;

  // Other properties...@
  @nochange @field('user_id') userId: string;


}