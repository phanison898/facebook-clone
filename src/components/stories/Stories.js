import React, { useState, useEffect } from "react";
import Story from "./Story";
import Style from "./Style";
import axios from "axios";

const Stories = () => {
  const classes = Style();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsres = async () => {
      const response = await axios.get("https://thronesapi.com/api/v2/Characters?limit=10");
      setUsers(response.data);
    };
    fetchUsres();
  }, []);

  return (
    <div className={classes.stories}>
      {users.map(({ id, fullName, imageUrl }) => (
        <Story
          key={id}
          bgImage={`https://source.unsplash.com/random/${id}`}
          profileImage={imageUrl}
          title={fullName}
        />
      ))}
    </div>
  );
};

export default Stories;
