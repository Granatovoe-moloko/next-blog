import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import BlogInfo from '../../components/BlogInfo';
import { blogType } from '../../types';

type blogProps = {
  blog: blogType,
}


export const getServerSideProps:GetServerSideProps = async (context) => {
  // console.log(context.query.id);
  // const {id} = context.query.id;
  // const response = await fetch(`https://6401ebf1ab6b7399d0af8f00.mockapi.io/${id}`);
  const response = await fetch(`https://6401ebf1ab6b7399d0af8f00.mockapi.io/blogs/1`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {blog: data},
  }
};

const Blog:FC<blogProps> = ({blog}) => {

  return (
    <>
    <p>89437593475</p>
    <BlogInfo blog={blog}/>
    </>
  )
};

export default Blog;
