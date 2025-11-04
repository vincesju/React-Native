import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Alert, TouchableOpacity } from "react-native";
import axios from "axios";
import styles from '../style';
import { API_URL } from '../config';

export default function UserListPage({ navigation }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/registration/api/users/`)
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
                Alert.alert("Error", "Failed to load users");
            });
    }, []);

    const handleEdit = (user) => {
        navigation.navigate('EditUser', { user });
    };

    const handleDelete = (userId) => {
        const userConfirmed = window.confirm("Are you sure you want to delete this user?");

        if (userConfirmed) {
            axios.delete(`${API_URL}/registration/api/users/${userId}/`)
                .then((response) => {
                    alert("User deleted successfully");

                    // Refresh the list from server
                    axios.get(`${API_URL}/registration/api/users/`)
                        .then((res) => {
                            setUsers(res.data);
                        })
                        .catch((err) => {
                            console.log("Error refreshing:", err);
                        });
                })
                .catch((err) => {
                    console.log("DELETE ERROR:", err);
                    alert("Failed to delete user");
                });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={[styles.sectionTitle, { color: '#9b59b6' }]}>
                    Registered Users
                </Text>
            </View>

            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.card, { borderLeftColor: '#9b59b6' }]}>
                        <Text style={[styles.sectionDescription, { backgroundColor: '#f8f9fa' }]}>
                            <Text style={{ fontWeight: 'bold', color: '#8e44ad' }}>Name: </Text>
                            {item.first_name} {item.last_name}
                        </Text>
                        <Text style={[styles.sectionDescription, { backgroundColor: '#f8f9fa' }]}>
                            <Text style={{ fontWeight: 'bold', color: '#8e44ad' }}>Email: </Text>
                            {item.email}
                        </Text>
                        <Text style={[styles.sectionDescription, { backgroundColor: '#f8f9fa' }]}>
                            <Text style={{ fontWeight: 'bold', color: '#8e44ad' }}>Gender: </Text>
                            {item.gender}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: '#8e44ad', padding: 10, borderRadius: 5 }]}
                                onPress={() => handleEdit(item)}
                            >
                                <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: '#e74c3c', padding: 10, borderRadius: 5 }]}
                                onPress={() => handleDelete(item.id)}
                            >
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}