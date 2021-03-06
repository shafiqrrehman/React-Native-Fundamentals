import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar';


let todoIndex = 0

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.setType = this.setType.bind(this)
  }

  inputChange(inputValue) {
    console.log('Input Value: ', inputValue)
    this.setState({ inputValue })
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return
    }
    let todo = {
      title: this.state.inputValue,
      todoIndex: todoIndex,
      complete: false
    }
    todoIndex++
    this.state.todos.push(todo)
    this.setState({ todos: this.state.todos, inputValue: '' }, () => {
      console.log('State: ', this.state)
    })
  }

  deleteTodo (todoIndex) {
    let { todos } = this.state;
    todos = this.state.todos.filter((todo) => { return todo.todoIndex !== todoIndex })
    this.setState({todos})
  }

  toggleComplete (todoIndex) {
    let { todos } = this.state;
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
  }

  setType (type) {
    this.setState({ type })
  }

  render() {
    const { inputValue, todos, type } = this.state;
    console.log(todos);
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersist="always"
          style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)} />
            <Button submitTodo={this.submitTodo} />
          <TodoList 
            type={type} 
            toggleComplete={this.toggleComplete} 
            deleteTodo={this.deleteTodo}
            todos={todos} />
        </ScrollView>
        <TabBar type={type} setType={this.setType.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
});
