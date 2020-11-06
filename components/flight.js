import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import moment from 'moment'

function flight({data, quote, navigation, setFavourite}) {
    const date = moment(quote.item.OutboundLeg.DepartureDate).format('D MMMM, YYYY')
    const time = moment(quote.item.OutboundLeg.DepartureDate).format('hh:mm')

    return (
    <TouchableOpacity 
        style={styles.container}
        onPress={() => navigation.navigate('Flight', {
                quote: quote,
                data: data,
                setFavourite
            })
        }>
        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: 'rgba(196, 196, 196, 0.5)',
                     marginHorizontal: 20, flex: 1}}>
            <View style={styles.circle}>
                <Image source={require('../assets/planeSmall.png')} />
            </View>
            <View style={{flexDirection: 'column', marginTop: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>{data.Places[0].CityName}</Text>
                    <Text style={{color: '#C4C4C4', marginHorizontal: 5}}> ➝ </Text>
                    <Text style={styles.text}>{data.Places[1].CityName}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{...styles.text, color: '#878787', fontSize: 13}}>
                        {data.Places[0].IataCode} — {date} — {time}
                    </Text>
                </View>
                <Text style={{...styles.text, color: '#878787', fontSize: 13}}>{data.Carriers[0].Name}</Text>
                
            </View>
        </View>
        
        <View style={{ flexDirection: 'row', flex:1, alignItems: 'flex-end', justifyContent: 'flex-end', marginVertical: 10, marginHorizontal: 20}}>
            <Text style={{...styles.text, fontSize: 11, marginRight: 8, bottom: 2, color: '#878787'}}>Price:</Text>
            <Text style={styles.text}>{quote.item.MinPrice} {data.Currencies[0].Symbol}</Text>
        </View>
        
        <TouchableOpacity
            style={{ position:'absolute', top: 15, right:15 }}
            onPress={() => setFavourite(quote.item.QuoteId)}
        >
            <Image source={require('../assets/Vector.png')} style={{tintColor: quote.item.is_favourite ? '#F04393' : 'grey'}}/>
        </TouchableOpacity>
        
        
    </TouchableOpacity>
    )
}

export default flight

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
    },
    circle: {
        width: 60,
        height: 60,
        marginTop:20,
        marginBottom: 14,
        marginRight: 20,
        borderRadius: 30,
        backgroundColor: 'rgba(0, 119, 255, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 17,
        letterSpacing: -0.408,
        color: '#000000'
    },
});