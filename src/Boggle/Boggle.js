import React, { useState } from 'react';
import matrix from './helpers/matrix';
import words from './helpers/words.json'
import findWords from "./helpers/findWords";
import './Boggle.css'
import Tags from './Tags/Tags';
import Timer, {MyTimer} from "./Timer/Timer"

//uppercase words
const L = words.map(w => w.toUpperCase());

// Word Points
let renderSwitch = (word) => {
    switch(word.length) {
        case 3:
            return 1;
        case 4:
            return 1;
        case 5:
            return 2;
        case 6:
            return 3;
        case 7:
            return 5;
        case 8:
            return 11;
        default: //greater than 8
            return 11;
    }
}


export const Boggle = () => {

    const [searchTerm, setSearchTerm] = useState("");
    let found = findWords(matrix, L).sort();

    //For Timer - Sets Timer Time
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
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
                <Tags/>
                <div>
                    <MyTimer expiryTimestamp={time} />
                </div>
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
                    return (
                        <div className="word">
                            <h6>{item} </h6>
                            <p className="points">
                                {renderSwitch(item)} + points</p>
                        </div>)
                })}
                </p>
            </section>

        </div>
    )

}