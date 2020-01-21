/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCardTypes = `subscription OnCreateCardTypes {
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
export const onUpdateCardTypes = `subscription OnUpdateCardTypes {
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
export const onDeleteCardTypes = `subscription OnDeleteCardTypes {
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
export const onCreateCardTypeFormField = `subscription OnCreateCardTypeFormField {
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
export const onUpdateCardTypeFormField = `subscription OnUpdateCardTypeFormField {
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
export const onDeleteCardTypeFormField = `subscription OnDeleteCardTypeFormField {
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
