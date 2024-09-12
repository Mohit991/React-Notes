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
























