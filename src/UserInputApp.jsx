import React, { useState } from 'react'
import { Button, Container, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'

function UserInputApp() {
    const [textCod, setTextCod] = useState('')
    const [textDec, setTextDec] = useState('')

    const handleCodChange = (e) => {
        setTextCod(e.target.value)
    }
    const handleDecChange = (e) => {
        setTextDec(e.target.value)
    }
    /*A letra "a" é convertida para "ai"
    A letra "e" é convertida para "enter"
    A letra "i" é convertida para "imes"
    A letra "o" é convertida para "ober"
    A letra "u" é convertida para "ufat"*/
    const alfabeto1 = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" }
    const alfabeto2 = { "ai": "a", "enter": "e", "imes": "i", "ober": "o", "ufat": "u" }

    const handleSubmitCod = (e) => {
        e.preventDefault()
        let doneTextCod = textCod
        
        for(const chave in alfabeto1) {
            if( textCod.includes(chave) ) {
                doneTextCod = doneTextCod.replace( new RegExp(chave, 'g'), alfabeto1[chave] )
            }
        }
        setTextDec(doneTextCod)
        console.log(doneTextCod)
    }

    const handleSubmitDec = (e) => {
        e.preventDefault()
        let doneTextDec = textDec
        
        for(const chave in alfabeto2) {
            if( textDec.includes(chave) ) {
                doneTextDec = doneTextDec.replace( new RegExp(chave, 'g'), alfabeto2[chave] )
            }
        }
        setTextCod(doneTextDec)
        console.log(doneTextDec)

    }

    return (
        <Container>
            <Form onSubmit={handleSubmitCod}>
                <FormGroup>
                    <FormLabel>Codificador</FormLabel>
                    <FormControl type='text' as='textarea' value={textCod} onChange={handleCodChange}>
                    </FormControl>
                    <Button type='submit'>Codificar</Button>
                </FormGroup>
                </Form>

                <Form onSubmit={handleSubmitDec}>
                <FormGroup>
                    <FormLabel>Decodificador</FormLabel>
                    <FormControl as='textarea' value={textDec} onChange={handleDecChange}>
                    </FormControl>
                    <Button type='submit'>Decodificar</Button>
                </FormGroup>
                </Form>
           
        </Container>

    )
}

export default UserInputApp
