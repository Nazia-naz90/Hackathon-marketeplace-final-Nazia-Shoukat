import { type SchemaTypeDefinition } from 'sanity'

import { productdetails } from '../productDetails'
import { product } from '../product'
import { order } from '../order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,productdetails,order],
}

