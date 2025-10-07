import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../style';

export default function Homepage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={[styles.sectionTitle, { color: '#8e44ad' }]}>
                    Welcome to Our App
                </Text>
                
                <Text style={[styles.sectionDescription, { 
                    textAlign: 'center', 
                    backgroundColor: '#f8f9fa',
                    borderLeftColor: '#9b59b6'
                }]}>
                    Join our community today! Register to get started.
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonPrimary}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonText}>Get Started - Register Now</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonSecondary}
                    onPress={() => navigation.navigate('UserList')}
                >
                    <Text style={styles.buttonText}>View Registered Users</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}