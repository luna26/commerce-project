import React, { Component } from 'react';
import { Text, View } from 'react-native';
import IconPlace from './IconPlace';
import ListIcon from './ListIcons';

class ItemPlace extends Component {
    render() {
        const {mainContainerStyle} = styles;
        return (
            <View style={mainContainerStyle}>
                <Text>{this.props.label}</Text>
                <ListIcon>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                    <IconPlace label={'name'}/>
                </ListIcon>
            </View>
        );
    }
}

const styles = {
    mainContainerStyle:{
        paddingTop:15,
        paddingBottom:15,
        borderWidth: 1,
        borderColor:'#000'
    }
}

export default ItemPlace;