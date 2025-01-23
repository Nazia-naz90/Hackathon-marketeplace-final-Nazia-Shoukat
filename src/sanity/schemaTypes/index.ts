import { type SchemaTypeDefinition } from 'sanity'

import { productdetails } from '../productDetails'
import { product } from '../product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,productdetails],
}

