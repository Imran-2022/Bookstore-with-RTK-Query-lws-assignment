import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditBookMutation } from '../features/api/apiSlice';

const EditBookForm = ({dt}) => {
    const {
        id,
        name: initialName,
        author: initialAuthor,
        thumbnail: initialThumbnail,
        price: initialPrice,
        rating: initialRating,
        featured: initialFeatured,
    } = dt;

    const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();


    const navigate=useNavigate()
    const [name, setName] = useState(initialName);
    const [author, setAuthor] = useState(initialAuthor);
    const [thumbnail, setThumbnail] = useState(initialThumbnail);
    const [price, setPrice] = useState(initialPrice);
    const [rating, setRting] = useState(initialRating);
    const [featured, setFeatured] = useState(initialFeatured);

    
    const handleEdit = (e) => {
        e.preventDefault();
        editBook({
            id,
            data: {name,author,thumbnail,price,rating,featured},
        });
    };

    useEffect(() => {
        if (isSuccess) navigate("/");
    }, [isSuccess, navigate]);

    return (
        <form className="book-form" onSubmit={handleEdit}>
            <div className="space-y-2">
                <label htmlFor="lws-bookName">Book Name</label>
                <input required className="text-input" type="text" id="lws-bookName" name="name" value={name} onChange={e => setName(e.target.value)}/>
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-author">Author</label>
                <input required className="text-input" type="text" id="lws-author" name="author" value={author} onChange={e => setAuthor(e.target.value)}/>
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-thumbnail">Image Url</label>
                <input required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" value={thumbnail} onChange={e => setThumbnail(e.target.value)}/>
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label htmlFor="lws-price">Price</label>
                    <input required className="text-input" type="number" id="lws-price" name="price" value={price} onChange={e => setPrice(e.target.value)} />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-rating">Rating</label>
                    <input required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                        max="5" value={rating} onChange={e => setRting(e.target.value)}/>
                </div>
            </div>

            <div className="flex items-center">
                <input id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" checked={featured} onChange={e => setFeatured(!featured)}/>
                <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button type="submit" className="submit" id="lws-submit">Edit Book</button>
        </form>
    );
};

export default EditBookForm;