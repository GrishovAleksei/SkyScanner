import React, {useEffect, useState} from 'react'
import {Dimensions, FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {GET_DATA, SET_FAVOURITE} from '../redux/actions'
import Flight from '../components/flight'
import Constants from 'expo-constants'
import { LinearGradient } from 'expo-linear-gradient'

const {width} = Dimensions.get('window')

const mapStateToProps = (state, props) => ({
    data: state.data,
})

const mapDispatchToProps = (dispatch, props) => ({
    getData: () => {
        dispatch({
            type: GET_DATA,
            payload: {},
        })
    },
    setFavourite: (QuoteId) => {
        dispatch({
            type: SET_FAVOURITE,
            payload: {QuoteId}
        })
    }
})

const HomeView = ({data, getData, setFavourite, navigation}) => {
    
    useEffect(() => getData(), [getData])

    const [tab, setTab] = useState('browse')
    
    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <Text style={{...styles.title, marginTop: 10}}>Flights</Text>
                <View style={{flexDirection: 'row', marginHorizontal: 20, marginBottom: 3}}>
                    <TouchableOpacity style={{flexDirection: 'column', flex: 4}}
                        onPress={() => setTab('browse')}>
                        <Text style={{...styles.title, marginBottom: 5}}>Browse</Text>
                        <LinearGradient
                            start={{x: -0.3736, y: -0.3734}} end={{x: 1.4595, y: 1.0772}}
                            colors={['#3C4CAD', '#00C3FF']}
                            style={{height: 3, borderRadius: 2, opacity: tab=='browse' ? 1 : 0}}
                        />
                    </TouchableOpacity>
                    
                    <View style={{flexDirection: 'column', flex: 0.5}}/>

                    <TouchableOpacity style={{flexDirection: 'column', flex: 4}}
                        onPress={() => setTab('fav')}
                    >
                        <Text style={{...styles.title, marginBottom: 5}}>Favourites</Text>
                        <LinearGradient
                            start={{x: -0.3736, y: -0.3734}} end={{x: 1.4595, y: 1.0772}}
                            colors={['#3C4CAD', '#00C3FF']}
                            style={{height: 3, borderRadius: 2, opacity: tab=='fav' ? 1 : 0}}
                        /> 
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList 
                horizontal={false}
                contentContainerStyle={{width: width, backgroundColor: '#F8F8F8', paddingVertical: 10}}
                renderItem = { quote => {
                    return (
                        <Flight 
                            data={data} 
                            quote={quote} 
                            navigation={navigation}
                            setFavourite={setFavourite}
                        />
                    )
                }}
                ListEmptyComponent={
                    <Text style={{ textAlign: 'center'}}>There is no flights</Text>
                }
                keyExtractor={item => item.QuoteId}
                data={tab=='browse' ? data.Quotes : data.Quotes.filter(q=>q.is_favourite)}
            />
        </View>   
    )
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeView)

export default Home

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        paddingTop: 10
    },
    title: {
        paddingTop: Constants.statusBarHeight,
        textAlign: 'center',
        letterSpacing: -0.408,
        color: '#000000',
        fontSize: 17,
        fontWeight: '600'
    },
})