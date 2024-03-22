import ButtonLink from "@/app/shared/button-link";

export default function NotFound() {
  return (
    <div className="text-center">
      <p className="md: text-2xl">Ops...página solicitada não entrontrada!</p>
      <ButtonLink href="/">Acessar a Home</ButtonLink>
    </div>
  );
}
