import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f8ff', // Light blue background
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#2c3e50', // Dark blue-gray
        marginBottom: 30,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    sectionDescription: {
        fontSize: 18,
        fontWeight: '500',
        color: '#34495e', // Dark gray-blue
        marginBottom: 15,
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderLeftWidth: 4,
        borderLeftColor: '#3498db', // Blue accent
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    input: {
        borderWidth: 2,
        borderColor: '#bdc3c7', // Light gray border
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        fontSize: 16,
        color: '#2c3e50',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    button: {
        backgroundColor: '#e74c3c', // Red button
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    buttonPrimary: {
        backgroundColor: '#2ecc71', // Green button
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    buttonSecondary: {
        backgroundColor: '#3498db', // Blue button
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        gap: 15,
        marginTop: 25,
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#ecf0f1',
    }
});

export default styles;