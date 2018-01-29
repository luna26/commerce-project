import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View } from 'react-native';
import HeaderCategory from './HeaderCategory';
import ContainerCategories from './ContainerCategories';
import CategoryItem from './CategoryItem';

class Category extends Component {
    callStore(){
        //Communications.phonecall('87486547', true)
        Actions.perfilRestaurant();
    }
    render() {
        const { containerStyle, textStyle } = styles;
        return (
            <View style={containerStyle}>
                 <HeaderCategory label={'Categoria Seleccionada'} />
                 <ContainerCategories>
                     <CategoryItem itemName={'Que Taco'} onPress={this.callStore.bind(this)}/>
                     <CategoryItem itemName={'Caseys'} />
                     <CategoryItem itemName={'AS de oro'} />
                 </ContainerCategories>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor:'#FBC02D',
        flex:1
    }, 
    textStyle:{

    }
}

export default Category;