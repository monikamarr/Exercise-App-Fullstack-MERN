import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const EditExercisePage = ({ exercise }) => {
  const [name, setName] = useState(exercise.name);
  const [reps, setReps] = useState(exercise.reps);
  const [weight, setWeight] = useState(exercise.weight);
  const [unit, setUnit] = useState(exercise.unit);
  const [date, setDate] = useState(exercise.date.slice(0, 10));

  const history = useHistory();

  const editExercise = async () => {
    const response = await fetch(`/exercises/${exercise._id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        reps: reps,
        weight: weight,
        unit: unit,
        date: date,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Successfully edited the exercise!");
    } else {
      const errMessage = await response.json();
      alert(
        `Failed to update the exercise. Status ${response.status}. ${errMessage.Error}`
      );
    }
    history.push("/");
  };

  return (
    <div>
      <article>
        <h2>Edit your exercise</h2>
        <p>Edit your input and press "update".</p>
        {/* <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        > */}
        <table>
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
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                maxLength="40"
                required
              />
            </td>

            <td>
              <input
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                id="reps"
                maxLength="3"
                min="0"
                max="100"
                required
              />
            </td>

            <td>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                id="weight"
                maxLength="3"
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
                type="text"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </td>

            <td>
              <label for="submit">
                <button onClick={editExercise} id="submit">
                  Update
                </button>
              </label>
            </td>
          </tr>
        </table>
        {/* </form> */}
      </article>
    </div>
  );
};
export default EditExercisePage;
