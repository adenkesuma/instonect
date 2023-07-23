import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { postFooterIcons } from '../../constants/constant'

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
        <PostHeader post={post} />
        <PostImage imageUrl={post.imageUrl} />
        <View style={styles.containerFooter}>
            <PostFooter />
            <Likes likes={post.likes} />
            <Caption user={post.user} caption={post.caption} />
            <CommentSection comments={post.comments} />
            <Comments comments={post.comments} />
        </View>
    </View>
  )
}

const PostHeader = ({ post }) => {
    return (
        <View style={styles.postHeaderContainer}>
            <View style={styles.profileContainer}>
                <Image 
                    source={post.profileImage}
                    style={styles.profileImage}
                    resizeMode='contain'
                />
                <Text style={styles.userPost}>{post.user}</Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.dots}>...</Text>
            </TouchableOpacity>
        </View>
    )
}

const PostImage = ({ imageUrl }) => {
    return (
        <View style={styles.postImageContainer}>
            <Image 
                source={imageUrl}
                resizeMode='contain'
                style={styles.postImage}
            />
        </View>
    )
}

const PostFooter = () => {
    return (
        <View style={styles.footerFlex}>
            <View style={styles.footerThreesIcon}>
                <Icon 
                    iconStyle={styles.likeIcon}
                    iconUrl={postFooterIcons[0].iconUrl}
                />
                <Icon 
                    iconStyle={styles.messageIcon}
                    iconUrl={postFooterIcons[1].iconUrl}
                />
                <Icon 
                    iconStyle={styles.shareIcon}
                    iconUrl={postFooterIcons[2].iconUrl}
                />
            </View> 
            <Icon 
                iconStyle={styles.bookmarkIcon}
                iconUrl={postFooterIcons[3].iconUrl}
            />  
        </View>
    )
}

const Icon = ({ iconStyle, iconUrl }) => {
    return (
        <TouchableOpacity>
            <Image 
                style={iconStyle}
                source={iconUrl}
            />
        </TouchableOpacity>
    )
}

const Likes = ({ likes }) => {
    return (
        <View style={styles.containerLikes}>
            <Text style={styles.likes}>
                {likes.toLocaleString('en')} likes
            </Text>
        </View>
    )
}

const Caption = ({ user, caption }) => {
    return (
        <Text style={styles.captionText}>
            <Text style={styles.userCaption}>{user}{" "}</Text>
            <Text>{caption}</Text>
        </Text>
    )
}

const CommentSection = ({ comments }) => {
    return (
        <View style={{ marginTop: 5 }}>
            { !!comments.length && (
                <Text style={styles.comments}>
                    View {comments.length > 1 ? 'all ' : ''}
                    {comments.length}{' '}
                    {comments.length > 1 ? 'comments' : 'comment'}
                </Text>        
            )}
        </View>
    )
}

const Comments = ({ comments }) => {
    return (
        <>
            {comments.map((comment, idx) => (
                <View key={idx} style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ color: '#ffffff' }}>
                        <Text style={{ fontWeight: '700' }}>
                            {comment.user}
                        </Text>
                        <Text>
                            {' '}{comment.comment}
                        </Text>
                    </Text>
                </View>
            ))}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    profileContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    postHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        margin: 20
    },
    postImageContainer: {
        height: 450,
        width: '100%'
    },
    profileImage: {
        width: 35,
        height: 35,
        borderWidth: 2,
        borderColor: '#ff3250',
        borderRadius: 25
    },
    userPost: {
        fontWeight: '600',
        color: '#ffffff',
    },
    dots: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '600'
    },
    postImage: {
        flex: 1,
        height: 'auto',
        objectFit: 'cover',
        width: '100%',
    },
    containerFooter: {
        marginHorizontal: 15,
        marginTop: 10
    },
    footerFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footerThreesIcon: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    likeIcon: {
        width: 26,
        height: 25,
    },
    messageIcon: {
        width: 25,
        height: 25,
    },
    shareIcon: {
        width: 33,
        height: 25,
    },
    bookmarkIcon: {
        flex: 1,
        width: 17,
        height: 25,
    },
    containerLikes: {
        flexDirection: 'row',
        marginTop: 10
    },
    likes: {
        color: '#ffffff',
        fontWeight: '600',
    },
    userCaption: {
        fontWeight: '700',
    },
    captionText: {
        marginTop: 5,
        color: '#ffffff'
    },
    comments: {
        color: '#999999'
    }
})

export default Post