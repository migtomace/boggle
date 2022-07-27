import React, { useState } from 'react';
import matrix from './helpers/matrix';
import words from './helpers/words.json'
import findWords from "./helpers/findWords";
import './Boggle.css'
import Tags from './Tags/Tags';
import $ from 'jquery';

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

    const m = matrix(4, 4);
    const [searchTerm, setSearchTerm] = useState("");
    const [tags, setTags] = useState([]);
    const [isRunning, setRunning] = useState(false);
    let found = findWords(m, L).sort();


    return (
        <div>
            <section id="Matrix">
                <input type="button" onClick={() => {window.location.href = "https://www.miguelacevedo.com"}} value="Home"/>
                <h1>Boggle</h1>
                <h3>Rules</h3>
                <ul>
                    <li>Each word must be at least three letters</li>
                    <li>Words will be counted once, regardless of meaning</li>
                    <li>No repeat words</li>
                    <li>Both singular and plural forms are aloud</li>
                </ul>

                <h3>Points</h3>
                <em>Points are dependant upon word length:</em>
                <ul>
                    <li>3 letter = 1 point</li>
                    <li>4 letter = 1 point</li>
                    <li>5 letter = 2 points</li>
                    <li>6 letter = 3 points</li>
                    <li>7 letter = 5 points</li>
                    <li>8+ letter = 11 points</li>
                </ul>
                <table>
                    <tbody>
                    {m.map((item, index) => {
                        return (
                            <tr>
                                {item.map((i) => { return (<td>{i}</td>)})}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <Tags getTags={tags => setTags(tags)} found={found} getRunning={isRunning => setRunning(isRunning)}/>
                <div>
                    {tags.length ? (<h2>Your Valid Words</h2>) : null}

                    {tags.map(tag => {
                        if (found.includes(tag)){
                            return (
                                <div className="word">
                                    <h6>{tag} </h6>
                                    <p className="points">
                                        {renderSwitch(tag)} + points</p>
                                </div>)
                        } else return null;

                    })}
                </div>
            </section>


            <br/>

            {tags.length ? (
                <section>
                <h1>All Valid Words:</h1>
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
                ) : null}


        </div>
    )

}