import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Card, CardSection, Button } from './common';
const MAX_TITLE_WIDTH = 22;
const LIST_HEIGHT = 100;
const ListDetail = ({ list, callBackDetails, optionParams  }) => {
    const { 
        title, 
        description, 
        thumbnail_image, 
        image, 
        url
    } = list;
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailContainerStyle, 
        headerTextStyle ,
        navIconStyle,
        navContentStyle
    } = styles;
    
    loadThumbnail = () => {
        if (optionParams && !optionParams.isThumbnailVisible) {
            return <View/>;
        }
        return(
            <View style={thumbnailContainerStyle}>
                <Image 
                    style={thumbnailStyle} 
                    source={{ uri: thumbnail_image }} 
                />
            </View>
        )
    }
    loadTitle = (title) => {
        if(title.length > MAX_TITLE_WIDTH) {
            return title.substring(0, MAX_TITLE_WIDTH)+'...'
        }
        return title;
    }
    loadArrowImage = () => {
        let iconPath = optionParams.show_details_icon;
        var arrowIconeImageName =  (optionParams && iconPath)?  iconPath : require('../img/r_arrow.png');
        return (
            <Image 
                style={navIconStyle} 
                source={ arrowIconeImageName }  
            />
        )
    }
    return (
        <Card>
            <CardSection style={{height:LIST_HEIGHT}}>
                {this.loadThumbnail()}
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{this.loadTitle(title)}</Text>
                    <Text style={{height:50}}>{description}</Text>
                </View>
                <View style={navContentStyle}>
                    <TouchableWithoutFeedback onPress={() => {callBackDetails(list)}}>
                        {this.loadArrowImage()}
                    </TouchableWithoutFeedback>
                </View>
            </CardSection>
        </Card>
    );
};
const styles = {
    headerContentStyle: {
        flex: 3,
        flexDirection: 'column',
    },
    headerTextStyle: {
        fontSize: 18,
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        borderWidth:40,
        /*borderRadius: 40,*/
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    navContentStyle : {
        justifyContent: 'center',
    }, 
    navIconStyle:{
        justifyContent: 'center',
        height: 20,
        width: 20,
    }
};
export default ListDetail;