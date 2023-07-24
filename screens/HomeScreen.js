import { ScrollView } from 'react-native'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import { Divider } from 'react-native-elements'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { posts } from '../constants/DummyPost'
import BottomTabs from '../components/home/BottomTabs'
import { bottomTabs } from '../constants/constant'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView>
                <Divider 
                    width={1}
                    orientation='vertical'
                />
                {posts.map((post, idx) => (
                    <Post post={post} key={idx} />
                ))}
            </ScrollView>
            <BottomTabs icons={bottomTabs} />
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