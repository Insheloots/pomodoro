import React, {useEffect, useState} from 'react'
import {View, ScrollView, StyleSheet, Linking} from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'
import {ListItem} from 'react-native-elements'

const firebaseConfig = {
    apiKey: "AIzaSyChe_Kq-FqKXY3ylU8uafoYr5VIzL9wv1A",
    authDomain: "pomodoro-time-b4d8d.firebaseapp.com",
    projectId: "pomodoro-time-b4d8d",
    storageBucket: "pomodoro-time-b4d8d.appspot.com",
    messagingSenderId: "510640349059",
    appId: "1:510640349059:web:b18193ac3a84a96802e0b6",
    measurementId: "G-GKER2EPPBW"
  };

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

export default function rFrase({navigation}) {

    const [respuestas, setRespuestas] = useState([])

    useEffect(() => {
        db.collection('RFrase').onSnapshot(querySnapshot => {
        const respuestas = [];
            querySnapshot.docs.forEach(doc =>{
                const {frase, autorfrase, linkbiografia} = doc.data() 
                respuestas.push({
                    id: doc.id,
                    frase,
                    autorfrase,
                    linkbiografia
                })
            })
        setRespuestas(respuestas)
        })
    }, [])

    return(
        <ScrollView style={styles.background}>
            <View style={styles.center}>
                </View>
                {respuestas.map(respuesta =>{
                    const Biografía = () => {
                        Linking.openURL(respuesta.linkbiografia);
                    };
                    return(
                        <ListItem key={respuesta.id} bottomDivider onPress={Biografía}> 
                            <ListItem.Chevron/>
                            <ListItem.Content>
                                <ListItem.Title>Frase</ListItem.Title>
                                <ListItem.Subtitle>"{respuesta.frase}"</ListItem.Subtitle>
                                <ListItem.Subtitle>- {respuesta.autorfrase}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
                
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "white"
    },
    center: {
        flex: 1,
        paddingTop: '1%',
        backgroundColor: "white"
    },
    text: {
        fontSize: 14,
    }
});