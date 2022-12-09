import React from "react";
import { VscChromeClose, VscEdit } from "react-icons/vsc";

function Exercise({ exercise, onEdit, onDelete }) {
  return (
    <tr>
      <td title="Name of the completed exercise.">{exercise.name}</td>
      <td title="Number of reps completed.">{exercise.reps}</td>
      <td title="Weight used in the exercise.">{exercise.weight}</td>
      <td title="Unit you used for the exercise.">{exercise.unit}</td>
      <td title="Date of the exercise completion.">
        {exercise.date.slice(0, 10)}
      </td>
      <td>
        <i>
          <VscChromeClose
            onClick={() => onDelete(exercise._id)}
            title="Clicking on the
          delete button will result in removing your exercise."
          />
        </i>
      </td>
      <td>
        <i>
          <VscEdit
            onClick={() => onEdit(exercise)}
            title="Clicking on the
          edit button will result in redirecting you to a new page."
          />
        </i>
      </td>
    </tr>
  );
}

export default Exercise;
