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

    function hasUppercase(str) {
        const letraMaiuscula = /[A-Z]/
        if (letraMaiuscula.test(str)) {
            console.log("Letra maiuscula TRUE")

            return str.toLowerCase()
        } else {
            console.log("Letra maiuscula FALSE")
            return str
        }
    }

    const handleSubmitCod = (e) => {
        e.preventDefault()

        console.log("pre: " + textCod)
        let formatTextCod = hasUppercase(textCod)
        console.log("pos:" + formatTextCod)

        let doneTextCod = ""

        Array.from(formatTextCod).forEach( (char) => {
            if (char in alfabeto1) {
                doneTextCod += alfabeto1[char]
            } else {
                doneTextCod += char
            }
        })

        /*for (const chave in alfabeto1) {
            if ( formatTextCod.includes(chave) ) {
                doneTextCod += alfabeto1[chave]
 
        formatTextCod = formatTextCod.replace(new RegExp(chave, 'g'), alfabeto1[chave])
        */
        setTextDec(doneTextCod)
        console.log("resultado: " + doneTextCod)
    }



    const handleSubmitDec = (e) => {
        e.preventDefault()
        let doneTextDec = ""

        let formatTextDec = hasUppercase(textDec)

        Array.from(formatTextDec).forEach( (char) => {
            if (char in alfabeto2) {
                doneTextDec += alfabeto2[char]
            } else {
                doneTextDec += char
            }
        })

        setTextCod(doneTextDec)
        console.log("resultado: " + doneTextDec)

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
