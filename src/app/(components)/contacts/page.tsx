import ContactItem from "./contact-item";

export default function Contacts() {
  return (
    <div className="text-center">
      <div className="text-3xl">Entre em contato comigo:</div>
      <br />
      <div className="flex flex-col md:flex-row justify-evenly gap-6">
        <ContactItem
          src="/logos/gmail.svg"
          alt="Email"
          href="mailto:brunonoatto@gmail.com"
          title="brunonoatto@gmail.com"
        />
        <ContactItem
          src="/logos/linkedin.svg"
          alt="Linkedin"
          href="https://www.linkedin.com/in/bruno-iserhardt-17952822"
        />
        <ContactItem
          src="/logos/github.svg"
          alt="GitHub"
          href="https://github.com/brunonoatto"
        />
      </div>
    </div>
  );
}
