import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,

    marginTop: 22,
    backgroundColor: '#fff',

    flexDirection: "row",
    alignItems: "center",

    padding: 10,

    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0, 0.1)'
  },
  title_page: {
    width: '50%',

    fontSize: 18,
    fontStyle: "italic"
  },
  box_avatar_user: {
    width: '50%',

    alignItems:"flex-end",

    padding: 5
  }
})

export default styles;