import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { GetServerSideProps } from 'next';

interface MarkDownCurriculumPageProps{
    markdownContent: string;
}

export const MarkDownCurriculumPage: NextPage<MarkDownCurriculumPageProps> = ({markdownContent}) => {


    return (
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    );
};

export default MarkDownCurriculumPage;

export const getServerSideProps: GetServerSideProps = async () => {
    const url = 'https://raw.githubusercontent.com/GMBermeo/GMBermeo/main/readme.md';
  
    try {
      const response = await fetch(url);
      const markdownContent = await response.text();
  
      return {
        props: {
          markdownContent,
        },
      };
    } catch (error) {
      console.error('Error fetching markdown:', error);
  
      // Return an empty string in case of an error to avoid breaking the component
      return {
        props: {
          markdownContent: '',
        },
      };
    }
  };
  


