# React Notes
![image](https://github.com/user-attachments/assets/5be5e0d4-30b3-4dd9-98db-dcb65e536bed)<br><br>
React focuses on building UI for web applications using components. <br>
![image](https://github.com/user-attachments/assets/6bb9039a-e1ca-49f7-8408-2c9deb734e61)<br><br>

**React uses JSX (JavaScript XML). With JSX, we are able to write HTML like code in JS**.<br>
![image](https://github.com/user-attachments/assets/16acc1b0-46e0-4806-8d82-f474f0abbdf7)<br><br>
**React uses virtual DOM. It is a lightweight version of a real DOM. We can keep track of the changes applied to the virtual DOM and only apply those changes to the actual DOM, instead of refreshing the whole page.
This reduces rendering performance overhead**.<br>
![image](https://github.com/user-attachments/assets/588a19c7-cd6f-48ed-acac-0ac94201c744)<br><br>
## Folder Structure
![image](https://github.com/user-attachments/assets/8445ad5a-743e-4a86-b32c-ffd7758c19f0)<br><br>

1. **Node Modules Folder**: This contains all the external libraries and code that our project relies on.
2. **Public Folder**: Contains public assets. It might contain public fonts, images, and videos. They are not bundled during the final output. They are typically available via a URL.
   ![image](https://github.com/user-attachments/assets/c1fe0e9a-5c56-4b02-b21a-1191edb83df5)<br><br>
3. **src Folder**: This is where we write our code. It also has an assets folder. However files in the assets folder here are bundled during the final output, unlike the public folder.
**main.jsx**: This is the main jsx file. It has App component called inside it. <br>
![image](https://github.com/user-attachments/assets/9c049341-e887-4df8-af13-c4a75cccc8cc)<br><br>
**app.jsx**: This is the root component here. <br>
![image](https://github.com/user-attachments/assets/fc294926-dca9-4194-bf42-1a33b2b6dbf7)<br><br>
![image](https://github.com/user-attachments/assets/9267bb76-c85d-441c-ac6d-632f29898e6b)<br><br>
We have two stylesheets. **index.css and app.css**. index.css file is the main css file for our project. app.css file is used in the app componment.
4. **Index.html file**: <br>
![image](https://github.com/user-attachments/assets/cc0cae93-bd1b-4366-bb9f-139db6e87951) <br> <br>
This is the main entry point to our app. Within the body we have a div element with an id of root. We also have a script tag here which has our main.jsx file.
5. **package.json file**: This file contains the metadata for our project. <br>
![image](https://github.com/user-attachments/assets/f16d656f-9cbc-48a5-9266-b2b99f1ea44c)<br><br>

## Components
Creating and exporting component:<br>
![image](https://github.com/user-attachments/assets/a3084299-5b61-4a5b-9e6e-6551604a79e7)<br><br>
Using a component in another component:<br>
![image](https://github.com/user-attachments/assets/8bfeb570-56b3-4de4-9ce3-be3e8dc7e682)<br><br>

Note: JSX element can only return a single element. See below, this produces an error:<br>
![image](https://github.com/user-attachments/assets/76f69e5f-d3f6-4c8d-8c3f-6c86e7394a5d)<br><br>
The solution for this is to enclose all the elements in a fragment. <></> is called a fragment. See below:<br>
![image](https://github.com/user-attachments/assets/99a3906a-4dd2-49a5-b1d3-5505ce279517)<br><br>

Adding JS in JSX components:<br>
We can insert JS in JSX component using {}. We write JS code inside {}. See below:<br>
![image](https://github.com/user-attachments/assets/8789b565-8be3-4685-9d92-45a45d86032e)<br><br>
Using JS variable in components:<br>
![image](https://github.com/user-attachments/assets/ca05b642-2340-4c03-ae22-221bdc854dab)<br><br>

Creating Card component and rendering it in app component:<br>
![image](https://github.com/user-attachments/assets/13e1cd9e-117c-4e90-a6dd-6ad4a92ce4c1)<br><br>

App component:<br>
![image](https://github.com/user-attachments/assets/977daa07-0228-40c2-bd07-1529c6f028c9)<br><br>

Output:<br>
![image](https://github.com/user-attachments/assets/12bff7f3-e599-4e90-8835-5371741b58b5)<br><br>

Applying styles to components:<br>
<img width="416" alt="image" src="https://github.com/user-attachments/assets/3468c164-e568-4f4a-bfeb-69dc2f23c040"><br><br>

1. We can apply External CSS by applying styles in index.css which is global CSS. <br>
Button component:<br>
<img width="437" alt="image" src="https://github.com/user-attachments/assets/513659a9-9eb1-4b79-bcec-5859bab6825a"><br><br>

Styles are defined in index.css <br>
<img width="509" alt="image" src="https://github.com/user-attachments/assets/c45d5d4b-d6ed-42fe-8094-f2ab1fa8e221"><br><br>

But this may lead to naming conflicts. <br>

2. We can create a dedicated sylesheet specifically for each component. This is called modules. What we can do is create folder inside the component folder. One seperate folder for each component. This folder will have the component and stylesheet. <br>
See the folder structure:  <br> <br>
<img width="242" alt="image" src="https://github.com/user-attachments/assets/e362688e-fa27-42b4-af5f-91360fa43129"> <br> <br>

Button component:<br>
<img width="529" alt="image" src="https://github.com/user-attachments/assets/0ad93e17-391c-42f2-8b7e-fc8e58f1bb4a"> <br><br>

import: **import styles from './Button.module.css'** <br>
Applying class: **className={styles.button}** <br>

Module will be dedicated to a single component. There will be no naming conficts becase a unique class will be generated for you via a hashing alorithm. 
See **Button.module.css** file:  
<img width="536" alt="image" src="https://github.com/user-attachments/assets/bdd51dae-e6c4-4497-8d48-1bf2cb322380">  


3. Inline Styles: We create a JS object with key value pairs. See the Button component below:  
<img width="440" alt="image" src="https://github.com/user-attachments/assets/0d6384bb-e5ab-4940-82a8-b9215314ae7c">

Defining Styles:  

**const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
}**


Applying:  
**style={styles}**  

External CSS is good for complex projects with many components. Modules for individual components. Inline for small components and individual styles.  

## Props
They are read only properties that are shared between components. A parent component can send data to a child component.  

`<Component key=value />`  

See the Student Component:  
<img width="586" alt="image" src="https://github.com/user-attachments/assets/2ef10928-1118-4135-aee4-3df9e2c436f9">  

We take **props** as input to the student function. 
We use props.name, props.age, props.isStudent values from the prop in the component. 
_Booleans do not show directly in the DOM. To show, we usually use ternary opertor (?:)._  

See the app component:  

<img width="439" alt="image" src="https://github.com/user-attachments/assets/4bc00a8c-3075-4e23-a079-cd0465fa1d04">  

Here we call the Student component and pass name, age and isStudent values to it. See that we pass number and boolean inside {}. 

Using Student component multiple times in app component and passing different props each time:  
<img width="441" alt="image" src="https://github.com/user-attachments/assets/3b067e77-d4c6-4299-987e-4180c3b9d0c8">  

Output:  
<img width="477" alt="image" src="https://github.com/user-attachments/assets/b82c1608-7a08-4928-a6b6-f524996fe61a">  

### Default Props: 
Default values for the props in case if they are not sent from the parent component.  
<img width="642" alt="image" src="https://github.com/user-attachments/assets/a88deb19-c063-415d-a9a8-e7f77df5d96b">  

<img width="614" alt="image" src="https://github.com/user-attachments/assets/776a13ed-0fb8-4543-9dcb-fe16fe7c7ffe">  

If we dont pass any value for name, it takes the default value. 

## Conditional Rendering:  
It allows you to control what gets rendered based on certain conditions.  
See App.jsx:  
<img width="610" alt="image" src="https://github.com/user-attachments/assets/da70e9e4-8fc4-4c45-a390-bc53644c6a23">  

See condition rendering in UserGreeting.jsx using if else:  
<img width="638" alt="image" src="https://github.com/user-attachments/assets/487ab64f-de85-4a17-bf7f-d2753cac9166">  

See condition rendering in UserGreeting.jsx using ternery operator:  

<img width="449" alt="image" src="https://github.com/user-attachments/assets/21992888-fd8a-49be-b5da-7e966df2029d">  

Another way of doing conditional rendering:  
<img width="810" alt="image" src="https://github.com/user-attachments/assets/57ba4fab-34f2-4fd7-87a9-7ede1250fb98">  

## Rendering Lists:  
We can do simple list rendering as follows:  
**List Component**:  
<img width="599" alt="image" src="https://github.com/user-attachments/assets/cce6530d-ebb6-433e-a688-1d4f1b28a839">  

**App Component**:  
<img width="591" alt="image" src="https://github.com/user-attachments/assets/c8ccd2fa-0a91-4b6f-a215-3765495f9338">  

**Output**:  
<img width="364" alt="image" src="https://github.com/user-attachments/assets/140a1557-3589-44a1-be1d-1fbc4134847c">  

Rednering list containing objects:  
<img width="506" alt="image" src="https://github.com/user-attachments/assets/b4a4c509-72c6-42af-a32f-d7165afe392e">  

List items must have unique keys.  

**Map Method**:  
`const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} &nbsp; {fruit.calories}
    </li>
  ));`  

**Filter Method**:  
` const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);`


## Click Event:  
Interaction when user clicks a specific button. We can respond to click events by passing a callback to the onclick event handler.  
Without any parameters:  
<img width="513" alt="image" src="https://github.com/user-attachments/assets/70a73ae9-95ba-4a71-9400-e1af1820d4b2">  

With parameters:  
<img width="671" alt="image" src="https://github.com/user-attachments/assets/50fd80d7-6540-4847-bcf1-92a76e030892">  

If we use onClick with function and (), then it is called right away. We must use arrow function here:  
<img width="741" alt="image" src="https://github.com/user-attachments/assets/88f66003-6c64-4e97-87ba-465257375c47">  

When we click, we automatically get a click event. This event object describes the event that occured.  
<img width="627" alt="image" src="https://github.com/user-attachments/assets/a6fab84e-3b76-4f36-a185-85b506de4c9a">  

<img width="341" alt="image" src="https://github.com/user-attachments/assets/dea5729b-3ba9-4d87-98e0-2d87c9b6ef73">  

Chaning the text of the button using the target property of the event:  
<img width="730" alt="image" src="https://github.com/user-attachments/assets/3ec19eca-b7ec-4de7-875e-1a33aa3f5a67">  

With events you can do many things.  

## useState()  
Am react hook that allows the creation of a stateful variable and a setter function to update its value in virtual DOM.  
`const [counter, setCounter] = useState(0)`  
counter = Name of stateful variable  
setCounter() = Setter function for counter  
![image](https://github.com/user-attachments/assets/929347cc-9b28-4c8d-89e7-1bf3005f523f)  

When we use the setter function of a state(counter in this case) then this triggers the rerendering of the virtual DOM. This does not happen in case of normal variables. 
See another example:  
![image](https://github.com/user-attachments/assets/802c6337-2df6-43bf-8728-f0c2ea65525d)  

## onChange()
It is an event handler primarily used form elements eg input, textarea, select, and radio.  
Trigger a function every time the value of input changes.  
We can do it this way:  
![image](https://github.com/user-attachments/assets/cbc10ce4-599b-4a7d-abec-d08a4f858749)  

You can also do it this way:  
![image](https://github.com/user-attachments/assets/eb5b9c7f-b2d0-4752-8025-499a1fb981d9)  


We are binding the name state with the input field two-way. Any change to the name state will change the input field and it will show in the input field. Also, any changes to the input field will change the name state. This is **Two way binding.**  


![image](https://github.com/user-attachments/assets/7c4da6b6-f52b-4249-81c7-a24a02a1d53d)  

Using onChange with select and option:  

![image](https://github.com/user-attachments/assets/e9dbdaf8-0b58-47f2-98dc-d9ba7a773be0)  

The payment state will have whatever value you select out of the options.  
Using onChange with radio buttons:  

![image](https://github.com/user-attachments/assets/fbbe7e93-5669-4169-abe1-5a824afe6feb)  

shipping state variable will have whatever value you choose in the radio button. 

## Excercice - Creating a color picker
### Color Picker Component:  

![image](https://github.com/user-attachments/assets/96273eb9-94de-46c7-ba28-9ac451865681)  

### App Component:  


![image](https://github.com/user-attachments/assets/2c5b94cc-5865-415c-a458-d8d4e3bfa957)  

### Index.css styles:  


![image](https://github.com/user-attachments/assets/607a0f2e-4e15-4889-87d7-892993835b74)  

### Output:  

![image](https://github.com/user-attachments/assets/f29a20be-53bf-46ca-bc1f-2d91c594d690)  

## Updater Function:  
A function passed as an argument to setState() usually eg. setYear(year+1).  
This allows for safe updates based on the previous state. Used with multiple state updates and asynchronous functions. It is a good practice.  

![image](https://github.com/user-attachments/assets/b8998e67-9891-43c3-a218-441d675a3ce4)  

See, we have a counter, and at the click of the button we want to increment the counter by 3. But when we click the counter is only incremented by 1. This is because react batches the state updates together and does it only once. We actually make sure we change the counter by 3, we need to pass updater function to setState function.  
Instead of  

![image](https://github.com/user-attachments/assets/a44f903d-dedb-4c4d-84df-20fe90819089)  

We use:  

![image](https://github.com/user-attachments/assets/fd21df83-129d-4609-8ece-f1e9407800ba)  

Or  

![image](https://github.com/user-attachments/assets/9ffc79f6-7fba-4d65-8040-5bed9273c291)
 

We are using an arrow function to setState to update the state. This way react will not batch together the state updates, instead, it will update them one after the other. 
More info:  

![image](https://github.com/user-attachments/assets/dc13adbe-deb9-44f1-b417-6f83eb602e57)  

![image](https://github.com/user-attachments/assets/f8b560fb-1c49-4f64-b5b2-f5f322b345ca)  


## Updating Object State Variables:  

![image](https://github.com/user-attachments/assets/40633404-54f7-40b4-98cd-4c17841cd810)  

We are taking the prevCar, the prev value of the car state object, after that we will 
update this object. First, we will use the spread operator to spread the previous state object and then add our update.  

## Updating Array State Variables:  
![image](https://github.com/user-attachments/assets/aafb4036-9f8d-4f46-b30a-aeb5d3283fdb)  

 
## Updating Arrays of Object State Variables:  
![image](https://github.com/user-attachments/assets/0d9bf3b7-180e-4171-82e7-f6341617aef3)  

![image](https://github.com/user-attachments/assets/7980e8eb-a02c-4e39-bf3e-b67ceeaa8938)  

## Creating a TODO list:  
### ToDoList Component: 

![image](https://github.com/user-attachments/assets/124ea223-c5f4-4368-84f3-11076daf8d0b)  

### Index.css:  
![image](https://github.com/user-attachments/assets/8c0c8568-d6ff-4431-a4a9-e48788a78c62)  

### App.jsx: 
![image](https://github.com/user-attachments/assets/936b889b-d8f4-4d6a-9da5-689dca2909cc)  

### Output:  
<img width="948" alt="{509E7408-DBAE-4FFD-99C6-8C6A4E47F87B}" src="https://github.com/user-attachments/assets/3d007bd5-17c9-445c-8935-9c7cfc048779">  

## useEffect()  
useEffect tells react to execute some code when: 
1. The component re-renders (when any of the state variable change)
2. The component mounts for the first time.
3. Some specified state/s change.

`useEffect(function, [dependencies])`  

Three different variations of useEffect():
1. useEffect(() => {}) //Runs at every re-render (when any state changes) The dependency array is not mentioned.
2. useEffect(() => {}, []) //Runs only when the component mounts the first time. Dependency array is empty.
3. useEffect(() => {}, [state/s]) //Runs every time any of the state/s mentioned in the useEffect's dependency array changes.

**Uses**:
1. Event listerners
2. DOM manipulation
3. Subscriptions (real time updates)
4. Fetching data from an API
5. Clean up when component unmounts


### Changing the title of the document every time the component renders ie when the component first loads/mounts and when any of the state/s of the component changes:  
![image](https://github.com/user-attachments/assets/145aefe9-a824-4230-9fd6-c52e6d452d41)  

### Changing the title of the document only the first time the component loads and never after:  
![image](https://github.com/user-attachments/assets/790963ae-3356-4808-ad0e-9645bc9021b7)  

### Changing the title of the document when the specified state/s of the component changes; in this case the state mentioned is count:  
![image](https://github.com/user-attachments/assets/370d6f33-71eb-4ff2-97a3-67a60250a9eb)  

More Info:  
<img width="464" alt="{C72EC84B-43C2-48CF-A180-3BD8E969801F}" src="https://github.com/user-attachments/assets/5ac364f9-810a-40fa-9eac-d1ea20dd2782">  

Performing some clean up when the component unmounts using useEffect(), we return a clean up function:  
![image](https://github.com/user-attachments/assets/122d2454-b2df-4916-9e62-a6dd8ccbda30)  

This code is execute when the component unmounts.  
You can have any number of useEffect() in your component.  







































































