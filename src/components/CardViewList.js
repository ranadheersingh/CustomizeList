import React, { Component } from 'react';
import { ScrollView, View, TextInput, Dimensions } from 'react-native';
import {Card, CardSection} from './common'
import axios from 'axios';
import ListDetail from './ListDetail'
const width = (Dimensions.get('window').width-25);
const height = (Dimensions.get('window').height - 120);
class CardViewList extends Component {
    state = {seachString : ''};
    renderLists() {
        state = {
            seachString: ''
        };
        const {
            title,
            description,
            isDataMapChange
        } = this.props.optionParams.dataMap;
        
        const filteredData = this.state.seachString ? this.props.listData.filter(list => {
            let title_text = (isDataMapChange?list[title]:list['title']);
            let descriptione_text = (isDataMapChange?list[description]:list['description']);
            return (title_text.toLowerCase().indexOf(this.state.seachString.toLowerCase()) > -1 || descriptione_text.toLowerCase().indexOf(this.state.seachString.toLowerCase()) > -1);
        }): this.props.listData;
        
        return filteredData.map((list,index) => 
            <ListDetail key={index} list={list} callBackDetails={this.props.callBackDetails}  optionParams={this.props.optionParams}/>
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
export default CardViewList;