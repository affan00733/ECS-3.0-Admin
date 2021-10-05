import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/home'
import Subject from './src/Subject'
import ChapPoint from './src/chapPoint'
import Meet from './src/meet'
import UsersCreated from './src/addUser'
import Lecture from "./src/lecture"
import userToSubject from "./src/userToSubject"
import addTeacher from "./src/addTeacher"
import teacherToSubject from "./src/teacherToSubject"
import deleteUser from "./src/deleteUser"

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >

      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Subject" component={Subject} />
      <Stack.Screen name="ChapterPoint" component={ChapPoint} />

      <Stack.Screen name="Meet" component={Meet} />
      <Stack.Screen name="UsersCreated" component={UsersCreated} />
      <Stack.Screen name="Lecture" component={Lecture} />
      <Stack.Screen name="userToSubject" component={userToSubject} />
      <Stack.Screen name="addTeacher" component={addTeacher} />
      <Stack.Screen name="teacherToSubject" component={teacherToSubject} />
      <Stack.Screen name="deleteUser" component={deleteUser} />


    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}