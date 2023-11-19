import { useEffect, useState } from "react";
import GridComponent from "../../../shared/grid/grid.component";
import { getWeddingDayData } from "../../../../services/user/event-catagoryservice/wedding-event.service";

 function WeddingEventView() {
  const header = [
    "ID",
    "EVENT NAME",
    "PHONE NO",
    "EMAIL",
    "ADDRESS",
    "EVENT DATE",
    "EVENT DESCRIPTION",
    "ACTIONS",
  ];
  const [weddingdayData, setWeddingDayData] = useState();
  useEffect(() => {
    getWeddingDetails();
  }, []);
  function getWeddingDetails() {
    getWeddingDayData().then((res) => {
        setWeddingDayData(res.data);
    });
  }
  return (
    <div className="mt-5 pt-5 text-dark">
      <h3 className="text-center p-3">WEDDING-EVENT-DETAILES</h3>
      <GridComponent headers={header} data={weddingdayData}></GridComponent>
    </div>
  );
}
export default WeddingEventView;