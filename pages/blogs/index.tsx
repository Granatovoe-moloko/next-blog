import { GetStaticProps } from 'next';
import Link from 'next/link';
import React, { FC } from 'react'
import { blogType } from '../../types';

type blogsProps = {
    blogs: [blogType],
};

export const getStaticProps:GetStaticProps = async () => {
    try {

        const response = await fetch('https://6401ebf1ab6b7399d0af8f00.mockapi.io/items');
        const data = await response.json();

        if(!data) {
            return (
                <p>еще ничего не опубликовали</p>
            )
        }

        return {
            props: {blogs: data}
        }
    }
    catch {
        return {
            props: {blogs: null},
        }
    }
}

const Blogs:FC<blogsProps> = ({blogs}) => {
  return (
    <>
        <ul>
            {blogs && blogs.map(({id, title, date, text}) => {
                return (
                    
                    <li key={id}>
                        <span>{id}</span>
                        <Link href={`/blogs/${id}`}><h2>{title}</h2></Link>
                        <span>{date}</span>
                        <div>{text}</div>
                    </li>
                )
            })}
        </ul>
    </>
  )
};

export default Blogs;
