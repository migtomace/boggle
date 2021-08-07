import React, { useState } from 'react';
import matrix from './helpers/matrix';
import words from './helpers/words.json'
import findWords from "./helpers/findWords";
import './Boggle.css'

const L = words.map(w => w.toUpperCase());

export const Boggle = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [filterTerm, setFilterTerm] = useState("");
    let found = findWords(matrix, L).sort();
    return (
        <div>
            <section id="Matrix">
                <input type="button" onClick={() => {window.location.reload()}} value="Reload"/>
                <h1>Boggle</h1>
                <table>
                    <thead>
                    <tr>
                        {matrix[0].map((item, index) => {
                            return <td>{item}</td>;
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {matrix.slice(1, matrix.length).map((item, index) => {
                        return (
                            <tr>
                                <td>{item[0]}</td>
                                <td>{item[1]}</td>
                                <td>{item[2]}</td>
                                <td>{item[3]}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </section>


            <br/>

            <section>
                <h1>Valid words:</h1>
                <input type="text" id="search" placeholder="Search..." style={{textTransform: "uppercase"}} onChange={(event) => {
                    setSearchTerm(event.target.value.toUpperCase());
                }}/>
                <p>
                    {found.filter((val) => {
                        if(searchTerm == "") {
                            return val;
                        } else if (val.includes(searchTerm)){
                            return val;
                        };
                    }).map(item => {
                    return <div className="word" style={item.length < 3 ? {background: "red"} : {background: "green"}}> {item} </div>
                })}
                </p>
            </section>

        </div>
    )

}