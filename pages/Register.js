import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native';
import styles from '../style';

export default function Register({ navigation }) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        gender: "",
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleReview = () => {
        console.log("Navigating to Reviewpage with data:", formData);
        navigation.navigate('Reviewpage', { formData });
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#f0f8ff' }}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={[styles.sectionTitle, { color: '#27ae60' }]}>
                        User Registration
                    </Text>
                    
                    <Text style={[styles.sectionDescription, { 
                        backgroundColor: '#e8f6f3',
                        borderLeftColor: '#27ae60' // Green accent
                    }]}>
                        Please fill in all your details below
                    </Text>
                </View>

                <View style={styles.card}>
                    <TextInput
                        style={[styles.input, { borderColor: '#1abc9c' }]}
                        placeholder="First Name"
                        placeholderTextColor="#7f8c8d"
                        value={formData.first_name}
                        onChangeText={text => handleChange('first_name', text)}
                    />
                    
                    <TextInput
                        style={[styles.input, { borderColor: '#1abc9c' }]}
                        placeholder="Last Name"
                        placeholderTextColor="#7f8c8d"
                        value={formData.last_name}
                        onChangeText={text => handleChange('last_name', text)}
                    />
                    
                    <TextInput
                        style={[styles.input, { borderColor: '#1abc9c' }]}
                        placeholder="Email"
                        placeholderTextColor="#7f8c8d"
                        value={formData.email}
                        onChangeText={text => handleChange('email', text)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    
                    <TextInput
                        style={[styles.input, { borderColor: '#1abc9c' }]}
                        placeholder="Password"
                        placeholderTextColor="#7f8c8d"
                        secureTextEntry
                        value={formData.password}
                        onChangeText={text => handleChange('password', text)}
                        autoCapitalize="none"
                    />
                    
                    <TextInput
                        style={[styles.input, { borderColor: '#1abc9c' }]}
                        placeholder="Gender"
                        placeholderTextColor="#7f8c8d"
                        value={formData.gender}
                        onChangeText={text => handleChange('gender', text)}
                    />
                </View>
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.buttonSecondary}
                        onPress={handleReview}
                    >
                        <Text style={styles.buttonText}>Review and Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}