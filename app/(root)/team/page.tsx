import TeamMember from "@/components/cards/TeamMember";

export default function page() {
  return (
    <section className="flex flex-row flex-wrap items-center justify-center p-10 lg:px-20 lg:py-15 text-(--oxford-blue) gap-6">
      <div className="flex flex-col mb-6 justify-start w-full">
        <h1 className="text-4xl font-bold mb-4 text-(--chambray) text-shadow-md">Our Team</h1>
        <h3 className="text-lg mb-4">Meet the passionate individuals behind Pixel Pulse. Our diverse team of students and young professionals brings together expertise in STEM research, journalism, design, and technology to create engaging and informative content.</h3>
      </div>

      {/* SOHA */}
      <TeamMember image="https://dzoxjkfkahmyylvgiibw.supabase.co/storage/v1/object/public/team-images/1744584649464-IMG_3289.webp" name="Soha" role="Founder & President" bio="Hi there! I'm Soha, the founder and president of Pixel Pulse. I'm currently pursuing STEM and planning to major in either computer science or data science (still deciding!) at university. I truly hope Pixel Pulse grows into a valuable platform for both STEM students and beyond! I love reading and writing. :)" />
      
      {/* ROLLEEN */}
      <TeamMember image="https://cdn.glitch.global/e935e5cb-fc33-4f8d-a0d2-76cc83905dc9/rolleen.jpg?v=1739816415849" name="Rolleen" role="Vice President" bio="I'm Rolleen (pronounced row-lean)! I'm a high school student with a passion for chemistry, looking to pursue Chemical Engineering. I'm a big music nerd but I'm also a debater outside of Pixel Pulse! Glad to be part of this team as the research lead for Chemistry and Physics." />
      
      {/* DARREN */}
      <TeamMember image="https://cdn.glitch.global/e935e5cb-fc33-4f8d-a0d2-76cc83905dc9/darren.png?v=1739814810086" name="Darren" role="Graphic Designer + Admin Secretary" bio="Hi, I'm Darren, a high school student with experience in coding, web design, and graphic design. I'm passionate about technology and plan to pursue a computer science or software engineering career. Outside of tech, I enjoy both playing and watching sports, especially soccer and tennis." />
      
    </section>
  )
}
