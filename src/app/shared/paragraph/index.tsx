type TParagraphProps = { title: React.ReactNode; paragraphs: string[] };

export default function Paragraph({ title, paragraphs }: TParagraphProps) {
  return (
    <div className="text-center">
      <div className="text-3xl">{title}</div>

      <div className="text-xl p-4 md:p-6">
        {paragraphs.map((text, index) => (
          <div key={index} className="text-justify indent-4 md:indent-12">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
