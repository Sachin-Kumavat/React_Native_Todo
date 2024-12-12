import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, FlatList, Alert, Modal } from 'react-native'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from '../features/todoSlice';
import styles from '../css/TodoScreen';

// const styles = StyleSheet.create({
//     centeredView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: "100vw"
//     },
//     modalView: {
//         margin: 10,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//         width: "90%"
//     },
//     button: {
//         borderRadius: 20,
//         padding: 10,
//         elevation: 2,
//     },
//     buttonOpen: {
//         backgroundColor: '#F194FF',
//     },
//     buttonClose: {
//         backgroundColor: '#46d22d',
//         marginVertical: 5,
//         color: "white",
//         borderRadius: 10,
//         width: "90%"
//     },
//     textStyle1: {
//         color: 'white',
//         fontWeight: 'bold',
//         textAlign: 'center',
//         padding: 6,
//     },
//     modalText: {
//         marginBottom: 15,
//         textAlign: 'center',
//     },
//     viewStyle: {
//         backgroundColor: "#1e90ff",
//         borderRadius: 6,
//         paddingHorizontal: 6,
//         paddingVertical: 12,
//         alignItems: "center",
//         marginBottom: 12,
//         flexDirection: "row",
//         alignItems: "center",
//         paddingHorizontal: 10,
//         shadowColor: "red",
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 1
//     },
//     textStyle: {
//         color: "#fff",
//         fontSize: 20,
//         fontWeight: "800",
//         flex: 1
//     },
//     buttonContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '40%',
//         marginLeft: 10
//     },
//     editButtonStyle: {
//         fontSize: 16,
//         color: '#e76245',
//         marginRight: 10
//     },
//     deleteButtonStyle: {
//         fontSize: 16,
//         color: '#841584'
//     },
//     inputStyle: {
//         borderWidth: 2,
//         borderColor: "blue",
//         borderRadius: 6,
//         paddingVertical: 10,
//         paddingHorizontal: 16,
//         width: "90%"
//     },
//     addButtonStyle: {
//         backgroundColor: "#000",
//         borderRadius: 6,
//         paddingVertical: 8,
//         marginVertical: 34,
//         alignItems: "center"
//     },
//     addButtonText: {
//         color: "#fff",
//         fontWeight: "bold",
//         fontSize: 20
//     }
// });

const dummyData = [
    {
        id: "01",
        title: "wash table"
    },
    {
        id: "02",
        title: "Cooking"
    },
    {
        id: "03",
        title: "Software Coding"
    },
    {
        id: "04",
        title: "Solving Problem"
    }
]





// const renderTodos = ({ item, index }) => {
//     function handleEdit() {

//     }
//     return (
//         <View style={styles.viewStyle} key={index}>
//             <Text style={styles.textStyle}>{item.title}</Text>
//             <View style={styles.buttonContainer}>
//                 <Button
//                     title='Edit'
//                     color="#e76245"
//                     onPress={handleEdit}
//                 />
//                 <Button
//                     title="Delete"
//                     color="#841584"
//                 />
//             </View>
//         </View>
//     )
// }

const TodoScreen = () => {
    const [todo, setTodo] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [editingTodo, setEditingTodo] = useState(null);
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.inputSlice.todoData)
    console.log("kkkkkklllll",todoList);


    const handleAddTodo = () => {
        console.log(todo);
        if (todo.trim()) {
            const newTodo = {
                id: Math.random().toString(),
                title: todo
            }
            dispatch(addTodo(newTodo));
            setTodo("")
        }
    }

    const handleEditTodo = () => {
        console.log(editTodo);
        
        if (editingTodo && editingTodo.title.trim()) {
            console.log(editingTodo);

            dispatch(editTodo({ id: editingTodo.id, newTitle: editingTodo.title }));
            setEditingTodo(null);
            setModalVisible(false); 
        }
    };

    const handleDeleteTodo=(id)=>{
        console.log("Id in delete : ",id);
        
        dispatch(deleteTodo(id))
    }

    return (
        <View style={{ margin: 16 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)} 
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Edit todo title"
                            value={editingTodo ? editingTodo.title : ""}
                            onChangeText={(text) => setEditingTodo({ ...editingTodo, title: text })}
                        />
                        <TouchableOpacity
                            style={styles.buttonClose}
                            onPress={handleEditTodo}
                        >
                            <Text style={styles.textStyle1}>Save Changes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TextInput
                style={styles.inputStyle}
                placeholder='Add a title'
                value={todo}
                onChangeText={(e) => setTodo(e)}
            />
            <TouchableOpacity style={styles.addButtonStyle}
                onPress={handleAddTodo}>
                <Text style={styles.addButtonText}>Add text</Text>
            </TouchableOpacity>

            <FlatList
                data={todoList}
                // horizontal
                // showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={styles.viewStyle} key={index}>
                        <Text style={styles.textStyle}>{item.title}</Text>
                        <View style={styles.buttonContainer}>
                            <Button
                                title='Edit'
                                color="#e76245"
                                onPress={() => {
                                    setEditingTodo(item); 
                                    setModalVisible(true);
                                }}
                            />
                            <Button
                                title="Delete"
                                color="#841584"
                                onPress={()=> {handleDeleteTodo(item.id)}}
                            />
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default TodoScreen;