import useDbStore from "../store/sqlStore";
import React from "react";
import { DataGridPremium } from "@qvztest/xdgpre";
import { InputSql } from "./inputSql";
import { InputExcel } from "./InputExcel.tsx";
import { switchTable } from "../store/sqlStore";

export function Table2() {
  const { tables, data } = useDbStore();
  return (
    <div>
      {tables.map((table, index) => {
        const handleClick = (e) => {
          console.log(table);
          switchTable(e.target.innerHTML);
        };
        return (
          <button onClick={handleClick} key={index}>
            {table.name}
          </button>
        );
      })}
      <div style={{ height: 300, width: "100%" }}>
        <DataGridPremium {...data} />
        <InputSql />
        <InputExcel />
      </div>
    </div>
  );
}
