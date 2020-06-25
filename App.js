import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BlinkText from './Component/BlinkText';
import Animations from './Component/Animations';
import Search from './Component/Search';
import Memoized from './Component/Memoized';


import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://YOUR_INTERNAL_IP_ADDRESS:4000/graphql" }),
  cache: new InMemoryCache()
})

export default class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <BlinkText text='blink module' />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Memoized />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Search />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animations />
          </View>
        </View>
      </ApolloProvider>
    );
  }
}
