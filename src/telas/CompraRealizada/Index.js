import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import useTextos from "../../hooks/useTextos";
import imgTrofeu from "../../assets/trofeu.png";
import Topo from "../../componentes/Topo";
import Texto from "../../componentes/Texto";
import useprodutores from "../../hooks/useProdutores";

export default function CompraRealizada() {
    const navigation = useNavigation();
    const route = useRoute();
    const { produtor } = route.params;
    const produtores = useprodutores();
    const produtorAtual = produtores.find((prod) => prod.nome == produtor.nome);
 
    const { tituloCompraRealizada, parabens, mensagemParabens, botaoVoltarHome, botaoVoltarProdutor } = useTextos();
    return <>
        <Topo titulo={tituloCompraRealizada} imagem={imgTrofeu} />
        <Texto style={estilos.titulo}>{parabens}</Texto>
        <Texto style={estilos.msgParabens}>{mensagemParabens}</Texto>
        <TouchableOpacity
            style={estilos.btnHome}
            onPress={() => { navigation.popToTop() }}>
            <Texto style={estilos.txtBtnHome}>{botaoVoltarHome}</Texto>
        </TouchableOpacity>
        <TouchableOpacity
            style={estilos.btnVoltarProdutor}
            onPress={() => { navigation.navigate('Produtor', produtorAtual ) }}
        >
            <Texto style={estilos.txtBtnVoltarProdutor}>{botaoVoltarProdutor}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        padding: 16
    },
    imgTrofeu: {
        width: 360,
        height: 351,
    },
    msgParabens: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        padding: 16
    },
    btnHome: {
        marginTop: 18,
        backgroundColor: "#2A9F85",
        paddingVertical: 20,
        borderRadius: 6,
        width: 360,
        marginHorizontal: 14
    },
    btnVoltarProdutor: {
        marginTop: 18,
        backgroundColor: "white",
        paddingVertical: 20,
        borderRadius: 6,
        width: 360,
        marginHorizontal: 14
    },
    txtBtnHome: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
    txtBtnVoltarProdutor: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    }
});