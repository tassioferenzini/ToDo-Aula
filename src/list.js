import React from 'react';
import { StyleSheet, Button, FlatList, TouchableOpacity, View, Text } from 'react-native';

export default function ListItem(props) {
    return (
        <View>
            <FlatList
                data={props.listItems}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity style={styles.opacity}>
                            <Text>
                                {item.task}
                            </Text>
                            <Button
                                title="Deletar"
                                onPress={() => {
                                    props.deleteItem(item.id);
                                }}
                            />
                        </TouchableOpacity>

                    </View>
                )}
            >
            </FlatList>
        </View>

    )

}

const styles = StyleSheet.create({
    opacity: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginTop: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
    },
});