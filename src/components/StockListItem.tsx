import { StyleSheet, Pressable } from "react-native";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";
import Colors from "../constants/Colors";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from "expo-router";

type Stock = {
    name: string;
    symbol: string;
    close: string;
    percent_change: string;
}

type StockListItem = {
    stock: Stock;
}

export default function StockListItem({stock}: StockListItem) {
  
  const change = Number.parseFloat(stock.percent_change);

  return (
    <Link href={`/${stock.symbol}`} asChild>
    <Pressable style={styles.container}>
        
        {/* Left Container */}
        <View style={{flex: 1, gap: 5}}>
            <Text style={styles.symbol}>
                {stock.symbol} 
                {'  '}
                <FontAwesome name="star-o" size={18} color="gray" />
            </Text>
            <Text style={{color: 'gray'}}>{stock.name}</Text>
        </View>
        
        {/* Right Container */}
        <View style={{alignItems: 'flex-end'}}>
            <MonoText>${Number.parseFloat(stock.close).toFixed(1)}</MonoText>
            <MonoText style={{color: change > 0 ? 'green' : 'red'}}>
                {change > 0 ? '+' : ''}
                {change.toFixed(1)}%
            </MonoText>
        </View>
    </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  symbol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
});