import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { MUITableFlats } from "./common/Tables/TableFlat";
import { MUITableOwners } from "./common/Tables/TableOwners";
import { MUITableTypeOperations } from "./common/Tables/TableTypeOperations";
import { MUITableOperations } from "./common/Tables/TableOperations";
import { MUITableWorkers } from "./common/Tables/TableWorkers";

function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/drafts">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["*"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  const routeMatch = useRouteMatch([
    "/owners",
    "/flat/getAll",
    "/workers",
    "/opt",
    "/op/getAll",
  ]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="Жильцы" value="/owners" to="/owners" component={Link} />
      <Tab
        label="Квартиры"
        value="/flat/getAll"
        to="/flat/getAll"
        component={Link}
      />
      <Tab label="Рабочие" value="/workers" to="/workers" component={Link} />
      <Tab
        label="Типы операций"
        value="/opt"
        to="/opt"
        component={Link}
      />
      <Tab
        label="Операции"
        value="/op/getAll"
        to="/op/getAll"
        component={Link}
      />
    </Tabs>
  );
}

export default function TabsRouter() {
  return (
    <Box sx={{ width: "100%" }}>
      <MyTabs />

      <Routes>
        <Route path="/owners" element={<MUITableOwners />} />
        <Route path="/flat/getAll" element={<MUITableFlats />} />
        <Route path="/workers" element={<MUITableWorkers />} />
        <Route
          path="/opt"
          element={<MUITableTypeOperations />}
        />
        <Route path="/op/getAll" element={<MUITableOperations />} />
      </Routes>
    </Box>
  );
}
