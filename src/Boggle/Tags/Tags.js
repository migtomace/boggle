import React, { useState } from "react";
import css from "./Tags.module.css"

export const Tags = props => {



    const [tags, setTags] = useState([]);
    const [points, setPoints] = useState(0);

    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };

    const addTags = event => {
        if (event.target.value !== "") {
            setPoints(points+renderSwitch(event.target.value));
            setTags([...tags, event.target.value.toUpperCase()]);
            event.target.value = "";
        }
    };
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


    return (
        <div>
            <ul className={css.tagContainer}>
                {tags.map((tag, index) => (
                    <li key={index} className={css.tag}>
                        <span className='tag-title'>{tag}</span>
                        <span className={css.tagCloseIcon}
                              onClick={() => removeTags(index)}
                        >
                        x
                    </span>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                className={css.tagInput}
                onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                placeholder="Press enter to add Word..."
            />
            <p>Points: {points}</p>
        </div>
    );
};

export default Tags;