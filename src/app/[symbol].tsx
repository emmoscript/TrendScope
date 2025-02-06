import { Text, View } from '@/src/components/Themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react'
import top5 from '@/assets/data/top5.json';
import StockListItem from '../components/StockListItem';
import Graph from '../components/Graph';
import { useQuery, gql } from '@apollo/client';
import { ActivityIndicator } from 'react-native';

const query = gql`
  query MyQuery($symbol: String) {
    quote(symbol: $symbol) {
      name
      symbol
      close
      percent_change
    }
  }
`

const StockDetails = () => {
  const { symbol } = useLocalSearchParams();

  const { data, loading, error } = useQuery(
    query, 
    {variables: {symbol}}
  );

  if (loading) {
    return <ActivityIndicator/>
  }

  if (error) {
    return <Text>Stock with symbol {symbol} could not be found.</Text>
  }
  
  const stock = data.quote;

  return (
    <View style= {{padding: 10}}>
      <Stack.Screen options={{title: stock.symbol, headerBackTitle: 'Stocks'}}/>
      <StockListItem stock={stock}/>
      <Graph/>
    </View>
  )
}

export default StockDetails;