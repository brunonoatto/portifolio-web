import Image from "next/image";

import Paragraph from "./shared/paragraph";

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse justify-evenly md:flex-row text-center">
        <div className="p-4  md:text-left">
          <div className="text-7xl font-semibold">Olá!</div>
          <div className="text-6xl">
            Me chamo <span className="text-red-500">Bruno</span>.
          </div>
          <div className="text-xl">Desenvolvedor Front-end.</div>
        </div>
        <div className="">
          <Image
            className="rouded rounded-full m-auto "
            src="/images/selfie.jpg"
            width={150}
            height={125}
            alt="Selfie de Bruno Noatto Iserhardt"
          />
        </div>
      </div>

      <Paragraph
        title="Deixe-me apresentar:"
        paragraphs={[
          "Sou apaixonado por programação desde o primeiro dia de trabalho. Confesso que quando sai do ensino médio meu sonho era trabalhar com hardware (trocar memória, mexer na placa mãe e etc), porém o destino iria me levar para a programação, pois o primeiro curso que fiz era com ênfase em programação, grata surpresa.",
          "Desde então trabalho com software. Com muito prazer e vontade de realmente fazer a diferença por onde passo. Gosto e faço questão de trabalhar em equipe e de poder ajudar além da programação, dando sugestões de melhorias, tanto no design quanto em regras de negócio. Sempre pensando na qualidade final do sistema que será entregue e na satisfação do cliente.",
          "Este sou eu, participativo no contexto que estou inserido e prezando sempre pela qualidade máxima no que faço.",
        ]}
      />
    </>
  );
}
