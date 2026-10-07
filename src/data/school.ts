import classroomPhoto from "@/assets/apg-classroom.jpg";
import classroomSrcSet from "@/assets/apg-classroom.jpg?w=480;768;1024;1536&as=srcset";
import campusPhoto from "@/assets/apg-campus.jpg";
import campusSrcSet from "@/assets/apg-campus.jpg?w=480;768;1024;1536&as=srcset";
import culturePhoto from "@/assets/apg-culture.jpg";
import cultureSrcSet from "@/assets/apg-culture.jpg?w=480;768;1024;1536&as=srcset";
import principalPhoto from "@/assets/apg-principal.jpg";
import principalSrcSet from "@/assets/apg-principal.jpg?w=480;768;1024;1536&as=srcset";
import sportsPhoto from "@/assets/apg-sports.jpg";
import sportsSrcSet from "@/assets/apg-sports.jpg?w=480;768;1024;1536&as=srcset";
import teacherOnePhoto from "@/assets/apg-teacher-one.jpg";
import teacherOneSrcSet from "@/assets/apg-teacher-one.jpg?w=480;768;1024;1536&as=srcset";
import teacherTwoPhoto from "@/assets/apg-teacher-two.jpg";
import teacherTwoSrcSet from "@/assets/apg-teacher-two.jpg?w=480;768;1024;1536&as=srcset";

export const schoolName = "APG Matriculation Higher Secondary School";

export const schoolContact = {
  address: "FCI Road, Ganapathy, Coimbatore, Tamil Nadu",
  phone: "+91 98765 43210",
  email: "hello@apg-school.example",
  hours: "Monday–Saturday, 9:00 AM–4:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=FCI%20Road%2C%20Ganapathy%2C%20Coimbatore%2C%20Tamil%20Nadu&z=15&output=embed",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=FCI%20Road%2C%20Ganapathy%2C%20Coimbatore%2C%20Tamil%20Nadu",
} as const;

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Student Life", to: "/student-life" },
  { label: "Facilities", to: "/facilities" },
  { label: "Achievements", to: "/achievements" },
  { label: "Gallery", to: "/gallery" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
] as const;

export const photographs = {
  classroom: classroomPhoto,
  campus: campusPhoto,
  culture: culturePhoto,
  sports: sportsPhoto,
};

export const schoolLeaders = [
  { name: "Ananya Raman", role: "Principal", description: "A fictional school leader profile.", image: principalPhoto, srcSet: principalSrcSet },
  { name: "Vikram Subramanian", role: "School leadership", description: "A fictional educator profile.", image: teacherOnePhoto, srcSet: teacherOneSrcSet },
  { name: "Meera Krishnan", role: "Teaching faculty", description: "A fictional teacher profile.", image: teacherTwoPhoto, srcSet: teacherTwoSrcSet },
];

export const learningStages = [
  { name: "Primary Education", range: "Early foundations", icon: "Sprout", description: "Curiosity, confidence, and essential skills take root through supported classroom learning." },
  { name: "Middle School", range: "Growing understanding", icon: "BookOpen", description: "Students build independence and deepen their understanding across learning areas." },
  { name: "Secondary Education", range: "Steady progress", icon: "Compass", description: "Subject knowledge, academic support, and examination preparation move forward together." },
  { name: "Higher Secondary", range: "Preparing for what comes next", icon: "GraduationCap", description: "Focused study and guidance help students consider the opportunities ahead." },
] as const;

export const schoolValues = [
  { name: "Learning", description: "Encouraging thoughtful questions, steady effort, and a lifelong love of learning.", icon: "BookOpen" },
  { name: "Character", description: "Growing in responsibility, respect, discipline, and consideration for others.", icon: "Heart" },
  { name: "Confidence", description: "Helping every student discover their voice and take their next step with confidence.", icon: "Sparkles" },
];

