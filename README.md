# PS - SIH25024 [Team - CODE BRIGADE]

This README provides an overview of the project, including team details, relevant links, tasks completed, tech stack, key features, and steps to run the project locally.

## Team Details

**Team Name:** CODE BRIGADE

**Team Leader:** [@abhinav-phi](https://github.com/abhinav-phi)

**Team Members:**

- **MEMBER_1** - 2024UCS1674 - [@abhinav](https://github.com/abhinav-phi)
- **MEMBER_2** - 2024UCS1724 - [@bharat](https://github.com/kakashi1509b)
- **MEMBER_3** - 2024UCS1671 - [@kashish](https://github.com/Kashish100-max)
- **MEMBER_4** - 2024UCS1744 - [@reshik](https://github.com/f16reshik)
- **MEMBER_5** - 2024UCS1715 - [@aditya](https://github.com/debugaditya)
- **MEMBER_6** - 2024UBT1072 - [@disha](https://github.com/theisha761)

## Project Links

- **SIH Presentation:** [Final SIH Presentation](https://nsutacin-my.sharepoint.com/:p:/g/personal/abhinav_ug24_nsut_ac_in/EZviQbIz_8NLhD6hh4ESWNUBuPngleMhjZGO5HNm8xhrRg?e=cDnIh2)
- **Video Demonstration:** [Watch Video](https://youtu.be/SvKHmuiYuBI)
- **Live Deployment:** [View Deployment](ayurdiethealth.vercel.app/)
- **Source Code:** [GitHub Repository](https://github.com/abhinav-phi/ayurdiet)

## Tasks Accomplished

- [x] **Automation:** Created an automated diet chart generation system that produces nutritionally balanced, Ayurveda-compliant plans in an organized format.
- [x] **Synthesis:** Integrated modern nutritional metrics (macro and micro-nutrients, caloric values) with traditional Ayurvedic concepts
- [x] **Integration:** Implemented Ayurvedic dietary principles integration including food properties (Hot/Cold, Easy/Difficult to digest) and six tastes (Rasa) classification.Implemented Ayurvedic dietary principles integration including food properties (Hot/Cold, Easy/Difficult to digest) and six tastes (Rasa) classification.

## Technology Stack

This project leverages the following technologies:

- **[React](https://react.dev):** Component-based library chosen for building interactive user interfaces and managing complex state in the AYURDIET platform.
- **[Next.js](https://nextjs.org):** Full-stack React framework selected for server-side rendering, API routes, and optimized performance for the web application.
- **[TypeScript](https://www.typescriptlang.org):** Strongly-typed JavaScript superset used to ensure code reliability and better developer experience with compile-time error checking.
- **[Vite](https://vitejs.dev):** Fast build tool chosen for instant Hot Module Replacement and optimized development workflow.
- **[TailwindCSS](https://tailwindcss.com):** Utility-first CSS framework selected for rapid UI development and consistent responsive design patterns.
- **[PostCSS](https://postcss.org):** CSS processing tool used for transforming and optimizing stylesheets with autoprefixing capabilities.
- **[ESLint](https://eslint.org):** JavaScript linting utility implemented to maintain code quality and consistent coding standards across the project.
- **[Node.js](https://nodejs.org):** JavaScript runtime environment powering the backend server and enabling full-stack development capabilities.
- **[Express.js](https://expressjs.com):** Minimalist web framework chosen for building robust RESTful APIs and handling server-side logic.
- **[bcrypt](https://www.npmjs.com/package/bcrypt):** Secure password hashing library used for implementing safe user authentication and data protection.
- **[Supabase](https://supabase.com):** Open-source Backend-as-a-Service chosen for instant PostgreSQL APIs, real-time subscriptions, and authentication services.
- **[PostgreSQL](https://www.postgresql.org):** Advanced relational database selected as the primary data store for handling complex Ayurvedic nutrition data and user profiles.
- **[Vercel](https://vercel.com):** Cloud deployment platform chosen for seamless CI/CD, global edge distribution, and optimized hosting for Next.js applications.
- **[Google Generative AI](https://ai.google.dev):** Machine learning platform integrated to power AI-driven Ayurvedic nutrition recommendations and personalized dietary suggestions.


## Key Features

- **Database:**  India's first database combining modern nutritional data with Ayurvedic dosha classifications.
- **Personalization:** Personalizes diets and lifestyle recommendations based on an individual's unique prakriti.
- **Checker:** Ensures all meal recommendations consist of Ayurvedic-approved food combinations.

# Local Setup Instructions (Windows & macOS)

Follow these steps to set up and run the project locally.

## 1. Prerequisites

### Install Git
* **Windows**: Download Git for Windows → during installation, select "Add Git to PATH".
* **macOS**: Git usually comes pre-installed. Check with:

```bash
git --version
```

If not, install via Homebrew:

```bash
brew install git
```

### Install Node.js & npm
* Download and install from [Node.js official site](https://nodejs.org/) (**LTS version recommended**).
* Verify installation:

```bash
node -v
npm -v
```

*(Optional: You can also install via nvm to easily switch Node versions.)*

### Install Package Manager (optional but recommended)
* **Yarn** (alternative to npm):

```bash
npm install --global yarn
```

* **pnpm**:

```bash
npm install --global pnpm
```

### Database (if required by the project)
* If your project uses **PostgreSQL/MySQL/MongoDB/etc.**, install and start the service locally.
* Example (macOS with Homebrew):

```bash
brew install postgresql
brew services start postgresql
```

## 2. Clone the Repository

```bash
git clone GITHUB_LINK_TO_THE_REPO
cd REPO_DIRECTORY
```

## 3. Install Dependencies

Using npm:

```bash
npm install
```

Or yarn:

```bash
yarn install
```

## 4. Set Up Environment Variables

* Duplicate `.env.example` (if available) → rename it to `.env`.
* Fill in the required values (API keys, database URL, etc.).
* Example:

```bash
DATABASE_URL=postgres://user:password@localhost:5432/dbname
API_KEY=your_api_key_here
```

## 5. Run Database Migrations (if applicable)

```bash
npx prisma migrate dev
```

*(Skip if not using Prisma/DB migrations.)*

## 6. Start the Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

## 7. Access the App

Open your browser and visit:

```
http://localhost:3000
```

(or the port shown in the terminal).

## 8. Build for Production (Optional)

```bash
npm run build
npm start
```