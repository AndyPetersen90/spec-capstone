import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieApi = () => {
  const [data, setData] = useState({});
  // const {} = useParams()

  useEffect(() => {
    axios
      .get(`https://movie-database-alternative.p.rapidapi.com/`)
      .then((res) => setData(res.data));
  }, []);
  /************************************************************************** 
  I need to find a way to configure the below axios request code from Rapid API so that it works for 
  the react useEffect method. Also need to understand how to use the component as well as pass down
  props to the request as well as find a way to return the requested information and display it
  on the pages its being used on.
**************************************************************************/
  // const options = {
  //   method: 'GET',
  //   url: 'https://movie-database-alternative.p.rapidapi.com/',
  //   params: {r: 'json', i: 'tt4154796'},
  //   headers: {
  //     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  //     'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  return (
    <div>
      <h3>MovieApi component</h3>
      - this will contain the search function that calls on the rapid movie api
      <br />
      -will return movie information as an object
    </div>
  );
};

export default MovieApi;
