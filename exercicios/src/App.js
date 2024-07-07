import React from "react";
import { View } from 'react-native'

import { Comp1, Comp2 } from "./components/Multi";
import Primeiro from './components/Primeiro'

export default () => (
  <View>
      <Comp1 />
      <Comp2 />
      <Primeiro />
  </View>
)