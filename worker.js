export default {
  async fetch(request) {
    const { searchParams } = new URL(request.url);
    const text = searchParams.get("text");
    
    let errorMessage = '';
    
    if (text === null || text.trim() === '') {
      if (request.method === 'GET' && request.url.includes('/?')) {
        errorMessage = 'Please enter some text to generate a QR code.';
      }
    }

    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>QR Code Generator</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            transition: background-color 0.3s, color 0.3s;
          }
          body.light-mode {
            background-color: #f4f4f9;
            color: #000;
          }
          body.dark-mode {
            background-color: #1e1e1e;
            color: #fff;
          }
          .container {
            text-align: center;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 300px;
            box-sizing: border-box;
            transition: background-color 0.3s;
          }
          .container.dark-mode {
            background-color: #2b2b2b;
          }
          input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
          }
          button {
            margin-top: 10px;
            padding: 10px 20px;
            font-size: 16px;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
          }
          button:hover {
            background-color: #0056b3;
          }
          .qr-code {
            margin-top: 20px;
          }
          .qr-code img {
            width: 100%;
            height: auto;
            max-width: 250px; /* Adjust max width for better fit */
            border-radius: 5px;
          }
          .error {
            color: red;
            margin-top: 10px;
          }
          .dark-mode-toggle {
            margin-top: 20px;
          }
          .dark-mode-toggle label {
            cursor: pointer;
          }
        </style>
      </head>
      <body class="light-mode">
        <div class="container light-mode">
          <h2>QR Code Generator</h2>
          <form method="GET">
            <input type="text" name="text" placeholder="Enter text" required>
            <button type="submit">Generate QR Code</button>
          </form>
          ${errorMessage ? `<div class="error">${errorMessage}</div>` : ''}
          ${text && !errorMessage ? `<div class="qr-code"><img src="https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(text)}" alt="QR Code"></div>` : ''}
          <div class="dark-mode-toggle">
            <label>
              <input type="checkbox" id="darkModeSwitch"> Dark Mode
            </label>
          </div>
        </div>
        <script>
          const darkModeSwitch = document.getElementById('darkModeSwitch');
          const body = document.body;
          const container = document.querySelector('.container');
          
          const savedMode = localStorage.getItem('darkMode');
          if (savedMode === 'enabled') {
            body.classList.add('dark-mode');
            container.classList.add('dark-mode');
            darkModeSwitch.checked = true;
          }
          
          darkModeSwitch.addEventListener('change', () => {
            if (darkModeSwitch.checked) {
              body.classList.add('dark-mode');
              container.classList.add('dark-mode');
              localStorage.setItem('darkMode', 'enabled');
            } else {
              body.classList.remove('dark-mode');
              container.classList.remove('dark-mode');
              localStorage.setItem('darkMode', 'disabled');
            }
          });
        </script>
      </body>
      </html>
    `;

    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
};
