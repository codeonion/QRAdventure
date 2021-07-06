import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert, Button, ToastAndroid, Modal, TouchableHighlight, Image} from 'react-native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Constants from 'expo-constants';

/* Custom Components */
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import QrModal from './components/QrModal'

/* Custom , Audio and Images */
import Sounds from './Sounds';
import favicon from './assets/favicon.png';

/* Expo Party Components */
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Audio } from 'expo-av';
import Images from './Images';

// https://youtu.be/Hf4MJH0jDb4?t=2188 n
const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [sameScanned, setSameScanned] = useState(false);
  const [sound, setSound] = React.useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("Have Fun!");
  const [ModalImage, setModalImage] = useState(favicon);
  const showToastWithGravity = (toast_text) => {
    ToastAndroid.showWithGravity(
      toast_text,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  async function playSound(sound_uri) {
    const { sound } = await Audio.Sound.createAsync(
      //  require(`./assets/audio/${file_name}`)
      Sounds[sound_uri]
    );
    setSound(sound);
    await sound.playAsync(); 
  }
  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  
  
  
  
  var dict = {
    "control_stop_audio": {"type": "stop_audio", "action": "stop_audio", "data": null}, // TODO
    "play_song_template": {"type": "play_audio", "data_text": "", "qr_data_uri_audio": '00-alibhai.mp3'},
    "showtext_template": {"type": "modal_text", "data_text": "Bro, I am showing right", "qr_data_uri": null},
    "showimage_template": {"type": "modal_image", "data_text": "Bro, I am showing right", "qr_data_uri_image": "ali-cat.jpeg"},
    "show_modal_image_audio_template": {"type": "modal_image_text_audio", "data_text": "Bro, I am showing right", "qr_data_uri_image": "ali-cat.jpeg", "qr_data_uri_audio": "00-alibhai.mp3"},
    // "alphaA": {"type": "text", "data": '00-alibhai.mp3'}
    /* Animal Sounds */
    "01-cat_meow.mp3": {"type": "play_audio", "data_text": "", "qr_data_uri_audio": '01-cat_meow.mp3'},

    /* Adventure Series */
    "adventure-01": {"type": "modal_image", "data_text": "A01: Give in hand. Leads Controller Drawer.", "qr_data_uri_image": 'adventure-01.jpg'},
    "adventure-02": {"type": "modal_image", "data_text": "A02: Sitting Room, On Dining Table", "qr_data_uri_image": 'adventure-02.jpg'},
    "adventure-03": {"type": "modal_image", "data_text": "A03: In a plant pot", "qr_data_uri_image": 'adventure-03.jpg'},
    "adventure-04": {"type": "modal_image", "data_text": "A04: In Papa bag", "qr_data_uri_image": 'adventure-04.jpg'},
    "adventure-05": {"type": "modal_image", "data_text": "A05: In Dressing Table Drawer", "qr_data_uri_image": 'adventure-05.jpg'},
    "adventure-06": {"type": "modal_image", "data_text": "A06: In Fridge", "qr_data_uri_image": 'adventure-06.jpg'},
    "adventure-07": {"type": "modal_image", "data_text": "A07: Below Carpet corner in Lounge", "qr_data_uri_image": 'adventure-07.jpg'},
    "adventure-08": {"type": "modal_image", "data_text": "A08: Inside Dastarkhawan", "qr_data_uri_image": 'adventure-08.jpg'},
    "adventure-09": {"type": "modal_image", "data_text": "A09: In a pillow", "qr_data_uri_image": 'adventure-09.jpg'},
    "adventure-10": {"type": "modal_image", "data_text": "A10: In Masala Drawer Kitchen", "qr_data_uri_image": 'adventure-10.jpg'},
    "adventure-11": {"type": "modal_image", "data_text": "A11: In Ayeza Clothes Cupboard", "qr_data_uri_image": 'adventure-11.jpg'},
    "adventure-12": {"type": "modal_image", "data_text": "A12: Under Sitting Room Sofa", "qr_data_uri_image": 'adventure-12.jpg'},
    "adventure-13": {"type": "modal_image", "data_text": "A13: With Dada", "qr_data_uri_image": 'adventure-13.jpg'},
    "adventure-14": {"type": "modal_image", "data_text": "A14: With Mam", "qr_data_uri_image": 'adventure-14.jpg'},
    "adventure-15": {"type": "modal_image", "data_text": "A15: With Mama", "qr_data_uri_image": 'adventure-15.jpg'},
    "adventure-16": {"type": "modal_image", "data_text": "A16: With Papa", "qr_data_uri_image": 'adventure-16.jpg'},
    "adventure-17": {"type": "modal_image", "data_text": "A17: In Freezer", "qr_data_uri_image": 'adventure-17.jpg'},
    "adventure-18": {"type": "modal_image", "data_text": "A18: After Mumma Ki Baat manni pare gi", "qr_data_uri_image": 'task.png'},
    "adventure-19": {"type": "modal_image", "data_text": "A19: After Papa ki baat mann ni paregi", "qr_data_uri_image": 'task.png'},
    "adventure-20": {"type": "modal_image", "data_text": "A20: Mam ko Pehla aur dusra kalma sunana hoga", "qr_data_uri_image": 'task.png'},
    "adventure-21": {"type": "modal_image", "data_text": "A21: Inside Sewing Machine Drawer", "qr_data_uri_image": 'adventure-21.jpg'},
    "adventure-22": {"type": "modal_image", "data_text": "A22: In Bicycle Bucket", "qr_data_uri_image": 'adventure-22.jpg'},
    "adventure-23": {"type": "play_audio", "data_text": "A23: Ali Bhai!", "qr_data_uri_audio": '00-alibhai.mp3'},
  };  
  
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if(dict[data] != undefined){ // Item Exists
      var qr_data = dict[data];
      showToastWithGravity(qr_data.type)
      switch (qr_data.type) {
        case "play_audio": // Plain Audio Playback
          showToastWithGravity(`Playing Audio ${qr_data["qr_data_uri_audio"]}`)
          playSound(qr_data["qr_data_uri_audio"]);
        break;
        case "stop_audio": // Plain Audio Stop
          setSound(null)
        break;
        case "modal_text": // Plain Text Display
          setModalVisible(true);
          setModalText(qr_data.data_text);
          break;
        case "modal_image": // Plain Text and Image Display
          setModalImage(Images[qr_data["qr_data_uri_image"]])
          setModalText(qr_data.data_text);
          setModalVisible(true);
          break;
        case "modal_image_text_audio": // Plain Text and Image Display and audio playback
          playSound(qr_data["qr_data_uri_audio"]);
          setModalImage(Images[qr_data["qr_data_uri_image"]])
          setModalText(qr_data.data_text);
          setModalVisible(true);
          break;
        default:
          console.log(`Unhandled ${dict[data]}`)
          break;
      }
    }else{
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      // setScanned(false);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.contianer}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      


      <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image source={ModalImage} style={{  }} /> 
                <Text style={styles.modalText}>{modalText}</Text>
    
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
    
          {/* <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text style={styles.textStyle}>Show Modal</Text>
          </TouchableHighlight> */}
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    paddingTop: 60,
  },
   centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 40,
    textAlign: 'center',
  },
});

export default App;