import React, { useState, useEffect, Alert } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import styles from '../style';
import { Button } from "react-native-web";

export default function UserListPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/registration/api/users/")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleEdit = (user) => {
        navigation.navigate('EditUser', { user });
    };

    const handleDelete = (userId) => {
        Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete?",
            [
                {
                    text: "Cancel", style: "cancel"
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        axios.delete(`http://127.0.0.1:8000/registration/api/users/${id}/`)
                            .then(() => {
                                Alert.alert("Succsess", "User deleted successfully");

                            })
                            .catch((err) => {
                                console.log(err);
                                Alert.alert("Error", "Failed to delete user");
                            });
                    }
                }
            ]
        );
    }

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
                            <Text style={{fontWeight: 'bold', color: '#8e44ad'}}>Name: </Text>
                            {item.first_name} {item.last_name}
                        </Text>
                        <Text style={[styles.sectionDescription, { backgroundColor: '#f8f9fa' }]}>
                            <Text style={{fontWeight: 'bold', color: '#8e44ad'}}>Email: </Text>
                            {item.email}
                        </Text>
                        <Text style={[styles.sectionDescription, { backgroundColor: '#f8f9fa' }]}>
                            <Text style={{fontWeight: 'bold', color: '#8e44ad'}}>Gender: </Text>
                            {item.gender}
                        </Text>
                        <View>
                            <Button title="Edit" color="#8e44ad" onPress={() => handleEdit(item)} />
                            <Button title="Delete" color="#e74c3c" onPress={() => {item}} />
                        </View>
                    </View>
                )} 
            />
        </View>
    );
}