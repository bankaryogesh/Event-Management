import { useEffect, useState } from "react";
import GridComponent from "../../../shared/grid/grid.component";
import { getBirthdayData } from "../../../../services/user/event-catagoryservice/birthday-event.service";

export function BirthdayEventView() {
  const header = [
    "ID",
    "EVENT NAME",
    "PHONE NO",
    "EMAIL",
    "ADDRESS",
    "EVENT DATE",
    "EVENTDESCRIPTION",
    "ACTIONS",
  ];
  const [birthdayData, setBirthdayData] = useState();
  useEffect(() => {
    getBirthdayDetails();
  }, []);
  function getBirthdayDetails() {
    getBirthdayData().then((res) => {
      setBirthdayData(res.data);
    });
  }
  return (
    <div>
      <h3 className="text-center p-3 text-dark">BIRTHDAY-EVENT-DETAILES</h3>
      <GridComponent headers={header} data={birthdayData}></GridComponent>
    </div>
  );
}
