import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produtor from '../telas/Produtor/Index';
import Cesta from '../telas/Cesta/index';
import Home from "../telas/Home";
import CompraRealizada from "../telas/CompraRealizada/Index";

const Stack = createNativeStackNavigator();

export default function ProdutorRotas ({ ComponentePrincipal = Home }) {
    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={ComponentePrincipal}/>
        <Stack.Screen name="Produtor" component={Produtor} />
        <Stack.Screen name="Cesta" component={Cesta}/>
        <Stack.Screen name="CompraRealizada" component={CompraRealizada}/>
    </Stack.Navigator>
}