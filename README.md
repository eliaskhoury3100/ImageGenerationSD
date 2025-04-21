
# VLM Research Image Generator
A web application for generating clean images from text captions using Stable Diffusion, designed for academic research on Vision-Language Models (VLMs).

## Overview
This project provides a tool for generating images from text captions using Stable Diffusion, specifically for educational research on trustworthy machine learning. The generated images can be used to test attack models on Vision-Language Models (VLMs) and study adversarial examples and defense mechanisms.

The application consists of:

1. Frontend: A Next.js web application with a clean, user-friendly interface.
2. Backend API: A Flask server running on Google Colab that processes image generation requests.
3. Image Generation: Stable Diffusion model for high-quality image generation from text captions.

## Features
1. **Simple Caption Input**: Enter detailed text descriptions to generate corresponding images.
2. **High-Quality Image Generation**: Uses Stable Diffusion model for realistic image creation.
3. **Image Download**: Save generated images for later use in research.
4. **Responsive Design**: Works on desktop and mobile devices.

## Setup Instructions
### Prerequisites
- Node.js (v16+)
- Python 3.8+
- Google Colab account (for running the backend)

### Frontend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/eliaskhoury3100/ImageGenerationSD
    cd /.../ImageGenerationSD
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
    Move the package.json file into the main folder if needed.
3. Update the API endpoint in `lib/image-generation.ts` to point to your deployed backend URL.
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup (Google Colab)
1. Upload the `webapptargetedimagegeneration.py` file to your Google Drive.
2. Open the file in Google Colab.
3. Mount your Google Drive and ensure the Stable Diffusion model checkpoint is accessible.
4. Modify any paths to match those in your Google Drive.
5. Run all cells to install dependencies and start the Flask server.
6. The notebook will output a public URL (via ngrok) that you can use to connect your frontend.
7. Update the API endpoint in your frontend to use this URL.

## Technical Details
### Frontend (Next.js)
The frontend is built with Next.js and uses the following technologies:
- **React**: For building the user interface
- **Tailwind CSS**: For styling
- **shadcn/ui**: For UI components
- **next-themes**: For theme management (light/dark mode)

Key components:
- `app/page.tsx`: Main page with the caption input form and image display.
- `components/image-display.tsx`: Component for displaying and downloading generated images.
- `lib/image-generation.ts`: Service for communicating with the backend API.

### Backend (Flask API)
The backend is a Flask server that:
1. Receives caption requests from the frontend.
2. Calls the Stable Diffusion model to generate images.
3. Returns the generated images as base64-encoded strings.

Key endpoints:
- `POST /generate`: Accepts a caption and returns a generated image.

### Image Generation (Stable Diffusion)
The image generation is handled by a modified version of the Stable Diffusion text-to-image script:
- Uses the `webtxt2img_coco.py` script to generate images from captions.
- Applies safety checking to ensure appropriate content.
- Adds invisible watermarks to generated images.
- Supports various parameters for controlling the generation process.

## Usage for Educational Research
This tool is designed for academic research on trustworthy machine learning, specifically for studying adversarial examples and defense mechanisms for Vision-Language Models.
Researchers can:
1. Generate clean images from captions.
2. Use these images to test attack models on VLMs.
3. Study how different captions affect image generation.
4. Develop and test defense mechanisms against adversarial attacks.

## Troubleshooting
### Common Issues
1. **API Connection Errors**: Ensure the ngrok tunnel is running and the URL is correctly set in the frontend.
2. **Image Generation Failures**: Check that the Stable Diffusion model path is correct.
3. **Dependency Issues**: Make sure all required packages are installed in the Colab environment.

## Ethical Considerations
This tool is intended for educational and research purposes only. Users should:
- Avoid generating harmful, offensive, or misleading content.
- Use the generated images responsibly and in accordance with academic ethics.

## Acknowledgements
- [Stable Diffusion](https://github.com/CompVis/stable-diffusion) for the image generation model
- [AttackVLM](https://github.com/yunqing-me/AttackVLM) for research on adversarial robustness of VLMs
- Zhao, Y., Pang, T., Du, C., Yang, X., Li, C., Cheung, N.-M., & Lin, M. (2023). *On evaluating adversarial robustness of large vision-language models.* Advances in Neural Information Processing Systems (NeurIPS 2023).
