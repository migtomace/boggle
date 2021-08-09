import React, { useState } from "react";
import css from "./Tags.module.css"
import {MyTimer} from "../Timer/Timer";

export const Tags = props => {

    let [tags, setTags] = useState([]);
    const [points, setPoints] = useState(0);
    const [isExpired, setIsExpired] = useState(false);
    const [isRestarting, setIsRestarting] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [found, setFound] = useState(props.found);

    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };

    const addTags = event => {
        if (event.target.value !== "" && !tags.includes(event.target.value.toUpperCase())) {
            setPoints(points+isValidWord(event.target.value.toUpperCase()));
            setTags([...tags, event.target.value.toUpperCase()]);
            event.target.value = "";
        }
    };

    //checks if it is valid word before it adds points
    const isValidWord = (word) => {
        if (found.includes(word)) {
            console.log(word)
            return renderSwitch(word);
        } else return 0;
    }

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

    if (isRestarting){
        setTags([]);
        setIsRestarting(false);
        setPoints(0);
        props.getTags(tags);
    }

    if (isExpired){
        props.getTags(tags);
    }

    this.Tags.onChange(()=>{
        props.getRunning(isRunning);
    })

    //For Timer - Sets Timer Time
    const time = new Date();
    time.setSeconds(time.getSeconds() + 180); // 10 minutes timer

    return (
        <div>
            <div>
                <MyTimer expiryTimestamp={time} changeExpired={isExpired => setIsExpired(isExpired)} getRestarting={isRestarting => setIsRestarting(isRestarting)} getRunning={isRunning => setIsRunning(isRunning)}/>
            </div>

            {
                isExpired ? (
                    <div>
                        <h1>Times Up!</h1>
                        <p>Points: {points}</p>
                    </div>
                ) : (
                    <input
                        type="text"
                        className={css.tagInput}
                        onKeyUp={event => {
                            if((event.target.value.length < 3 || event.target.value.length > 16)){
                                return null;
                            } else if(event.key === "Enter") {
                                addTags(event);
                            }
                        }}
                        placeholder="Press enter to add Word..."
                    />)
            }

            {tags.length ? (
                <ul className={css.tagContainer}>
                    {tags.map((tag, index) => (
                        <li key={index} className={css.tag}>
                            <span>{tag}</span>
                            <span className={css.tagCloseIcon}
                                  onClick={() => removeTags(index)}
                            >
                        x
                    </span>
                        </li>
                    ))}
                </ul>
            ) : null}


        </div>
    );
};

export default Tags;