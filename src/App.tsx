import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Hello from "./components/Hello";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default class App extends React.Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up src/App.tsx to start working on your app!</Text>
                <Hello count={this.state.count} />
                <Button title="Increment" onPress={this.increment} />
            </View>
        );
    }
}
