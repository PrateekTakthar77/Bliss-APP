import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
} from "react-native";

const SignUp = () => {
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleForgotPass = () => {
        console.log('Forgot Password clicked!');
    };

    const handleExistingCustomer = () => {
        console.log('Existing Customer');
    };
    return (
        <ScrollView>
            <View style={styles.body}>
                {/* <Headerr leftIcon={require("../assets/menu.png")} Search={require("../assets/lens.png")} /> */}
                <View>
                    <View style={styles.image}>
                        <Image source={require("../assets/logo.png")} style={styles.imageSize} />
                    </View>

                    <View style={styles.SignUpTitle}>
                        <Text style={styles.SignUpText}>Sign Up</Text>
                    </View>

                    {/* name */}
                    <TextInput
                        style={styles.NameInputbotton}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Name"
                        value={name}
                        onChangeText={text => setName(text)}
                    />

                    {/* Mobile No */}
                    <TextInput
                        style={styles.MobileNoInputbotton}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Mobile No."
                        value={mobileNumber}
                        onChangeText={text => setMobileNumber(text)}

                    />

                    {/* Email Id */}
                    <TextInput
                        style={styles.EmailIdInputbotton}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Email Id"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />

                    {/* password*/}
                    <TextInput
                        style={styles.PasswordInputbotton}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry
                    />

                    {/* Confirm Password*/}
                    <TextInput
                        style={styles.ConfirmPasswordInputbotton}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        secureTextEntry
                    />

                    <TouchableOpacity>
                        <View style={styles.SignUpButton}>
                            <Text style={styles.SignUpButtonText}>SIGN IN</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={handleForgotPass}>
                        <Text style={styles.ForgotPasswordText}>Forgot password?</Text>
                    </TouchableOpacity>

                    <View style={styles.line}></View>

                    <View style={styles.ExistingCustomer}>
                        <Text style={styles.ExistingCustomerText}>Are you Existing customer Click </Text>
                        <TouchableOpacity onPress={handleExistingCustomer}>
                            <Text style={styles.ExistingCustomerHereText}> here </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    // body: {
    //     backgroundColor: "white",
    // },

    image: {
        alignSelf: 'center'
    },

    imageSize: {
        width: 200,
        height: 300,
        resizeMode: "cover",
    },

    SignUpTitle: {
        fontSize: 18,
        alignSelf: 'center'
    },

    SignUpText: {
        fontSize: 23,
        marginTop: -30,
        marginBottom: 25,
        textAlign: "center",
        color: "black",
    },

    // Input Buttons CSS

    //  Name Input Buttons
    NameInputbotton: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontSize: 13,
        width: "80%",
        marginTop: 20,
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
    },

    //  Mobile No Input Buttons
    MobileNoInputbotton: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontSize: 13,
        width: "80%",
        marginTop: 13,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        alignSelf: 'center',
    },

    //  Email Id Input Buttons
    EmailIdInputbotton: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginBottom: 5,
        lineHeight: 25,
        fontSize: 13,
        marginTop: 13,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        width: '80%',
        borderWidth: 0,
        alignSelf: 'center',
    },

    //  Password Input Buttons
    PasswordInputbotton: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginBottom: 5,
        lineHeight: 25,
        fontSize: 13,
        width: "80%",
        alignSelf: 'center',
        marginTop: 13,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
    },
    //  Confirm password Input Buttons
    ConfirmPasswordInputbotton: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginBottom: 5,
        lineHeight: 25,
        fontSize: 13,
        width: '80%',
        marginTop: 13,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        alignSelf: 'center'
    },

    SignUpButton: {
        backgroundColor: "#eec06b",
        padding: 15,
        marginTop: 30,
        alignItems: "center",
        borderRadius: 80,
        width: 240,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center'
    },

    SignUpButtonText: {
        fontSize: 20,
        color: "black",
    },

    ForgotPasswordText: {
        fontSize: 14,
        color: "#a4a4a4",
        marginBottom: 35,
        textAlign: "center",
        marginTop: 20,
    },

    line: {
        width: "80%",
        height: 1,
        backgroundColor: "#a4a4a4",
        margin: 0,
        alignSelf: 'center'
    },

    ExistingCustomer: {
        flexDirection: "row",
        justifyContent: "center"
    },

    ExistingCustomerText: {
        textAlign: "center",
        paddingTop: 6
    },

    ExistingCustomerHereText: {
        textAlign: "center",
        paddingTop: 6,
        textDecorationLine: 'underline',
    }
});
