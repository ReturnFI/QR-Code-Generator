# QR Code Generator

A simple QR code generator built with HTML, CSS, and JavaScript. Users can input text to generate a QR code, which can be downloaded or scanned.

<p align="center">
<img src="https://github.com/user-attachments/assets/dcc7dd36-9bf2-43bb-9b46-49a58c497c85" >
  
<img src="https://github.com/user-attachments/assets/fb81c2f1-5741-48ee-9b21-29574bbec723" >
</p>

## Features

- Input text to generate a QR code.
- Dark mode toggle for better user experience.
- Responsive design for mobile and desktop views.
- Error handling for empty input.

## Project Structure

```
/QR-Code-Generator
├── index.html      # Main HTML file
├── style.css       # Styles for the application
├── script.js       # JavaScript for handling logic
└── worker.js       # Cloudflare Worker script
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ReturnFI/QR-Code-Generator.git
   cd QR-Code-Generator
   ```

2. **Open `index.html` in a web browser:**
   Simply open the `index.html` file to view and use the QR code generator.

## Usage

1. **Enter Text:** Type the text you want to convert into a QR code in the input field.
2. **Generate QR Code:** Click the "Generate QR Code" button to create the QR code.
3. **Dark Mode:** Toggle the dark mode switch to change the theme of the application.

## Deployment

### Option 1: Deploy on Cloudflare Pages

This project can be deployed using [Cloudflare Pages](https://pages.cloudflare.com/):

1. Sign in to Cloudflare and create a new project.
2. Connect your GitHub repository or upload the files directly.
3. Configure the build settings (leave build command and output directory blank).
4. Deploy the project.

### Option 2: Deploy as a Cloudflare Worker

You can also deploy the QR code generator as a Cloudflare Worker using the provided `worker.js` script:

1. **Sign in to Cloudflare:** Go to the [Cloudflare Workers](https://workers.cloudflare.com/) dashboard and sign in.

2. **Create a New Worker:**
   - Click on "Create a Worker."
   - Replace the default code with the content from `worker.js`.

3. **Test Your Worker:** 
   - Click "Save and Deploy" to test your worker.
   - Access your worker using the provided URL.


## Acknowledgements

- [QR Code Generator API](https://goqr.me/api/)
- Inspiration from various QR code applications.


