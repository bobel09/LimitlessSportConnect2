import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>LimitlessSportConnect </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#B4B4B4"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="#B4B4B4"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 30,
    backgroundColor: '#4CAF50',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#B4B4B4',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  bottomText: {
    color: '#666',
    marginRight: 5,
  },
  signUpText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
