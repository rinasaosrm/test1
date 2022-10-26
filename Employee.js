import React from 'react'

const Employee = () => {
        const [isLoading, setIsLoading] = React.useState(true);
        const [data, setData] = React.useState([]);
      
        React.useEffect(() => {
          const url = "https://api.github.com/users";
          fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json['results']))
            .catch((error) => console.log(error));
        }, []);
      
        React.useEffect(() => {
          if (data.length !== 0) {
            setIsLoading(false);
          }
          console.log(data);
        }, [data]);
      
        return (
          <div>
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              data.map((user) => (
                <h1>
                  {user.login} {user.id}
                </h1>
              ))
            )}
          </div>
        );
      
}

export default Employee
