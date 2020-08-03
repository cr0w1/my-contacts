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
    width: '65%',

    fontSize: 18,
    fontStyle: "italic"
  },
  text_user_name: {
    width: '20%',
    textAlign: "right"
  },
  box_avatar_user: {
    width: '15%',

    alignItems:"flex-end",
    
    padding: 5
  },
  avatar_border: {
    borderWidth: 1
  },
  bottons: {
    width: 40,
    height: 40,

    justifyContent: "center",
    alignItems:"center",

    marginRight: 10,

    borderRadius: 20,
    shadowColor: "#d3d3d3",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  delete_text: {
    width: 10,
    height: 5,

    backgroundColor: '#000'
  },

})

export default styles;