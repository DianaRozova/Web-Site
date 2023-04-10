export function getListLinks() {
    return new Promise(async (resolve, reject) => {
        if (import.meta.env.VITE_MY_BE_SITE_LINK) {
            try {
                let url = import.meta.env.VITE_MY_BE_SITE_LINK + '/links';
                const response  = await fetch(url, {
                    method: "GET",
                    headers: {'Content-Type': 'application/json'}})
                const jsonData = await response.json();
                resolve(jsonData);
            } catch (err) {
                console.error(err);
                reject('Error on BE');
            }
        } else {
            reject('No BE site link');
        }
    });
}

//https://back-end-site.vercel.app