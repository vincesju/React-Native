import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import styles from '../style';

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
                    </View>
                )} 
            />
        </View>
    );
}