import { useEffect, useState } from "react";
import GridComponent from "../../../shared/grid/grid.component";
import { getAnniversaryData } from "../../../../services/user/event-catagoryservice/anniversary-event.service";

export function AnniversaryEventView() {
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
  const [anniversarydayData, setAnniversaryDayData] = useState();
  useEffect(() => {
    getAnniveraryDetails();
  }, []);
  function getAnniveraryDetails() {
    getAnniversaryData().then((res) => {
        setAnniversaryDayData(res.data);
    });
  }
  return (
    <div className="mt-5 pt-5">
      <h3 className="text-center p-3 text-dark">ANNIVERSARY-EVENT-DETAILES</h3>
      <GridComponent headers={header} data={anniversarydayData}></GridComponent>
    </div>
  );
}
