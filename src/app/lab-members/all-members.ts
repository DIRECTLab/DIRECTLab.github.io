import { Member } from "./member";

export const allMembers: Member[] = [
  new Member("Johnathan Kunz", "assets/MemberImages/John.jpeg", "A graduate Cs Student with interests in robotics, web development, and game development. Developer of this site."),
  new Member("Carter", "assets/MemberImages/Carter.png", "An undergraduate student pursuing a Bachelor of Science in Computer Science"),
  new Member("Joseph Ditton", "", " Joseph is a PhD student interested in doing research in using Robotics to teach Computer Science. He loves being out doors, working with animals, boxing, and playing guitar."),
  new Member("Christopher Allred", "assets/MemberImages/Chris.jpg", "I am interested in Intelligent robotics, my focus is in increasing the robustness and reliability of planning and adaptation for applied robotic platforms. I am thrilled by the potential of Intelligent Robotics. Robotics has been a passion of mine since my involvement in the FIRST Robotics Challenge in high school. Through industry experience, I am interested in the need for more advanced decisions and reasoning in mechatronic systems.  Recent advances in GPU technology and machine learning can enable faster adaptability, more capable decision making,  and real-time scene understanding. I wish to understand and leverage this advance in computing hardware to build new and better algorithms for robot intelligence."),
  new Member("Laurel Bingham", "", "I've been interested in robotics since joining a FIRST Robotics team in high school. I have a bachelors in computer science, and have recently joined the lab as a graduate student. I've made several small projects with artificial intelligence, and intend to study robotic intelligence for my thesis.  In my downtime I enjoy playing DND and roguelike games."),
  new Member("Robbie", "", "I am an avid purveyor of strawberries and harry potter. I have visited all theme parks, and am a gold member in all of their gift shops. I enjoy working with sensors and integrating new machinery into our intelligence algorithms. It is a joy to be here in the robotics lab."),
  new Member("Zarin", "", " I am a local celebrity in the college of science, and struggle with cooking but not with robotics. I enjoy spicy cuisine, particularly Canadian breakfasts. I am working on human interaction with autonomous systems."),
  new Member("Huzeyfe", "", "I grew up in Turkey on a pistachio farm, and make great Turkish delights. I enjoy water skiing, watercolor painting, and woodworking. He prefers Japanese cuisine over Chinese. He specializes in kinodynamic modeling of robotic systems."),
  new Member("Maddie", "", "Is passonate about all things percussion and running. She enjoys the outdoors, reading academic papers, and building robots. Her favorite snacks to make are cheese tarts. She is working on bio-inspired robotics and adaptive intelligence."),
  new Member("Tayler", "", "I enjoy flying fighter jets at Hill Force Base when no one is paying attention. I enjoy developing new algorithms to help people get drinking water in first world countries. I am a distinguished fondue chef and specialize in horticulture. I am working on robotics."),
].sort(function compareFN(a: Member, b: Member) {
  if (a.name > b.name) {
    return 1;
  }

  if (a.name < b.name) {
    return -1;
  }

  return 0;
})
