# Wsid-Opengrapher

[![License](https://img.shields.io/github/license/MartinsOnuoha/wsid-opengrapher.svg)](LICENSE)
[![Issues](https://img.shields.io/github/issues/MartinsOnuoha/wsid-opengrapher.svg)](https://github.com/MartinsOnuoha/wsid-opengrapher/issues)

## Overview

**wsid-opengrapher** is a lightweight API built with JavaScript for extracting META information from provided URLs. It is designed to easily fetch Open Graph and basic meta tags such as `ogTitle`, `ogDescription`, `ogImage`, and more, making it ideal for content previews, social sharing, and link unfurling.

<img width="2594" height="1294" alt="CleanShot 2025-09-26 at 11  23 14@2x" src="https://github.com/user-attachments/assets/43b1bf8b-f539-4899-9d0d-afce4b6e663c" />

---

## Features

- Extracts Open Graph meta tags (`og:title`, `og:description`, `og:image`, etc.)
- Retrieves standard meta tags (title, description, favicon, etc.)
- Simple and clean API interface
- Suitable for building link preview components or bots

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/MartinsOnuoha/wsid-opengrapher.git
cd wsid-opengrapher
npm install
```

### Usage

A basic example of how to use wsid-opengrapher deployed on render (slow):

```javascript
https://wsid-opengrapher.onrender.com/?url={YOUR_URL}
```
You can self-host the API alternatively.

### API

#### `extract(url: string): Promise<Object>`

- **url**: The URL to extract meta information from.
- **Returns**: An object containing available meta tags:
  - `ogTitle`
  - `ogDescription`
  - `ogImage`
  - `title`
  - `description`
  - `favicon`
  - etc.

---

## Example Response

```json
{
  "ogTitle": "Example Title",
  "ogDescription": "This is an example description.",
  "ogImage": "https://example.com/image.jpg",
  "title": "Website Title",
  "description": "Website description.",
  "favicon": "https://example.com/favicon.ico"
}
```

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for enhancements and bug fixes.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Create a new Pull Request

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

- Author: [Martins Onuoha](https://github.com/MartinsOnuoha)
- Repository: [https://github.com/MartinsOnuoha/wsid-opengrapher](https://github.com/MartinsOnuoha/wsid-opengrapher)
