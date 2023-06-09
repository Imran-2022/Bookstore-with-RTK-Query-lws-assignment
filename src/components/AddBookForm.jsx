import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAddBookMutation } from '../features/api/apiSlice';
import { filterByType } from '../features/filter/filterSlice';

const AddBookForm = () => {
    const dispatch=useDispatch();
    const [addBook, { isLoading, isSuccess, isError }] = useAddBookMutation();
    const navigate=useNavigate()
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRting] = useState("");
    const [featured, setFeatured] = useState(false);

    const handleAddNewBook = (e) => {
        e.preventDefault();
        addBook({ name, author, thumbnail, price, rating, featured });
    }
    
    useEffect(() => {
        if (isSuccess){
            navigate("/")
            dispatch(filterByType('all'));
        };
    }, [isSuccess, navigate]);


    return (
        <form className="book-form" onSubmit={handleAddNewBook}>
            <div className="space-y-2">
                <label htmlFor="lws-bookName">Book Name</label>
                <input required className="text-input" type="text" id="lws-bookName" name="name" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-author">Author</label>
                <input required className="text-input" type="text" id="lws-author" name="author" value={author} onChange={e => setAuthor(e.target.value)} />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-thumbnail">Image Url</label>
                <input required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" value={thumbnail} onChange={e => setThumbnail(e.target.value)} />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label htmlFor="lws-price">Price</label>
                    <input required className="text-input" type="number" id="lws-price" name="price" value={price} onChange={e => setPrice(e.target.value)} />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-rating">Rating</label>
                    <input required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                        max="5" value={rating} onChange={e => setRting(e.target.value)} />
                </div>
            </div>

            <div className="flex items-center">
                <input id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" checked={featured} onChange={e => setFeatured(!featured)} />
                <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button type="submit" className="submit" id="lws-submit">Add Book</button>
        </form>
    );
};

export default AddBookForm;