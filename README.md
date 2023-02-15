<img width="1197" alt="Skjermbilde 2023-02-15 kl  16 56 04" src="https://user-images.githubusercontent.com/89253171/219082398-6332fc87-e0fe-4fb4-aed8-4cbe8603c92d.png">

🧳 Mia and Bob's Travel Blog 🌍

This is a travel blog called "Mia and Bob's Travel Blog". It was created as part of a semester exam for the years 2021-2022. The task was to create a blog with a minimum of five pages:

🏠 Home Page
The home page features a 'Latest Posts' section that uses a carousel (slider) for users to click to view more posts. The carousel displays four posts by default. Users can click an arrow on the right to view the next four posts and click it again to view the next four posts. Users can also click back to view the results they had previously seen.

🤔 About Page
The about page provides information about Mia and Bob, the creators of the blog.

📜 List of Blog Posts
The list of blog posts page shows the first ten blog posts. Users can click to view more results, which then show underneath the first ten blog posts.

📄 Blog Post Specific Pages
The content of the blog specific page is dynamically built using a query string parameter based on whatever link the user clicked. The title of the blog specific page changes based on the blog that has been clicked on, e.g., "My Blog | An Article I Wrote".
If images on the blog post page are clicked, a modal appears, giving the user a bigger view of that image. Clicking outside the image hides the modal.

📩 Contact Page
The contact page includes four text boxes:

    Name (Should be more than 5 characters long)
    Email address (Must be a valid email address)
    Subject (Should be more than 15 characters long)
    Message content (Should be more than 25 characters long)

JavaScript is used for validation, and error messages are displayed if the values in the text boxes do not meet the requirements.

🌐 WordPress
The content for the website is stored on a WordPress installation used as a Headless CMS. The WordPress site provides an API and adds content for the blog. The website is built using HTML, CSS, and JavaScript, making a call to the WordPress REST API to fetch the data.

To run the project, simply clone or fork this repository
To run the blog, use liveserver.


😂 Silly Joke
Why did the tomato turn red?
Because it saw the salad dressing!
