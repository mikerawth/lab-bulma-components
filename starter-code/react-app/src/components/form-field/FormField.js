import React from 'react';
import './form-field.css'

function FormField() {
  return (
    <div className="form-field">

      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>

    </div>
  );
}

export default FormField;
