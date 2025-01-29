import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ImageBackground, ScrollView, StyleSheet, TouchableHighlight, Modal, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import AddAgenda from './components/AddAgenda';

const agenda = [
  {
    id: 1,
    agenda: 'Clique em + para adicionar uma nova tarefa',
  }
]



export default function App() {
  const [fontLato] = useFonts({
    Lato_400Regular,
  });

  const [tarefas, setTarefas] = useState(agenda)
  const [modalVisible, setModalVisible] = useState(false)

  if (!fontLato) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9ACBD0' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    )
  }

  function deletarTarefa(id: number) {
    const novasTarefas = tarefas.filter((item) => item.id !== id)
    alert('Tarefa deletada com sucesso!')
    setTarefas(novasTarefas)
  }

  function addTarefa(desricao: string) {
    const novaTarefa = {
      id: Math.random(),
      agenda: desricao
    }
    setTarefas([...tarefas, novaTarefa])
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#9ACBD0' }}>
      <View style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', marginBottom: 20, }}>
        <ImageBackground source={require('./resource/Agenda.png')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <Text style={{ fontSize: 22, color: '#9ACBD0', fontFamily: 'Lato_400Regular', backgroundColor: 'white', padding: 10, borderRadius: 15, fontWeight: 'bold' }}>Tarefas do dia!</Text>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: '#9ACBD0' }}>
        {
          tarefas.map((item) => (
            <View key={item.id} style={{ margin: 5, borderRadius: 15, width: 'auto', borderBottomWidth: 1, borderBottomColor: '#000', backgroundColor: '#fff', flexDirection: 'row', padding: 15, justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 14, color: '#000', fontFamily: 'Lato_400Regular' }}>{item.agenda}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => { deletarTarefa(item.id) }}>
                  <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          ))
        }
      </ScrollView>
      <View>
        <TouchableHighlight style={{ position: 'absolute', bottom: 20, right: 15, backgroundColor: '#fff', width: 45, height: 45, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} onPress={() => setModalVisible(true)}>
          <AntDesign name="plus" size={24} color="#9ACBD0" />
        </TouchableHighlight>
      </View>
      <AddAgenda modalVisible={modalVisible} setModalVisible={setModalVisible} addTarefa={addTarefa} />
    </View>
  );
}


