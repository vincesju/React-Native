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
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={[styles.sectionTitle, { color: '#e67e22' }]}>
                        Review Information
                    </Text>
                    
                    <Text style={[styles.sectionDescription, { 
                        backgroundColor: '#fef9e7',
                        borderLeftColor: '#f39c12'
                    }]}>
                        Please review your information before submitting
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={[styles.sectionDescription, { backgroundColor: '#e8f8f5' }]}>
                        <Text style={{fontWeight: 'bold', color: '#16a085'}}>First Name: </Text>
                        {formData.first_name}
                    </Text>
                    <Text style={[styles.sectionDescription, { backgroundColor: '#e8f8f5' }]}>
                        <Text style={{fontWeight: 'bold', color: '#16a085'}}>Last Name: </Text>
                        {formData.last_name}
                    </Text>
                    <Text style={[styles.sectionDescription, { backgroundColor: '#e8f8f5' }]}>
                        <Text style={{fontWeight: 'bold', color: '#16a085'}}>Email: </Text>
                        {formData.email}
                    </Text>
                    <Text style={[styles.sectionDescription, { backgroundColor: '#e8f8f5' }]}>
                        <Text style={{fontWeight: 'bold', color: '#16a085'}}>Password: </Text>
                        {formData.password}
                    </Text>
                    <Text style={[styles.sectionDescription, { backgroundColor: '#e8f8f5' }]}>
                        <Text style={{fontWeight: 'bold', color: '#16a085'}}>Gender: </Text>
                        {formData.gender}
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>← Go Back to Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonPrimary}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonText}>✓ Submit Registration</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}