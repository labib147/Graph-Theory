import { buildSchema, Source } from 'graphql';

const source = new Source(/* GraphQL */`
schema {
  query: Query
  subscription: Subscription
}

directive @entity on OBJECT

directive @derivedFrom(field: String) on FIELD_DEFINITION

directive @subgraphId(id: String) on OBJECT

scalar BigDecimal

scalar BigInt

input Block_height {
  hash: Bytes
  number: Int
  number_gte: Int
}

scalar Bytes

type Gravatar {
  id: ID!
  owner: Bytes
  displayName: String
  imageUrl: String
  accepted: Boolean
}

input Gravatar_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  owner: Bytes
  owner_not: Bytes
  owner_in: [Bytes!]
  owner_not_in: [Bytes!]
  owner_contains: Bytes
  owner_not_contains: Bytes
  displayName: String
  displayName_not: String
  displayName_gt: String
  displayName_lt: String
  displayName_gte: String
  displayName_lte: String
  displayName_in: [String!]
  displayName_not_in: [String!]
  displayName_contains: String
  displayName_not_contains: String
  displayName_starts_with: String
  displayName_not_starts_with: String
  displayName_ends_with: String
  displayName_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_gt: String
  imageUrl_lt: String
  imageUrl_gte: String
  imageUrl_lte: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  accepted: Boolean
  accepted_not: Boolean
  accepted_in: [Boolean!]
  accepted_not_in: [Boolean!]
}

enum Gravatar_orderBy {
  id
  owner
  displayName
  imageUrl
  accepted
}

enum OrderDirection {
  asc
  desc
}

type Query {
  gravatar(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Gravatar
  gravatars(
    skip: Int = 0
    first: Int = 100
    orderBy: Gravatar_orderBy
    orderDirection: OrderDirection
    where: Gravatar_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Gravatar!]!
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type Subscription {
  gravatar(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Gravatar
  gravatars(
    skip: Int = 0
    first: Int = 100
    orderBy: Gravatar_orderBy
    orderDirection: OrderDirection
    where: Gravatar_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Gravatar!]!
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type _Block_ {
  """The hash of the block"""
  hash: Bytes
  """The block number"""
  number: Int!
}

"""The type for the top-level _meta field"""
type _Meta_ {
  """
  Information about a specific subgraph block. The hash of the block
  will be null if the _meta field has a block constraint that asks for
  a block number. It will be filled if the _meta field has no block constraint
  and therefore asks for the latest  block
  
  """
  block: _Block_!
  """The deployment ID"""
  deployment: String!
  """If \`true\`, the subgraph encountered indexing errors at some past block"""
  hasIndexingErrors: Boolean!
}

enum _SubgraphErrorPolicy_ {
  """Data will be returned even if the subgraph has indexing errors"""
  allow
  """If the subgraph has indexing errors, data will be omitted. The default."""
  deny
}

`, `.graphclient/sources/gravatar/schema.graphql`);

export default buildSchema(source, {
  assumeValid: true,
  assumeValidSDL: true
});