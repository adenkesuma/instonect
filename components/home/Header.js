import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image 
                style={styles.logo}
                resizeMode='contain'
                source={require('../../assets/logo/instonect.png')}
            />
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <Image 
                    source={require('../../assets/icons/add.png')}
                    resizeMode='contain'
                    style={styles.icon} 
                />
            </TouchableOpacity>
             <TouchableOpacity>
                <Image 
                    source={require('../../assets/icons/like.png')}
                    resizeMode='contain'
                    style={styles.icon} 
                />
            </TouchableOpacity>
             <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>11</Text>
                </View>
                <Image 
                    source={require('../../assets/icons/message.png')}
                    resizeMode='contain'
                    style={styles.icon} 
                />
            </TouchableOpacity> 
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    iconsContainer: {
        flexDirection: 'row'
    },
    logo: {
        width: 110,
        height: 50
    },
    icon: {
        height: 20,
        width: 20,
        marginLeft: 20
    },
    unreadBadge: {
        backgroundColor: '#ff3250',
        position: 'absolute',
        left: 23,
        bottom: 14,
        width: 25,
        height: 20,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    unreadBadgeText: {
        color: '#ffffff',
        fontWeight: '600'
    }
})

export default Header