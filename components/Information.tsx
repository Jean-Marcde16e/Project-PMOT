import { Button } from "./ui/button";

export function Information() {
  return (
    <div className="bg-primary rounded-md mt-20">
      <div className="flex justify-between">
        <div className="text-center p-4">
          <h1 className="text-xl font-bold">Webshop</h1>
          <p className="text-center my-2">
            Bekijk onze webshop voor een uitgebreid assortiment robots
          </p>
          <Button variant={"secondary"}>Bekijk</Button>
        </div>
        <div className="text-center p-4">
          <h1 className="text-xl font-bold">Media</h1>
          <p className="text-center my-2">
            Bekijk onze webshop voor een uitgebreid assortiment robots
          </p>
          <Button variant={"secondary"}>Bekijk</Button>
        </div>
        <div className="text-center p-4">
          <h1 className="text-xl font-bold">Publicaties</h1>
          <p className="text-center my-2">
            Bekijk onze webshop voor een uitgebreid assortiment robots
          </p>
          <Button variant={"secondary"}>Bekijk</Button>
        </div>
      </div>
    </div>
  );
}
