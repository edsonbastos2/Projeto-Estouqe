import { useEffect, useState } from "react";
import firebase from 'firebase';
import { toast } from 'react-toastify';
import { Table } from 'react-bootstrap';

export default function ListProduct(){

    const [produtos, setProdutos] = useState([])

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
                toast.warning('Algo deu errado ' + error)
            })
        }

        loadProduct()
    }, [])

    return(
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
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}