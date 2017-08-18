import React, { Component } from 'react';
import { Text } from 'react-native';
import { AppRegistry, View, Image } from 'react-native';
import $ from 'jquery';

export default class HelloWorldApp extends Component {
  $.ajax('http://jsonplaceholder.typicode.com/posts/1', {
    method: 'GET'
  }).then(function(data) {
    console.log(data);
  });
  
  $.ajax('http://jsonplaceholder.typicode.com/posts', {
  method: 'GET'
  }).then(function(data) {
  console.log(data);  
  });
  
  // POST adds a random id to the object sent
  $.ajax('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
  }).then(function(data) {
    console.log(data);
  });

  /* will return
  {
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1
  }
  */

  $.ajax('http://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    data: {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    }
  }).then(function(data) {
    console.log(data);
  });

  /* will return
  {
    id: 1
    title: 'foo',
    body: 'bar',
    userId: 1
  }
  */

  $.ajax('http://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    data: {
      title: 'foo'
    }
  }).then(function(data) {
    console.log(data);
  });

  /* will return
  {
    id: 1
    title: 'foo',
    body: 'quia et suscipit [...]',
    userId: 1
  }
  */

  $.ajax('http://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
  });

  // Will return all the posts that belong to the first user
  $.ajax('http://jsonplaceholder.typicode.com/posts?userId=1').then(function(data) {
    console.log(data);
  });

  $.ajax('http://jsonplaceholder.typicode.com/posts/1/comments').then(function(data) {
    console.log(data);
  });
  // Which is equivalent to /comments?postId=1

  render() {
      return (
      <View>
        <Text style={{fontWeight: 'bold'}}>Denis Enrico Hasyim</Text>
        <Image
          style={{width: 100, height: 100}}
          source={require('./img/favicon.png')}
        />
        <Text style={{fontWeight: 'bold'}}>Batch 5 Genovese</Text>
      </View>
    );
  }
}



// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);

//PERUBAHAN A
//PERUBAHAN B
//PERUBAHAN C