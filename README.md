# Customize ListView

This is Customize card view list for Android and iOS React-Native apps. can use as it is or customized as per their app.


![](https://raw.githubusercontent.com/ranadheersingh/CustomizeList/master/src/img/screen1.png)



### Simple example


```js
    import ListDetail from './ListDetail'
    <CardViewList  listData={listData} callBackDetails={this.callBackDetails}  optionParams={ 
        {
            dataMap:{ isDataMapChange: true, title:'header', description:'header_content', thumbnail_image:'icon' },
            'isThumbnailVisible': true, 
            showDetailsArrowIcon: require('./src/img/r_arrow_1.png'),
            listHeight: 120,
            titleMaxVisibleChars: 100,
            thumbnailStyle: {},
            navIconStyle: {},
            titleStyle: { color:'#15C39A', fontSize:20 },
            contentStyle: { color:'#85878C' }
        } 
    } />

```


### Features
- [x] Customize card view list in iOS
- [x] Customize card view list in Android
- [x] Customize styles
- [x] Search list future also available.



### License

