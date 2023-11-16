const fetcher = async (url: string, options: any = {}) => {
    const baseUrl = "http://localhost:1337";
    const opt = { ...options };
    if (!opt.headers) opt.headers = {};
  
    opt.headers.Authorization =
      "Bearer";
  
      fetch('https://example.com?' + new URLSearchParams({
    foo: 'value',
    bar: 2,
}))

    return await fetch(`${baseUrl}/${url}`, opt);
  };
  
  export default fetcher;
  