import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import PreviewData from '../components/PreviewData';

const INITIAL_STATE = [
    {
    name:'Rafael',
    age:'26'
    }    
];

class FormContainer extends Component {
    
        
        state = {
            newUser: {
                name:'',
                age:''
            },
            usersSaved:INITIAL_STATE        
    }

    handleName = (e) => {
        let value = e.target.value;

        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser, // con este nos sirve para guardar los valores anteriores para no perder los demas datos
                    name: value //y solo actualizamos el name
                }
            })
        );
    }

    handleAge = (e) => {
        let value = e.target.value;

        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser, // destructuracion de objetoscon este nos sirve para guardar los valores anteriores para no perder los demas datos
                    age: value //y solo actualizamos el name
                }
            })
        );
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let userData = this.state.newUser;
        this.setState(prevState => (
            {
                usersSaved: [                
                    ...prevState.usersSaved,
                    userData
                ],                 
                newUser: {
                    name: '',
                    age: ''
                }
            }
        ));
    }

    handleClearForm = (e) => {
        e.preventDefault();
        this.setState(            
            {newUser: {
                name: '',
                age: ''
            }}
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col-8">
                <p>Formulario React JS</p>
                <form>
                    <Input                                         
                    name="name"
                    type="text"  //se ingresa tipo texto
                    value={this.state.newUser.name}
                    placeholder="Ingresa tu nombre"
                    handleChange={this.handleName}
                    />
                    <Input 
                    name="age"
                    type="number" //solo recibe datos numericos
                    value={this.state.newUser.age}
                    placeholder="Ingresa tu edad"
                    handleChange={this.handleAge}
                    />
                    <Button
                        action={this.handleFormSubmit}                     
                        title="Enviar"
                    />
                    <Button
                        action={this.handleClearForm}                     
                        title="Reiniciar"
                    />
                </form>
                <PreviewData 
                    data={this.state.usersSaved}
                />                
                </div>
            </div>
        )
    }
};

export default FormContainer;