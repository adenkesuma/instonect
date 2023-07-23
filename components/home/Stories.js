import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { dummyStories } from '../../constants/DummyStories'

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {dummyStories.map((story, idx) => (
          <View style={styles.storyContainer}>
            <Image 
              key={idx}
              source={story.image}
              resizeMode='contain'
              style={styles.storyImage}
            />
            <Text style={styles.storyName}>{story.user}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={{ color: '#ffffff' }}>Hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginTop: 10
  },
  storyContainer: {
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 14
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ff3250'
  },
  storyName: {
    color: '#ffffff'
  }
})

export default Stories