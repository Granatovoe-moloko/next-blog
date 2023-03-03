import React, { FC } from 'react';
import { blogType } from '../types';

type blogInfoProps = {
    blog: blogType,
};

const BlogInfo:FC<blogInfoProps> = ({blog}) => {

    const {date, text, title} = blog || {};

    if(!blog) {
        return <p>Заметки нет</p>;
    }
    return (
        <>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{text}</p>
        </>
    )
};

export default BlogInfo;
