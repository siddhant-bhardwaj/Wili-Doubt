import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
export default class BookTransationScreen extends React.Component{
    constructor(){
super();
this.state={
    hasCameraPermissions:null,
    scanned:'false',
    scannedData:'',
    buttonState:'normal'
}
}
getCameraPermissions=async()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
        hasCameraPermissions:status==='granted'
    })
}
handleBarCodeScanned=async({type,data})=>{
this.setState({
    scanned:true,
    scannedData:'data',
    buttonState:'normal'
})    
}
render(){
    const hasCameraPermissions=this.state.hasCameraPermissions;
const scanned=this.state.scannned;
const buttonState=this.state.scanned;
if(buttonState==='clicked' && hasCameraPermissions){
return(
    <BarCodeScanner 
    onBarCodeScanned={scannned?undefined:this.handleBarCodeScanned}
    style={StyleSheet.absoluteFillObject}
    />
)
}

else if(buttonState==='normal'){
    /*return(
        <View style={styles.container}>
    <Text>
     {hasCameraPermissions===true?this.state.scannedData:'request camera permission'}
    </Text>
    <TouchableOpacity styles={styles.scanButton} onPress={this.getCameraPermissions}>
        <Text styles={styles.displayText}>Scan QR code</Text>
    </TouchableOpacity>
        </View>
    )*/

return(
    <View style={styles.container}>
        <View> <Image source={require("../assets/booklogo.jpg")} style={{width:200, height: 200}}/>
         <Text style={{textAlign: 'center', fontSize: 30}}>Wily
         </Text> 
         </View>
        <View style={styles.InputView}>
        <TextInput style={styles.InputBox}
        placeholder='bookId'
        />
         <TouchableOpacity styles={styles.scanButton} onPress={this.getCameraPermissions}>
        <Text styles={styles.displayText}>Scan Book code</Text>
    </TouchableOpacity> 
        </View>
        <View style={styles.InputView}>
        <TextInput style={styles.InputBox}
        placeholder='StudentId'
        />
         <TouchableOpacity styles={styles.scanButton} onPress={this.getCameraPermissions}>
        <Text styles={styles.displayText}>Scan Student code</Text>
    </TouchableOpacity> 
        </View>
        </View>
)

}


}


}

const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
},
displayText:{
    fontSize:15,
    textDecorationLine:"underline"
},
scanButton:{
backgroundColor:"green",
paddle:10,
margin:10
},
inputBox:{ width: 200, height: 40, borderWidth: 1.5, borderRightWidth: 0, fontSize: 20 },
inputView:{ flexDirection: 'row', margin: 20 }
})