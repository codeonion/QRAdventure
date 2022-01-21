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
    "adventure-01": {"type": "modal_image", "qr_data_uri_image": 'adventure-01',  "data_text": "A01 (Hand): Give in hand. Next one in Papa Drawer.", },
    "adventure-02": {"type": "modal_image", "qr_data_uri_image": 'adventure-02',  "data_text": "A02 (Papa Drawer): Next in Sitting Room, On Dining Table", },
    "adventure-03": {"type": "modal_image", "qr_data_uri_image": 'adventure-03',  "data_text": "A03 (On Dining Table): Next in a plant pot", },
    "adventure-04": {"type": "modal_image", "qr_data_uri_image": 'adventure-04',  "data_text": "A04 (in a plant pot): Next in Papa bag", },
    "adventure-05": {"type": "modal_image", "qr_data_uri_image": 'adventure-05',  "data_text": "A05 (in Papa bag): Next in Dressing Table Drawer", },
    "adventure-06": {"type": "modal_image", "qr_data_uri_image": 'adventure-06',  "data_text": "A06 (in Dressing Table Drawer): Next in Toys Box White Large", },
    "adventure-07": {"type": "modal_image", "qr_data_uri_image": 'adventure-07',  "data_text": "A07 (In Toy Box): Next Below Carpet corner in Lounge", },
    "adventure-08": {"type": "modal_image", "qr_data_uri_image": 'adventure-08',  "data_text": "A08 (Under Lounge Carpet): Next Inside Dastarkhawan", },
    "adventure-09": {"type": "modal_image", "qr_data_uri_image": 'adventure-09',  "data_text": "A09 (Inside Dastarkhawan): Next in a pillow", },
    "adventure-10": {"type": "modal_image", "qr_data_uri_image": 'adventure-10',  "data_text": "A10 (In Pillow): Next in Masala Drawer Kitchen", },
    "adventure-11": {"type": "modal_image", "qr_data_uri_image": 'adventure-11',  "data_text": "A11 (In Kitchen Drawer): Next in Ayeza Clothes Cupboard", },
    "adventure-12": {"type": "modal_image", "qr_data_uri_image": 'adventure-12',  "data_text": "A12 (In Ayeza Clothes Cupboard): Next Under Sitting Room Sofa", },
    "adventure-13": {"type": "modal_image", "qr_data_uri_image": 'task.png'    ,  "data_text": "A13 (Under Sofa): Next After Task", },
    "adventure-14": {"type": "modal_image", "qr_data_uri_image": 'task.png'    ,  "data_text": "A14 (Task): Next After Task", },
    "adventure-15": {"type": "modal_image", "qr_data_uri_image": 'task.png'    ,  "data_text": "A15 (Task): Next With Mama", },
    "adventure-16": {"type": "modal_image", "qr_data_uri_image": 'task.png'    ,  "data_text": "A16 (With Mama): Next in Hello Kitty House", },
    // "adventure-17": {"type": "modal_image", "qr_data_uri_image": 'adventure-17',  "data_text": "A17 (With Papa): Next Inside Helo Kitty House", },
    "adventure-18": {"type": "modal_image", "qr_data_uri_image": 'task.png'    ,  "data_text": "A18 (Near Hello Kitty House): Next After Mumma Ki Baat manni pare gi", },
    "adventure-19": {"type": "modal_image", "qr_data_uri_image": 'task.png'    ,  "data_text": "A19 (Mama Ki bat mano): Next After Papa ki baat manni paregi", },
    "adventure-20": {"type": "modal_image", "qr_data_uri_image": 'task.png'    ,  "data_text": "A20 (Papa Ki Baat Mano): Next After Task", },
    "adventure-21": {"type": "modal_image", "qr_data_uri_image": 'adventure-21',  "data_text": "A21 (Task): Inside Sewing Machine Drawer", },
    "adventure-22": {"type": "modal_image", "qr_data_uri_image": 'adventure-22',  "data_text": "A22 (Sewing Machine): In Bicycle Bucket", },
    "adventure-23": {"type": "modal_image", "qr_data_uri_image": 'adventure-23',  "data_text": "A23 (In Bicycle): In another flower pot", },
    "adventure-24": {"type": "play_audio", "data_text": "A24: Ali Bhai!", "qr_data_uri_audio": '00-alibhai.mp3'},
  };  
  
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if(dict[data] != undefined){ // Item Exists
      var qr_data = dict[data];
      showToastWithGravity(qr_data.type)
      console.log(qr_data["qr_data_uri_image"])
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
          showToastWithGravity(qr_data["qr_data_uri_image"])
          setModalVisible(true);
          setModalText(qr_data.data_text);
          setModalImage(Images[qr_data["qr_data_uri_image"]])
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
                <Image source={ModalImage} style={styles.modalImage} /> 
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
    fontSize: 20,
    textAlign: 'center',
  },
  modalImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 2,
  },
});

export default App;