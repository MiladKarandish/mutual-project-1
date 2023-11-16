const fetcher = async (options: any = {}) => {
  const baseUrl = `http://www.omdbapi.com/?apikey=ac0ab82e&t=titanic&`;
  const opt = { ...options };

  const parameters = new URLSearchParams();
  parameters.set("t", "titanic");

  return await fetch(baseUrl, opt);
};

export default fetcher;
