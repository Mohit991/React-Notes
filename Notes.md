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







   



