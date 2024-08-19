// note new akta post korla jano 10 sec por update hoty ai jonno next -> revalidate use kora hoy
const allPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,
        {
            next : {
                revalidate : 10,
            }
        }
     )
    const data = await res.json()
    const firstTenPosts = data.slice(0, 10);
    return firstTenPosts;
};

export default allPost;


