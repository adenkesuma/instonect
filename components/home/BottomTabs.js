import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useState } from 'react'
import { Divider } from 'react-native-elements'

const BottomTabs = ({ icons }) => {
    const [active, setActive] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity 
            onPress={() => setActive(icon.name)}
        >
            <Image 
                source={active === icon.name ? icon.active : icon.inactive}
                alt="icon tab bar"
                resizeMode='contain'
                style={styles.iconTabs}
            />
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical'/>
            <View style={styles.container}>
                {icons.map((icon, idx) => (
                    <Icon key={idx} icon={icon} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {

    },
    container: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
    },
    iconTabs: {
        width: 25,
        height: 25
    }
})

export default BottomTabs