import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import TimerStore from "../Store/Timer";
import { observer } from "mobx-react-lite";

TimerID;

const Timer = observer(() => {
    const [count, setIsCount] = useState(false);

    function startTimer() {
        console.log("count", count);
        if (!count) {
            timerID = setInterval(() => {
                TimerStore.startIncrease();
            }, 1000);
        }
        setIsCount(true);
    }
    function stopTimer() {
        console.log("pressed stopTimer", timerID);
        clearInterval(timerID);
        setIsCount(false);
    }
    function clearTimer() {
        if (count) {
            stopTimer();
        }
        TimerStore.clearTimer();
        setIsCount(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Timer</Text>
            <Text style={styles.textTimer}>
                Seconds passed: {TimerStore.secondsPassed}
            </Text>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonStyle}>
                    <Button onPress={() => startTimer()} title="Start" color="Blue" />
                </View>
                <View style={styles.buttonStyle}>
                    <Button onPress={() => stopTimer()} title="Stop" color="Blue" />
                </View>
                <View style={styles.buttonStyle}>
                    <Button onPress={() => clearTimer()} title="Clear" color="Blue" />
                </View>
            </View>
        </View>
    );
});

export default Timer;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: "center",
        margin: "10%",
        justifyContent: "center",
    },
    textTitle: {
        fontSize: 50,

        marginBottom: 10,
    },
    textTimer: {
        fontSize: 21,
        marginBottom: 10,
    },
    buttonStyle: {
        marginBottom: 10,
    },
    buttonsContainer: {
        flexDirection: "column",

        width: "80%",
    },
});
