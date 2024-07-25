import { useState, useEffect } from 'react';

const useValidate = (token) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          "Authorization": 'Bearer '+ token,
          "Content-Type": "application/json"
        };

        const response = await fetch(process.env.REACT_APP_API_URL + '/usuarios/verify', {
          method: "GET",
          headers: headers
        });
        if (!response.ok) {
          setUserData(null)
          throw new Error("Error al iniciar sesion");
        }
        else{
          const jsonData = await response.json();
          setUserData(jsonData.user)
        }
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    if(token){
      fetchData();
    }
    else{
      setUserData(null)
    }
  }, [token]);

  return { userData, isLoading, error };
};

export default useValidate;
