export type Job = {
  id: string;
  title: string;
  company: string;
  companyInitial: string;
  companyColor: string;
  companyLogo?: string;
  verified: boolean;
  location: string;
  county: string;
  tags: string[];
  hoursMin: number;
  hoursMax: number;
  payMin: number;
  payMax: number;
  postedDaysAgo: number;
  matchPercent: number;
  sponsorship: boolean;
  shiftType: "Full Time" | "Part Time";
  description: string;
  requirements: string[];
  benefits: string[];
};

export const jobs: Job[] = [
  {
    id: "1",
    title: "Care Assistant",
    company: "Sunrise Care Home",
    companyInitial: "S",
    companyColor: "#FF6B9D",
    verified: true,
    location: "Chelmsford",
    county: "Essex",
    tags: ["Full Time", "Night Shift", "Sponsorship Available", "Immediate Start"],
    hoursMin: 36,
    hoursMax: 48,
    payMin: 12.5,
    payMax: 14.2,
    postedDaysAgo: 0,
    matchPercent: 92,
    sponsorship: true,
    shiftType: "Full Time",
    description:
      "Join our dedicated team at Sunrise Care Home, providing compassionate care to elderly residents. You'll support residents with daily living activities, personal care, and social engagement in a warm, friendly environment.",
    requirements: [
      "Previous care experience preferred but not essential",
      "Compassionate and patient nature",
      "Ability to work night shifts",
      "Right to work in the UK or eligible for sponsorship",
      "DBS check required (we can assist)",
    ],
    benefits: [
      "Competitive pay £12.50 – £14.20/hr",
      "Free DBS check",
      "Visa sponsorship available",
      "Paid training and induction",
      "Pension scheme",
      "Uniform provided",
      "Overtime opportunities",
    ],
  },
  {
    id: "2",
    title: "Senior Care Assistant",
    company: "Greenfield Care Group",
    companyInitial: "G",
    companyColor: "#2D7D32",
    verified: true,
    location: "Braintree",
    county: "Essex",
    tags: ["Full Time", "Days", "Sponsorship Available"],
    hoursMin: 40,
    hoursMax: 40,
    payMin: 13.5,
    payMax: 16.0,
    postedDaysAgo: 1,
    matchPercent: 88,
    sponsorship: true,
    shiftType: "Full Time",
    description:
      "Greenfield Care Group is seeking an experienced Senior Care Assistant to lead our day team. You'll mentor junior staff, coordinate care plans, and ensure the highest quality of care for our residents.",
    requirements: [
      "Minimum 2 years care experience",
      "NVQ Level 2/3 in Health & Social Care (desirable)",
      "Leadership or supervisory experience",
      "Strong communication skills",
      "Valid UK driving licence preferred",
    ],
    benefits: [
      "Pay up to £16.00/hr",
      "Leadership development programme",
      "Sponsorship available for eligible candidates",
      "28 days annual leave",
      "Employee assistance programme",
      "Free parking",
      "Career progression opportunities",
    ],
  },
  {
    id: "3",
    title: "Support Worker",
    company: "Haven Healthcare",
    companyInitial: "H",
    companyColor: "#7B1FA2",
    verified: true,
    location: "Witham",
    county: "Essex",
    tags: ["Part Time", "Evenings", "Flexible Hours"],
    hoursMin: 16,
    hoursMax: 24,
    payMin: 12.0,
    payMax: 13.5,
    postedDaysAgo: 2,
    matchPercent: 85,
    sponsorship: false,
    shiftType: "Part Time",
    description:
      "Haven Healthcare offers flexible support worker roles working with adults with learning disabilities and mental health needs. We value work-life balance and offer genuine flexibility around your schedule.",
    requirements: [
      "Experience supporting adults with learning disabilities or mental health needs",
      "Empathy and patience",
      "Flexible availability including evenings",
      "Good written and verbal communication",
      "DBS on the update service preferred",
    ],
    benefits: [
      "Flexible shift patterns",
      "£12.00 – £13.50/hr",
      "Mileage allowance",
      "Regular supervision and support",
      "Funded training",
      "Refer a friend bonus scheme",
    ],
  },
  {
    id: "4",
    title: "Registered Nurse (RGN)",
    company: "Meadowbrook Nursing",
    companyInitial: "M",
    companyColor: "#0277BD",
    verified: true,
    location: "Colchester",
    county: "Essex",
    tags: ["Full Time", "Mixed Shifts", "Sponsorship Available"],
    hoursMin: 36,
    hoursMax: 42,
    payMin: 19.5,
    payMax: 24.0,
    postedDaysAgo: 3,
    matchPercent: 81,
    sponsorship: true,
    shiftType: "Full Time",
    description:
      "Meadowbrook Nursing Home is looking for a compassionate Registered Nurse to join our clinical team. You'll oversee care delivery, manage medications, and support residents with complex needs in our 60-bed facility.",
    requirements: [
      "Active NMC registration",
      "Recent clinical nursing experience",
      "Experience in care home or community nursing preferred",
      "Strong clinical assessment skills",
      "Team leadership abilities",
    ],
    benefits: [
      "Up to £24.00/hr",
      "NMC PIN renewal reimbursement",
      "Relocation package for overseas nurses",
      "Tier 2 visa sponsorship",
      "Ongoing CPD support",
      "Paid breaks",
      "Long service awards",
    ],
  },
  {
    id: "5",
    title: "Activities Coordinator",
    company: "Rosewood Care",
    companyInitial: "R",
    companyColor: "#E65100",
    verified: false,
    location: "Southend-on-Sea",
    county: "Essex",
    tags: ["Full Time", "Weekdays"],
    hoursMin: 32,
    hoursMax: 37.5,
    payMin: 11.5,
    payMax: 13.0,
    postedDaysAgo: 5,
    matchPercent: 74,
    sponsorship: false,
    shiftType: "Full Time",
    description:
      "Rosewood Care is seeking a creative and energetic Activities Coordinator to design and deliver engaging programmes for our residents. You'll plan events, outings, and daily activities that improve wellbeing and quality of life.",
    requirements: [
      "Experience in activities or recreational therapy",
      "Creative and enthusiastic personality",
      "Ability to work with people living with dementia",
      "Good organisational skills",
      "DBS check required",
    ],
    benefits: [
      "£11.50 – £13.00/hr",
      "Activity budget provided",
      "Training in dementia care",
      "20 days holiday + bank holidays",
      "Staff appreciation events",
    ],
  },
  {
    id: "6",
    title: "Night Care Assistant",
    company: "Aurora Care Services",
    companyInitial: "A",
    companyColor: "#00695C",
    verified: true,
    location: "Basildon",
    county: "Essex",
    tags: ["Part Time", "Nights", "Sponsorship Available", "Weekend work"],
    hoursMin: 24,
    hoursMax: 36,
    payMin: 13.0,
    payMax: 15.5,
    postedDaysAgo: 0,
    matchPercent: 79,
    sponsorship: true,
    shiftType: "Part Time",
    description:
      "Aurora Care Services has immediate openings for Night Care Assistants. You'll provide overnight support and personal care to residents, ensuring their safety and comfort throughout the night.",
    requirements: [
      "Previous night shift experience preferred",
      "Calm and reassuring manner",
      "Ability to work independently",
      "Good observation skills",
      "Eligible for sponsorship or right to work in UK",
    ],
    benefits: [
      "Night shift premium pay",
      "Up to £15.50/hr",
      "Immediate start available",
      "Visa sponsorship available",
      "Paid annual leave",
      "Company pension",
    ],
  },
];

export function getJobById(id: string): Job | undefined {
  return jobs.find((j) => j.id === id);
}

export function formatPosted(daysAgo: number): string {
  if (daysAgo === 0) return "Posted today";
  if (daysAgo === 1) return "Posted yesterday";
  return `Posted ${daysAgo} days ago`;
}
