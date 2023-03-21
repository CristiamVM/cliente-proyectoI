import React, { useState, useEffect } from "react";
import Menu from "../menu/Menu.js"
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'

function Principal() {
  const [lista, setLista] = useState([]);

  const session = JSON.parse(localStorage.getItem("session"));

  const fetchData = async() => {
    fetch("https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/team", {
      method: "GET",
      headers: { 
        "Authorization": session.token,
        "Content-Type": "application/json" 
      }
    }).then((response) => response.json()).then((data) => {
      if (data.status === "success") {
        const lValor = data.data

        lValor.sort(function(a, b) {
          return a.local_date - b.local_date;
        })

        setLista(lValor);
        console.log(lista)
      }
      else {
        setLista([]);
      }      
    });
  }

  useEffect(() => {    
    fetchData()
  }, []);

  return (
    <React.Fragment>
      <Menu />
        <div className="m-0 row justify-content-center align-items-center">
          <div className="p-4 text-center">
            <Table striped bordered hover>
              <thead className="thead">
                <tr>
                  <th>Equipo</th>
                  <th>Grupo</th>
                  <th>Código Fifa</th>
                  <th>Bandera</th>
                </tr>
              </thead>
              <tbody className="tbody">
                {lista.map((team) => (
                  <tr>
                    <td>{team.name_en}</td>
                    <td>{team.groups}</td>
                    <td>{team.fifa_code}</td>    
                    <td><Image src={team.flag} rounded width={75} height={40} /></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
    </React.Fragment>
  );
}

export default Principal;