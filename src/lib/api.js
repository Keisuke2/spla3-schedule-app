export async function fetchData(url) {
    const req = new Request(url, {
        headers: {
            'user-agent': 'Spla3/1.0(inokei1704@gmail.com)',
        },
    });
    const res = await fetch(req);
    return res.json();
}