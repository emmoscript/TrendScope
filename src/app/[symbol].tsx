import { Text, View } from '@/src/components/Themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react'
import top5 from '@/assets/data/top5.json';
import StockListItem from '../components/StockListItem';

const StockDetails = () => {
  const { symbol } = useLocalSearchParams();
  const stock = top5[symbol];

  if (!stock) {
    return <Text>Stock with symbol {symbol} could not be found.</Text>
  }

  return (
    <View style= {{padding: 10}}>
      <Stack.Screen options={{title: stock.symbol, headerBackTitle: 'Stocks'}}/>
      <StockListItem stock={stock}/>
    </View>
  )
}

export default StockDetails;