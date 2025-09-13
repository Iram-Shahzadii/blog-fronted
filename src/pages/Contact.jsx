import { assets } from "../assets/assets";
const  Contact = () => {
  return (
    <div>
      <h1 className="text-center text-3xl uppercase font-bold my-8">
              Contact
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto my-6">
              Welcome to <span className="text-blue-600 font-semibold ">Iram Blog</span>,
              a project I built while exploring the MERN stack and modern web development.
              This platform reflects my passion for coding, problem-solving, and sharing
              knowledge with others. Through these blogs, I aim to highlight technology,
              learning experiences, and ideas that inspire growth for both beginners and
              professionals. Every section of this site is a step in my journey as a
              developer—and I hope it inspires you to keep building and learning too!
            </p>
            <div>
              <img src={assets.contact} alt="" />
            </div>
    </div>
  )
}
export default Contact;