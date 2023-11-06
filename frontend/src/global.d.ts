export interface Root {
    navigationbar: Navigationbar
    readingdata: Readingdata
    aboutme: Aboutme
    homepage: Homepage
    reviews: Review[]
    faq: Faq
    footer: Footer
  }
  
  export interface Navigationbar {
    about: string
    readings: string
    contact: string
    book: string
  }
  
  export interface Readingdata {
    "love-reading": LoveReading
    "general-reading": GeneralReading
    "decision-making-reading": DecisionMakingReading
    "spiritual-guidance-reading": SpiritualGuidanceReading
  }
  
  export interface LoveReading {
    title: string
    price: string
    description: string
    reasonsToChoose: string[]
  }
  
  export interface GeneralReading {
    title: string
    price: string
    description: string
    reasonsToChoose: string[]
  }
  
  export interface DecisionMakingReading {
    title: string
    price: string
    description: string
    reasonsToChoose: string[]
  }
  
  export interface SpiritualGuidanceReading {
    title: string
    price: string
    description: string
    reasonsToChoose: string[]
  }
  
  export interface Aboutme {
    title: string
    "body-1-1": string
    "body-1-2": string
    "body-1-3": string
    "body-2": string
    "body-3": string
    action: string
  }
  
  export interface Homepage {
    "hero-title": string
    "hero-body": string
    "hero-action": string
    "reading-title": string
    "reading-1": string
    "reading-1-action": string
    "reading-2": string
    "reading-2-action": string
    "reading-3": string
    "reading-3-action": string
    "reading-4": string
    "reading-4-action": string
    "expertise-title": string
    "expertise-1": string
    "expertise-2": string
    "expertise-3": string
    "testimonal-title": string
    "testimonal-body": string
    "faq-title": string
  }
  
  export interface Review {
    reviewer: string
    image: string
    rating: number
    content: string
  }
  
  export interface Faq {
    questions: Question[]
  }
  
  export interface Question {
    q: string
    a: string
  }
  
  export interface Footer {
    title: string
    body: string
    "to-top": string
    rights: string
  }
  