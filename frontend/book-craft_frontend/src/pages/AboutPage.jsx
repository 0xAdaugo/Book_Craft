import React, {useState} from "react";

const AboutPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle =(index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index))
    }
    return (
    <div className="m-4 shadow-sm overflow-auto">
        <h1 className="font-display text-2xl text-center mt-5">About Bookcraft</h1>
        <p className="p-4 m-5">
            Book Craft is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        
        <div>
            <h1 className="font-display text-2xl text-center mt-10 p-10">FAQs</h1>
            <details className="md:text-center hover:scale-110">
                <summary className="font-bold p-2 ">What we do?</summary>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </details>
            <details className="md:text-center hover:scale-110">
                <summary className="font-bold p-2 ">Is there a limit?</summary>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </details>
            <details className="md:text-center hover:scale-110">
                <summary className="font-bold p-2 ">How many free books can I create?</summary>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </details>
            <details className="md:text-center hover:scale-110">
                <summary className="font-bold p-2 ">What to do if my book doesn't download?</summary>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </details>
        </div>
        
    </div>
    )
}

export default AboutPage;