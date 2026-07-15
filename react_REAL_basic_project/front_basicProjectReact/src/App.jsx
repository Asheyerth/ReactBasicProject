import { useState } from 'react';
import Counter from './components/counter copy';
import Form from './components/form'

//Form
function FormLink() {

  function handleSubmit(e) {
    console.log("asdasds")

    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    //fetch('/getList', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Your name:
        <input name="insertedName" />
      </label>
      <button type="submit">Add name using Link</button>
    </form>
  )
}

function FormState() {

  const [listName, setListName] = useState([]);

  function handleSubmit(e) {
    console.log("asdasds")
    console.log(e)
    console.log(e.target)

    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    console.log(form)
    const formData = new FormData(form);

    console.log(formData)
    console.log(formData.get('aguacero')) //get the value

    setListName([...listName,formData.get('insertedName')])

  }

  return (
    <form method="post" onSubmit={(e) => handleSubmit(e)}>
      <label name="asd">
        Your name:
        <input name="insertedName" />
      </label>
      <button type="submit" name="aguacero">Add name using States</button>
      <label>Lista:</label>
      {[...listName].map((item,index) => (
          <li key={index}>
            {index}.{item}
          </li>
        ))}
    </form>
  )
}

//Main app
function App() {
  return (
    <div>
      asd
      <h1>Basic React Project</h1>
      <p>Insert a name. Then press the button to add it to a list.</p>
      <FormLink />
      <FormState />
      <Counter />
      <Form />
    </div>
  );
}

export default App;