import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    height: 50,
    borderBottomWidth: 1
  },
  loginBar: {
    height: 90,
    borderTopWidth: 1
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    marginTop: 8
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'comicSans'
  },
  top: {
    flexDirection: 'row'
  },
  backButton: {
    flex: 1,
    marginLeft: '64%',
    marginTop: '5%'
  },
  x: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'comicSans'
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  tabText: {
    fontSize: 25,
    fontFamily: 'comicSans',
    color: 'white'
  },
  tabLines: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginTop: 10
  },
  socialButton: {
    width: 300,
    height: 50,
    borderRadius: 10,
    borderWidth: 1
  },
  socialInner: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  socialText: {
    fontSize: 20,
    fontFamily: 'comicSans'
  },
  googleContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    marginTop: 50
  },
  twitterContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 25
  }
});