export const schoolFacilities = [
  { name: "School campus", image: campusPhoto, srcSet: campusSrcSet, alt: "A welcoming campus walkway with students" },
  { name: "Learning spaces", image: classroomPhoto, srcSet: classroomSrcSet, alt: "A teacher and students learning together" },
  { name: "Movement & play", image: sportsPhoto, srcSet: sportsSrcSet, alt: "Students enjoying a game together" },
  { name: "Arts & culture", image: culturePhoto, srcSet: cultureSrcSet, alt: "Students taking part in a cultural performance" },
];

export const facilityLabels = [
  "Smart classrooms", "Science laboratories", "Computer learning", "Library", "Sports facilities",
  "Playground", "Activity areas", "Transportation", "Campus environment",
];

export const activities = [
  "Sports & games", "Cultural events", "Clubs & competitions", "Arts & music", "Field trips",
  "Educational activities", "Technology activities", "School celebrations", "Student collaboration",
];

export const achievementCategories = [
  { name: "Academic achievements", icon: "BookOpen" },
  { name: "Sports achievements", icon: "Trophy" },
  { name: "Cultural achievements", icon: "Sparkles" },
  { name: "Competition achievements", icon: "Award" },
  { name: "Student accomplishments", icon: "Star" },
];

export const galleryPhotos = [
  { title: "Learning together", category: "Academics", image: classroomPhoto, srcSet: classroomSrcSet, alt: "A teacher guiding students in a classroom" },
  { title: "Campus life", category: "Campus", image: campusPhoto, srcSet: campusSrcSet, alt: "Students walking along a green campus" },
  { title: "On the field", category: "Sports", image: sportsPhoto, srcSet: sportsSrcSet, alt: "Students playing football together" },
  { title: "Celebrating culture", category: "Events", image: culturePhoto, srcSet: cultureSrcSet, alt: "Students performing at a school celebration" },
  { title: "A thoughtful classroom", category: "Academics", image: classroomPhoto, srcSet: classroomSrcSet, alt: "Students sharing a learning moment with their teacher" },
  { title: "A place to grow", category: "Campus", image: campusPhoto, srcSet: campusSrcSet, alt: "A tree-lined school courtyard" },
  { title: "Playing as a team", category: "Activities", image: sportsPhoto, srcSet: sportsSrcSet, alt: "Students taking part in a team game" },
  { title: "Game day", category: "Sports", image: sportsPhoto, srcSet: sportsSrcSet, alt: "Students enjoying a school sports activity" },
  { title: "Performing together", category: "Events", image: culturePhoto, srcSet: cultureSrcSet, alt: "Students celebrating an arts performance" },
  { title: "Making discoveries", category: "Activities", image: classroomPhoto, srcSet: classroomSrcSet, alt: "Students working together at their desks" },
  { title: "A school day", category: "Campus", image: campusPhoto, srcSet: campusSrcSet, alt: "A sunny school campus entrance" },
];

export const newsItems = [
  { title: "School announcements", category: "Notice board", image: campusPhoto, description: "Important school notices will be shared here by the school community.", date: "Add date" },
  { title: "Upcoming events", category: "Events", image: culturePhoto, description: "Look out for school events, celebrations, and opportunities to take part.", date: "Add date" },
  { title: "Learning & competitions", category: "School life", image: classroomPhoto, description: "Updates about learning, workshops, competitions, and student activities.", date: "Add date" },
];

export const faqItems = [
  { question: "Which classes can I enquire about?", answer: "Use the enquiry form to tell the school which class you are interested in. Please confirm current openings directly with the school." },
  { question: "What documents are required?", answer: "Required documents can depend on the class and the student's circumstances. The school will share its current document list when you enquire." },
  { question: "When do admissions open?", answer: "Admission dates have not been provided for this website. Contact the school to confirm the current application period." },
  { question: "How can I learn about eligibility?", answer: "Eligibility and any class-specific requirements should be confirmed with the admissions team." },
];