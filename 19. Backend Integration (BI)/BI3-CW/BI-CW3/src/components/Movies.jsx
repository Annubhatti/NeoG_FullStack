import useFetch from "../hooks/useFetch";

const Movies = () => {
    const { data, loading} = useFetch("http://localhost:5173//movies");

    console.log(data);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {data?.error && <p>{data?.error}</p>}
        <ul>
            {/* optional chaning means if data is prenent data should not be undefined or null  */}
            {data?.map((movie) => (
                <li key={movie._id}>{movie.title}</li>
            ))}
        </ul>
    </div>
    )
};

export default Movies;