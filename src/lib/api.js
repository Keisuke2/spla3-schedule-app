export async function fetchData(url) {
    try {
        const req = new Request(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Spla3/1.0(inokei1704@gmail.com)',
            },
        });
        const res = await fetch(req);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // Check for Content-Type before parsing
        const contentType = res.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            return await res.json();
        } else {
            throw new Error('Response is not JSON');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;  // Re-throw the error after logging it
    }
}