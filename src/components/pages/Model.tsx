import { useParams } from "react-router-dom";
import { adidasData, AdidasItemType } from "./PageOne";
import { Error404 } from "./Error404";
import { pumaData, PumaItemType } from "./PageTwo";

export function Model() {
  const { model, id } = useParams();

  type CrossModelsType = {
    [key: string]: AdidasItemType[] | PumaItemType[];
  };

  const crossModels: CrossModelsType = {
    adidas: adidasData,
    puma: pumaData,
  };

  const currentModel = model ? crossModels[model].find((item) => item.id === Number(id)) : null;
  return (
    <>
      {currentModel ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <img style={{ width: "350px", height: "auto" }} src={currentModel.picture} alt="" />
          <span>Year: {currentModel.collection}</span>
          <span>Model: {currentModel.model}</span>
          <span>Price: {currentModel.price}</span>
        </div>
      ) : (
        <Error404 />
      )}
    </>
  );
}
