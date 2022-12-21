import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, FlatList, SafeAreaView } from 'react-native';


function CustomComponents() {

    type TBox = { sizea?: number, color?: string };

    const [sizea, setSizea] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [boxArray, setBoxArray] = useState<TBox[]>([]);

    const onSubmit = () => {
        if (sizea != undefined && color != undefined) {
            const newBox = {
                sizea: Number.parseInt(sizea),
                color: color,
            };
            setBoxArray([...boxArray, newBox]);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {boxArray.map(({ color, sizea }, i) =>
                    <Box key={i} sizea={sizea} color={color} />
                )}
                <TextInput
                    style={styles.input}
                    onChangeText={setSizea}
                    placeholder="Size"
                />
                <View style={styles.checks}>
                    <TouchableOpacity onPress={color => setColor('#ffc2bc')}>
                        <Check color='#ffc2bc'></Check>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={color => setColor('#fffdb9')}>
                        <Check color='#fffdb9'></Check>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={color => setColor('#cce2ff')}>
                        <Check color='#cce2ff'></Check>
                    </TouchableOpacity>
                </View>
                <Button
                    title='Add' onPress={onSubmit} color='#dac1e6' />
            </SafeAreaView>
        </TouchableWithoutFeedback >
    )
}

export default CustomComponents;

export const Check = (props: { color: any; }) => (
    <View style={{
        width: 60, height: 60, backgroundColor: props.color, margin: 5
    }} />
);

export const Box = ({ sizea = 30, color = 'red' }) => (
    <View style={{ width: sizea, height: sizea, backgroundColor: color }} />
);

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignContent: 'center',
        padding: 16,
    },
    input: {
        height: 100,
        width: 100,
        margin: 14,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        marginVertical: 16,
        fontSize: 24,
        marginLeft: 12,
    },
    error: {
        color: 'red',
        marginLeft: 12,

    },
    checks: {
        flexDirection: "row",
    },

});