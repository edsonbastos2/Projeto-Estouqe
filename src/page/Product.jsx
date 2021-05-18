import { useState } from 'react';
import {Card, Form, Button, Container, Col} from 'react-bootstrap';
import firebase from '../firebaseConnection';
import sweetalert from 'sweetalert';

export default function Product(){

    const [nome, setNome] = useState('')
    const [modelo, setModelo] = useState('')
    const [fabricante, setFabricante] = useState('')
    const [lote, setLote] = useState('')
    const [setor, setSetor] = useState('')
    const [usuario, setUsuario] = useState('')
    const [data, setData] = useState('')

    async function handleAdd(){
        if(nome === '' && lote === '' && usuario === '' && setor === ''){
            sweetalert({title:'Preencha os campos!', text: 'Você tem que preencher os campos', icon:'warning', button:'Voltar'})
            return;
        }else{
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
        sweetalert({title:'Sucesso!', text:'Cadastro feito com sucesso!', icon:'success', button:'OK'})
        .then(() => {
            setNome('')
            setModelo('')
            setFabricante('')
            setLote('')
            setSetor('')
            setUsuario('')
            setData('')
        })
        .catch((error) => {
            sweetalert.warning('Algo deu errado!' + error)
        })
    }

    }

    return(
        <Container>
            <Card className="mt-5">
                <Card.Header>Cadastrar Produto</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicNome">
                                <Form.Label>Nome do Produto</Form.Label>
                                <Form.Control type="text" placeholder="Nome produto" value={nome} onChange={e => setNome(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicModelo">
                                <Form.Label>Modelo do Produto</Form.Label>
                                <Form.Control type="text" placeholder="Modelo produto" value={modelo} onChange={e => setModelo(e.target.value)}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicFabricante">
                                <Form.Label>Fabricante do Produto</Form.Label>
                                <Form.Control type="text" placeholder="Fabricante do Produto" value={fabricante} onChange={e => setFabricante(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicLote">
                                <Form.Label>Lote do Produto</Form.Label>
                                <Form.Control type="text" placeholder="Lote do Produto" value={lote} onChange={e => setLote(e.target.value)}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicSetor">
                                <Form.Label>Setor do Produto</Form.Label>
                                <Form.Control type="text" placeholder="Setor do Produto" value={setor} onChange={e => setSetor(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicUsuario">
                                <Form.Label>Usuário do Produto</Form.Label>
                                <Form.Control type="text" placeholder="Usuário do Produto" value={usuario} onChange={e => setUsuario(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicData">
                                <Form.Label>Data Saída</Form.Label>
                                <Form.Control type="date" placeholder="Data Saída" value={data} onChange={e => setData(e.target.value)}/>
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" onClick={handleAdd}>Cadastrar</Button>{' '}
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}