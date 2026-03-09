import { useState } from "react";

const RadioExample = () => {
  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={handleChange}
        />
        Male
      </label>

      <label> 
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={handleChange}
        />
        Female
      </label>

      <p>Selected: {gender}</p>
    </div>
  );
};

export default RadioExample;


