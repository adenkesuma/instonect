import { View, Text, StyleSheet, Image } from 'react-native'
import { Divider } from 'react-native-elements'

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
        <Divider 
            width={1}
            orientation='vertical'
        />
        <PostHeader post={post} />
    </View>
  )
}

const PostHeader = ({ post }) => {
    return (
        <View style={styles.postContainer}>
            <View>
                <Image 
                    source={{ uri: post.profileImage}}
                    style={styles.profileImage}
                />
                <Text style={styles.userPost}>{post.user}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    postContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        margin: 5
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    userPost: {
        color: '#ffffff',
    }
})

export default Post