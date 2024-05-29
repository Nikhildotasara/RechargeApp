
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';

// Importing SVG
import LogoSvg from "../../assests/logo.svg";

// Importing custom elements
import CustomCTA from '../../elements/CustomCTA';

// Import the custom hook
import { useTheme } from "../../utils/themeProvider.tsx"; // Adjust the path accordingly

// Function to get styles based on the theme
const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:theme=="dark"?"#011F3C":"white",
    },
    textContainer: {
        width: '80%',
        maxWidth: 400,
        height: '18%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    titleText: {
        fontSize: 30,
        fontWeight: '700',
        color: theme === 'dark' ? 'white' : 'black',
    },
    subtitleText: {
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 21.5,
        textAlign: 'center',
        color: theme === 'dark' ? 'white' : 'black',
    },
    buttonContainer: {
        width: '100%',
        maxWidth: 420,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '23%',
    },
});

function LoginUI(props) {
    const { handleSignIn, handleCreateAccount } = props;
    const { theme, toggleTheme } = useTheme(); // Use the theme and toggleTheme from context
    const styles = getStyles(theme);

    return (
        <View style={styles.container}>
            <LogoSvg />

            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Explore the app</Text>
                <Text style={styles.subtitleText}>Recharge Your Way, Anytime, Anywhere</Text>
            </View>

            <View style={styles.buttonContainer}>
                <CustomCTA onPress={handleSignIn} customText="Sign In" />
                <CustomCTA onPress={handleCreateAccount} color="white" customText="Create Account" />
                {/* <Button title="Toggle Theme" onPress={toggleTheme} /> */}
            </View>
        </View>
    );
}

LoginUI.propTypes = {
    handleSignIn: PropTypes.func.isRequired,
    handleCreateAccount: PropTypes.func.isRequired,
};

export default LoginUI;
