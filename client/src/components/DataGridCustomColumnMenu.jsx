import {
  GridColumnMenuContainer,
  GridColumnMenuFilterItem,
  GridColumnMenuHideItem,
} from "@mui/x-data-grid";
import React from "react";

export default function DataGridCustomColumnMenu(props) {
  // eslint-disable-next-line react/prop-types
  const { hideMenu, colDef, open } = props;
  console.log(hideMenu);
  console.log(colDef);
  console.log(open);
  return (
    <GridColumnMenuContainer hideMenu={hideMenu} colDef={colDef} open={open}>
      <GridColumnMenuFilterItem onClick={hideMenu} colDef={colDef} />
      {/* chú ý name của các param, và component đã bị đổi tên lại sau phiên bản */}
      <GridColumnMenuHideItem onClick={hideMenu} colDef={colDef} />
    </GridColumnMenuContainer>
  );
}
