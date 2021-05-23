import { Model } from 'objection'

export default class BaseService extends Model {
  static get modelPaths () {
    return [__dirname]
  }
}
