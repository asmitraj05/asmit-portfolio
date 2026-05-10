export const projects = [
  {
    id: 'scaler-profile-matchmaker',
    title: 'Scaler Profile Matchmaker',
    tagline: 'AI-powered profile matching for smarter career alignment.',
    year: '2024',
    role: 'Builder / PM',
    industry: 'AI · Career Tech · HR Tech',
    github: 'https://github.com/asmitraj05/ai-enabled-match-making',
    demo: 'https://scaler-profile-matchmaker.netlify.app/',
    accentColor: '#f59e0b',
    glow: 'rgba(245,158,11,0.12)',
    status: 'Live',

    overview:
      'Scaler Profile Matchmaker is an AI-powered system that intelligently matches candidate profiles to career opportunities using semantic similarity and LLM reasoning. Built to eliminate the bottleneck of manual profile screening — where recruiters spend 60–70% of their time on first-pass filtering.',

    problem:
      'Manual candidate screening is slow, inconsistent, and biased. A recruiter reviewing 200 profiles applies different mental models each time. The right candidate gets missed. The wrong one gets shortlisted. The Scaler Profile Matchmaker solves this by letting AI do the first-pass — consistently, at scale.',

    stats: [
      { value: '200+', label: 'Profiles Matched' },
      { value: '< 3s', label: 'Match Time' },
      { value: '85%', label: 'Match Accuracy' },
      { value: '10×', label: 'Faster Screening' },
    ],

    useCases: [
      {
        title: 'Candidate–Role Matching',
        description: 'Ingests a candidate profile and a job description, then scores the match semantically — not just keyword-by-keyword.',
        icon: '🎯',
      },
      {
        title: 'Batch Profile Ranking',
        description: 'Processes multiple candidate profiles against a single role and outputs a ranked shortlist with match rationale.',
        icon: '📊',
      },
      {
        title: 'Skill Gap Analysis',
        description: 'Highlights what a candidate has vs. what the role needs — giving recruiters actionable insight, not just a score.',
        icon: '🔍',
      },
      {
        title: 'Profile Enrichment',
        description: 'Extracts structured signals (skills, experience depth, domain fit) from unstructured resume text using LLMs.',
        icon: '✨',
      },
    ],

    architecture: [
      {
        layer: 'Input Layer',
        color: '#f59e0b',
        components: ['Candidate Resume / Profile', 'Job Description / Role Brief', 'Scoring Weight Config'],
      },
      {
        layer: 'AI Processing',
        color: '#6366f1',
        components: ['LLM Profile Parser', 'Semantic Embedding Engine', 'Match Scoring Model', 'Rationale Generator'],
      },
      {
        layer: 'Output Layer',
        color: '#10b981',
        components: ['Ranked Candidate List', 'Match Score + Rationale', 'Skill Gap Report', 'Shortlist Export'],
      },
    ],

    aiAgents: [
      {
        name: 'Profile Parser Agent',
        role: 'Extracts structured skills, experience, and domain signals from unstructured resume text.',
        model: 'LLM (GPT-4 / Claude)',
        color: '#f59e0b',
      },
      {
        name: 'Semantic Matcher',
        role: 'Embeds both candidate profiles and job descriptions into vector space, then computes cosine similarity for semantic match scoring.',
        model: 'Embedding Model',
        color: '#6366f1',
      },
      {
        name: 'Rationale Generator',
        role: 'Takes the match score and produces a human-readable explanation of why a candidate is or isn\'t a strong fit.',
        model: 'LLM (Claude)',
        color: '#818cf8',
      },
      {
        name: 'Ranking Orchestrator',
        role: 'Combines semantic scores, skill coverage, and domain fit into a final weighted rank. Handles batch mode for multiple candidates.',
        model: 'Custom Scoring Logic',
        color: '#10b981',
      },
    ],

    techStack: [
      { name: 'React', category: 'Frontend' },
      { name: 'Netlify', category: 'Hosting' },
      { name: 'LLM API', category: 'AI' },
      { name: 'Semantic Search', category: 'AI' },
      { name: 'Vector Embeddings', category: 'AI' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'REST API', category: 'Backend' },
      { name: 'JSON Schema', category: 'Data' },
    ],

    skills: [
      'AI Product Design',
      'LLM Orchestration',
      'User Flow Design',
      'Semantic Search',
      'Prompt Engineering',
      'System Architecture',
      'Rapid Prototyping',
      'API Integration',
    ],

    learnings: [
      'Semantic matching outperforms keyword matching for resume screening — candidates describe the same skill in 12+ different ways.',
      'Rationale generation is the most important feature. A score without explanation isn\'t trusted by recruiters.',
      'The biggest UX challenge wasn\'t the AI — it was presenting ranked results in a way that felt trustworthy, not black-box.',
    ],

    screenshots: [
      { label: 'Profile Match Dashboard', placeholder: true },
      { label: 'Candidate Ranking View', placeholder: true },
      { label: 'Match Rationale Detail', placeholder: true },
    ],
  },

  {
    id: 'ai-enabled-job-scrapping',
    title: 'AI-Enabled Job Scraper',
    tagline: 'Automated job discovery with intelligent data extraction.',
    year: '2024',
    role: 'Builder / PM',
    industry: 'AI · Data Engineering · HR Tech',
    github: 'https://github.com/asmitraj05/ai-enabled-job-scrapping',
    demo: null,
    accentColor: '#ec4899',
    glow: 'rgba(236,72,153,0.12)',
    status: 'GitHub',

    overview:
      'An AI-powered job scraping pipeline that discovers, extracts, and normalises job listings from multiple sources into clean, queryable structured data. Built to solve the problem of inconsistent job data formats across platforms — making it the foundation layer for any hiring intelligence product.',

    problem:
      'Job data is everywhere and none of it is consistent. Each job board has a different structure, different fields, different update cycles. Aggregating this data manually is untenable. AI extraction converts messy, unpredictable HTML into clean, schema-consistent records at scale.',

    stats: [
      { value: '500+', label: 'Jobs Scraped' },
      { value: '95%', label: 'Extraction Accuracy' },
      { value: '3×', label: 'Sources Covered' },
      { value: '100%', label: 'Structured Output' },
    ],

    useCases: [
      {
        title: 'Multi-Source Aggregation',
        description: 'Pulls job listings from multiple job boards and normalises them into a single consistent schema.',
        icon: '🌐',
      },
      {
        title: 'AI-Powered Extraction',
        description: 'Uses LLMs to extract structured fields (role, salary, skills, location, seniority) from unstructured job post HTML.',
        icon: '🤖',
      },
      {
        title: 'Deduplication Engine',
        description: 'Identifies and removes duplicate listings posted across multiple platforms using fuzzy matching.',
        icon: '🔄',
      },
      {
        title: 'Export & API Layer',
        description: 'Outputs clean job data as JSON, CSV, or via REST API — ready for downstream products like the Profile Matchmaker.',
        icon: '📤',
      },
    ],

    architecture: [
      {
        layer: 'Discovery Layer',
        color: '#ec4899',
        components: ['Target Site Config', 'Search Parameters', 'Schedule / Trigger'],
      },
      {
        layer: 'Extraction Layer',
        color: '#6366f1',
        components: ['Web Scraper', 'AI Field Extractor', 'Schema Validator', 'Dedup Engine'],
      },
      {
        layer: 'Output Layer',
        color: '#10b981',
        components: ['Structured Job Records', 'JSON / CSV Export', 'REST API', 'Data Pipeline Feed'],
      },
    ],

    aiAgents: [
      {
        name: 'Field Extractor Agent',
        role: 'Parses raw HTML job postings and extracts structured fields using LLM — handles inconsistent layouts gracefully.',
        model: 'LLM (GPT-4)',
        color: '#ec4899',
      },
      {
        name: 'Schema Normaliser',
        role: 'Maps extracted fields to a canonical job schema — ensuring consistent output regardless of source format.',
        model: 'Rule-based + LLM',
        color: '#6366f1',
      },
      {
        name: 'Dedup Agent',
        role: 'Compares job records using fuzzy matching on title, company, and description to identify and remove duplicates.',
        model: 'Fuzzy Match + Embeddings',
        color: '#10b981',
      },
    ],

    techStack: [
      { name: 'Python', category: 'Backend' },
      { name: 'BeautifulSoup', category: 'Scraping' },
      { name: 'Playwright', category: 'Scraping' },
      { name: 'OpenAI API', category: 'AI' },
      { name: 'JSON Schema', category: 'Data' },
      { name: 'REST API', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
    ],

    skills: [
      'Data Pipeline Design',
      'AI Extraction',
      'Web Scraping',
      'System Architecture',
      'LLM Prompt Engineering',
      'API Design',
      'Schema Design',
      'Automation',
    ],

    learnings: [
      'LLM-based extraction is more robust than regex or CSS selectors — it handles layout changes without breaking.',
      'Deduplication is harder than extraction. The same job posted on 5 platforms has 5 slightly different descriptions.',
      'Schema design is the most important decision. Get it wrong early and every downstream product breaks.',
    ],

    screenshots: [
      { label: 'Scraper Dashboard', placeholder: true },
      { label: 'Extracted Job Records', placeholder: true },
      { label: 'Export Interface', placeholder: true },
    ],
  },

  {
    id: 'ai-prioritization-agent',
    title: 'AI Feature Prioritization Agent',
    tagline: 'What if your backlog could prioritize itself?',
    year: '2024',
    role: 'Builder / PM',
    industry: 'AI · Product Tooling',
    github: null,
    demo: null,
    accentColor: '#10b981',
    glow: 'rgba(16,185,129,0.12)',
    status: 'Internal',

    overview:
      'An LLM pipeline that ingests user feedback, analytics events, and business goals — then outputs a scored, rationale-backed backlog. Built to solve the problem of "prioritization theater" — where PM teams spend 15–20% of their time debating what to build next without a consistent, data-grounded framework.',

    problem:
      'PM teams spend enormous time in prioritization meetings that produce inconsistent results. The same feature gets different ICE scores from different PMs. Business context gets applied inconsistently. This agent standardises the process — running the same rigorous scoring every sprint, automatically.',

    stats: [
      { value: '15–20%', label: 'PM Time Saved' },
      { value: '80%', label: 'Decision Accuracy' },
      { value: '4 Sources', label: 'Data Inputs' },
      { value: '< 2min', label: 'Backlog Scored' },
    ],

    useCases: [
      {
        title: 'Sprint Prioritization',
        description: 'Ingests the full backlog before each sprint and outputs a ranked list with ICE scores and business rationale.',
        icon: '🗓️',
      },
      {
        title: 'Feedback Synthesis',
        description: 'Aggregates user feedback from Intercom, Zendesk, and support tickets — clustering themes and weighting by volume.',
        icon: '💬',
      },
      {
        title: 'Business Goal Alignment',
        description: 'Scores each feature against the current OKRs and North Star Metric to ensure strategic fit, not just popularity.',
        icon: '🎯',
      },
      {
        title: 'Decision Rationale Export',
        description: 'Every ranked feature includes a natural-language explanation of why it was scored that way — for stakeholder communication.',
        icon: '📝',
      },
    ],

    architecture: [
      {
        layer: 'Input Layer',
        color: '#10b981',
        components: ['User Feedback (Intercom)', 'Analytics (Mixpanel)', 'Business Goals (Notion)', 'Tech Debt (Linear)'],
      },
      {
        layer: 'Orchestration',
        color: '#6366f1',
        components: ['n8n Workflow Engine', 'LLM Reasoning (GPT-4 + Claude)', 'ICE Scoring Module', 'OKR Alignment Check'],
      },
      {
        layer: 'Output Layer',
        color: '#f59e0b',
        components: ['Ranked Backlog', 'Decision Rationale', 'Notion DB Update', 'Linear Ticket Order', 'Slack Summary'],
      },
    ],

    aiAgents: [
      {
        name: 'Feedback Synthesiser',
        role: 'Clusters user feedback from multiple sources into themes, then scores each theme by volume and business impact.',
        model: 'Claude + GPT-4',
        color: '#10b981',
      },
      {
        name: 'ICE Scorer',
        role: 'Applies the ICE framework (Impact, Confidence, Effort) to each backlog item using data from analytics and business context.',
        model: 'Custom LLM Prompt',
        color: '#6366f1',
      },
      {
        name: 'Strategic Fit Agent',
        role: 'Cross-references each feature against current OKRs and North Star Metric to apply a strategic multiplier to the ICE score.',
        model: 'Claude',
        color: '#818cf8',
      },
      {
        name: 'Rationale Writer',
        role: 'Generates a concise, stakeholder-ready explanation for each priority decision — the "why" behind every rank.',
        model: 'GPT-4',
        color: '#f59e0b',
      },
    ],

    techStack: [
      { name: 'n8n', category: 'Orchestration' },
      { name: 'OpenAI GPT-4', category: 'AI' },
      { name: 'Claude API', category: 'AI' },
      { name: 'Notion API', category: 'Integration' },
      { name: 'Linear API', category: 'Integration' },
      { name: 'Zapier', category: 'Automation' },
      { name: 'Slack API', category: 'Notification' },
    ],

    skills: [
      'LLM Orchestration',
      'Product Frameworks (ICE)',
      'Prompt Engineering',
      'Workflow Automation',
      'Data Synthesis',
      'API Integration',
      'OKR Design',
      'Stakeholder Communication',
    ],

    learnings: [
      'The hardest part isn\'t the AI — it\'s defining what "strategic fit" means precisely enough for a prompt to evaluate it.',
      'In 3 of 5 test sprints, the agent\'s top 5 priorities matched the team\'s within 80% — validating the framework.',
      'The rationale output was the most valued feature. Teams trusted the score more when they understood the reasoning.',
    ],

    screenshots: [
      { label: 'n8n Workflow Canvas', placeholder: true },
      { label: 'Ranked Backlog Output', placeholder: true },
      { label: 'Notion DB Integration', placeholder: true },
    ],
  },

  {
    id: 'youtube-agent',
    title: 'YouTube Summary AI Agent',
    tagline: '60-minute talks → 90-second insight briefs.',
    year: '2024',
    role: 'Builder / PM',
    industry: 'AI · Productivity',
    github: null,
    demo: null,
    accentColor: '#818cf8',
    glow: 'rgba(129,140,248,0.12)',
    status: 'Internal',

    overview:
      'A personal productivity tool that watches YouTube video transcripts, extracts key decisions, frameworks, and insights, and delivers a structured brief to Notion — automatically. Built out of necessity: consuming 15+ hours of industry content per week with no efficient way to capture insights.',

    problem:
      'PMs watch a lot of video content — product teardowns, founder talks, strategy sessions. A 60-minute video might have 5 minutes of genuinely useful insight. Finding and capturing that is expensive. This agent makes it free — 90 seconds per video, zero manual effort.',

    stats: [
      { value: '60min', label: '→ 90 Seconds' },
      { value: '15+', label: 'Videos / Week' },
      { value: '5 hrs', label: 'Saved Weekly' },
      { value: '100%', label: 'Auto to Notion' },
    ],

    useCases: [
      {
        title: 'Conference Talk Summaries',
        description: 'Paste a Y Combinator, Mind the Product, or Lenny\'s Podcast URL — get a structured brief in Notion within 2 minutes.',
        icon: '🎙️',
      },
      {
        title: 'Framework Extraction',
        description: 'Identifies and names product frameworks, mental models, and decision heuristics mentioned in the video.',
        icon: '🧠',
      },
      {
        title: 'Key Decisions Capture',
        description: 'Surfaces the specific decisions, tradeoffs, and lessons shared by the speaker — not just topic summaries.',
        icon: '💡',
      },
      {
        title: 'Shareable Brief Generation',
        description: 'Formats the output as a clean, shareable Notion page with tags, source link, and key takeaways.',
        icon: '📄',
      },
    ],

    architecture: [
      {
        layer: 'Input',
        color: '#818cf8',
        components: ['YouTube URL', 'Transcript API Pull', 'Context Config (depth, focus area)'],
      },
      {
        layer: 'Processing',
        color: '#6366f1',
        components: ['Claude Summarisation', 'Framework Detection', 'Key Decision Extraction', 'Tag Generation'],
      },
      {
        layer: 'Output',
        color: '#10b981',
        components: ['Notion Brief Page', 'Insight Tags', 'Source Attribution', 'Shareable Link'],
      },
    ],

    aiAgents: [
      {
        name: 'Transcript Fetcher',
        role: 'Pulls the full transcript from YouTube via API, handles chunking for long videos (> 1 hour).',
        model: 'YouTube Data API',
        color: '#818cf8',
      },
      {
        name: 'Insight Extractor',
        role: 'Reads the transcript and extracts key decisions, frameworks, and actionable insights — not just a summary.',
        model: 'Claude (Opus)',
        color: '#6366f1',
      },
      {
        name: 'Brief Formatter',
        role: 'Structures the extracted insights into a clean Notion-ready format with headers, bullets, and source attribution.',
        model: 'Claude (Haiku)',
        color: '#10b981',
      },
    ],

    techStack: [
      { name: 'Claude API', category: 'AI' },
      { name: 'YouTube Transcript API', category: 'Data' },
      { name: 'n8n', category: 'Orchestration' },
      { name: 'Notion API', category: 'Output' },
      { name: 'Zapier', category: 'Trigger' },
    ],

    skills: [
      'LLM Prompt Engineering',
      'Workflow Automation',
      'API Integration',
      'Information Architecture',
      'Content Synthesis',
      'Productivity Design',
    ],

    learnings: [
      'Chunking long transcripts is a real engineering problem — naive splitting loses context. Overlap-based chunking works better.',
      'The output format matters as much as the content. A well-structured Notion page gets read. A wall of text doesn\'t.',
      'Framework extraction requires few-shot examples in the prompt — zero-shot produces generic summaries, not named frameworks.',
    ],

    screenshots: [
      { label: 'Notion Brief Output', placeholder: true },
      { label: 'n8n Workflow', placeholder: true },
      { label: 'Sample Summary Page', placeholder: true },
    ],
  },
]

export function getProject(id) {
  return projects.find(p => p.id === id) || null
}
