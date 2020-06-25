import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Text } from 'react-native';


const GrapghQl = ({ }) => {

  const GET_GREETING = gql`
    query getGreeting($language: String!) {
      greeting(language: $language) {
        message
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_GREETING, {
    variables: { language: 'english' },
  });

  if (loading) return <Text>Loading ...</Text>;
  return <Text>Hello {data.greeting.message}!</Text>;
}

export default GrapghQl