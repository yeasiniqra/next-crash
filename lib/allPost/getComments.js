
const getAllComments = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const data = await res.json()
    return data
};

export default getAllComments;