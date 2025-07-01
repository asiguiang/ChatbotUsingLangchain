// Import LangChain components for local processing
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";

// Tutorials Dojo knowledge base
const TUTORIALS_DOJO_KNOWLEDGE = `
Tutorials Dojo is a leading provider of IT certification exam preparation materials.

AWS Certifications and Products:
- AWS Certified Cloud Practitioner CLF-C02: Practice Exams $14.99, Study Guide eBook $4.99, Video Course $9.99
- AWS Certified Solutions Architect Associate SAA-C03: Practice Exams $14.99, Study Guide eBook $6.99, Video Course $12.99
- AWS Certified Developer Associate DVA-C02: Practice Exams $14.99, Study Guide eBook $6.99, Video Course $12.99
- AWS Certified SysOps Administrator Associate SOA-C02: Practice Exams $14.99, Study Guide eBook $6.99, Video Course $12.99
- AWS Certified Data Engineer Associate DEA-C01: Practice Exams $14.99, Study Guide eBook $6.99
- AWS Certified Machine Learning Engineer Associate MLA-C01: Practice Exams $14.99, Study Guide eBook $6.99
- AWS Certified AI Practitioner AIF-C01: Practice Exams $14.99, Study Guide eBook $4.99
- AWS Certified Solutions Architect Professional SAP-C02: Practice Exams $14.99, Study Guide eBook $6.99
- AWS Certified DevOps Engineer Professional DOP-C02: Practice Exams $14.99, Study Guide eBook $6.99
- AWS Certified Security Specialty SCS-C02: Practice Exams $17.99, Study Guide eBook $6.99
- AWS Certified Advanced Networking Specialty ANS-C01: Practice Exams $17.99
- AWS Certified Machine Learning Specialty: Practice Exams $17.99

Azure Certifications:
- AZ-900 Microsoft Azure Fundamentals: Practice Exams available
- AZ-104 Microsoft Azure Administrator: Practice Exams and Study Guide eBook available
- AZ-500 Microsoft Azure Security Engineer Associate: Practice Exams available
- AZ-305 Designing Microsoft Azure Infrastructure Solutions: Practice Exams available
- AZ-400 Microsoft Azure DevOps Engineer Expert: Practice Exams available
- AZ-204 Microsoft Azure Developer Associate: Practice Exams available
- AI-900 Microsoft Azure AI Fundamentals: Practice Exams available
- AI-102 Microsoft Azure AI Engineer Associate: Practice Exams available

Google Cloud Certifications:
- Google Certified Associate Cloud Engineer: Practice Exams available
- Google Certified Professional Cloud Architect: Practice Exams available

Kubernetes:
- Kubernetes and Cloud Native Associate KCNA: Practice Exams 2025

Free Courses:
- AWS Cloud Practitioner Essentials (Latest Edition) CLF-C02: FREE
- Machine Learning courses: Various FREE courses available
- Database Migration courses: FREE courses for various database migrations
- AWS Service Overviews: FREE courses covering Compute, Storage, Database, Security, Networking, etc.

Pricing and Bundles:
- Practice Exams: $14.99-$17.99
- Study Guide eBooks: $4.99-$6.99
- Video Courses: $9.99-$12.99
- Bundle Discounts: 10% OFF when buying 2 practice tests (automatically applied)
- Bundle Options: Video Course + Practice Exam, Practice Exam + eBook, Video Course + Practice Exam + eBook

Contact Information:
- Email: support@tutorialsdojo.com
- Slack community available
- Proudly made in the Philippines

Features:
- Practice exams with detailed explanations
- Study guides with real-world examples
- Video courses with hands-on labs
- Regular updates to match latest exam versions
- Bundle discounts available
- Free practice test samplers
`;

// Create a local processing chain (simulated since we're not using actual API)
class LocalChatbotService {
  private knowledgeBase: string;

  constructor() {
    this.knowledgeBase = TUTORIALS_DOJO_KNOWLEDGE;
  }

