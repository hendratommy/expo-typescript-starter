import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    root: {
        margin: 12,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontWeight: "bold",
        color: "red"
    }
});

interface IProps {
    count: number;
}

export default class Hello extends React.Component<IProps> {
    getExclamationMarks = (count: number) => {
        return Array(count + 1).join("!");
    };

    render() {
        const { count } = this.props;
        return (
            <View style={styles.root}>
                <Text style={styles.text}>
                    Hello World{this.getExclamationMarks(count)}
                </Text>
            </View>
        );
    }
}
