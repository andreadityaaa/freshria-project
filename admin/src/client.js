import { QoreClient } from '@feedloop/qore-client'
import config from '../qore.config.json'
import schema from '../qore.schema.json'

const client = new QoreClient({
  ...config,
  getToken: () => localStorage.getItem('token')
})
client.init(schema)

export default client
