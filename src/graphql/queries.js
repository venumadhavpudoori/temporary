/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCardTypes = /* GraphQL */ `
  query GetCardTypes($id: ID!) {
    getCardTypes(id: $id) {
      id
      cardTypeCategory
      cardTypeTitle
      cardTypeIcon
      cardTypeFormFields {
        items {
          id
          cardTypeFieldKey
          cardTypeFieldValue
        }
        nextToken
      }
    }
  }
`;
export const listCardTypess = /* GraphQL */ `
  query ListCardTypess(
    $filter: ModelCardTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCardTypess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cardTypeCategory
        cardTypeTitle
        cardTypeIcon
        cardTypeFormFields {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCardTypeFormField = /* GraphQL */ `
  query GetCardTypeFormField($id: ID!) {
    getCardTypeFormField(id: $id) {
      id
      cardTypeFieldKey
      cardTypeFieldValue
      cardType {
        id
        cardTypeCategory
        cardTypeTitle
        cardTypeIcon
        cardTypeFormFields {
          nextToken
        }
      }
    }
  }
`;
export const listCardTypeFormFields = /* GraphQL */ `
  query ListCardTypeFormFields(
    $filter: ModelCardTypeFormFieldFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCardTypeFormFields(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cardTypeFieldKey
        cardTypeFieldValue
        cardType {
          id
          cardTypeCategory
          cardTypeTitle
          cardTypeIcon
        }
      }
      nextToken
    }
  }
`;
