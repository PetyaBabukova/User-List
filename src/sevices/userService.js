const baseUrl = "http://localhost:3030/jsonstore/users"

export const getAll = async () => {

    const response = await fetch(baseUrl);
    const result = await response.json();
    const data = Object.values(result);

    return data;




};

export const create = async (data) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address: {
            country: data.country,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber
        }
    };

    try {
        const response = await fetch(baseUrl, {
            method: 'POST', // POST should be in quotes
            headers: {
                'Content-Type': 'application/json' // Corrected the spelling here
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        console.error('Error creating the entry:', error);
        // Handle the error according to your application's needs, possibly re-throwing it or returning a default value
    }
};

export const getOne = async (userId)=>{
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();

    return result;

}
