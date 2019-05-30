import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field'

export default props => {
  // eslint-disable-next-line react/prop-types
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      // eslint-disable-next-line react/prop-types
      return <Field {...field} key={c} onOpen={() => props.onOpenField(r, c)} />
    })
    return (
      <View style={{ flexDirection: 'row' }} key={r}>
        {columns}
      </View>
    )
  })
  return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee'
  }
})
