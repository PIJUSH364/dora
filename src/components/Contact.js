import emailjs from "emailjs-com";
import { useContext, useState } from "react";
import { DoraContext } from "../Context";
import { cn } from "../util/cn";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";


const Contact = () => {
  const { user } = useContext(DoraContext);
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-info-cont">
          {/* Contact left */}
          <div className="contact-info">
            <div className="section_title wow fadeInUp">
              <h2>Let's Connect</h2>
            </div>
            <p className="wow fadeInUp">
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
            <ul className="contact-social wow fadeInUp">
              {user?.social_handles?.map((item) => (
                <li key={item._id}>
                  <a href={item.url}>
                    <img style={{ width: "1.3rem" }} src={item.image.url} alt="dora_img" />
                  </a>
                </li>
              ))}


            </ul>
          </div>
          {/* Contact right */}
          <form
            className="contact-form wow fadeInUp"
            onSubmit={(e) => onSubmit(e)}
          >
            <h3>Let's message me and mack something together</h3>

            <input
              type="text"
              className="input-control"
              placeholder="Your Name"
              name="name"
              onChange={(e) => onChange(e)}
              value={name}
            />
            <input
              type="text"
              className="input-control"
              placeholder="Your Email"
              name="email"
              onChange={(e) => onChange(e)}
              value={email}
            />

            <textarea
              className="input-control"
              placeholder="Message"
              defaultValue={""}
              name="message"
              onChange={(e) => onChange(e)}
              value={message}
            />
            <div
              className={error ? "empty_notice" : "returnmessage"}
              style={{ display: error == null ? "none" : "block" }}
            >
              <span>
                {error
                  ? "Please Fill Required Fields"
                  : "Your message has been received, We will contact you soon."}
              </span>
            </div>
            <div className="form-btn">

              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Send Message
              </button>
              {/* <button className="btn primary-btn"></button> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};