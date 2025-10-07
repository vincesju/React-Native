import React from 'react';
import { View, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../style';
import axios from 'axios';

export default function Reviewpage({ route, navigation }) {
    const { formData } = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/registration/api/register/",
                formData
            );
            Alert.alert("Success", "User registered successfully");
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert("Error", "Registration failed");
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Review Information</Text>

                <Text style={styles.sectionDescription}>First Name: {formData.first_name}</Text>
                <Text style={styles.sectionDescription}>Last Name: {formData.last_name}</Text>
                <Text style={styles.sectionDescription}>Email: {formData.email}</Text>
                <Text style={styles.sectionDescription}>Password: {formData.password}</Text>
                <Text style={styles.sectionDescription}>Gender: {formData.gender}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Go back to edit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonPrimary}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}