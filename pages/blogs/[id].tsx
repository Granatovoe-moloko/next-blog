import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import BlogInfo from '../../components/BlogInfo';
import { blogType } from '../../types';
import { ParsedUrlQuery } from "querystring";

type blogProps = {
  blog: blogType,
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const {id} = context.params as Params;
  const response = await fetch(`https://6401ebf1ab6b7399d0af8f00.mockapi.io/items/${id}`);
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
    <BlogInfo blog={blog}/>
    </>
  )
};

export default Blog;
