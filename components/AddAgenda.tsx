import { useState } from "react";
import { Modal, TextInput, TouchableOpacity, View, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

interface AddAgendaProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    addTarefa: (desricao: string) => void;
}

export default function AddAgenda({ modalVisible, setModalVisible, addTarefa }: AddAgendaProps) {
    const [descricao, setDescricao] = useState('');
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            style={{ backgroundColor: '#000', opacity: 1 }}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '80%', height: 300, backgroundColor: '#f2f2f2', borderRadius: 10, padding: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <AntDesign name="closesquare" size={24} color="red" />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: '#000' }}>Adicionar Tarefa</Text>
                    <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            marginBottom: 10,
                            padding: 10,
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                        }}
                        placeholder="Digite a tarefa"
                        onChange={(text) => setDescricao(text.nativeEvent.text)}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#007AFF',
                                padding: 10,
                                borderRadius: 5,
                            }}
                            onPress={() => {
                                if (descricao.trim() === '') {
                                    alert('Digite uma tarefa')
                                    return
                                }
                                addTarefa(descricao)
                                setDescricao('')
                                setModalVisible(false)
                            }}
                        >
                            <Text style={{ color: '#fff' }}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )

}
