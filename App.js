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
      "title":"Information Systems: The evolution of the HMI",
      "description":"Written by Jeanine Katzel, the article examines how human-machine interface (HMI) has evolved from push buttons to lights and switches to hardwired devices and electronic panels and now HMI systems that interconnect millions of pieces of data. Exploring this evolution is an important step in learning UI engineering, as HMIs and their design change the workforce and become a model for UI engineering innovation.",
      "url":"https://www.controleng.com/single-article/information-systems-the-evolution-of-the-hmi/d643c1d8644f73884df2c0827cb31f38.html",
      "image":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
      "thumbnail_image":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "title":"5 Principles of User-Centered Interface Design",
      "description":"In this article, Adrian Jones explains how five principles of user-experience design and user-interface design apply to machines and electronics. With an eye to the importance of the user, Jones reminds us that not all user interfaces are easy to use and urges UI engineers to keep the user at the center of their designs.",
      "url":"http://www.sitepoint.com/5-principles-of-user-centered-interface-design/",
      "image":"https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
      "thumbnail_image":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "title":"A Human-machine Interface Evaluation Method Based on Balancing Principles",
      "description":"Jun Su Ha highlights the human factors that act as guidelines and standards for UI engineers when designing HMIs in this study. The balancing principle that emerges is that all HMI elements should be designed according to their importance. The conclusions and suggestions for further studies are valuable for individuals interested in learning UI engineering online.",
      "url":"http://www.sciencedirect.com/science/article/pii/S1877705814001994",
      "image":"https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg",
      "thumbnail_image":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "title":"Electrical Construction & Maintenance",
      "description":"There are more than 1,000 articles related to user interface engineering available from Electrical Construction & Maintenance, covering topics from industry standards to testing and everything in between. With such a broad set of resources available, Electrical Construction & Maintenance is an invaluable resource for those who want to learn UI engineering online.",
      "url":"http://ecmweb.com/search/results/user%20interface%20engineer",
      "image":"https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg",
      "thumbnail_image":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "title":"UX Magazine",
      "description":"“A free community resource exploring all facets of experience design,” UX Magazine features content with current information from professionals in all areas of user experience who work closely with the editors to ensure credible articles are provided on a weekly basis. With a focus on how user experience fits into technology, design thinking, and project planning, UX Magazine’s articles are informative pieces for anyone interested in learning UI engineering online.",
      "url":"http://uxmag.com/",
      "image":"https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
      "thumbnail_image":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "title":"Human-Machine Interface: Design Principles of Visual Information in Human-Interface Design",
      "description":"IEEE Xplore, a digital library, delivers quality technical literature in electrical engineering, computer science, and electronics in its full-text form. This paper by Gong Chao of the Beijing Institute of Technology is one such article that is of good use for someone studying UI engineering online; its focus is on the concept of HMI visualization design.",
      "url":"http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=5335992",
      "image":"https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
      "thumbnail_image":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "title":"Tangible Interaction",
      "description":"Written by Eva Hornecker, this paper explores tangible interruption as an “umbrella term” and as a research area. While tangible interaction is an interdisciplinary area that spans human-computer interaction (HCI) and interaction design, it “specializes on interfaces or systems that are in some way physically embodied – be it in physical artifacts or in environments.” Because it covers so many areas related to UI engineering, this article is an important read for someone studying UI engineering online.",
      "url":"https://www.interaction-design.org/encyclopedia/tangible_interaction.html",
      "image":"https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
      "thumbnail_image":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "title":"ZURB Blog",
      "description":"A product design company in the business since 1998, ZURB provides consulting, product design tools, and training. With a focus on “people-centric design that improves lives and creates financial success,” ZURB offers its blog as a resource for people who want to learn more about product design and UI engineering online.",
      "url":"http://zurb.com/blog/topics",
      "image":"https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
      "thumbnail_image":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "title":"Accelerator",
      "description":"The Bresslergroup shares its product innovation insights in its blog, Accelerator. With posts that cover industrial design, user experience, engineering, medial products, and more, Accelerator is a smart choice in resources for learning UI engineering online.",
      "url":"https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI",
      "image":"https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
      "thumbnail_image":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  },
  {
      "title":"ustwo",
      "description":"ustwo looks for the best design and engineering talent in the industry. They partner with world-leading brands and launch their own products with design and usability as their focus. The ustwo blog focuses on the company’s products and innovation, and their in-car HMI series is a must-read for people looking to learn UI engineering online.",
      "url":"http://accelerator.bresslergroup.com/",
      "image":"https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
      "thumbnail_image":"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
  }
];

export default class App extends Component {
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <List  listData={listData} showDetails={this.showDetails} />
      </View>
    );
  }
  showDetails(url) {
    alert('url')
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
