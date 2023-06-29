import React, { useState, useEffect } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Produtor from './componentes/Produtor';
import Topo from './componentes/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Produtores({ melhoresProdutores }) {
  const route = useRoute();
  const navigation = useNavigation();
  const [ exibeMsg, setExibeMsg ] = useState(false);
  const lista = useProdutores(melhoresProdutores);
  const { tituloProdutores, mensagemCompra } = useTextos();
  const nomeCesta = route.params?.compra.nome;
  const timeCompra = route.params?.compra.timestamp;

  const msgCompleta = mensagemCompra?.replace("$nome", nomeCesta);

  useEffect(() => {
    setExibeMsg(!!nomeCesta);
    let timeout;
    if (nomeCesta) {
      timeout = setTimeout(() => {
        setExibeMsg(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [timeCompra]);

  const TopoLista = () => {
    return <>
      <Topo melhoresProdutores={melhoresProdutores} />
      {exibeMsg && <Text style={estilos.compra}>{msgCompleta}</Text>}
      <Text style={estilos.titulo}>{tituloProdutores}</Text>
    </>
  }

  return <FlatList
    data={lista}
    renderItem={
      ({ item }) => <Produtor {...item}
        aoPressionar={() => { navigation.navigate('Produtor', item) }} />
    }
    keyExtractor={({ nome }) => nome}
    ListHeaderComponent={TopoLista}
    style={estilos.lista} />
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  compra: {
    backgroundColor: '#eaf5f3',
    padding: 16,
    color: "#464646",
    fontSize: 16,
    lineHeight: 26
  }
})
