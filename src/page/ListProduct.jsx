import { useEffect, useState } from "react";
import firebase from 'firebase';
import sweetalert from 'sweetalert';
import { Table, Button, Modal } from 'react-bootstrap';
import UpdateProduct from './UpdateProduct';
import './product.css';

export default function ListProduct(){

    const [produtos, setProdutos] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        async function loadProduct(){
            await firebase.firestore().collection('produto')
            .get()
            .then( resp => {
                let list = []

                resp.forEach(doc => {
                    list.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        modelo: doc.data().modelo,
                        fabricante: doc.data().fabricante,
                        lote: doc.data().lote,
                        setor: doc.data().setor,
                        usuario: doc.data().usuario,
                        entrada: doc.data().entrada.toString(),
                    })
                })

                setProdutos(list)
            })
            .catch( error => {
                sweetalert({title:'Error', text:'Algo deu errado', icon: 'error'})
            })
        }

        loadProduct()
    }, [])

   async function destroy(id){
       
       await sweetalert({
           title: "Excluír",
           text: "Você tem certeza",
           icon: 'warning',
           buttons:['Não', 'Sim']
       })
       .then((resp) => {
           if(resp){
                firebase.firestore().collection('produto').doc(id)
                .delete()
                .then(() => {
                    sweetalert({text:'Exclusão feita com sucesso!', icon:'success'})
                })
            }    
        })
       .catch(error => {
        sweetalert({title:'Error', text:'Algo deu errado', icon: 'error'})
       })
    }

    return(
        <>
        <Modal show={show} onHide={() => setShow(false)} size="lg" dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Formulário de Atualização
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UpdateProduct/>
            </Modal.Body>
        </Modal>
        <Table striped bordered hover className="mt-5">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Fabricante</th>
                    <th>Modelo</th>
                    <th>Lote</th>
                    <th>Setor</th>
                    <th>Usuário</th>
                    <th>Saída</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {
                    produtos.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{item.fabricante}</td>
                            <td>{item.modelo}</td>
                            <td>{item.lote}</td>
                            <td>{item.setor}</td>
                            <td>{item.usuario}</td>
                            <td>{item.entrada}</td>
                            <td>
                            <div className="actions">
                            <Button variant="primary" onClick={() => setShow(true)}>
                                Editar
                            </Button>
                                <Button onClick={() => destroy(item.id)} variant="danger">Excluir</Button>
                            </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </>
    )
}