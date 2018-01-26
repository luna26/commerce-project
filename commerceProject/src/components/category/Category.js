import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HeaderCategory from './HeaderCategory';
import ContainerCategories from './ContainerCategories';
import CategoryItem from './CategoryItem';
import Communications from 'react-native-communications';

class Category extends Component {
    callStore(){
        Communications.phonecall('87486547', true)
    }
    render() {
        const { containerStyle, textStyle } = styles;
        return (
            <View>
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
    }, 
    textStyle:{

    }
}

export default Category;