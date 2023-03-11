import React from 'react'
import { useParams } from 'react-router-dom';
import EditBookForm from '../components/EditBookForm'
import { useGetBookQuery } from '../features/api/apiSlice';

function EditBook() {
    const {editId}=useParams();
    const { data: editData, isLoading, isError } = useGetBookQuery(editId);
    let content = null;

    if (isLoading) {
        content = <div>Loading...</div>;
    }
    if (!isLoading && isError) {
        content = <Error message="There was an error!" />;
    }
    if (!isLoading && !isError && editData?.id) {
        content = <EditBookForm dt={editData} />;
    }

    return (
        <main className="py-6 2xl:px-6">
            <div className="container">
                <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                    <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
                    {
                        content
                    }
                </div>
            </div>
        </main>
    )
}

export default EditBook;