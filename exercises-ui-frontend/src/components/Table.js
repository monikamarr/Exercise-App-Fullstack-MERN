import React from "react";
import Exercise from "./Row";

function ExerciseList({ exercises, onDelete, onEdit }) {
  return (
    <div>
      <table>
        <caption>
          After you add exercises, you can edit or delete them below
        </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Unit</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, i) => (
            <Exercise
              exercise={exercise}
              key={i}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExerciseList;
