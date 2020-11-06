import React, {useState} from 'react'
import {StyleSheet, Dimensions, ScrollView, View, Image, Text, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import moment from 'moment'

const {width} = Dimensions.get('window')


export default function Flight({ route }) {

    const {quote, data, setFavourite} = route.params
    const date = moment(quote.item.OutboundLeg.DepartureDate).format('D MMM, YYYY')
    const time = moment(quote.item.OutboundLeg.DepartureDate).format('HH:mm')
    const boardingTime = moment(quote.item.OutboundLeg.DepartureDate).subtract(40, 'minutes').format('HH:mm')
    const [fav, setFav] = useState(quote.item.is_favourite)

    return (
    <View style={styles.container}>
        <Image source={require('../assets/sky.png')} style={styles.image}/>
        
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wrapper}>
                <TouchableOpacity
                    style={{ position:'absolute', top: 25, right:25 }}
                    onPress={() => {
                        setFavourite(quote.item.QuoteId)
                        setFav(quote.item.is_favourite)
                    }}
                >
                    <Image source={require('../assets/Vector.png')} 
                        style={{tintColor: fav ? '#F04393' : 'grey'}}/>
                </TouchableOpacity>
                
                <View style={{margin: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{...styles.container, alignItems: 'flex-start'}}>
                        <Text style={{...styles.text, color: '#878787', fontSize: 13}}>
                            {date}
                        </Text>
                        <Text style={{...styles.text, fontSize: 36, color: '#404040'}}>
                            {data.Places[0].IataCode}
                        </Text> 
                        <Text style={styles.text}>{data.Places[0].CityName}</Text>
                    </View>

                    <View style={{flexDirection: 'column', flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{...styles.text, fontSize: 30}}> ᐳ </Text> 
                    </View>

                    <View style={{...styles.container, alignItems: 'flex-start'}}>
                        <Text style={{...styles.text, color: '#878787', fontSize: 13}}>
                            {time}
                        </Text>
                        <Text style={{...styles.text, fontSize: 36, color: '#404040'}}>
                            {data.Places[1].IataCode}
                        </Text>
                        <Text style={styles.text}>
                            {data.Places[1].CityName}
                        </Text>
                    </View>
                </View>
                <LinearGradient
                    start={{x: -0.1534, y: -0.133}} end={{x: 1.4595, y: 1.4296}}
                    colors={['#3C4CAD', '#00C3FF']}
                    style={styles.barContainer}
                >
                    <View style={styles.barWrapper}>
                        <View style={{...styles.container, borderRightWidth: 1, borderRightColor: 'white'}}>
                            <Text style={{...styles.text, color: 'white'}}>
                                Price
                            </Text>
                            <Text style={{...styles.text, color: 'white', fontSize: 20}}>
                                {quote.item.MinPrice} {data.Currencies[0].Symbol}
                            </Text>
                        </View>

                        <View style={styles.container}>
                            <Text style={{...styles.text, color: 'white'}}>
                                Boarding
                            </Text>
                            <Text style={{...styles.text, color: 'white', fontSize: 20}}>
                                {boardingTime}
                            </Text>
                        </View>
                    </View>
                </LinearGradient>

                <ScrollView
                    horizontal={true}
                    contentContainerStyle={{padding: 25}}
                    showsHorizontalScrollIndicator={false}
                >
                    <Image source={require('../assets/cathedral.png')} style={styles.carousel}/>
                    <Image source={require('../assets/mcity.png')} style={styles.carousel}/>
                    <Image source={require('../assets/msu.png')} style={styles.carousel}/>
                </ScrollView>
            </View>
        </ScrollView>   
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        width: width,
        position: 'absolute',
    }, 
    wrapper: {
        marginTop: width,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
    },
    text: {
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: -0.408,
        fontSize: 13,
        color: '#878787'
    },
    barContainer: {
        height: 80,
        marginHorizontal: 30,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        borderRadius: 10,
    },
    barWrapper: {
        marginHorizontal: 30,
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    carousel: {
        width: 139,
        height: 200,
        borderRadius: 10,
        // shadowColor: 'rgba(0, 0, 0, 0.15)',
        // shadowOffset: { width: 0, height: 3 },
        // shadowRadius: 4,
        // elevation: 2,
        margin: 5,
        resizeMode: 'cover',
        
    },


    


})