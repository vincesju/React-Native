import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import styles from '../style';
import { API_URL } from '../config';

export default function EditUserPage({ route, navigation }) {
    const user = route?.params?.user;
    
    if (!user) {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={[styles.sectionTitle, { color: '#e74c3c' }]}>
                        Error
                    </Text>
                    <Text style={styles.sectionDescription}>
                        No user data provided
                    </Text>
                    <TouchableOpacity
                        style={styles.buttonPrimary}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const [firstName, setFirstName] = useState(user.first_name || '');
    const [lastName, setLastName] = useState(user.last_name || '');
    const [user_email, setEmail] = useState(user.email || '');
    const [user_gender, setGender] = useState(user.gender || '');
    const [user_password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleUpdate = async () => {
        if (!firstName || !lastName || !user_email || !user_gender) {
            alert("Please fill up all required fields.");
            return;
        }

        setLoading(true);

        const updateData = {
            first_name: firstName,
            last_name: lastName,
            email: user_email,
            gender: user_gender,
        };

        if (user_password) {
            updateData.password = user_password;
        }

        axios
            .put(`${API_URL}/registration/api/users/${user.id}/`, updateData)
            .then((response) => {
                alert("User updated successfully.");
                navigation.goBack();
            })
            .catch((error) => {
                console.error(error);
                alert("Failed to update user.");
            })
            .finally(() => {
                setLoading(false);
            });
    };
    
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={[styles.sectionTitle, { color: '#3498db' }]}>
                        Edit User Profile
                    </Text>
                    
                    <Text style={[styles.sectionDescription, { 
                        backgroundColor: '#ebf5fb',
                        borderLeftColor: '#3498db'
                    }]}>
                        Update user information below
                    </Text>
                </View>

                <View style={styles.card}>
                    <TextInput
                        style={[styles.input, { borderColor: '#3498db' }]}
                        placeholder="First Name"
                        placeholderTextColor="#7f8c8d"
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                    
                    <TextInput
                        style={[styles.input, { borderColor: '#3498db' }]}
                        placeholder="Last Name"
                        placeholderTextColor="#7f8c8d"
                        value={lastName}
                        onChangeText={setLastName}
                    />
                    
                    <TextInput
                        style={[styles.input, { borderColor: '#3498db' }]}
                        placeholder="Email"
                        placeholderTextColor="#7f8c8d"
                        value={user_email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    
                    <TextInput
                        style={[styles.input, { borderColor: '#3498db' }]}
                        placeholder="Gender"
                        placeholderTextColor="#7f8c8d"
                        value={user_gender}
                        onChangeText={setGender}
                    />
                    
                    <TextInput
                        style={[styles.input, { borderColor: '#3498db' }]}
                        placeholder="New Password"
                        placeholderTextColor="#7f8c8d"
                        secureTextEntry
                        value={user_password}
                        onChangeText={setPassword}
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.buttonPrimary, loading && { backgroundColor: '#7f8c8d' }]}
                        onPress={handleUpdate}
                        disabled={loading}
                    >
                        <Text style={styles.buttonText}>
                            {loading ? 'Updating...' : 'Update User'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}