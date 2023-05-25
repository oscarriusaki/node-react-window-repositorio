import React, { useState } from 'react'
import { useFetch } from '../hook/useFetch'
import { useCounter } from '../hook/useCounter';

export const MultipleCustomHook = () => {

    const {} = !!data;
    const { counter, increment, decrement, reset } = useCounter();
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];

    return (
        <>
            <h1>Breaaking Bag Quotes</h1>
            <hr />
            {
                (isLoading)?(
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                ):(
                    <blockquote className='blockquote text-end'>
                        <p className='mb-1'>{quote}</p>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>
                )
            }
            <button className='btn btn-primary' onClick={() => increment()}>
                Next quote
            </button>
        </>
    )
}
