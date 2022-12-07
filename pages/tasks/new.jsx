import React from "react";

function NewTask(props) {
  return (
    <div>
      <div>
        <div>
          <h1>Post task</h1>
          <form action="/api/task/new" method="POST">
            <input hidden name="UserId" defaultValue={1} />
            <label htmlFor="title">What to do:</label>
            <input type="text" id="type" name="type" placeholder="task name" required />
           <br/>
            <label htmlFor="location">Address:</label>
            <input type="text" id="location" name="location" placeholder="location" required />
           <br/>
            <label htmlFor="amount">Amount to pay:</label>
            <input type="text" id="amount" name="amount" placeholder="how much?" required />
           <br/>
            <label htmlFor="description">Write some description:</label>
            <textarea id="description" name="description" rows="4" cols="30"></textarea>

            
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewTask;