  async generateResponse(userMessage: string): Promise<string> {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));

    const lowerMessage = userMessage.toLowerCase();
    
    // Enhanced response logic based on the knowledge base
    if (lowerMessage.includes('aws') || lowerMessage.includes('amazon')) {
      return this.handleAWSQuery(lowerMessage);
    } else if (lowerMessage.includes('azure') || lowerMessage.includes('microsoft')) {
      return this.handleAzureQuery(lowerMessage);
    } else if (lowerMessage.includes('google cloud') || lowerMessage.includes('gcp')) {
      return this.handleGoogleCloudQuery(lowerMessage);
    } else if (lowerMessage.includes('kubernetes') || lowerMessage.includes('k8s')) {
      return this.handleKubernetesQuery(lowerMessage);
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      return this.handlePricingQuery();
    } else if (lowerMessage.includes('free') || lowerMessage.includes('free courses')) {
      return this.handleFreeCoursesQuery();
    } else if (lowerMessage.includes('bundle') || lowerMessage.includes('discount')) {
      return this.handleBundleQuery();
    } else if (lowerMessage.includes('practice exam') || lowerMessage.includes('exam')) {
      return this.handlePracticeExamQuery();
    } else if (lowerMessage.includes('ebook') || lowerMessage.includes('study guide')) {
      return this.handleStudyGuideQuery();
    } else if (lowerMessage.includes('video course') || lowerMessage.includes('video')) {
      return this.handleVideoCourseQuery();
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
      return this.handleContactQuery();
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return this.handleGreetingQuery();
    } else {
      return this.handleGeneralQuery();
    }
  }

  private handleAWSQuery(message: string): string {
    if (message.includes('cloud practitioner') || message.includes('clf')) {
      return "We offer AWS Certified Cloud Practitioner CLF-C02 Practice Exams for $14.99 and a Study Guide eBook for $4.99. We also have a Video Course for $9.99. This is perfect for beginners starting their AWS certification journey! The practice exams include detailed explanations and are updated to match the latest CLF-C02 exam format.";
    } else if (message.includes('solutions architect') || message.includes('saa')) {
      return "We have AWS Certified Solutions Architect Associate SAA-C03 Practice Exams for $14.99, Study Guide eBook for $6.99, and Video Course for $12.99. This is one of our most popular certifications! Our materials cover all exam domains including design resilient architectures, design high-performing architectures, design secure applications, and design cost-optimized architectures.";
    } else if (message.includes('developer') || message.includes('dva')) {
      return "We offer AWS Certified Developer Associate DVA-C02 Practice Exams for $14.99, Study Guide eBook for $6.99, and Video Course for $12.99. Great for developers looking to specialize in AWS development. Our materials cover deployment, security, development with AWS services, and troubleshooting.";
    } else if (message.includes('sysops') || message.includes('soa')) {
      return "We have AWS Certified SysOps Administrator Associate SOA-C02 Practice Exams for $14.99, Study Guide eBook for $6.99, and Video Course for $12.99. Perfect for operations and administration roles. Our materials focus on monitoring and reporting, high availability, deployment and provisioning, storage and data management, and security and compliance.";
    } else if (message.includes('machine learning') || message.includes('ml')) {
      return "We offer AWS Certified Machine Learning Engineer Associate MLA-C01 Practice Exams for $14.99 and Study Guide eBook for $6.99. We also have Machine Learning Specialty Practice Exams for $17.99. Our ML materials cover data engineering, exploratory data analysis, modeling, and machine learning implementation and operations.";
    } else if (message.includes('security') || message.includes('scs')) {
      return "We have AWS Certified Security Specialty SCS-C02 Practice Exams for $17.99 and Study Guide eBook for $6.99. Essential for security professionals in AWS environments. Our materials cover incident response, logging and monitoring, infrastructure security, identity and access management, and data protection.";
    } else if (message.includes('devops') || message.includes('dop')) {
      return "We offer AWS Certified DevOps Engineer Professional DOP-C02 Practice Exams for $14.99 and Study Guide eBook for $6.99. Advanced certification for DevOps professionals. Our materials cover SDLC automation, configuration management and infrastructure as code, monitoring and logging, policies and standards automation, and incident and event response.";
    } else if (message.includes('data engineer') || message.includes('dea')) {
      return "We have AWS Certified Data Engineer Associate DEA-C01 Practice Exams for $14.99 and Study Guide eBook for $6.99. Perfect for data engineering roles. Our materials cover data ingestion and transformation, data store management, data operations and support, and data security and governance.";
    } else if (message.includes('ai practitioner') || message.includes('aif')) {
      return "We offer AWS Certified AI Practitioner AIF-C01 Practice Exams for $14.99 and Study Guide eBook for $4.99. Great for AI and machine learning enthusiasts. Our materials cover AI fundamentals, machine learning, generative AI, and AI applications and use cases.";
    } else if (message.includes('networking') || message.includes('ans')) {
      return "We have AWS Certified Advanced Networking Specialty ANS-C01 Practice Exams for $17.99. Advanced networking certification for AWS professionals. Our materials cover network design, network implementation, network management and operations, network security, troubleshooting, and network optimization.";
    } else if (message.includes('professional') || message.includes('sap')) {
      return "We offer AWS Certified Solutions Architect Professional SAP-C02 Practice Exams for $14.99 and Study Guide eBook for $6.99. Our highest-level AWS certification. Our materials cover advanced architectural concepts, migration planning, cost optimization, and continuous improvement for AWS solutions.";
    } else {
      return "We offer a comprehensive range of AWS certifications including Cloud Practitioner ($14.99), Solutions Architect Associate ($14.99), Developer Associate ($14.99), SysOps Administrator ($14.99), Machine Learning Engineer ($14.99), Security Specialty ($17.99), DevOps Engineer Professional ($14.99), Data Engineer Associate ($14.99), AI Practitioner ($14.99), Advanced Networking Specialty ($17.99), and Solutions Architect Professional ($14.99). Each comes with practice exams, study guides, and video courses. What specific AWS certification are you interested in?";
    }
  }

  private handleAzureQuery(message: string): string {
    return "We offer Microsoft Azure certifications! We have AZ-900 Fundamentals Practice Exams, AZ-104 Administrator Practice Exams ($6.99 Study Guide eBook available), AZ-500 Security Engineer Practice Exams, AZ-305 Infrastructure Solutions Practice Exams, AZ-400 DevOps Engineer Practice Exams, and AZ-204 Developer Practice Exams. We also have AI-900 AI Fundamentals and AI-102 AI Engineer Associate Practice Exams. All our Azure materials are regularly updated to match the latest exam versions.";
  }

  private handleGoogleCloudQuery(message: string): string {
    return "We offer Google Cloud certifications including Google Certified Associate Cloud Engineer Practice Exams and Google Certified Professional Cloud Architect Practice Exams. Our Google Cloud materials help you prepare for these challenging exams with comprehensive coverage of GCP services and best practices.";
  }

  private handleKubernetesQuery(message: string): string {
    return "We have Kubernetes and Cloud Native Associate KCNA Practice Exams 2025 for Kubernetes enthusiasts. This certification covers Kubernetes fundamentals, container orchestration, and cloud-native application development. Perfect for developers and administrators working with containerized applications.";
  }

  private handlePricingQuery(): string {
    return "Our pricing is competitive and transparent: Practice Exams range from $14.99-$17.99, Study Guide eBooks from $4.99-$6.99, and Video Courses from $9.99-$12.99. We also offer bundle discounts - buy 2 practice tests and get 10% off automatically! Plus, we have many FREE courses available including AWS Cloud Practitioner Essentials, Machine Learning courses, and various AWS service overviews.";
  }

  private handleFreeCoursesQuery(): string {
    return "Yes! We offer many FREE courses including AWS Cloud Practitioner Essentials (Latest Edition), Machine Learning courses (AWS Machine Learning Services Overview, Introduction to Machine Learning, etc.), Database Migration courses (migrating from SQL Server, MongoDB, MySQL, Oracle, PostgreSQL to AWS), and various AWS service overviews (Compute, Storage, Database, Security, Networking, etc.). We also have FREE practice test samplers to help you get started!";
  }

  private handleBundleQuery(): string {
    return "We offer several bundle options: Video Course + Practice Exam Bundle, Practice Exam + eBook Bundle, and Video Course + Practice Exam + eBook Bundle. Plus, get 10% OFF when you buy 2 practice tests - automatically applied at checkout! Bundle discounts don't apply to eBooks and video courses individually, but our bundle packages provide excellent value for comprehensive exam preparation.";
  }

  private handlePracticeExamQuery(): string {
    return "Our practice exams are designed to simulate the real certification experience with detailed explanations for each answer. They're updated regularly to match the latest exam versions and include hundreds of practice questions. Each practice exam covers all exam domains and provides realistic scenarios you'll encounter on the actual test. We also offer free practice test samplers so you can try before you buy!";
  }

  private handleStudyGuideQuery(): string {
    return "Our Study Guide eBooks provide comprehensive coverage of exam topics with real-world examples, diagrams, and practice questions. They're perfect for self-study and exam preparation. Each study guide is written by certified professionals and includes hands-on exercises, case studies, and exam tips. Available in multiple formats for easy reading on any device.";
  }

  private handleVideoCourseQuery(): string {
    return "Our video courses provide step-by-step instruction with hands-on labs and real-world scenarios. They're perfect for visual learners and those who prefer guided instruction. Each video course includes downloadable resources, practice exercises, and lifetime access. Our instructors are certified professionals with years of real-world experience.";
  }

  private handleContactQuery(): string {
    return "You can reach us at support@tutorialsdojo.com or join our Slack community for real-time support. We're proudly made in the Philippines and here to help you succeed! Our support team is available to answer questions about our products, help with technical issues, and provide guidance on your certification journey.";
  }

  private handleGreetingQuery(): string {
    return "Hello! Welcome to Tutorials Dojo. I'm Ask@Dojo, your AI assistant here to help you find the perfect AWS, Azure, or Google Cloud certification resources. We offer practice exams, study guides, and video courses to help you pass your certification exams on the first try. What would you like to know about?";
  }

  private handleGeneralQuery(): string {
    return "I'm here to help you with information about Tutorials Dojo's certification resources. We offer practice exams, study guides, and video courses for AWS, Azure, and Google Cloud certifications. Our materials are designed by certified professionals and updated regularly to match the latest exam versions. Could you please ask about a specific certification, service, or topic you're interested in?";
  }
}

// Export the service instance
export const chatbotService = new LocalChatbotService(); 