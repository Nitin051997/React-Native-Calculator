import React, { useEffect, useState } from 'react';
import { Appbar, TextInput } from 'react-native-paper';
import { Button, Text } from 'react-native-paper';
import { styles } from './CSS/styles';
import { View } from 'react-native';
import { Vibration } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export const Calculator = () => {

    const [value,setValue] = useState('')
    const [result,setResult] = useState('')
    const [refresh,setRefresh] = useState(false)
    const [delVal,setDelVal] = useState('')
    const [validation,setValidation] = useState('')
    const [symbol,setSymbol] = useState(true)
    const [question,setQuestion] = useState('')
    const [error,setError] = useState('')
    const [plusMin,setPlusMin] = useState(true)

    const handleValue = (text) => {
        const numericInput = text.replace(/[^0-9+\-*%/]/g, '');
        setValue(numericInput)
    }

    const handleClick = (numVal) => {
        setValue((old) => {
            return old+numVal
        })
        setSymbol(true)
        setPlusMin(true)
    }

    const handleNumClick = (numVal) => {
        setValue((old) => {
            return old+numVal
        })
        setSymbol(false)
        setPlusMin(true)
    }

    const handlePlusMinClick = (numVal) => {
        setValue((old) => {
            return old+numVal
        })
        setPlusMin(false)
        setSymbol(true)
    }

    const handleCalculator = () => {
        Vibration.vibrate()
        // console.log('inside cal')
        if((value.charAt(value.length - 1)).includes('%') || (value.charAt(value.length - 1)).includes('*') || (value.charAt(value.length - 1)).includes('/') || (value.charAt(value.length - 1)).includes('-') || (value.charAt(value.length - 1)).includes('+') || isNaN(eval(value))){
            // console.log('inside if cal')
            setError('Invalid Expression')
            setQuestion('')
        }else{
            // console.log('inside else cal',eval(value))
            setResult(eval(value))
            setValidation(eval(value))
            setError('')
            if(refresh == false){
                setRefresh(true)
            }else{
                setRefresh(false)
            }
        }
    }

    const handleClear = () => {
        setValue('')
        setSymbol(true)
        setQuestion('')
        setError('')
        setPlusMin(true)
        setDelVal('')
        setResult('')
        setValidation('')
    }

    const handleDelete = () => {
        let backSpace = (value.slice(0, -1));
        setValue(`${backSpace}`)
        if((value.charAt(value.length - 1)).includes('%') || (value.charAt(value.length - 1)).includes('*') || (value.charAt(value.length - 1)).includes('/')){
            setSymbol(false)
        }else if((value.charAt(value.length - 1)).includes('+') || (value.charAt(value.length - 1)).includes('-')){
            setPlusMin(true)
        }else if(/\d/.test(value.charAt(value.length - 1))){
            setDelVal(`${backSpace}`)
        }
        else{
            setSymbol(true)
        }
    }

    useEffect(() => {
        if( value.length > 0 ){
            if(validation.toString().includes('.')){
                setQuestion(`${value}`)
                setValue(`${Number(result).toFixed(2)}`)
            }else{
                setQuestion(`${value}`)
                setValue(`${result}`)
            }
        }
    },[validation,result,refresh])

    useEffect(() => {
        // console.log('inside DelVal',delVal)
        if((delVal.charAt(delVal.length - 1)).includes('%') || (delVal.charAt(delVal.length - 1)).includes('*') || (delVal.charAt(delVal.length - 1)).includes('/')){
            // console.log('inside Div Num')
            setSymbol(true)
        }else if((delVal.charAt(delVal.length - 1)).includes('+') || (delVal.charAt(delVal.length - 1)).includes('-')){
            setPlusMin(true)
            // console.log('inside Plus Num')
        }else{
            // console.log('inside Num')
        }
    },[delVal])

    // useEffect(() => {
    //     console.log('Final Value',value)        
    // },[question])

    return <><SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <StatusBar/>
        <Appbar.Header style={{ backgroundColor: 'black' }} dark={false} mode='center-aligned'>
        <Appbar.Content titleStyle={{ color: 'white' }} title="Calculator"/>
        <Appbar.Action color='white'  icon="dots-vertical"/>
    </Appbar.Header>
            <View style={styles.viewStyle}>
                <TextInput value={question} style={styles.textAreaQ} outlineColor='rgba(0,0,0,0)' activeOutlineColor='rgba(0,0,0,0)' textColor='darkgray' mode='outlined' editable={false} disabled/>
                <TextInput value={value} style={[styles.textArea, { fontSize : 20 }]} outlineColor='rgba(0,0,0,0)' activeOutlineColor='rgba(0,0,0,0)' textColor='white' mode='outlined' onChangeText={handleValue} editable={false} maxLength={27}/>
                <TextInput value={error} style={styles.textAreaE} outlineColor='rgba(0,0,0,0)' activeOutlineColor='rgba(0,0,0,0)' textColor='red' mode='outlined' editable={false} disabled/>
                <View style={styles.dialerBoard}>
                <View style={styles.btnRow}>
                    <Button style={styles.dialerBtn} buttonColor="#8b9dc3" onPress={handleClear}><Text style={styles.dialerSize}>C</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#8b9dc3" onPress={() => handleClick(symbol ? '' : '%')}><Text style={styles.dialerSize}>&#x25;</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#8b9dc3" onPress={handleDelete}><Text style={styles.dialerBack}>&#x2039;</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#8b9dc3" onPress={() => handleClick(symbol ? '' : '/')}><Text style={styles.dialerSize}>&#xf7;</Text></Button>
                </View>
                <View style={styles.btnRow}>
                    <Button style={styles.dialerBtn} buttonColor="#dfe3ee" onPress={() => handleNumClick('7')}><Text style={styles.dialerSize}>7</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#dfe3ee" onPress={() => handleNumClick('8')}><Text style={styles.dialerSize}>8</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#dfe3ee" onPress={() => handleNumClick('9')}><Text style={styles.dialerSize}>9</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#8b9dc3" onPress={() => handleClick(symbol ? '' : '*')}><Text style={styles.dialerSize}>&#xd7;</Text></Button>
                </View>
                <View style={styles.btnRow}>
                    <Button style={styles.dialerBtn} buttonColor="#dfe3ee" onPress={() => handleNumClick('4')}><Text style={styles.dialerSize}>4</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#dfe3ee" onPress={() => handleNumClick('5')}><Text style={styles.dialerSize}>5</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#dfe3ee" onPress={() => handleNumClick('6')}><Text style={styles.dialerSize}>6</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#8b9dc3" onPress={() => handlePlusMinClick(plusMin ? '-' : '')}><Text style={styles.dialerSize}>&#x2212;</Text></Button>
                </View>
                <View style={styles.btnRow}>
                    <Button style={styles.dialerBtn} buttonColor="#dfe3ee" onPress={() => handleNumClick('1')}><Text style={styles.dialerSize}>1</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#dfe3ee" onPress={() => handleNumClick('2')}><Text style={styles.dialerSize}>2</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#dfe3ee" onPress={() => handleNumClick('3')}><Text style={styles.dialerSize}>3</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#8b9dc3" onPress={() => handlePlusMinClick(plusMin ? '+' : '')}><Text style={styles.dialerSize}>&#x2b;</Text></Button>
                </View>
                <View style={styles.btnRow}>
                    <Button style={styles.dialerBtn} buttonColor="#dfe3ee" onPress={() => handleNumClick('00')}><Text style={styles.dialerSize}>00</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#dfe3ee" onPress={() => handleNumClick('0')}><Text style={styles.dialerSize}>0</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#dfe3ee" onPress={() => handleClick(symbol ? '' : '.')}><Text style={styles.dialerSize}>.</Text></Button>
                    <Button style={styles.dialerBtn} buttonColor="#3b5998" onPress={handleCalculator}><Text style={styles.dialerResult}>=</Text></Button>
                </View>
                </View>
            </View></SafeAreaView></>
}