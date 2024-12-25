
export const SmallAuthors = ({author}) => {
    const {name, age} = author;
    return (
        <>
            <p> Name: {name} Age: {age}</p>
            <p>============================================</p>
        </>
    )
}