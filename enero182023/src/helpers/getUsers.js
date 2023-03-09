const getUsers = async () => {
    const url = "https://reqres.in/api/users?page=1";

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export default getUsers;