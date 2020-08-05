export const getUrls = async () => {
  const response = await fetch('http://localhost:3001/api/v1/urls')
  const fetchedURL =await response.json()
  return fetchedURL
}

export const postUrls = async (longUrl, urlTitle) => {
  const request = {
    "method": "POST",
    "headers": {
    "content-type": "application/json"
  },
    "body": JSON.stringify({
      "long_url": longUrl,
      "title":urlTitle
    })
  }
  
const response = await fetch('http://localhost:3001/api/v1/urls', request);
const message = await response.json();
return message;
}
