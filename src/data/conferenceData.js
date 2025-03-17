// src/data/conferenceData.js

const conferenceData = {
    title: "OxAI 2nd Mini-Conference",
    date: "Sunday, 16th March 2025",
    time: "10:00 AM - 7:00 PM",
    venue: "Oxford e-Research Centre, 7 Keble Road",
    doorsOpen: "9:30 AM",
    
    committee: [
      {
        name: "Puyu Wang",
        role: "General Chair",
        linkedIn: "https://www.linkedin.com/in/puyu-wang/"
      },
      {
        name: "SeWook Oh",
        role: "Programme Co-Chair",
        linkedIn: "https://www.linkedin.com/in/sewook-oh-64935835/"
      },
      {
        name: "Omer Bilgin",
        role: "Programme Co-Chair",
        linkedIn: "https://www.linkedin.com/in/omerhanbilgin/"
      },
      {
        name: "Aurora Kapo",
        role: "Programme Co-Chair & DEI Lead",
        linkedIn: "https://www.linkedin.com/in/aurorakapo/"
      }
    ],
    
    keynotes: [
        {
          id: "keynote1",
          speaker: "Tim J. Baek",
          title: "Towards Open, Human-Centered, and Social Interfaces for AI",
          role: "Founder of Open WebUI",
          time: "10:00 AM - 10:50 AM",
          venue: "Lecture Theatre B (Department of Computer Science)",
          abstract: ""
        },
        {
          id: "keynote2",
          speaker: "Guohao Li",
          title: "Finding the Scaling Laws of Agents",
          role: "Founder and CEO of Eigent.AI / CAMEL-AI.org",
          time: "1:00 PM - 1:50 PM",
          venue: "Lecture Theatre B (Department of Computer Science)",
          abstract: ""
        }
      ],
      
      scheduleHighlights: [
        { time: "9:30 AM - 10:00 AM", event: "Doors Open", location: "Atrium" },
        { time: "10:00 AM - 10:50 AM", event: "Opening Keynote", location: "Lecture Theatre B" },
        { time: "11:00 AM - 11:30 PM", event: "Panel Talk: From UX to Reasoning: 6 Trends Shaping the Present and Future of Large Language Models", location: "Lecture Theatre B" },
        { time: "11:00 AM - 12:30 PM", event: "Panel Discussion on Large Language Models", location: "Lecture Theatre B" },
        { time: "12:30 PM - 1:00 PM", event: "Lunch Break", location: "Atrium" },
        { time: "1:00 PM - 2:00 PM", event: "Finding the Scaling Laws of Agents", location: "Lecture Theatre B" },
        { time: "2:00 PM - 2:50 PM", event: "Panel Discussions Breakout Session", location: "Multiple Venues" },
        { time: "3:00 PM - 4:20 PM", event: "Presentations Discussions Breakout Session", location: "Multiple Venues" },
        { time: "5:00 PM - 7:00 PM", event: "Workshops Breakout Session", location: "Multiple Venues" },
        { time: "7:00 PM", event: "Social with Drinks", location: "Atrium" }
      ],
      
      panels: [
        {
          id: "panel1",
          title: "Panel Discussion on Large Language Models",
          time: "11:00 AM - 12:30 PM",
          venue: "Lecture Theatre B (Department of Computer Science)",
          moderator: "Puyu Wang, Emanuele La Malfa",
          organizers: ["Fangru Lin", "Puyu Wang"],
          panelists: [
            { name: "Fangru Lin", affiliation: "DPhil student, Oxford e-Research Centre" },
            { name: "Aleksander Petrov", affiliation: "DPhil student, Department of Engineering Science " },
            { name: "Guohao Li", affiliation: "Founder and CEO of Eigent.AI / CAMEL-AI.org" },
            { name: "Yuan He", affiliation: "Postdoctoral Research Associate, Department of Computer Science" },
            { name: "Dominik Luk", affiliation: "Lead Business Technologist at AI/ML Support Competency Centre" },
            { name: "Zifeng Ding", affiliation: "Post doc, University of Cambridge" },
            { name: "Tim J. Baek", affiliation: "Founder of Open WebUI" },
            { name: "Sumeet Motwani", affiliation: "DPhil Student, Department of Engineering Science" },
            { name: "Victor Putz", affiliation: "Executive MBA, Said Business School" }
          ]
        },
        {
          id: "panel2",
          title: "OxAI and Oxford AI and ML Competency Centre Joint Panel: How Will the Academic Community Shape the Future of AI?",
          time: "2:00 PM - 2:50 PM",
          venue: "Lecture Theatre B (Department of Computer Science)",
          moderator: "Sewook Oh",
          organizers: ["Puyu Wang"],
          panelists: [
            { name: "Ivan Vasenov", affiliation: "OxAI President" },
            { name: "Puyu Wang", affiliation: "OxAI Treasurer" },
            { name: "Omer Bilgin", affiliation: "OxAI Safety Team Member" },
            { name: "Narankar Sehmi", affiliation: "OxAI Safety Team Lead" },
            { name: "Xavier Laurent", affiliation: "Lead Training Coordinator, Oxford AI and ML Competency Centre" },
            { name: "Mia Wu", affiliation: "OxAI Sponsor Team Lead" },
            { name: "David Xu", affiliation: "OxAI Event Team Lead" },
            { name: "Katie Yurechko", affiliation: "OxAI Education Team Member" },
            { name: "Sewook Oh", affiliation: "Co-founder of OxAI" },
          ]
        },
        {
          id: "panel3",
          title: "AI Governance & Responsible Innovation",
          time: "2:00 PM - 2:50 PM",
          venue: "Teaching Room 277",
          moderator: "Aurora Kapo",
          organizers: ["Ziji Chen", "Aurora Kapo"],
          panelists: [
            { name: "Rui Zhao", affiliation: "Postdoc Dept of Computer Science" },
            { name: "Rebecca Gorman", affiliation: "CEO of AlignedAI" },
            { name: "Ziji Chen", affiliation: "DPhil Dept of Engineering Science" },
            { name: "Tim J. Baek", affiliation: "OpenWebUI" }
          ]
        }
      ],
      
      sessions: [
        {
          id: "sessionA",
          title: "Technical ML Research",
          time: "3:00 PM - 4:20 PM",
          venue: "Lecture Theatre B (Department of Computer Science)",
          presentations: [
            { 
              presenter: "Niklas Nertinger", 
              title: "Decoding In-Context Learning: The Role of Gradient Descent in Transformers"
            },
            { 
              presenter: "Lachin Naghashyar", 
              title: "Contrastive Learning for Variational Graph Autoencoders"
            },
            { 
              presenter: "Artem Grigor", 
              title: "Ensuring It's Yours AI: Practical Authentication Techniques for ML Models"
            },
            
            { 
              presenter: "Chenghao Xue", 
              title: "AutoGeTS: Automated Generation of Text Synthetics for Improving Text Classification"
            }
          ]
        },
        {
          id: "sessionB",
          title: "AI Ethics and Philosophy",
          time: "3:00 PM - 4:20 PM",
          venue: "Lecture Theatre A (Department of Computer Science)",
          presentations: [
            { 
              presenter: "Thomas Dorsey", 
              title: "A.I. Alignment: What Matters?"
            },
           
            { 
              presenter: "Jihai Li", 
              title: "Work in the Time of AI: From Human Resources to AI Resources"
            },
            { 
              presenter: "Chimin Oh", 
              title: "When Human Theories and Knowledge Are Dismantled by AI: A Decade After AlphaGo's Emergence in the Posthuman Go Community"
            }
          ]
        },
        {
          id: "sessionC",
          title: "AI Applications and Social Impact",
          time: "3:00 PM - 4:20 PM",
          venue: "Teaching Room 277 (OeRC)",
          presentations: [
            { 
              presenter: "Pranava Sai Chintala", 
              title: "ColorPatt.AI : AI-Powered Smart Vision AR Glasses for Color Accessibility"
            },
            { 
              presenter: "Victor Putz", 
              title: "Stirring the Tar Pit: are AI Assistants the Silver Bullet for the Software Development Process?"
            },
            { 
              presenter: "Taiwo Aladekoye", 
              title: "Unlocking SME Growth in Africa with AI: A Paradigm Shift in Business Intelligence"
            },
            
          ]
        }
      ],
      
      workshops: [
        {
          id: "workshop1",
          title: "Cross-Disciplinary Dialogue",
          subtitle: "Who should be held responsible when autonomous AI systems cause harm?",
          time: "5:00 PM - 6:30 PM",
          duration: "1.5 hours",
          moderator: "Omer Bilgin",
          requirements: "This is a cross-disciplinary collective dialogue workshop",
          abstract: "Advanced AI systems that demonstrate high levels of functional or operational autonomy (i.e. ones that operate within their environments and/or satisfy their assigned goals without any active human intervention) present unique challenges for assigning responsibility when they cause harm or injury. Since these systems lack full moral agency and thus the capacity to be blamed or praised for their actions, it seems inappropriate to hold them liable for their own harmful behaviours, even if they are causally responsible for them. However, the lack of explicability, foreseeability and direct human control over the post-deployment behaviours of such highly agentic systems also makes it difficult to identify specific individuals or entities as being deserving of full legal and moral blame for the harms they may cause. This creates what is often called 'responsibility or liability gaps'. Given that, without a coherent liability regime, people who suffer harms from AI technologies will struggle to receive adequate compensation and redress, how could we meaningfully deal with the complexities of appropriate responsibility attribution when autonomous AI systems cause damage or harm? This cross-disciplinary workshop will convene students of diverse backgrounds, ages, and AI knowledge levels to collaboratively explore this challenge and identify practical solutions. The session will begin with a concise introduction to responsibility gaps, followed by facilitated small-group discussions where all participants can contribute their perspectives. The workshop will culminate in drafting group recommendations that synthesise the collective insights of all attendees."
        },
        {
          id: "workshop2",
          title: "Unlocking Generative AI in Workflows",
          subtitle: "Principles and Challenges",
          time: "5:00 PM - 6:00 PM",
          duration: "1 hour",
          moderator: "Leyla Sokullu",
          requirements: "No specific requirements",
          abstract: "Advanced AI systems that demonstrate high levels of functional or operational autonomy (i.e. ones that operate within their environments and/or satisfy their assigned goals without any active human intervention) present unique challenges for assigning responsibility when they cause harm or injury. Since these systems lack full moral agency and thus the capacity to be blamed or praised for their actions, it seems inappropriate to hold them liable for their own harmful behaviours, even if they are cWorkshop Description In this interactive workshop, we will explore the transformative potential of generative AI in enterprise workflows, with a focus on the recent advancements and challenges faced in large-enterprises. Participants will engage in discussions around the principles of AI integration, the evaluation of current adoption strategies, and the identification of key risks and opportunities. Through collaborative exercises, we will review case studies linked to OpenAI, Microsoft AI and enterprises that are driving AI adoption. This workshop aims to empower PhD candidates, computer scientists, data scientists, and business students with the knowledge and frameworks necessary to drive AI initiatives, or understand the challenges faced by large-scale enterprises. ",
          info: "Presenter background: As the Director of Operational Effectiveness at Elsevier's Global Medical Education division, I am responsible for driving AI adoption across a 2,000-person workforce, providing strategic leadership and enhancing operational efficiency. In 2024, I completed the 3-month course specialising on AI Safety, organised by California based Center for AI Safety, concentrating on risk management frameworks. I have a Master of Science in Sociology from the University of Oxford, Green Templeton College and a Bachelor of Arts in Psychology and Economics from Emory University, Atlanta, USA."
        },
        {
          id: "workshop3",
          title: "Uncovering Hidden Opportunities",
          subtitle: "Untapped Frontiers in Building with Large Language Models",
          time: "6:00 PM - 7:00 PM",
          duration: "1 hour",
          moderator: "Dominik Lukes",
          requirements: "Interest in LLM applications",
          abstract: "This workshop will explore overlooked capabilities and innovative applications when building with Large Language Models. Following a presentation on the current evaluation crisis in LLMs, the session will delve into unexplored opportunities in leveraging multilingual capabilities, developing novel evaluation methodologies, and creating more transparent LLM-based tools. Designed for anyone eager to contribute meaningfully to the field, the workshop focuses on identifying original approaches and applications that mainstream LLM development has neglected.",
         
          keyPoints: [
            "What multilingual and multicultural capabilities remain underutilized in current LLM applications?",
            "How can we approach the evaluation crisis in LLMs with innovative assessment frameworks?",
            "Which aspects of model explainability show promise but lack sufficient attention?",
            "What underexplored opportunities exist for creating tools and applications powered by Large Language Models?",
            "Which emerging use cases could benefit from LLM integration but haven't received adequate attention?"
          ]         
        },
        {
          id: "workshop4",
          title: "Scaling Up and Scaling Out",
          time: "5:00 PM - 7:00 PM",
          duration: "2 hours",
          moderator: "Victor Putz",
          requirements: "Laptop capable of a net connection",
          abstract: "A core task of training any machine learning model is data, and lots of it—but data transformation often takes a back seat to the machinery of training.  Two excellent tools have come to the fore recently and become the backbone of our data pipeline at Quantum Signals: duckdb, which allows many data sources to be queried with SQL as if they are databases, and Ray Data, the data processing branch of the excellent machine learning infrastructure library Ray.  We'll run through the basics of both and then briefly explore how DeepSeek joined them together for their recent library, smallpond."
        }
      ],
      
      socialMedia: {
        twitter: "OxfordAI",
        linkedin: "oxai",
        instagram: "oxai.society"
      },
      
      contactEmail: "info@oxai.org"
  };
  
  export default conferenceData;