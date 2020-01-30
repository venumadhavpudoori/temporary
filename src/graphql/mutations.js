/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCardTypes = /* GraphQL */ `
  mutation CreateCardTypes(
    $input: CreateCardTypesInput!
    $condition: ModelCardTypesConditionInput
  ) {
    createCardTypes(input: $input, condition: $condition) {
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
export const updateCardTypes = /* GraphQL */ `
  mutation UpdateCardTypes(
    $input: UpdateCardTypesInput!
    $condition: ModelCardTypesConditionInput
  ) {
    updateCardTypes(input: $input, condition: $condition) {
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
export const deleteCardTypes = /* GraphQL */ `
  mutation DeleteCardTypes(
    $input: DeleteCardTypesInput!
    $condition: ModelCardTypesConditionInput
  ) {
    deleteCardTypes(input: $input, condition: $condition) {
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
export const createCardTypeFormField = /* GraphQL */ `
  mutation CreateCardTypeFormField(
    $input: CreateCardTypeFormFieldInput!
    $condition: ModelCardTypeFormFieldConditionInput
  ) {
    createCardTypeFormField(input: $input, condition: $condition) {
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
export const updateCardTypeFormField = /* GraphQL */ `
  mutation UpdateCardTypeFormField(
    $input: UpdateCardTypeFormFieldInput!
    $condition: ModelCardTypeFormFieldConditionInput
  ) {
    updateCardTypeFormField(input: $input, condition: $condition) {
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
export const deleteCardTypeFormField = /* GraphQL */ `
  mutation DeleteCardTypeFormField(
    $input: DeleteCardTypeFormFieldInput!
    $condition: ModelCardTypeFormFieldConditionInput
  ) {
    deleteCardTypeFormField(input: $input, condition: $condition) {
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
