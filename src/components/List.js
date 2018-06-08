import React, { Component } from 'react';
import { ScrollView, View, TextInput, Dimensions } from 'react-native';
import {Card, CardSection} from './common'
import axios from 'axios';
import ListDetail from './ListDetail'
const width = (Dimensions.get('window').width-25);
const height = (Dimensions.get('window').height - 120);
class List extends Component {
    state = {seachString : ''};
    renderLists() {
        const filteredData = this.state.seachString ? this.props.listData.filter(list => {
          return list.title.indexOf(this.state.seachString) > -1;
        }): this.props.listData;
        
        return filteredData.map(list => 
            <ListDetail key={list.title} list={list} showDetails={this.props.showDetails} optionParams={this.props.optionParams}/>
        )
    };
    
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        editable = {true}
                        maxLength = {100}
                        style={styles.textStyle}
                        minWidth = {width}
                        placeholder="Search"
                        onChangeText={seachString => this.setState({ seachString })}
                        value={this.state.seachString}
                    />
                </CardSection>
                <CardSection>
                    <ScrollView height={height}>
                        {this.renderLists()}
                    </ScrollView>
                </CardSection>
            </Card>
        )
    }
}
const styles = {
    textStyle :{
        borderWidth: 1,
        borderRadius:5,
        
    }
};
export default List;