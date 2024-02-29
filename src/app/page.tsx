import Image from "next/image";

export default function Home() {
  return (
    <main className="border border-red-600">
      <div className="flex flex-col-reverse justify-evenly md:flex-row text-center md:text-left p-4">
        <div className="p-4">
          <div>Olá!</div>
          <div>
            Me chamo <span className="text-red-500">Bruno</span>.
          </div>
          <div>Desenvolvedor Front-end.</div>
        </div>
        <div className="">
          <Image
            className="rouded rounded-full m-auto "
            src="/selfie.jpg"
            width={150}
            height={125}
            alt="Selfie de Bruno Noatto Iserhardt"
          />
        </div>
      </div>
      <div>
        <div>Deixe-me apresentar:</div>
        <div>
          Sou apaixonado por programação desde o primeiro dia de trabalho,
          confesso que quando sai do ensino médio meu sonho era trabalhar com
          hardware(trocar memória, mexer na placa mãe e etc), porém o destino
          iria me levar para a programação, pois o primeiro curso que fiz era
          com ênfase em programação, grata surpresa.
          <br />
          Desde então trabalho com software com muito prazer e vontade de
          realmente fazer a diferença por onde passo. Gosto e faço questão de
          trabalhar em equipe e de poder ajudar além da programação, dando
          sugestões de melhorias, tanto no design quanto em regras de negócio,
          sempre pensando na qualidade final do sistema que será entregue.
          <br />
          Este sou eu, sempre participativo no contexto que estou inserido e
          sempre prezando pela qualidade máxima no que faço.
        </div>
      </div>
    </main>
  );
}
