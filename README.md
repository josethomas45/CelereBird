![ai-email-client](https://socialify.git.ci/awindsr/ai-email-client/image?font=Raleway&forks=1&issues=1&language=1&name=1&owner=1&pattern=Formal+Invitation&pulls=1&stargazers=1&theme=Light)
# **Minimalistic AI-Powered SaaS Email Client**  

### **Overview**  
This project is a lightweight, intuitive SaaS email client designed for professionals to manage their emails efficiently. By leveraging AI capabilities, it offers features such as context-aware replies, intelligent inbox management, and automated email drafting and sending.  

Built with **Next.js**, **Tailwind CSS**, **OpenAI**, and other cutting-edge technologies, this project addresses the need for enhanced productivity and seamless communication.  

---

### **Key Features**  
- **AI Integration**: Automates email creation, context-aware replies, and intelligent email organization.  
- **Full-Text Search**: Powered by Orama, enabling quick and accurate email retrieval.  
- **Smart Agent**: Execute commands like “Send a mail to this person explaining about this” to save time and effort.  
- **Keyboard Navigation**: Streamlined controls for power users.  
- **Dark/Light Mode**: Customizable UI for better user experience.  
- **Secure Payment System**: Subscription management with Stripe.  

---

### **Technologies Used**  
- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)  
- **Backend**: [Prisma](https://www.prisma.io/), [OpenAI](https://platform.openai.com/)  
- **Database**: PostgreSQL (or your preferred choice)  
- **Search**: [Orama](https://orama.dev/)  
- **Email Synchronization**: [Oringo APIs](https://www.oringoapi.com/)  
- **Payment Processing**: [Stripe](https://stripe.com/)  

---

### **Project Objectives**  
- Develop a minimalistic email client with a focus on usability and efficiency.  
- Leverage AI to automate repetitive email tasks, saving users time.  
- Provide advanced features like full-text search and context-aware replies.  
- Ensure secure, scalable, and cost-effective operations with SaaS architecture.  

---

### **Installation and Setup**  

1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/username/project-name.git  
   cd project-name  
   ```  

2. **Install Dependencies**  
   ```bash  
   npm install  
   ```  

3. **Set Up Environment Variables**  
   Create a `.env` file in the root directory and add the following:  
   ```env  
   DATABASE_URL=your_database_url  
   OPENAI_API_KEY=your_openai_api_key  
   STRIPE_SECRET_KEY=your_stripe_secret_key  
   ORINGO_API_KEY=your_oringo_api_key  
   ```  

4. **Run Migrations**  
   ```bash  
   npx prisma migrate dev  
   ```  

5. **Start the Development Server**  
   ```bash  
   npm run dev  
   ```  
   Open [http://localhost:3000](http://localhost:3000) in your browser.  

---

### **Usage**  

1. **AI-Powered Email Drafting**  
   - Enter a command like "Send an email to [Person] about [Topic]."  
   - The AI agent will draft and send the email.  

2. **Smart Inbox**  
   - Emails are categorized intelligently to enhance organization.  

3. **Search Emails**  
   - Use the full-text search bar to find emails instantly.  

4. **Dark/Light Mode**  
   - Toggle between modes to suit your preference.  

---



### **Contributing**  
Contributions are welcome! Please follow these steps:  
1. Fork the repository.  
2. Create a feature branch.  
3. Commit your changes.  
4. Open a pull request.  
