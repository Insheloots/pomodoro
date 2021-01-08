import React from 'react';
import { Platform, StyleSheet, Text} from 'react-native';

class TimerHeader extends React.Component {

	// handles the display of timer header
	handleDisplay = () => {
		if(this.props.intervalType === "Trabajando")
		{
			if(this.props.running === true) {
				return(
					<Text style={{fontSize: 17}}>El tiempo ha iniciado, mantente concentrado durante los 5 minutos, te notificaremos cuando ya hayas terminado.</Text>
				)
			}
			else {
				return (
					<Text style={{fontSize: 17}}>¿Quieres empezar? Dale en el botón de iniciar</Text>
				)
			}	
		}
		else {
			if(this.props.running === true) {
				return(
					<Text style={{fontSize: 17}}>Es tiempo de descansar, disfruta de tus 5 minutos de relajación.</Text>
					
				)
			}
			else {
				return(
					<Text style={{fontSize: 17}}>Relajate.</Text>
				)
			}	
		}

	}
	render() {
	
		let texttoshow = this.handleDisplay()
		return(
			<Text style={styles.blacktext}>{texttoshow}</Text>
		)				
	}
}

const styles = StyleSheet.create({
  blacktext:{
	marginHorizontal:'9%',
	marginVertical: '1%',
	textAlign: 'center',
	fontStyle: 'normal',
	marginTop: '15%',
	color: 'black',
  }
});

export default TimerHeader;