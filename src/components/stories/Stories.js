import React from "react";
import Story from "./Story";
import Style from "./Style";

const Stories = () => {
  const classes = Style();
  return (
    <div className={classes.stories}>
      {usernames.map((username, i) => (
        <Story key={i} bgImage={`https://source.unsplash.com/random/${i + 1}`} profileImage={`https://randomuser.me/api/portraits/men/${i + 1}.jpg`} title={username} />
      ))}
    </div>
  );
};

const usernames = ["Walter White", "Jessy Pinkman", "Hank Schreder", "Skinny Peet", "Badger", "Mike", "Gus Fring", "Hector", "Toco", "Tommy Shelby", "Arthur", "John", "Finn", "Alfie"];

export default Stories;
