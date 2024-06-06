import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
// import Hero from "../components/Hero";

const BookCovers = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('https://freetestapi.com/api/v1/books?limit=10');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <>
            {/* <Hero /> */}
            {Array.isArray(books) && books.map((book, index) => (
              <div className='flex flex-col col-span-3'>
                <div key={index} className='p-4 m-10 shadow-lg hover:scale-105 shadow-[#00ACD0]'>
                    <h2 className='text-3xl'>{book.title}</h2>
                    <p className='text-red-300'>{book.author}</p>
                </div>
              </div>
            ))}
            <p className='p-5'>test</p>
        </>
    )
}

export default BookCovers;