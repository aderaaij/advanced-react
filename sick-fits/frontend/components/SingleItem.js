import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;
export default class SingleItem extends Component {
  // Can't get Query component to work
  render() {
    return <div />;
  }
}
