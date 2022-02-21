import AddItem from './src/components/AddItem';
import ListItems from './src/components/ListItems';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from "react";
import type { Node } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import RNBootSplash from "react-native-bootsplash";

const App: () => Node = () => {

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true, duration: 500 });
    });
  }, []);

  const [list, setList] = useState([]);

  const addItem = (text) => {
    const newItem = {
      id: uuidv4(),
      task: text,
    };
    setList([newItem, ...list]);
  };

  const DeleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Todo List</Text>
        <AddItem addItem={addItem}></AddItem>
        <ListItems deleteItem={DeleteItem} listItems={list}></ListItems>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '600',
  },
});


export default App;
