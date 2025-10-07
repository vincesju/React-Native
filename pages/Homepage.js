import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../style';

export default function Homepage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={[styles.sectionTitle, { marginVertical: 40, color: '#8e44ad' }]}>
                    Welcome to Our App
                </Text>
                
                <Text style={[styles.sectionDescription, { 
                    textAlign: 'center', 
                    backgroundColor: '#f8f9fa',
                    borderLeftColor: '#9b59b6' // Purple accent
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
            </View>
        </View>
    );
}