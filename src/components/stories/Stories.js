import React, { useState, useEffect } from "react";
import Story from "./Story";
import Style from "./Style";
import axios from "axios";

const Stories = () => {
  const classes = Style();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsres = async () => {
      const response = await axios.get("https://breakingbadapi.com/api/characters?limit=10");
      setUsers(response.data);
    };
    fetchUsres();
  }, []);

  return (
    <div className={classes.stories}>
      {users.map(({ char_id, name, img }) => (
        <Story
          key={char_id}
          bgImage={`https://source.unsplash.com/random/${char_id}`}
          profileImage={img}
          title={name}
        />
      ))}
    </div>
  );
};

export default Stories;
