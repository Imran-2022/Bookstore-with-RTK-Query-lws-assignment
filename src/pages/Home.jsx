import React from 'react'
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard'
import HomeMenu from '../components/HomeMenu'
import { useGetBooksQuery } from '../features/api/apiSlice';

function Home() {
    const { data: books, isLoading, isError } = useGetBooksQuery();

    const { byType,bySearch } = useSelector(
        (state) => state.filters
    );

      // filter here - 

      const handleFilterByType=(dt)=>{
        if(byType=='all') return true;
        if(byType=='featured') return dt.featured;
        return true;
    }

    const handleFilterBySearch=(dt)=>{
        if(bySearch) return dt.name.toLowerCase().includes(bySearch.toLowerCase())
        return true;
    }

    //filter end

    // decide what to render
    let content = null;

    if (isLoading) {
        content = <p>Loading ...</p>
    }

    if (!isLoading && isError) {
        content = <p>There was an error</p>
    }

    if (!isLoading && !isError && books?.length === 0) {
        content = <p>No books found!</p>
    }

    if (!isLoading && !isError && books?.length > 0) {
        content = books
            .filter(handleFilterByType)
            .filter(handleFilterBySearch)
            .map((book) => <BookCard key={book.id} book={book} />);
    }

    return (
        <main className="py-12 px-6 2xl:px-6 container" >
            <div className="order-2 xl:-order-1">
                <HomeMenu />
                <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        content
                    }
                </div>
            </div>
        </main >
    )
}

export default Home