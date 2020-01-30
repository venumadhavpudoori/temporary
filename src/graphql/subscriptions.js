/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCardTypes = /* GraphQL */ `
  subscription OnCreateCardTypes {
    onCreateCardTypes {
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
export const onUpdateCardTypes = /* GraphQL */ `
  subscription OnUpdateCardTypes {
    onUpdateCardTypes {
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
export const onDeleteCardTypes = /* GraphQL */ `
  subscription OnDeleteCardTypes {
    onDeleteCardTypes {
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
export const onCreateCardTypeFormField = /* GraphQL */ `
  subscription OnCreateCardTypeFormField {
    onCreateCardTypeFormField {
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
export const onUpdateCardTypeFormField = /* GraphQL */ `
  subscription OnUpdateCardTypeFormField {
    onUpdateCardTypeFormField {
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
export const onDeleteCardTypeFormField = /* GraphQL */ `
  subscription OnDeleteCardTypeFormField {
    onDeleteCardTypeFormField {
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
