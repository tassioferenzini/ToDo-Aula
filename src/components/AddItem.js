import React, { useState } from 'react';
import { View, Text, TextInput, Button, Keyboard } from 'react-native';

export default function addItem(props) {

    const [item, setItem] = useState('');

    return (
        <View>
            <Text>Entre com o próximo item</Text>
            <TextInput
                onChangeText={(textVal) => {
                    setItem(textVal);
                }}
                style={{
                    borderBottomColor: 'black',
                    backgroundColor: '#f4f4f4',
                    margin: 4,
                }}
            ></TextInput>
            <Button
                onPress={() => {
                    props.addItem(item);
                    Keyboard.dismiss();
                }}
                title="Salvar"
            ></Button>
        </View>
    );
}