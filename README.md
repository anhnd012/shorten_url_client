# Setting Up Your Local Environment

## a) Clone the Repositories
Make sure you have cloned the React frontend repository to your local machine.

```bash
git clone https://github.com/anhnd012/shorten_url_client.git
```
## b) Install Dependencies for the React frontend
Navigate to the React frontend directory and install the dependencies

```linux
cd <your-react-frontend-directory>
npm install
```
## c) Create a .env File for React
Create a .env file in the root of your React project. This file will hold your environment variables, including the backend URL and put the next line into it

```text
REACT_APP_BACKEND_URL=http://localhost:3000  # or your production URL if needed
```
## d) Start the React Development Server
Start the React development server. By default, it runs on http://localhost:3000.
```javascript
npm start
```






