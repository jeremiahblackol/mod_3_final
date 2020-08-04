export const getUrls = async () => {
  const response = await fetch('http://localhost:3001/api/v1/urls')
  const fetchedURL =await response.json()
  return fetchedURL
}
