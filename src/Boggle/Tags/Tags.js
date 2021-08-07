import React, { useState } from "react";
import css from "./Tags.module.css"

export const Tags = props => {

    const [tags, setTags] = useState(props.tags);

    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };

    const addTags = event => {
        if (event.target.value !== "") {
            setTags([...tags, event.target.value.toUpperCase()]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };

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
        </div>
    );
};

export default Tags;