import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes'

export const FocusHistory = ({ history }) => {

if (!history || !history.length) return <Text style={styles.title}>we haven't Focused on Anything yet!</Text>;

const renderItem = ({item}) => <Text style={styles.item}>-> {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've Focused on:</Text>
      <FlatList 
      data={history}
      renderItem = {renderItem}
      />
    </View>
  )
}


const styles = ({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold'
  },
  item: {
    fontSizes: fontSizes.md,
    paddingTop: spacing.sm
  }
})