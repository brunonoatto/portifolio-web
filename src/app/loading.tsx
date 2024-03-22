import Icon from "@/app/shared/icon";

export default function Loading() {
  return (
    <div className="text-center">
      <div className="relative top-1/3 m-auto w-48 border-2 border-red-500 text-center rounded-xl py-4">
        <Icon name="refresh" className="animate-spin " />
        <div className="">Carregando...</div>
      </div>
    </div>
  );
}
