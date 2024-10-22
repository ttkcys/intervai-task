# AI-ChatBot


# Setup Instructions
    git clone https://github.com/ttkcys/intervai-task
    npm install
    npm run dev

   


# Brief Explanation of My Approach
While developing the project, I focused on making the chatbot interface user-friendly, modular, 
and responsive. I kept the interface simple to ensure it provides the basic chat application functionality. 
Below are the details of my approach:

Component Structure:
To make the project more modular and manageable, I divided the interface into different components:

Header: Contains the title of the chatbot and is fixed at the top of the page.
Footer: A footer component displaying the author's name, fixed at the bottom of the page.
ChatBox: The main chat box component that includes user messages and bot responses.
MessageBubble: A reusable component for displaying user and bot messages as message bubbles.


State Management:
I manage the messages and input field using React's useState hook. When a user sends a message, it is 
added to the messages array. Bot responses are simulated by selecting a random response from a static mock data list.

Message Sending:
Users can send messages by typing in the input field and either clicking the 'Send' button. Once a user message is sent, 
a random bot response is selected and displayed after a slight delay.

Timestamps:
Each message is displayed with a timestamp indicating when the message was sent, allowing the conversation to be tracked chronologically.

Responsive Design:
I added media queries using CSS to ensure the interface looks good on both mobile and desktop devices. This allows the components' 
size and layout to adapt based on the screen size.
This structure ensures the code is both readable and scalable, while effectively providing the essential functionality of a chatbot application.