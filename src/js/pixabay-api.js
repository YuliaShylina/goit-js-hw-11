const API_KEY = '43838996-7b0b384f174ce1ebbbcd3455e';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchPhotos(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
