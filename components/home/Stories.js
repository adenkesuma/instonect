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
          <View 
            key={idx}
            style={styles.storyContainer}
          >
            <Image 
              source={story.image}
              resizeMode='contain'
              style={styles.storyImage}
            />
            <Text style={styles.storyName}>
              {
                story.user.length > 8 ? story.user.slice(0, 8) + '...' : story.user
              }
            </Text>
          </View>
        ))}
      </ScrollView>
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