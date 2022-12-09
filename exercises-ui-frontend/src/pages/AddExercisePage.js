import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("lbs");
  const [date, setDate] = useState();

  const history = useHistory();

  const addExercise = async () => {
    const newExercise = { name, reps, weight, unit, date };
    const response = await fetch("/exercises", {
      method: "post",
      body: JSON.stringify(newExercise),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the exercise!");
    } else {
      alert(`Failed to add exercise, status code = ${response.status}`);
    }
    history.push("/");
  };

  return (
    <div>
      <article>
        <h2>Log your exercise</h2>
        <p>Add your set of exercises below</p>

        <table>
          <caption>Log your exercises:</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reps</th>
              <th>Weight</th>
              <th>Unit</th>
              <th>Date</th>
            </tr>
          </thead>
          <tr>
            <td>
              {/* <label for="title">Movie title</label> */}
              <input
                type="text"
                placeholder="Exercise name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                required
              />
            </td>
            <td>
              <input
                type="number"
                value={reps}
                placeholder="0"
                onChange={(e) => setReps(e.target.value)}
                id="reps"
                min="0"
                max="100"
                required
              />
            </td>

            <td>
              <input
                type="number"
                placeholder="0"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                id="weight"
                min="0"
                max="100"
                required
              />
            </td>

            <td>
              <select
                id="unit"
                name="unit"
                onChange={(e) => setUnit(e.target.value)}
                required="required"
              >
                <option value="lbs">lbs</option>
                <option value="kg">kg</option>
                <option value="mi">mi</option>
                <option value="km">km</option>
                <option value="m">m</option>
                <option value="min">min</option>
                <option value="sec">sec</option>
              </select>
            </td>

            <td>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </td>

            <td>
              <label for="submit">
                <button type="submit" onClick={addExercise} id="submit">
                  Add
                </button>
              </label>
            </td>
          </tr>
        </table>
      </article>
    </div>
  );
};

export default AddExercisePage;
