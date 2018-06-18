/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import List from './src/components/List';
import Header from './src/components/common';
const listData = [
  {
      "header":"Information Systems: The evolution of the HMI",
      "header_content":"Written by Jeanine Katzel, the article examines how human-machine interface (HMI) has evolved from push buttons to lights and switches to hardwired devices and electronic panels and now HMI systems that interconnect millions of pieces of data. Exploring this evolution is an important step in learning UI engineering, as HMIs and their design change the workforce and become a model for UI engineering innovation.",
      "icon":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "header":"5 Principles of User-Centered Interface Design",
      "header_content":"In this article, Adrian Jones explains how five principles of user-experience design and user-interface design apply to machines and electronics. With an eye to the importance of the user, Jones reminds us that not all user interfaces are easy to use and urges UI engineers to keep the user at the center of their designs.",
      "icon":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "header":"A Human-machine Interface Evaluation Method Based on Balancing Principles",
      "header_content":"Jun Su Ha highlights the human factors that act as guidelines and standards for UI engineers when designing HMIs in this study. The balancing principle that emerges is that all HMI elements should be designed according to their importance. The conclusions and suggestions for further studies are valuable for individuals interested in learning UI engineering online.",
      "icon":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "header":"Electrical Construction & Maintenance",
      "header_content":"There are more than 1,000 articles related to user interface engineering available from Electrical Construction & Maintenance, covering topics from industry standards to testing and everything in between. With such a broad set of resources available, Electrical Construction & Maintenance is an invaluable resource for those who want to learn UI engineering online.",
      "icon":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "header":"UX Magazine",
      "header_content":"“A free community resource exploring all facets of experience design,” UX Magazine features content with current information from professionals in all areas of user experience who work closely with the editors to ensure credible articles are provided on a weekly basis. With a focus on how user experience fits into technology, design thinking, and project planning, UX Magazine’s articles are informative pieces for anyone interested in learning UI engineering online.",
      "icon":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "header":"Human-Machine Interface: Design Principles of Visual Information in Human-Interface Design",
      "header_content":"IEEE Xplore, a digital library, delivers quality technical literature in electrical engineering, computer science, and electronics in its full-text form. This paper by Gong Chao of the Beijing Institute of Technology is one such article that is of good use for someone studying UI engineering online; its focus is on the concept of HMI visualization design.",
      "icon":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "header":"Tangible Interaction",
      "header_content":"Written by Eva Hornecker, this paper explores tangible interruption as an “umbrella term” and as a research area. While tangible interaction is an interdisciplinary area that spans human-computer interaction (HCI) and interaction design, it “specializes on interfaces or systems that are in some way physically embodied – be it in physical artifacts or in environments.” Because it covers so many areas related to UI engineering, this article is an important read for someone studying UI engineering online.",
      "icon":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "header":"ZURB Blog",
      "header_content":"A product design company in the business since 1998, ZURB provides consulting, product design tools, and training. With a focus on “people-centric design that improves lives and creates financial success,” ZURB offers its blog as a resource for people who want to learn more about product design and UI engineering online.",
      "icon":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "header":"Accelerator",
      "header_content":"The Bresslergroup shares its product innovation insights in its blog, Accelerator. With posts that cover industrial design, user experience, engineering, medial products, and more, Accelerator is a smart choice in resources for learning UI engineering online.",
      "icon":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "header":"ustwo",
      "header_content":"ustwo looks for the best design and engineering talent in the industry. They partner with world-leading brands and launch their own products with design and usability as their focus. The ustwo blog focuses on the company’s products and innovation, and their in-car HMI series is a must-read for people looking to learn UI engineering online.",
      "icon":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  }
];

export default class App extends Component {
  
  render() {
    return (
      <View>
        <List  listData={listData} callBackDetails={this.callBackDetails}  optionParams={ 
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
          } } />
      </View>
    );
  }
  callBackDetails(list) {
    console.log('title: ', list.title, ', description: ',list.description, ', url: ', list.url);
    alert('title: '+ list.title +', description: '+list.description +', url: '+ list.url);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
