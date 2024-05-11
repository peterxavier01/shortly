export type Data = {
  hash: string;
  short_url: string;
  long_url: string;
};

export const shortenUrl = async (longUrl: string): Promise<Data> => {
  const myHeaders = new Headers();
  myHeaders.append("apikey", import.meta.env.VITE_SHORTENER_API_KEY);

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: longUrl,
  };

  const response = await fetch(
    "https://api.apilayer.com/short_url/hash",
    requestOptions
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const result = await response.json();
  return result;
};
