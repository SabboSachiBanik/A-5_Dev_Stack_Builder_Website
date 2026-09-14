const technologiesPromise = async () => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
};

const JsonFetch = () => {
    return (
        <div>
            <h1>Json</h1>
        </div>
    );
};

export default JsonFetch;