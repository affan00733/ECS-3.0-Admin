import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Dimensions
} from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { Picker } from '@react-native-picker/picker';

const height = Dimensions.get('window').height

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chap: [],
            chapterName: "",
            subject: "",
            chapterThumbnail: ""
        }
    }

    componentDidMount = async () => {
        await firestore()
            .collection('auth')
            .onSnapshot(querySnapshot => {
                const users = [];

                querySnapshot.forEach(documentSnapshot => {

                    users.push(
                        documentSnapshot.id,
                        // key: documentSnapshot.id,
                    );
                });

                console.log(users);
                this.setState({ chap: users })
                // console.log("newchap", users)
            })
    }


    handleSubmit = async () => {

        console.log("to be deleted", this.state.subject);
        await firestore()
            .collection('auth')
            .doc(this.state.subject)
            .delete()
            .then(() => {
                console.log('User deleted!');
                alert("User  added!")
                this.props.navigation.navigate("Home")
            });

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontWeight: "bold" }}>
                    Select USER
                </Text>
                <Picker
                    selectedValue={this.state.subject}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ subject: itemValue })
                    }
                >
                    {
                        this.state.chap.map((x, i) => {
                            return (
                                <Picker.Item label={x} value={x} key={i} />
                            )
                        })
                    }
                </Picker>

                <View style={styles.tab1}>
                    <TouchableOpacity
                        style={[styles.button,
                        {
                            marginRight: 30
                        }]}
                        onPress={() => this.handleSubmit()}
                    >
                        <Text
                            style={styles.buttonText}
                        >
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"

    },
    tab1: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 20
    },
    button: {
        borderColor: "#3498DB",
        backgroundColor: "#3498DB",
        borderRadius: 25,
        height: height * 0.1,
        width: height * 0.20,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8',
        color: "#3498DB",
    },
    buttonText: {
        fontWeight: "bold",
        color: "white"
    }
})