import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import { Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#000000',
        flex: 1
    }
})

export default HomeScreen