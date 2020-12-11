import React, {useState} from 'react'
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, Picker, Alert} from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'

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

export default function Cuestionario({navigation}) {
    
    const [state, setState] = useState({
        primera: "",
        segunda: "",
        tercera: "",
        cuarta: "",
        quinta: "",
        sexta: "",
        septima: "",
        octava: "",
        novena: "",
        decima: "",
        onceava: "",
        doceava: "",
    })

    const EstablecerTexto = (primera, value) => {
        setState({ ...state, [primera]: value})
    }

    const crearRespuesta = async() => {
        await db.collection('Postest').add({
            primera: state.primera,
            segunda: state.segunda,
            tercera: state.tercera,
            cuarta: state.cuarta,
            quinta: state.quinta,
            sexta: state.sexta,
            septima: state.septima,
            octava: state.octava,
            novena: state.novena,
            decima: state.decima,
            onceava: state.onceava,
            doceava: state.doceava
        })
        Alert.alert('Se ha enviado el cuestionario de Postest correctamente.')
    }

    return (
        <ScrollView>
            <View style={styles.center}>
                <Text style={styles.text}>1. ¿Qué edad tiene?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('primera', value)} selectedValue={state.primera}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Entre 14 y 24" value="Entre 14 y 24"/>
                    <Picker.Item label="Entre 25 y 34" value="Entre 25 y 34"/>
                    <Picker.Item label="Entre 35 y 44 años" value="Entre 35 y 44 años"/>
                    <Picker.Item label="Más de 45 años" value="Más de 45 años"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>2. Genero:</Text>
                <Picker onValueChange={(value) => EstablecerTexto('segunda', value)} selectedValue={state.segunda}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Masculino" value="Masculino"/>
                    <Picker.Item label="Femenino" value="Femenino"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>3. ¿Qué semestre cursa actualmente?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('tercera', value)} selectedValue={state.tercera}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Entre primero y tercero" value="Entre primero y tercero"/>
                    <Picker.Item label="Entre cuarto y sexto" value="Entre cuarto y sexto"/>
                    <Picker.Item label="Entre séptimo y noveno" value="Entre séptimo y noveno"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>4. Pospongo lo que tengo que hacer más de lo razonable.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('cuarta', value)} selectedValue={state.cuarta}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>5. Me lamento de no haber hecho antes lo que tenía pendiente.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('quinta', value)} selectedValue={state.quinta}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>6. Me pongo a pensar en otras cosas mientras realizo una actividad.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('sexta', value)} selectedValue={state.sexta}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>7. Suelo realizar las actividades sin tomar como referencia la fecha de entrega.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('septima', value)} selectedValue={state.septima}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>8. Desperdicio mi tiempo libre haciendo cosas sin importancia.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('octava', value)} selectedValue={state.octava}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>9. Omito la programación de un tiempo específico para realizar una actividad.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('novena', value)} selectedValue={state.novena}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>10. No suelo enfocarme en una actividad durante su realización.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('decima', value)} selectedValue={state.decima}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>11. No encuentro el gusto ni me motiva el comenzar una actividad o tarea.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('onceava', value)} selectedValue={state.onceava}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>12. No siento motivación al haber completado una actividad que tenía pendiente.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('doceava', value)} selectedValue={state.doceava}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={{marginVertical: '5%', marginHorizontal: '8%'}}>
                    <TouchableOpacity onPress={() => crearRespuesta()}>
                    <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Enviar</Text>
                    </View>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        width: '80%',
        paddingTop: '10%',
        marginHorizontal: '4%'
    },
    questions: {
        flex: 1,
        width: '80%',
        marginHorizontal: '4%',
        paddingTop: '2%',
    },
    text: {
        fontSize: 14,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
    btnView:{
        borderRadius: 8,
        paddingVertical: 10,
        marginTop: 15,
        paddingHorizontal: 10,
        backgroundColor: '#3491cd'
    }
});