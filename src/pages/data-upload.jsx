import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DataUpload = () => {
    const router = useRouter();

    const [fileInputs, setFileInputs] = useState([
        { id: 1, isDragOver: false, uploadedFile: null },
        { id: 2, isDragOver: false, uploadedFile: null },
        { id: 3, isDragOver: false, uploadedFile: null }
    ]);

    const handleDragOver = (e, inputId) => {
        e.preventDefault();
        const updatedInputs = fileInputs.map(input =>
            input.id === inputId ? { ...input, isDragOver: true } : input
        );
        setFileInputs(updatedInputs);
    };

    const handleDragLeave = (e, inputId) => {
        e.preventDefault();
        const updatedInputs = fileInputs.map(input =>
            input.id === inputId ? { ...input, isDragOver: false } : input
        );
        setFileInputs(updatedInputs);
    };

    const handleDrop = (e, inputId) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        const updatedInputs = fileInputs.map(input =>
            input.id === inputId ? { ...input, isDragOver: false, uploadedFile: file } : input
        );
        setFileInputs(updatedInputs);
    };

    const handleFileUpload = (e, inputId) => {
        const file = e.target.files[0];
        const updatedInputs = fileInputs.map(input =>
            input.id === inputId ? { ...input, uploadedFile: file } : input
        );
        setFileInputs(updatedInputs);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        router.push('/questions');
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     window.location.href = '/questions';
    // };

    return (
        <section className="">
            <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-[#e2e8f0] border-0">
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form onSubmit={handleSubmit}>
                            <div className="text-center mb-5 mt-5">
                                <h1 className="text-xl font-bold py-5">Upload Patient details</h1>
                            </div>
                            {fileInputs.map(input => (
                                <div className="relative w-full mb-3" key={input.id}>
                                    <label className="block text-[#475569] text-base font-bold mb-2">
                                        {input.id}. {input.id === 1 ? "History of the Present Illness: HOPI" : input.id === 2 ? "Review of Systems: ROS" : "Image upload"}
                                    </label>
                                    <div
                                        className={`w-[400px] relative border-2 border-dashed rounded-lg p-6 ${input.isDragOver ? 'border-indigo-600' : 'border-[#475569]'}`}
                                        onDragOver={(e) => handleDragOver(e, input.id)}
                                        onDragLeave={(e) => handleDragLeave(e, input.id)}
                                        onDrop={(e) => handleDrop(e, input.id)}
                                    >
                                        <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" onChange={(e) => handleFileUpload(e, input.id)} />
                                        <div className="text-center">
                                            <img className="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="" />
                                            {input.uploadedFile ? (
                                                <div>
                                                    <h3 className="mt-2 text-sm font-medium text-gray-900">{input.uploadedFile.name}</h3>
                                                </div>
                                            ) : (
                                                <h3 className="mt-2 text-sm font-medium text-gray-900">
                                                    <label htmlFor={`file-upload-${input.id}`} className="relative cursor-pointer">
                                                        <span>Drag and drop or browse to upload</span>
                                                        <input id={`file-upload-${input.id}`} name={`file-upload-${input.id}`} type="file" className="sr-only" onChange={(e) => handleFileUpload(e, input.id)} />
                                                    </label>
                                                </h3>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="text-center mt-6">
                                <button className="bg-[#1e293b] text-white active:bg-[#475569] text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataUpload;
