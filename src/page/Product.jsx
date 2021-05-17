import { useState } from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import firebase from '../firebaseConnection';
import { toast } from 'react-toastify';

export default function Product(){

    const [nome, setNome] = useState('')
    const [modelo, setModelo] = useState('')
    const [fabricante, setFabricante] = useState('')
    const [lote, setLote] = useState('')
    const [setor, setSetor] = useState('')
    const [usuario, setUsuario] = useState('')
    const [data, setData] = useState('')

    async function handleAdd(){
        await firebase.firestore().collection('produto')
        .add({
            nome: nome,
            modelo: modelo,
            fabricante: fabricante,
            lote: lote,
            setor: setor,
            usuario: usuario,
            entrada: data,
        })
        .then(() => {
            toast.success('Dados cadastrado com sucesso!')
            setNome('')
            setModelo('')
            setFabricante('')
            setLote('')
            setSetor('')
            setUsuario('')
            setData('')
        })
        .catch((error) => {
            toast.warning('Algo deu errado!' + error)
        })


    }

    return(
        <div className="container">
            <Card className="mt-5">
                <Card.Header>Cadastrar Produto</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicNome">
                            <Form.Label>Nome do Produto</Form.Label>
                            <Form.Control type="text" placeholder="Nome produto" value={nome} onChange={e => setNome(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicModelo">
                            <Form.Label>Modelo do Produto</Form.Label>
                            <Form.Control type="text" placeholder="Modelo produto" value={modelo} onChange={e => setModelo(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicFabricante">
                            <Form.Label>Fabricante do Produto</Form.Label>
                            <Form.Control type="text" placeholder="Fabricante do Produto" value={fabricante} onChange={e => setFabricante(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicLote">
                            <Form.Label>Lote do Produto</Form.Label>
                            <Form.Control type="text" placeholder="Lote do Produto" value={lote} onChange={e => setLote(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicSetor">
                            <Form.Label>Setor do Produto</Form.Label>
                            <Form.Control type="text" placeholder="Setor do Produto" value={setor} onChange={e => setSetor(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicUsuario">
                            <Form.Label>Usuário do Produto</Form.Label>
                            <Form.Control type="text" placeholder="Usuário do Produto" value={usuario} onChange={e => setUsuario(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicData">
                            <Form.Label>Data Saída</Form.Label>
                            <Form.Control type="date" placeholder="Data Saída" value={data} onChange={e => setData(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" onClick={handleAdd}>Cadastrar</Button>{' '}
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}